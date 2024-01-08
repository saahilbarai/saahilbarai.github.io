import react from 'react'
import BigCard from '../Card/BigCard'
import Card from '../Card/Card'
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
        document.body.style.backgroundColor = "#000000"
    }

    render() {
        return (
            <div className = "StatsDeck">
            

                <h1 className= "plnText">Programming 👨‍💻</h1>
                <h2 className = 'plnText'>Here are the programming languages I am proficient in!</h2>
                
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