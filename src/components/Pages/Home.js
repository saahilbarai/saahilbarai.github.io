import react from 'react'
import './Home.css'
import { Link } from "react-router-dom";



class Home extends react.Component {
    constructor () {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#000000"
    }


    render() {
        return (
            <div className= "darkBg">
                <div className = "row">
                    <div className = "col">
                        <div className = "textWrapper">
                            <div className = "lines">
                                <h1 className = 'mainTextHome'>Hi, I'm Saahil Barai.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home 