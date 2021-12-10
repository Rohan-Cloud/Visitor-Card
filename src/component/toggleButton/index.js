import React from "react";
import { Switch } from 'antd';
import * as css from "./style";
import 'antd/dist/antd.css';

export default function ToggleButton(props) {

    const { onChange, title, onChangeHandler, name, value } = props;

    return (
        <css.ToggleWrapper>
            <div>
                <Switch className="switch"  size="small"  checked={value} onChange={onChangeHandler} name={name} /> {title}
            </div>
        </css.ToggleWrapper>

    )
}

