import React , {useState} from 'react'
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, 
    LineSeries, 
    VerticalBarSeries, 
    VerticalGridLines, 
    HorizontalGridLines, 
    XAxis, 
    Crosshair,
    YAxis} from 'react-vis';


export default function Graph() {
    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];
       
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
            <LineSeries
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
