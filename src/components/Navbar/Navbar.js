import react,{useEffect} from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'

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
                <ul className = "nav-menu">
                    {MenuItems.map ((item, index) =>{
                        return (
                            <li onClick = {this.handleClick} key = {index}>
                                <a className ={item.cName} href = {item.url} > {item.title}
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