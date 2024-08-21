import React from 'react';
import { Button, DatePickerMolecule, Input, Option, TextArea } from '../../components';
import './AddCashflow.css';


const AddCashflow = () => {

  const bankDummy = ['-','BCA', 'BSI', 'BRI', 'MANDIRI', 'HIJRA', 'JENIUS'];
  const trxViaDummy = ['-','CASH', 'TRANSFER', 'VA', 'QR'];
  const trxTypeDummy = ['-','INCOME', 'EXPENSE','BUDGETING', 'SAVING'];
  const trxNameDummy = ['-','KESEHATAN','HOME','KOST','LAUNDRY','PAKET','MAKAN','JAJAN','BPJS','BELANJA','EMERGENCY','KLINIK','GOPAY','TAPCASH','ASTRO','BENSIN','PULANG','MOTOR','SKINCARE','TRAVELING','ZAKAT','MARRIED','SABUN'];

  return (
    <div id="add-cashflow">
      <h1>Add Cashflow</h1>
  
      <DatePickerMolecule label="Date" id="trxDate" name="trxDate"/>
      <Option data={bankDummy} label="From Bank" id="bankForm" name="bankForm"/>
      <Option data={trxViaDummy} label="Transaction Via" id="trxVia" name="trxVia"/>
      <Option data={trxTypeDummy} label="Transaction Type" id="trxType" name="trxType"/>
      <Option data={trxNameDummy} label="Transaction Name" id="trxName" name="trxName"/>
      <Input label="Amount" id="trxAmount" name="trxAmount" placeholder="Enter Amount"/>
      <TextArea label="Notes" id="trxNote" name="trxNote"/>
      <Button label="save"/>
    </div>
  )
}

export default AddCashflow;
