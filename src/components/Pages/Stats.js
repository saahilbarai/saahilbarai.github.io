import react from 'react'
import BigCard from '../Card/BigCard'
import './Stats.css'
import BarChart from './BarChart'
import Art1 from './Art1.jpg'
import ImageCarousel from '../Carousel/ImageCarousel'
import {CarouselData} from '../Carousel/CarouselData' 



class Stats extends react.Component {
    constructor () {
        super()
        this.state = {}
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#1c2237"
    }

    render() {
        return (
            <div className = "StatsDeck">
                {/* <BigCard 
                    title = "Books"
                    body = "Here are some of my favorite books I have read this year!"
                    spacing = '1'
                />
                <BigCard 
                    title = "Podcasts"
                    body = "Here are some of my favorite podcasts I have listened to this year!"
                    spacing = '0'
                />
                <BigCard 
                    title = "Travel"
                    body = "Here are some of my favorite places I have visited this year!"
                    spacing = '0'
                /> */}

                <h1 className= "plnText">Programming 👨‍💻</h1>
                <h2 className = 'plnText'>Here are the programming languages I am proficient in!</h2>
                {/* <ul className = 'plnText'>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C and C++</li>
                    <li>React and Node.js</li>
                    <li>Visual Basic</li>
                    <li>React and Node.js</li>
                </ul> */}
                <BarChart />

                <br></br>
                
                <h1 className= "plnText">Books 📘</h1>
                <h2 className = 'plnText'>Here are some of my favorite books that I have read this year!</h2>
                <ul className = 'plnText'>
                    <li>Lifespan: Why We Age – and Why We Don't Have To by David Sinclair</li>
                    <li>Shoe Dog: A Memoir by the Creator of Nike by Phil Knight</li>
                    <li>Idea Man by Paul Allen</li>
                    <li>Bad Blood: Secrets and Lies in a Silicon Valley Startup by John Carreyrou</li>
                    <li>The Lean Startup by Eric Ries</li>
                    <li>Skin in the Game by Nassim Nicholas Taleb</li>
                    <li>Americana by Bhu Srinivasan</li>
                </ul>

                <br></br>

                <h1 className= "plnText">Podcasts 🎧</h1>
                <h2 className = 'plnText'>Here are some of my favorite podcasts!</h2>
                <ul className = 'plnText'>
                    <li>The All-In Podcast with Chamath, Jason, Sacks and Friedberg</li>
                </ul>

                <br></br>

                <h1 className= "plnText">Travel ✈️</h1>
                <h2 className = 'plnText'>Here are some of the places I have visted this year!</h2>
                <ul className = 'plnText'>
                    <li>Chicago - Definitely the coolest city I have visited from an architechtural standpoint plus the pizza was great</li>
                    <li>The National Parks of Utah - I would highly recommend visiting Zion National Park and Bryce National Park</li>
                </ul>

                <br></br>

                <h1 className= "plnText">Art 🖌️</h1>
                <h2 className = 'plnText'>Here is some of the art I made this year!</h2>
                {/* <div className = 'ArtGallery'>
                    <img className = 'Art' src={Art1}/>
                    <img className = 'Art' src={Art1}/>
                    <img className = 'Art' src={Art1}/>
                    <img className = 'Art' src={Art1}/>
                </div>  */}
                <ImageCarousel slides = {CarouselData}/>

                <br></br>
                <br></br>


            </div>
                  
        )
    }
}

export default Stats 