import react from 'react'
import './BigCard.css'


function BigCard (props) {

        return (
            <div className = {props.spacing == '1' ? 'bigcardContainerMargin' : 'bigcardContainer'}>
                <div className = "bigcardContent">
                    <div className = "bigcardTitle">
                        <h3>{props.title}</h3>
                    </div>
                    <div className = "bigcardBody">
                        <p>{props.body}</p>
                    </div>
                </div>
            </div>
        )
    }

export default BigCard