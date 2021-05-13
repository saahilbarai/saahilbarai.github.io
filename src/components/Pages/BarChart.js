import react from 'react'
import './BarChart.css'

function BarGroup(props) {
    const [mult, setMult] = react.useState(window.innerWidth < 960 ? 2:4);
    let barPadding = 5
    let barColour = '#1054d4'

    const updateWidthAndHeight = () => {
      window.innerWidth <960 ? setMult(2):setMult(4);
    };

    react.useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
    });
    
    let widthScale = d => d * mult
    let rounding = 5
  
    let width = widthScale(props.d.value)
    let yMid = props.barHeight * 0.5
    
    return <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
      <rect className = 'rects' y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} rx={rounding} />
      <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
    </g>
  }

class BarChart extends react.Component {
    constructor () {
        super()
        this.state = {
            data: [
                { name: 'Python', value: 90 },
                { name: 'Java', value: 70 },
                { name: 'C and C++', value: 65 },
                { name: 'React', value: 50 },
                { name: 'Visual Basic', value: 65 }
              ]
        }
    }
    
    render() {
        let barHeight = 30
        
        let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
                                                    <BarGroup d={d} barHeight={barHeight} />
                                                  </g>)                         
    
    return <svg width="100%" height="190">
      <g className="container">
        <g className="chart" transform="translate(100,10)">
          {barGroups}
        </g>
      </g>
    </svg>      
    }

}

export default BarChart