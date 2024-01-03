import react,{useEffect} from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import signature from './Sig.png'

class Navbar extends react.Component {
    constructor () {
        super()
        this.state = {
            clicked: false
        }   
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return (
            <nav className="NavbarItems">
                <div className="menu-icon" onClick = {this.handleClick}>
                    <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map ((item, index) =>{
                        return (
                            <li onClick = {this.handleClick} key = {index}>
                                <a className ={item.cName} href = {item.url} >{item.title}
                                </a>
                            </li>
                        )
                    } )}
                </ul>
            </nav>
        )
    }
}

export default Navbar