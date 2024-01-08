import react from 'react'
import Card from '../Card/Card.js'
import './Project.css'

class Project extends react.Component {
    constructor () {
        super()
        this.state = {}
    }
    
    componentDidMount() {
        document.body.style.backgroundColor = "#000000"
    }

    render() {
        return (
            <div className='trial'>
                
                <div className = 'projectEntry'>
                    <h1 className= "plnText">Artificial Intelligence</h1>
                    <img src = {process.env.PUBLIC_URL + '/Capture5.PNG'} className = 'projectPic'></img>

                    <h2 className = 'plnText'>Backyard Bird Classification with Fast AI</h2>
                    <ul className = 'listText'>
                        <li>Created a residual neural network to identify birds coming to eat in my backyard</li>
                        <li>Achieved a 95% accuracy after optimizing the residual neural network - It is amazing how fast we can reach state of the art solutions and how rapidly the field of Artifical Intelligence is evolving</li>
                        <li>Gained familiarity with the concept of transfer learning and the motivations behind skip connections in residual networks</li>
                        <li>Authored a<a className = 'mediumLinks' href = 'https://saahil-barai.medium.com/backyard-bird-classification-with-fast-ai-280dd140e32f'> Medium article</a> with my findings and instructions on how to create a neural network of your own</li>
                    </ul>
                </div>

                <br></br>



                <div className = 'projectEntry'>
                    <h1 className= "plnText">Machine Learning</h1>
                    <h2 className = 'plnText'>Numerai Tournament</h2>
                    <ul className = 'listText'>
                        <li>Participating in an ongoing tournament where where you build machine learning models on abstract financial data to predict the stock market</li>
                        <li>Submiting a model every week to conduct exploratory analysis to find machine learning techniques that work well on live financial data</li>
                        <li>Gained familiarity with regression algorithms, particularly those found in the CatBoost, XGBoost, and LightGBM libraries</li>
                        <li>Follow my ranking and progress in the tournament <a className = 'mediumLinks' href = 'https://numer.ai/saahil'>here</a></li>
                    </ul>
                </div>

                <br></br>

                <div className = 'projectEntry'>
                    <h1 className= "plnText">LoRaWAN</h1>
                    <img src = {process.env.PUBLIC_URL + '/IMG_6948.jpg'} className = 'projectPic'></img>

                    <h2 className = 'plnText'>LoRaWAN Ultrasonic Broadcast Node</h2>
                    <ul className = 'listText'>
                        <li>Built a LoRa-based node using the Dragino shield for LoRa devices, an HC-SR04 ultrasonic sensor and an Arduino Uno</li>
                        <li>Utilized The Things Network server to deploy the node and manage routing of data from the gateway to a backend</li>
                        <li>Incorporated data storage to keep a record of sensor uplink data using an AWS IoT Core integration and DynamoDB</li>
                        <li>Authored a <a className = 'mediumLinks' href = 'https://saahil-barai.medium.com/the-power-of-lorawan-38ab2c329af'>Medium article</a>  covering my findings and detailing the processes used to create the broadcast node </li>
                    </ul>

                </div>

                <br></br>

                <div className = 'projectEntry'>
                    <h1 className= "plnText">Python</h1>
                    <img src = {process.env.PUBLIC_URL + '/snakepic.PNG'} className = 'projectPic'></img>
                    <h2 className = 'plnText'>Snake Game</h2>
                    <ul className = 'listText'>
                        <li>Built a snake game using python and pygame</li>
                        <li>Inspired by the google snake game</li>
                        <li>A fun introductory project into the possibilites of python</li>
                    </ul>
                </div>

                <br></br>

                <div className = 'projectEntry'>
                    <img src = {process.env.PUBLIC_URL + '/pongpic.PNG'} className = 'projectPic'></img>
                    <h2 className = 'plnText'>Pong Game</h2>
                    <ul className = 'listText'>
                        <li>Built a pong game using python and pygame</li>
                        <li>Players can play against the computer or against themselves</li>
                    </ul>
                </div>  
                  
                <br></br>    

                
                <div className = 'projectEntry'>
                    <h1 className= "plnText">C++</h1>
                    <img src = {process.env.PUBLIC_URL + '/IMG_6987.jpg'} className = 'projectPic'></img>
                    <h2 className = 'plnText'>Medication Reminder</h2>
                    <ul className = 'listText'>
                        <li>Built a cost effective medication reminder using an ESP-32S and Lego bricks</li>
                        <li>Interfaced an LED inside the window to light up when registering consumption and an alarm that rings at a set time daily</li>
                        <li>Authored a <a className = 'mediumLinks' href = 'https://saahil-barai.medium.com/medication-reminder-with-esp-32s-and-lego-bricks-d127d23ee4e1'>Medium article</a>  to guide others in making their own medication reminders </li>
                    </ul>
                </div>

                <br></br>

                <div className = 'projectEntry'>
                    <h1 className= "plnText">React</h1>
                    <h2 className = 'plnText'>Personal Website</h2>
                    <ul className = 'plnText'>
                        <li>Created a personal website to showcase my hobbies and experience using React</li>
                        <li>Gained familiarity with CSS styling, React Router, and responsive design</li>
                    </ul>
                </div>

                <br></br>


                <br></br>
                <br></br>
                <br></br>

            </div>
            )
    }
}

export default Project 