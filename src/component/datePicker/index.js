import React from "react";
import { DatePicker, Space } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import * as css from "./style";

import 'antd/dist/antd.css';

export default function RegulerDatePicker(props) {

  const { onChange, placeHolder, value, disabledDate } = props;

  return (

    <div>
      <br />
      <br />
      <css.DateWrapper>
        <Space direction="vertical" size={5}>
          <DatePicker bordered={false} defaultValue={value} format={'YYYY-MM-DD'} onChange={onChange} placeholder={placeHolder} suffixIcon={<CalendarOutlined className="custom-icon" />} disabledDate={d => !d || d.isBefore(disabledDate)} style={{ marginRight: "1%", borderBottom: "1px solid" }} />
        </Space>
      </css.DateWrapper>
    </div>

  )
}


