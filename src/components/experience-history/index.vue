<template>
  <CommonInformationBox :title="title">
    <div class="flex flex-col lg:flex-row">
      <ExperienceHistoryTimeLine
        v-for="(timeLine, index) in timeLines"
        :key="timeLine.id"
        :start="index === 0"
        :stop="index === timeLines.length - 1"
        :events="timeLine.events"
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
                  description: "Working in banking domain",
                },
                {
                  id: uuidv4(),
                  time: "Oct 2017",
                  title:
                    '<span class="font-medium">Outsource</span> for <a target="_blank" href="https://www.nucleussoftware.com/">Nucleus Software</a> ' +
                    'and <a target="_blank" href="https://www.vietcredit.vn/">VietCredit</a>',
                  description:
                    "Nucleus provides banking solution for VietCredit and has FPT as middle man",
                  details: [
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Backend</span>',
                      contents: ["Java"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Frontend</span>',
                      contents: ["HTML, CSS"],
                    },
                    {
                      id: uuidv4(),
                      title:
                        '<span class="font-medium">Main Responsibilities</span>',
                      contents: [
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
                  description:
                    "Integro provides banking solution for Sacombank and hire FPT as technical outsourcing",
                  details: [
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Backend</span>',
                      contents: ["Java"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Frontend</span>',
                      contents: ["HTML, CSS"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Database</span>',
                      contents: ["Oracle"],
                    },
                    {
                      id: uuidv4(),
                      title:
                        '<span class="font-medium">Main Responsibilities</span>',
                      contents: [
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
                  description: "Working in banking domain",
                },
                {
                  id: uuidv4(),
                  time: "Oct 2017",
                  title:
                    '<span class="font-medium">Outsource</span> for <a target="_blank" href="https://www.nucleussoftware.com/">Nucleus Software</a> ' +
                    'and <a target="_blank" href="https://www.vietcredit.vn/">VietCredit</a>',
                  description:
                    "Nucleus provides banking solution for VietCredit and has FPT as middle man",
                  details: [
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Backend</span>',
                      contents: ["Java"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Frontend</span>',
                      contents: ["HTML, CSS"],
                    },
                    {
                      id: uuidv4(),
                      title:
                        '<span class="font-medium">Main Responsibilities</span>',
                      contents: [
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
                  description:
                    "Integro provides banking solution for Sacombank and hire FPT as technical outsourcing",
                  details: [
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Backend</span>',
                      contents: ["Java"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Frontend</span>',
                      contents: ["HTML, CSS"],
                    },
                    {
                      id: uuidv4(),
                      title: '<span class="font-medium">Database</span>',
                      contents: ["Oracle"],
                    },
                    {
                      id: uuidv4(),
                      title:
                        '<span class="font-medium">Main Responsibilities</span>',
                      contents: [
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
      ],
    };
  },
});
</script>
