import React from 'react';
import './Button.css';

const Button = ({label, ...rest}) => {
  return (
    <>
      <button className='button-atoms'>{label}</button>
    </>
  )
}

export default Button;
