import react from 'react'
import './Home.css'
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";



class Home extends react.Component {
    constructor () {
        super()
        this.state = {
            name: "I am a "
        }
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#1c2237"
    }


    render() {
        return (
            <div className= "darkBg">
                <div className = "row">
                    <div className = "col">
                        <div className = "textWrapper">
                            <div className = "lines">
                                <h1 className = 'mainTextHome'>Hi, I'm Saahil Barai.</h1>
                                <p className = 'homePara'>I am a&nbsp;
                                    <TextLoop>
                                        <span className= "loopedText">student</span>
                                        <span className= "loopedText">artist</span>
                                        <span className= "loopedText">reader</span>
                                        <span className= "loopedText">tech enthusiast</span>
                                        <span className= "loopedText">data scientist</span>
                                        <span className= "loopedText">runner</span>
                                        <span className= "loopedTextSpecial">longhorn</span>
                                    </TextLoop>{' '}.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home 