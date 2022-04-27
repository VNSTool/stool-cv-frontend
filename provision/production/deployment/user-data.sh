#!/bin/bash
set -xe

########################################
## Update DNS endpoints
########################################
cat >r53-record-update.json <<EOF
{
    "Changes": [{
            "Action": "UPSERT",
            "ResourceRecordSet": {
                "Name": "curriculumvitae.stool.vn",
                "Type": "A",
                "SetIdentifier": "string",
                "Region": "${AWS_REGION}",
                "TTL": 60,
                "ResourceRecords": [{
                    "Value": "$(curl -sS http://169.254.169.254/latest/meta-data/public-ipv4)"
                }]
            }
        },
    ]
}
EOF

aws --region ${AWS_REGION} route53 change-resource-record-sets --hosted-zone-id ${HOSTED_ZONE_ID} --change-batch file://r53-record-update.json

########################################
## Deploy application
########################################
cat >docker-compose.yaml <<EOL
version: "2.4"

services:
    php:
        image: ${REGISTRY}/graphql/php:${IMAGE_TAG}
        working_dir: /stool/cv
        volumes:
            - ../src:/stool/cv
        container_name: stool-cv
        entrypoint: ["/bin/sh", "-c"]
        command:
            - yarn start
        ports:
            - "3000:3000"
        
EOL

su ec2-user -c "$(aws ecr get-login --no-include-email --region ${AWS_REGION})"
su ec2-user -c "docker-compose up --force-recreate -d"
