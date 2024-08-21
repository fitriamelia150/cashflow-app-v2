import React from 'react';
import './TextArea.css';

const TextArea = ({label, ...rest}) => {
  return (
    <div className='input-wrapper'>
      <p className='label'>{label}</p>
      <textarea {...rest}/>
    </div>
  )
}

export default TextArea;
