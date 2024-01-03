import react from 'react'
import './Home.css'
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";



class Home extends react.Component {
    constructor () {
        super()
        this.state = {
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
                                <p className = 'homePara'>I am&nbsp;
                                    <TextLoop interval={1600}>
                                        <span className= "loopedText">a student</span>
                                        <span className= "loopedText">an artist</span>
                                        <span className= "loopedText">a reader</span>
                                        <span className= "loopedText">a writer</span>
                                        <span className= "loopedText">a tech enthusiast</span>
                                        <span className= "loopedText">a data scientist</span>
                                        <span className= "loopedText">a runner</span>
                                        <span className= "loopedTextSpecial">a longhorn</span>
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