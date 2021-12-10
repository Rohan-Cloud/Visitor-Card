import React from "react";
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
import * as css from "./style";

export default function CustomCheckBox(props) {

    const {  title, onChangeHandler, name, value, defaultValue, subTitle,link,checked } = props;

    return (
        <css.CheckBoxWrapper>
            <div>
                <Checkbox onChange={onChangeHandler} name={name} defaultValue={defaultValue}checked={checked}><p className="title"> {title} </p><p className="sub-title">{subTitle}<a href={link}>{link}</a></p></Checkbox>
            </div>
        </css.CheckBoxWrapper>
    )
}

