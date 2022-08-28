import {Data1} from "../data1";
import './css/chart1.css';
import Tab1 from "./tab1";
import Chart2 from "./chart2";
import Chart3 from "./chart3";
import Chart4 from "./chart4";
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  

  const Chart=()=>{
    useEffect(()=>{
      Aos.init({duration:2000});
     },[]);
    return(

        
          <div data-aos="fade-right" >
        <div className="chart" data-aos="fade">
        <h5 className="chartTitle">Delai attente des navires en 2021 dans chaque port</h5>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={Data1}>
          <XAxis dataKey="LIB_PORT" stroke="#5550bd" />
          <Line type="monotone" dataKey="delai_attente_h" stroke="#5550bd" />

          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
        
      </ResponsiveContainer>
       
      </div>
        <div className="contai" >
          <div>
          <div className="chart2">      <Chart2/></div>
          <div className="chart3"> 
       <Chart3/> <Chart4/>
</div></div>
      <div className="table1">
      <Tab1/>
      </div>
      </div>
      </div>
      )
    
}
export default Chart