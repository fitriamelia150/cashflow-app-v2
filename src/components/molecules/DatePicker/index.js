import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

const DatePickerMolecule = ({label, ...rest}) => {
  return (
    <div className='input-wrapper'>
        <p className='label'>{label}</p>
        <DatePicker dateFormat={"dd / MM / yyyy"} selected={new Date()} className="datePicker" {...rest}/>
    </div>
  )
}

export default DatePickerMolecule
