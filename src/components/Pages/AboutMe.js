import react from 'react'
import './AboutMe.css'


class AboutMe extends react.Component {
    constructor () {
        super()
        this.state = {}
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#000000"
    }

    render() {
        return (
            <div className = 'AboutDeck'>
  

                <h1 className= "AboutText">Introduction</h1>
                <p className = 'AboutText'>If you were to look up my name in a dictionary for people, it would tell you that I am a ever curious, driven, hard working kid who wants to change the world. This website is a representation of that definition and I hope you enjoy getting to know me virtually!</p>

                <br></br>
                
                <h1 className= "AboutText">Books</h1>
                <p className = 'AboutText'>If I am not at the computer, you have a good chance of finding me at the library. Here are some of my favorite books that I have read in the past year:</p>
                <ul className = 'AboutText'>
                    <li>The Last Days of Night by Graham Moore</li>
                	<li>The Wayward Pines Trilogy by Blake Crouch</li>
                    <li>Blue Ocean Strategy by Kim, W. Chan</li>
                    <li>Elon Musk by Walter Isaacson</li>
                </ul>


                <h1 className= "AboutText">School</h1>
                <h2 className = 'AboutText'>University of Texas at Austin
                </h2>
                <h3 className = 'AboutText'>Electrical and Computer Engineering with a focus in Data Science and Information Processing - December 2021</h3>
                <p className = 'AboutText'>Courses taken: </p>
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