import React from 'react'
import './message.css'

function Message({variant}) {
  return (
    <div className='message-container'
    style={{
        background: variant.mainColor,
        border: "0.1rem solid" + variant.secondaryColor}}
    >
        <div className='symbol-container'
            style={{
                background: variant.mainColor,
                border: "0.1rem solid" + variant.secondaryColor}}
        >
            <span></span>
        </div>
        <div className='description-container'>
            <span className='description-title'>title</span>
            <span className='description-text'>text</span>
        </div>
        <a className='symbol-close-link'>
            <span>close symbol</span>
        </a>
    </div>
  )
}

export default Message