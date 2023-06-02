import React from 'react'
import Button from './Button'

function Banner({title, content}) {
  return (
    <div className='banner-container'>
        <div className='banner'>
            <span className='title'>{title}</span>
            <div className='content'>
                <p>{content}</p>
            </div>
            <div className='button'>
                <Button type='primary'>Primary</Button>
                <Button type='secondary'>Secondary</Button>
            </div>
        </div>
    </div>
  )
}

export default Banner