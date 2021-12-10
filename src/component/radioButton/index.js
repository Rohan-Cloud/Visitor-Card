import React from "react";
import { Radio } from 'antd';
import 'antd/dist/antd.css';

export default function RadioButton(props) {
  const { style, onChange, title ,name, value  } = props;

  return (

    <div style={{marginTop:'28px'}}>
      {title}
      <br/>
      <Radio.Group  defaultValue={value} name={name}  style={style} onChange={onChange} >
        <Radio  value="Collection Screen">Collection Screen</Radio>
        <Radio value="Product Screen">Product Screen</Radio>
        <Radio value="Non-clickable">Non-clickable</Radio>
      </Radio.Group>
    </div>

  )
}


