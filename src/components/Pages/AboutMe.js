import react from 'react'
import BigCard from '../Card/BigCard'
import './AboutMe.css'


class AboutMe extends react.Component {
    constructor () {
        super()
        this.state = {}
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#1c2237"
    }

    render() {
        return (
            <div className = 'AboutDeck'>
                {/* <BigCard
                    title = "About Me 🤘"
                    body = "I am a student at the University of Texas at Austin."
                    spacing = '1'
                />       */}

                <h1 className= "AboutText">Introduction 🙋‍♂️</h1>
                <p className = 'AboutText'>Hi, my name is Saahil Barai. If you were to look up my name in a dictionary for people, it would tell you that I am a ever curious, driven, hard working kid who wants to change the world. This website is a representation of that definition and I hope you enjoy getting to know me virtually!</p>

                <br></br>

                <h1 className= "AboutText">Work Experience 💳💻</h1>
                <h2 className = 'AboutText'>Visa Inc.</h2>
                <h3 className = 'AboutText'>Software Engineer - Summer 2021</h3>
                <ul className = 'AboutText'>
                    <li>Worked with the Integrated Payments Applications team to develop a software solution to track incoming merchant messages</li>
                    <li>Created a tag inside incoming web service messages that enabled message classification and tracking</li>
                    <li>Improved visibility into the volume and resource consumption of over 40 types of web service messages</li>
                    <li>Streamlined the process for future developers to add tracking functionality to merchant messages</li>
                    <li>Learnt about the importance of high-quality change management when writing and testing consumer facing code </li>
                    <li>Presented my solution to management and fellow interns and solution deployed in production system</li>
                </ul>

                <h2 className = 'AboutText'>Hewlett-Packard</h2>
                <h3 className = 'AboutText'>Firmware Engineer - Summer 2020</h3>
                <ul className = 'AboutText'>
                    <li>Assigned to a project on End Point Security Team to design and develop a software solution for the Thermal Engineers</li>
                    <li>Engineered a tool that enabled the thermal engineers to fetch thermal points from EC RAM</li>
                    <li>Allowed thermal engineers to test different configurations to find optimal settings for acoustics and performance</li>
                    <li>Improved efficiency of thermal engineers by eliminating their dependency on BIOS engineers</li>
                    <li>Reduced turnaround time per iteration of a bootleg BIOS by over 8 hours</li>
                    <li>Finally, presented my solution to the stakeholders and executives to show efficiency improvements and cost savings</li>
                    <li>Well received by the thermal engineers and management and approved to implement as a production application</li>
                </ul>

                <br></br>


                <h1 className= "AboutText">School 🤘</h1>
                <h2 className = 'AboutText'>University of Texas at Austin</h2>
                <h3 className = 'AboutText'>Electrical and Computer Engineering with a focus in Data Science and Information Processing - December 2021</h3>
                <h3 className = 'AboutText'>Courses taken: </h3>
                <ul className = 'AboutText'>
                    <li>Data Science Lab</li>
                    <li>Software Design and Implementation</li>
                    <li>Algorithms</li>
                    <li>Data Science Principles</li>
                    <li>Digital Logic Design</li>
                </ul>

                <br></br>

                
            </div>
                  
        )
    }
}

export default AboutMe 