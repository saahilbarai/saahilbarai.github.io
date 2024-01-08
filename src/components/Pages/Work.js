import react from 'react'
import './Work.css'


const ToolsUsed = ({ tools }) => (
	<div>
	    {tools.map((s, i) => (
	    	<p key={i} className="ToolText">{s}</p>
	    ))}
	</div>);

class Work extends react.Component {
    constructor () {
        super()
        this.state = {}
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#000000"
    }



    render() {
        return (
            <div className = 'WorkBody'>
  

                <h2 className = 'WorkText'>Pinterest</h2>
                <h3 className = 'WorkText'>Software Engineer: September 2022 - Present</h3>
                <ul className = 'WorkText'>
                    <li>Currently working on the Real-time Analytics team to provide reliable, efficient, low latency platforms for analytical queries.</li>
                </ul>
                <ToolsUsed tools={["Apache Druid", "Python", "Java", "Hadoop", "Docker", "Jenkins", "Apache Airflow", "Apache Thrift", "AWS", "Google Guice"]} />

                <h2 className = 'WorkText'>Visa Inc.</h2>
                <h3 className = 'WorkText'>Software Engineer: Summer 2021</h3>
                <ul className = 'WorkText'>
                    <li>Worked with the Integrated Payments Applications team to develop a software solution to track incoming merchant messages</li>
                    <li>Created a tag inside incoming web service messages that enabled message classification and tracking</li>
                    <li>Improved visibility into the volume and resource consumption of over 40 types of web service messages</li>
                    <li>Streamlined the process for future developers to add tracking functionality to merchant messages</li>
                    <li>Learnt about the importance of high-quality change management when writing and testing consumer facing code </li>
                </ul>
                <ToolsUsed tools={["XML"]} />

                <h2 className = 'WorkText'>Hewlett-Packard</h2>
                <h3 className = 'WorkText'>Firmware Engineer: Summer 2020</h3>
                <ul className = 'WorkText'>
                    <li>Tasked with the design and development of a software solution for the Thermal Engineers</li>
                    <li>Engineered a tool that enabled the thermal engineers to fetch thermal points from EC RAM</li>
                    <li>Allowed thermal engineers to test different configurations to find optimal settings for acoustics and performance</li>
                    <li>Improved efficiency of thermal engineers by eliminating their dependency on BIOS engineers</li>
                    <li>Reduced turnaround time per iteration of a bootleg BIOS by over 8 hours</li>
                </ul>
				<ToolsUsed tools={["Visual Basic", "Embedded Controller", "BIOS Firmware", "Github", ]} />
                <br></br>
                
            </div>
                  
        )
    }
}

export default Work 