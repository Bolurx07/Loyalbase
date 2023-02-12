import React from 'react'

const Button = ({btnText, btnClass, btnDisabled}) => {
  return (
    <button className={btnClass} disabled={btnDisabled}>
        {btnText}
    </button>
  )
}

export default Button