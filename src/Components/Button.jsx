import React from 'react'

const Button = ({btnText, btnClass, btnClick, btnDisabled}) => {
  return (
    <button className={btnClass} onClick={btnClick} disabled={btnDisabled}>
        {btnText}
    </button>
  )
}

export default Button