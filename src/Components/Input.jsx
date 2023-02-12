import React from 'react'

const Input = ({inputType, inputclass, inputPlaceholder, inputID, inputValue, inputOnChange, inputOnBlur}) => {
  return (
    <div>
        <input className={inputclass} 
                type={inputType} 
                placeholder={inputPlaceholder} 
                id={inputID}
                value={inputValue}
                onChange={inputOnChange}
                onBlur={inputOnBlur}
        />
    </div>
  )
}

export default Input