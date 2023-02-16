#!/bin/bash
set -xe

########################################
## Update DNS endpoints
########################################
cat >r53-record-update.json <<EOF
{
    "Changes": [
        {
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
        }
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
    web:
        image: ${REGISTRY}/curriculum-vitae/web:${IMAGE_TAG}
        working_dir: /stool/cv
        container_name: stool-cv
        entrypoint: ["/bin/sh", "-c"]
        command:
            - yarn start
        restart: always

    nginx:
        image: ${REGISTRY}/curriculum-vitae/nginx:${IMAGE_TAG}
        container_name: stool-nginx
        depends_on:
            - web
        ports:
            - 80:80
            - 443:443
        restart: always
        
EOL

aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${REGISTRY}
docker-compose up --force-recreate -d
