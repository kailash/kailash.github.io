import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let wordcloud = require('highcharts/modules/wordcloud');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
wordcloud(Highcharts);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  public options: any = {
    chart: {
      type: 'wordcloud'
    },
    title: {
      text: null
    },
    credits: {
      enabled: false
    },
    series: [{
      type: 'wordcloud',
      colors: [ '#9c27b0','#2196f3','#673ab7','#3f51b5','#009688','#00bcd4','#ff5722','#f44336' ],
      data: [
        {
          name: "Java",
          weight: 4
        },
        {
          name: "Spring",
          weight: 2
        },
        {
          name: "Hibernate",
          weight: 2
        },
        {
          name: "Microservices",
          weight: 2
        },
        {
          name: "Kafka",
          weight: 1
        },
        {
          name: "Docker",
          weight: 1
        },
        {
          name: "IoT",
          weight: 1
        },
        {
          name: "Edge Computing",
          weight: 0.6
        },
        {
          name: "JUnit",
          weight: 1
        },
        {
          name: "Mockito",
          weight: 1
        },
        {
          name: "Spring Cloud",
          weight: 1
        },
        {
          name: "Eureka",
          weight: 1
        },
        {
          name: "Zuul Proxy",
          weight: 1
        },
        {
          name: "Angular",
          weight: 1
        },
        {
          name: "ECM",
          weight: 1
        },
        {
          name: "FileNet",
          weight: 0.5
        },
        {
          name: "Adobe Live cycle",
          weight: 0.5
        },
        {
          name: "github",
          weight: 0.8
        },
        {
          name: "gitlab",
          weight: 0.8
        },
        {
          name: "gitlab-ci",
          weight: 0.8
        },
        {
          name: "Agile",
          weight: 1
        },
        {
          name: "HTML",
          weight: 1
        },
        {
          name: "CSS",
          weight: 1
        },
        {
          name: "JS",
          weight: 1
        }
      ]
    }]
  }




  ngOnInit() {
    Highcharts.chart('skills-chart', this.options);
  }
}
