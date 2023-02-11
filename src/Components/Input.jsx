import React from 'react'

const Input = ({inputType, inputclass, inputPlaceholder, inputID}) => {
  return (
    <div>
        <input className={inputclass} type={inputType} placeholder={inputPlaceholder} id={inputID}/>
    </div>
  )
}

export default Input