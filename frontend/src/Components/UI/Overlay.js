import React from 'react'
import Button from './Button'

const Overlay = (props) => {
  return (
    <div className='backdrop'>
        <div className='modal'>
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <p className='content'>{props.message}</p>
            <footer className='actions'>
                <Button>Okay</Button>
            </footer>
        </div>
    </div>
    
  )
}

export default Overlay
