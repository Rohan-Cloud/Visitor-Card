import React from "react";
import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

import  * as css from "./style";

export default function SelectList(props) {
  const { style, placeHolder, options,className, id, name, onChange, visible, value, defaultValueParameter } = props;
  const { Option } = Select;
  const iconStyle = {
    fontSize: '16px',
    color: '#0e8fff'
  }
  
  return (
    <css.SelectWrapper>
      
      <Select
        className={className}
        showSearch
        id={id}
        name={name}
        bordered={false}
        suffixIcon={<CaretDownOutlined style={iconStyle} />}
        placeholder={placeHolder}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
        onChange={onChange}
        style={{display: visible==true||visible==undefined?'':"none"}}
        defaultValue={defaultValueParameter}
        value={value}
      >
       
        {
          options.map((item, index) => {
            return ( <Select.Option className="selectOption"  key={index} value={item.node!=undefined?item.node.id:''}>{item.node!=undefined?item.node.title:''}</Select.Option>)
          })
        }
      </Select>
    </css.SelectWrapper>

  )
}


