import React from 'react'

const Button = ({btnText, btnClass}) => {
  return (
    <button className={btnClass}>
        {btnText}
    </button>
  )
}

export default Button