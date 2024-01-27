import styles from './styles.module.css'
import { useState } from 'react'

export const Slider = ({value, text}) => {

    // For example
    value = 50 
    text = 'мин'

    const [state, setState] = useState(value);

    const handleSliderChange = (event) => {
        setState(event.target.value)
    }

    const sliderStyle = {
        position: 'relative',
        width: '200px',
      };
    
      const valueStyle = {
        position: 'absolute',
        top: '-20px', 
        left: `${state / 100 * 101}px`,
        color: '#5813FE'
      };
      
    return (
        <div style = {sliderStyle}>
            <div className = {styles.sliderContainer}>
                <div className= {styles.customSlider}>
                <p style = {valueStyle}>{`${state} ${text}`}</p>
                <input type="range" min={0} max={100} value={state} 
                onChange={handleSliderChange}/>
                </div>
            </div>
        </div>
    )
}