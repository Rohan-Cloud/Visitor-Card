import React from "react";
import { Radio } from 'antd';
import 'antd/dist/antd.css';

export default function RadioGroup(props) {
    const { style, onChange, title, name, value } = props;

    return (

        <div style={{ marginTop: '5px' }}>
            {title}
            <Radio.Group  value={value} name={name}  style={style} onChange={onChange} buttonStyle="solid">
                <Radio.Button value="square">Square</Radio.Button>
                <Radio.Button value="portrait">Portrait</Radio.Button>
            </Radio.Group>

        </div>

    )
}


