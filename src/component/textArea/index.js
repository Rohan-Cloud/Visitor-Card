import React from "react";
import { Input } from 'antd';

import 'antd/dist/antd.css';
import  * as css from "./style";
import TextArea from "antd/lib/input/TextArea";

export default function CustomTextArea(props) {

  const { style, onBlurHandler,value, placeHolder, name, onChangeHandler,id,maxLength,minRows ,showCount,className} = props;

  return (

    <css.TextAreaWrapper>
        <TextArea 
          style={style}
          id={id}
          showCount ={showCount}
          value={value}
          bordered={false}
          autoSize={{ minRows: minRows}}
          placeholder={placeHolder} 
          name={name} 
          onBlur={onBlurHandler}
          maxLength={maxLength}  
          onChange={onChangeHandler}
          className={className}
        />
    </css.TextAreaWrapper>
    
  )
}


