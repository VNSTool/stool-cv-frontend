<template>
  <CommonInformationBox :title="title">
    <div class="flex flex-col lg:flex-row">
      <ExperienceHistoryTimeLine
        v-for="(timeLine, index) in timeLines"
        :key="timeLine.id"
        :start="index === 0"
        :stop="index === timeLines.length - 1"
        :events="timeLine.events"
        :selectedChildEvent="selectedChildEvent"
        @selectChildEvent="selectChildEvent"
        class="first:ml-0 lg:flex-1 lg:ml-20"
      />
    </div>
  </CommonInformationBox>
</template>

<script>
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

export default Vue.extend({
  data: function () {
    return {
      title: "Experience History",
      selectedChildEvent: "",
      timeLines: [
        {
          id: uuidv4(),
          events: [
            {
              id: uuidv4(),
              childEvents: [
                {
                  id: uuidv4(),
                  time: "2017",
                  title:
                    '<span class="font-medium">Graduated</span> from <a target="_blank" href="https://en.dut.udn.vn/">Danang University of Science and Technology</a>',
                },
              ],
            },
            {
              id: uuidv4(),
              childEvents: [
                {
                  id: uuidv4(),
                  time: "Oct 2017",
                  title:
                    '<span class="font-medium">Start working</span> at <a target="_blank" href="https://www.fpt-is.com/">FPT Information System</a>',
                  descriptions: ["Working in banking domain"],
                },
                {
                  id: uuidv4(),
                  time: "Oct 2017",
                  title:
                    '<span class="font-medium">Outsource</span> for <a target="_blank" href="https://www.nucleussoftware.com/">Nucleus Software</a> ' +
                    'and <a target="_blank" href="https://www.vietcredit.vn/">VietCredit</a>',
                  descriptions: [
                    "Nucleus provides banking solution for VietCredit and has FPT as middle man",
                  ],
                  details: [
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Backend</span>',
                      descriptions: ["Java"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Frontend</span>',
                      descriptions: ["HTML, CSS"],
                    },
                    {
                      id: uuidv4(),
                      title:
                        '<span class="font-medium">Main Responsibilities</span>',
                      descriptions: [
                        "Onsite in India 1 month for finishing the missing component, to fulfill the requirements from VietCredit",
                        "Join discussions between Nucleus and VietCredit to link the business and technology together",
                      ],
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  time: "Mar 2018",
                  title:
                    '<span class="font-medium">Outsource</span> for <a target="_blank" href="https://www.integrosys.com/">Integro</a> ' +
                    'and <a target="_blank" href="https://www.sacombank.com.vn/en/Pages/Default.aspx">Sacombank</a>',
                  descriptions: [
                    "Integro provides banking solution for Sacombank and hire FPT as technical outsourcing",
                  ],
                  details: [
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Backend</span>',
                      descriptions: ["Java"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Frontend</span>',
                      descriptions: ["HTML, CSS"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Database</span>',
                      descriptions: ["Oracle"],
                    },
                    {
                      id: uuidv4(),
                      title:
                        '<span class="font-medium">Main Responsibilities</span>',
                      descriptions: [
                        "Working as intepreter in meeting bewteen Integro and Sacombank, to explain to Sacombank about technology",
                        "Migrate the current database of Sacombankto Integro's system",
                        "Coordinate between Integro's techlead and FPT's developers",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: uuidv4(),
              childEvents: [
                {
                  id: uuidv4(),
                  time: "Apr 2019",
                  title:
                    '<span class="font-medium">Resign</span> from FPT Information System',
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          events: [
            {
              id: uuidv4(),
              childEvents: [
                {
                  id: uuidv4(),
                  time: "Jun 2019",
                  title:
                    '<span class="font-medium">Start working</span> at <a target="_blank" href="https://www.nfq-asia.com/en">NFQ Vietnam</a>',
                  descriptions: [
                    "Develop Human Resource's management system. The software is used by internal departments and employees",
                  ],
                  details: [
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Backend</span>',
                      descriptions: ["Nodejs with NestJS framework"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Frontend</span>',
                      descriptions: ["ReactJS", "AngularJS"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Database</span>',
                      descriptions: ["MariaDB"],
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  time: "Oct 2019",
                  title:
                    '<span class="font-medium">Outsource</span> for <a target="_blank" href="https://ipricegroup.com/">iPrice</a>',
                  descriptions: [
                    "Price comparision website for online products",
                    "It's running business on Southeast Asia and Hongkong",
                  ],
                  details: [
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Backend</span>',
                      descriptions: [
                        "PHP with Laravel and Symphony",
                        "Python",
                        "GraphQL",
                      ],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Frontend</span>',
                      descriptions: ["Google AMP", "Google Analytics"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Database</span>',
                      descriptions: [
                        "ELK stack, Redis, Memcached",
                        "MySQL, Athena with parquet files stored on AWS S3",
                      ],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">AWS services</span>',
                      descriptions: [
                        "EC2, AutoScaling, ELB, VPC",
                        "S3, RDS, ElastiCache, Athena, SQS",
                        "API Gateway, AppSync, Lambda Function",
                        "R53, ECR, Cloudwatch, CloudFormation",
                      ],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">DevOps</span>',
                      descriptions: ["Docker, Teamcity, Terraform, NewRelic"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Others</span>',
                      descriptions: [
                        "Nginx, Airflow, OctoberCMS, Figma, Zeplin, Airflow",
                      ],
                    },
                    {
                      id: uuidv4(),
                      title:
                        '<span class="font-medium">Working framework</span>',
                      descriptions: ["Scrum"],
                    },
                    {
                      id: uuidv4(),
                      title:
                        '<span class="font-medium">Main Responsibilities</span>',
                      descriptions: [
                        "Participate in projects between iPrice and it's partners, " +
                          'e.g. <a target="_blank" href="https://homecredit.iprice.co.id/ponsel-tablet/">HomeCredit Indonesia</a>,' +
                          ' <a target="_blank" href="https://julo.iprice.co.id/">Julo Indonesia</a>,' +
                          ' <a target="_blank" href="https://boost.iprice.my/">Boost Malaysia</a>,' +
                          ' <a target="_blank" href="https://cashalo.iprice.ph/">Cashalo Philippines</a>,' +
                          ' <a target="_blank" href="https://gorewards.iprice.ph/">GoRewards Philippines</a>,' +
                          ' <a target="_blank" href="https://corporate.shopback.com/">Shopback</a>',
                        "Create a subdomain for each partner that can be run as webview in their mobile applications",
                        "Develop GraphQL as a datapoint for usage of iPrice and Shopback. Benchmark and optimize" +
                          " it to meet SRT SLA",
                        "Manage meetings, e.g. technical grooming, backlog grooming, sprint planing",
                        "One of main coordinators between PO, PM, developers, QA, UXUI and partners",
                        "Create and manage tickets on Jira",
                        "Create technical documents on Confluence",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: uuidv4(),
              childEvents: [
                {
                  id: uuidv4(),
                  time: "Apr 2019",
                  title:
                    '<span class="font-medium">Resign</span> from NFQ Vietnam',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectChildEvent: function (childEventId) {
      this.selectedChildEvent = childEventId;
    },
  },
});
</script>
