import React from "react";
import { Button } from 'antd';
import * as css from "./style";
import 'antd/dist/antd.css';

export default function RegulerButton(props) {

  const { text, icon, name, onClick, style, type,className,htmlType,loading } = props;

  return (

    <css.ButtonWrapper>
      <Button
        type={type}
        name={name}
        icon={icon}
        onClick={onClick}
        style={style}
        className={className}
        htmlType={htmlType}
        loading={loading} >
        {text}
      </Button>
    </css.ButtonWrapper>
    
  )
}


