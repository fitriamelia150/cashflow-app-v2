import React from 'react'

const Option = ({label, ...rest}) => {
  return (
    <div className="input-wrapper">
        <p className="label">{label}</p>
        <select {...rest}>
            <option value="-">-</option>
            <option value="KESEHATAN">KESEHATAN</option>
            <option value="HOME">HOME</option>
            <option value="KOST">KOST</option>
            <option value="LAUNDRY">LAUNDRY</option>
            <option value="PAKET-DATA">PAKET DATA</option>
            <option value="MAKAN">MAKAN</option>
            <option value="JAJAN">JAJAN</option>
            <option value="BPJS">BPJS</option>
            <option value="BELANJA">BELANJA</option>
            <option value="EMERGENCY">EMERGENCY</option>
            <option value="KLINIK">KLINIK</option>
            <option value="GOPAY">GOPAY</option>
            <option value="TAPCASH">TAPCASH</option>
            <option value="ASTRO-GOODS">ASTRO GOODS</option>
            <option value="BENSIN">BENSIN</option>
            <option value="PULANG-KAMPUNG">PULANG KAMPUNG</option>
            <option value="MOTOR">MOTOR</option>
            <option value="SKINCARE">SKINCARE</option>
            <option value="TRAVELING">TRAVELING</option>
            <option value="ZAKAT">ZAKAT</option>
            <option value="MARRIED">MARRIED</option>
            <option value="SABUN-BULANAN">SABUN BULANAN</option>
        </select>
    </div>
  )
}

export default Option
