import React, { Component } from 'react';
import Sidebar from '../Bars/Sidebar';
import Headbar from '../Bars/Headbar';

import {Panel} from 'react-bootstrap';
var ReactHighcharts = require('react-highcharts');

var config1 = {
  title: {
    text: '每日上课听讲人数'
  },
  subtitle: {
    text: '课堂威视'
  },
  xAxis: {
    title: {
      text: 'Day'
    },
    categories: [
      'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  tooltip: {
    valueSuffix: '人'
  },
  legend: {
    layout: 'vertical', 
    align: 'right', 
    verticalAlign: 'middle', 
    borderWidth: 0
  },
  series: [
    {
      name: 'math', 
      data: [7,8,9,11,2,5,6]
    }, {
      name: 'Chinese', 
      data: [5,4,8,10,9,3,7]
    }],
}
var config2 = {
      title: {text: '每日上课专注度比例'},
      subtitle: {text: '课堂威视'},
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
            style: {
               color: (ReactHighcharts.theme && ReactHighcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
          ['0.5以下',   35.0],
          ['0.5 ~ 0.7',  28],
          ['0.7 ~ 0.9',  22],
          ['0.9 ~ 1',   12]
        ]
      }],
    } 
class Statistics extends Component {
  constructor(props){
    super(props);
    var passeddata = this.props.location.username;
    var username = passeddata;
    this.state = {
      username:username,
      config:config2
    };
    this.getstatistics=this.getstatistics.bind(this);
    this.change=this.change.bind(this);
  }
  getstatistics(){

  }
  change(){
    config2.series[0].data[0][1] = 100;
    this.setState({
      config:config2
    })
  }
  render() {
    return (
      <div>
        <Headbar />
        <div className="row">
          <Sidebar username={this.state.username}/>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div>
              <ReactHighcharts config={this.state.config}></ReactHighcharts>
              <button onClick={this.change}/>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
function Content(){
  return (
    <div>
      <Panel bsStyle="info">
        <Panel.Heading>
          <Panel.Title componentClass="h3">课程名称：</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div className="row">
            <div className="col-lg-5">
              <ReactHighcharts config={config1}></ReactHighcharts>
            </div>
            <div className="col-lg-5">
              <ReactHighcharts config={config2}></ReactHighcharts>
            </div>
          </div>
        </Panel.Body>
      </Panel>

      <Panel bsStyle="info">
        <Panel.Heading>
          <Panel.Title componentClass="h3">课程名称：</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div className="row">
            <div className="col-lg-5">
              <ReactHighcharts config={config1}></ReactHighcharts>
            </div>
            <div className="col-lg-5">
              <ReactHighcharts config={config2}></ReactHighcharts>
            </div>
          </div>
        </Panel.Body>
      </Panel>
    </div>
  );
}
export default Statistics;
