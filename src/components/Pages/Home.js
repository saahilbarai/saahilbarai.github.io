import react from 'react'
import './Home.css'
import { Link } from "react-router-dom";



class Home extends react.Component {
    constructor () {
        super()
        this.state = {
        	animate: true,
        }
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#000000";
		
		console.log(window.sessionStorage.getItem("firstLoadDone"))
		if (window.sessionStorage.getItem("firstLoadDone") === null) {
			this.setState({
				animate: true,
			})
			
			window.sessionStorage.setItem("firstLoadDone", 1)
		} else {
			this.setState({
				animate: false,
			})
		}
    }


    render() {
        return (
            <div className= "darkBg">
                <div className = "row">
                    <div className = "col">
                        <div className = "textWrapper">
                            <div className = "lines">
                                <h1 className = 'mainTextHome'>Hi, I'm</h1>
                                <img src = {process.env.PUBLIC_URL + '/NameAnimation.gif'} className = 'NamePic'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home 