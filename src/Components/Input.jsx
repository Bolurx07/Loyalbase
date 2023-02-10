import React from 'react'

const Input = ({inputType, inputclass, inputPlaceholder}) => {
  return (
    <div>
        <input className={inputclass} type={inputType} placeholder={inputPlaceholder}/>
    </div>
  )
}

export default Input