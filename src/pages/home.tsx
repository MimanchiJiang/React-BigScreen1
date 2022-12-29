import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import * as echarts from 'echarts'
const px = (n) => n / 2420 * (window as any).pageWidth

export const Home = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    var option = {
      textStyle: {
        fontSize: px(12),
        color: '#79839E'
      },
      title: { show: false },
      legend: { show: false },
      xAxis: {
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '广东新区', '新疆新区', '深圳新区', '陕西新区'],
        axisLine: {
          lineStyle: {
            color: '#083B70',
            width: 1, //这里是为了突出显示加上的  
          }
        },
        axisTick: { show: false },
        axisLabel: {
          interval: 0,
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('')
              array.splice(2, 0, '\n')
              return array.join('')
            } else {
              return val

            }
          }
        },

      },
      yAxis: {
        splitLine: { show: false },
        axisLabel: {
          fontSize: px(12),
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#083B70',
            width: 1, //这里是为了突出显示加上的  
          }
        },

      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
        containLabel: true
      },
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 50, 30, 18, 38]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, [])
  return (
    <div className='home'>
      <header style={{ backgroundImage: `url(${headerBg})` }}></header>
      <main>
        <section className='section1'>
          <div className='bordered 管辖统计'>
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className='chart'></div>
          </div>
        </section>
        <section className='bordered section2'></section>
        <section className='bordered section3'></section>
        <section className='bordered section4'></section>
        <section className='bordered section5'></section>
      </main>
    </div>
  );
};
