import React from 'react';
import './Option.css';

const Option = ({data, label, ...rest}) => {
  return (
    <div className="input-wrapper">
      
        <p className="label">{label}</p>

        <select {...rest}>
            {
              data.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
              })
            }
        </select>
    </div>
  )
}

export default Option;
