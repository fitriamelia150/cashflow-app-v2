import React from 'react';
import { Input, Option, TextArea } from '../../components';
import './Transaction.css';

const AddCashflow = () => {
  return (
    <div>
      <Input label="Amount" id="trxAmount" name="trxAmount" placeholder="Enter Amount"/>
      <Option label="Transaction Type" id="trxType" name="trxType"/>
      <TextArea label="Notes" id="trxNote" name="trxNote"/>
    </div>
  )
}

export default AddCashflow;
