import { useState } from "react"
import react from 'react'
import {CarouselData} from './CarouselData'
import './ImageCarousel.css'

const ImageCarousel = ( {slides} ) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    
    const nextArt = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }

    const prevArt = () => {
        setCurrent(current === 0 ? length -1 : current-1)
    }

    return (
        <section className = 'Carousel'>
        {/* <button className='leftButton' onClick ={prevArt}/>    
        <button className='rightButton' onClick ={nextArt}/>     */}
        <i class="fas fa-arrow-right" onClick={nextArt}></i>
        <i class="fas fa-arrow-left" onClick={prevArt}></i>

        {CarouselData.map((slide,index) => {
            return (
                <div className = {index === current ? 'slide active' : 'slide'} key = {index}>
                    {index === current && (<img src={slide.image} alt='art image' className = 'CarouselImage'/>)}
                </div>
            )

        })}
        </section>
    )
    
}

export default ImageCarousel