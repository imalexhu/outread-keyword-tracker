'use client'

import { IData, colours } from "@/dummyData"
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface GraphProps {
  keywordData : IData
}
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

interface SeriesData {
  name : string,
  data : number[],
}


 function convertToLineGraphFormat(keywordData : IData): SeriesData[] {
    const data : SeriesData[] = []
    for(let key in keywordData){
      data.push({name: key, data: keywordData[key]})
    }
    return data;
  }



export function Graph({keywordData}: GraphProps): React.JSX.Element {
  if(Object.keys(keywordData).length === 0 ) return <div> No Data </div>

  const lineData : SeriesData[] = convertToLineGraphFormat(keywordData)
  const chartColours : string[] = colours.slice(0, Object.keys(keywordData).length)
  const xAxis :string[] = []
  for(let i = 0; i < lineData[0].data.length; i++){
    xAxis.push(month[i])
  }

const options : ApexOptions = {
    chart: {
      type: 'line',
      offsetX : 20,
      offsetY :20,
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          speed: 350,
        },
      },
    },
    theme :{
      mode : 'dark'
    },
    tooltip : {
      style : {
        fontSize : '20px'
      },
      theme : 'dark',
      },
    xaxis: {
      categories: xAxis,
      labels :{
        style :{
          fontSize : '20px'
        }
      }
    },
    stroke: {
      curve: 'monotoneCubic',
    },
    title: {
      text: 'Keywords Metion Over Time',
      align: 'center',
      style: {
        fontSize : '32px',
        fontWeight : 'bold'
      },
      offsetY : 12,
    },
    yaxis: {
      title: {
        text: 'Keyword Apperances ',
        offsetY :20,
        style: {
        fontSize : '24px'
      }
      },
      
    },
  };

  return (
      <div className="w-full h-full p-24" >

        <ReactApexChart 
          options={options}
          type={"line"}
          xaxis={xAxis}
          colors={chartColours}
          series={lineData}
          width={"100%"}
          height={"100%"}
          />
      </div>
  )
}
