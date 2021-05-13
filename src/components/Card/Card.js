import react from 'react'
import './Card.css'


function Card (props) {
        console.log(props.spacing)

        return (
            <div className = {props.spacing == '1' ? 'cardContainerMargin' : 'cardContainer'}>
                <div className = "imgContainer">
                    <img src = {props.imageUrl} alt = '' />
                </div>

                <div className = "cardContent">
                    <div className = "cardTitle">
                        <h3>{props.title}</h3>
                    </div>
                    <div className = "cardBody">
                        <p>{props.body}</p>
                    </div>
                </div>

                <button className = "cardButton">
                    <a>
                        Learn more
                    </a>
                </button>

            </div>
        )
    }

export default Card