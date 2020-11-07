import React , {useState, useEffect} from 'react'
import '../../node_modules/react-vis/dist/style.css';

import {XYPlot, 
    LineSeries, 
    VerticalBarSeries, 
    VerticalGridLines, 
    HorizontalGridLines, 
    XAxis, 
    Crosshair,
    YAxis} from 'react-vis';


export default function Graph(data) {
    const[graphStyle, setGraphStyle] = useState('line')
    const[CH, setCH] = useState([])       
      const _onMouseLeave = () => {
        setCH([])
      };
       
      const _onNearestX = (value, {index}) => {
        setCH([value])
      }

      return (
        <div className="App">
            <button>bar</button>
            <button>line</button>
          <XYPlot onMouseLeave = {_onMouseLeave} height={300} width={500}>
          <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries
              onNearestX={(datapoint, event)=>{                    
                    _onNearestX(datapoint, event)
                }}
            
              data={data} />
            <Crosshair 
                values={CH} 
            />
          </XYPlot>
        </div>
      );
}
