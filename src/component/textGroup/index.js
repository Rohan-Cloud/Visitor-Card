import React from "react";
import { Input, Select } from 'antd';

import 'antd/dist/antd.css';
import * as css from "./style";
import { Option } from "antd/lib/mentions";


export default function TextBoxGroup(props) {

    const { onBlurHandler, value,selectValue, placeHolder, name, onSelectChangeHandler,onChangeHandler, id } = props;
  
    return (
  
      <css.TextBoxGroupWrapper>
        <Input.Group compact style={{width:"95%"}} >
          <Select defaultValue="https://" value={selectValue == null ? "https://":selectValue} className="input-class-select" onChange={onSelectChangeHandler}>
            <Select.Option value="https://">https://</Select.Option>
            <Select.Option value="http://">http://</Select.Option>
          </Select>
          <Input className="input-class" value={value} onBlur={onBlurHandler} id={id} onChange={onChangeHandler} style={{ width: '73%' ,marginLeft:'10px',marginTop:"2px"}} />
        </Input.Group>
      </css.TextBoxGroupWrapper>
  
    )
  }