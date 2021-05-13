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

                <h1 className= "AboutText">Work Experience 💳💻</h1>
                <h2 className = 'AboutText'>Visa Inc.</h2>
                <h3 className = 'AboutText'>Software Engineer - Summer 2021</h3>
                <ul className = 'AboutText'>
                    <li>Currently interning on the Stand-In Payment Processing Team</li>
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

            </div>
                  
        )
    }
}

export default AboutMe 