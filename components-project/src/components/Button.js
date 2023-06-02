import React from 'react'

function Button({type, children}) {
    let buttonClass = '';

    if(type === 'primary') {
        buttonClass = 'primary-button';
    } else if (type === 'secondary') {
        buttonClass = 'secondary-button';
      }
  return (
    <button className={buttonClass}>{children}</button>
  )
}

export default Button