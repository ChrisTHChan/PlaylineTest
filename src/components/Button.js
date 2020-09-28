import React from 'react'

const Button = ({text, width, height, fontSize, fontWeight, padding, justifyContent, bgImage, bgColor, border, color}) => {
    return (
        <div 
        className='button'
        style={{
            border: `${border}`,
            borderRadius: '20px',
            width: `${width}`,
            height: `${height}`,
            display: 'flex',
            justifyContent: `${justifyContent}`,
            alignItems: 'center',
            textTransform: 'uppercase',
            boxSizing: 'border-box',
            padding: `${padding}`,
            fontSize: `${fontSize}`,
            fontWeight: `${fontWeight}`,
            backgroundColor: `${bgColor}`,
            backgroundImage: `url(${bgImage})`,
            color: `${color}`,
            backgroundSize: '13%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '12.5px center'
        }}>
            {text}
        </div>
    )
}

export default Button