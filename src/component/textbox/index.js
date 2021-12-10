import React from "react";
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';
import * as css from "./style";

export default function TextBox(props) {

  const { style, value, placeHolder,onKeyDownHandler, name, onChangeHandler, id, type, iconRender, disabled } = props;
  if (iconRender) {
    return (<css.TextBoxWrapper>
      <Input.Password
        style={style}
        id={id}
        type={type}
        value={value}
        placeholder={placeHolder}
        name={name}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        className="input-class" />
    </css.TextBoxWrapper>)
  }
  else {
    return (

      <css.TextBoxWrapper>
        <Input
          style={style}
          id={id}
          type={type}
          value={value}
          placeholder={placeHolder}
          name={name}
          disabled={disabled}
          onKeyDown={onKeyDownHandler}
          onChange={onChangeHandler}
          className="input-class" />
      </css.TextBoxWrapper>

    )
  }

}




