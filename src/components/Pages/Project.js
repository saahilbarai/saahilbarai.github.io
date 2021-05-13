import react from 'react'
import Card from '../Card/Card.js'
import './Project.css'

class Project extends react.Component {
    constructor () {
        super()
        this.state = {}
    }
    
    componentDidMount() {
        document.body.style.backgroundColor = "#1c2237"
    }

    render() {
        return (
            <div className='trial'>
                {/* <Card
                    id = '1' 
                    title='LoRaWAN'
                    imageUrl='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg'
                    body='A study on LoRaWAN and a sample home use case.'
                    spacing = '1'
                />
                <Card 
                    id = '2'
                    title='Medicine Reminder'
                    imageUrl='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg'
                    body='A medicine reminder made with an ESP-32S and Lego bricks.'
                    spacing = '0'
                />
                <Card 
                    id = '3'
                    title='NumerAi'
                    imageUrl='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg'
                    body='A algorithm created to trade stocks on the NumerAi platform.'
                    spacing = '0'
                />
                <Card 
                    id = '4'
                    title='Personal Website'
                    imageUrl='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg'
                    body='this is a test card'
                    spacing = '0'
                />
                <Card 
                    id = '5'                    
                    title='card title'
                    imageUrl='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg'
                    body='this is a test card'
                    spacing = '0'
                />
                <Card 
                    id = '6'
                    title='card title'
                    imageUrl='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg'
                    body='this is a test card'
                    spacing = '0'
                />
                <Card 
                    id = '7'
                    title='card title'
                    imageUrl='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg'
                    body='this is a test card'
                    spacing = '0'
                />       */}


                <div className = 'projectEntry'>
                    <h1 className= "plnText">Machine Learning 🧠</h1>
                    <h2 className = 'plnText'>Numerai Tournament</h2>
                    <ul className = 'plnText'>
                        <li>Participating in an ongoing tournament where where you build machine learning models on abstract financial data to predict the stock market.</li>
                        <li>Submiting a model every week to conduct exploratory analysis to find machine learning techniques that work well on live financial data</li>
                        <li>Gained familiarity with regression algorithms, particularly those found in the CatBoost, XGBoost, and LightGBM libraries</li>
                        <li>Follow my ranking and progress in the tournament <a className = 'mediumLinks' href = 'https://numer.ai/saahil'>here</a></li>
                    </ul>
                </div>

                <br></br>

                <div className = 'projectEntry'>
                    <h1 className= "plnText">LoRaWAN 📡</h1>
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
                    <h1 className= "plnText">Python 🐍</h1>
                    <img src = {process.env.PUBLIC_URL + '/snakepic.PNG'} className = 'projectPic'></img>
                    <h2 className = 'plnText'>Snake Game</h2>
                    <ul className = 'plnText'>
                        <li>Built a snake game using python and pygame</li>
                        <li>Inspired by the google snake game</li>
                    </ul>
                </div>

                <br></br>

                <div className = 'projectEntry'>
                    <img src = {process.env.PUBLIC_URL + '/pongpic.PNG'} className = 'projectPic'></img>
                    <h2 className = 'plnText'>Pong Game</h2>
                    <ul className = 'plnText'>
                        <li>Built a pong game using python and pygame</li>
                        <li>Created single player capabilities with a computer to play against</li>
                        <li></li>
                    </ul>
                </div>  
                  
                <br></br>    

                
                <div className = 'projectEntry'>
                    <h1 className= "plnText">C++ 🖥️</h1>
                    <img src = {process.env.PUBLIC_URL + '/IMG_6987.jpg'} className = 'projectPic'></img>
                    <h2 className = 'plnText'>Medication Reminder</h2>
                    <ul className = 'plnText'>
                        <li>Built a cost effective medication reminder using an ESP-32S and Lego bricks</li>
                        <li>Interfaced an LED inside the window to light up when registering consumption and an alarm that rings to remind you at the set time daily</li>
                        <li>Authored a <a className = 'mediumLinks' href = 'https://saahil-barai.medium.com/medication-reminder-with-esp-32s-and-lego-bricks-d127d23ee4e1'>Medium article</a>  to guide others in making their own medication reminders </li>

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