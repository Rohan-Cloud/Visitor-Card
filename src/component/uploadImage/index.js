import React from "react";
import { Popover, Upload } from "antd";
import { UploadOutlined, DeleteOutlined, InfoCircleFilled } from '@ant-design/icons';

import * as css from "./style";

export default function UploadImage(props) {

  const {header, date, url, fileList, onChangeHandler, title, page, id, info, infoClick, infoContent} = props
   
  
  return (

    <css.ImageUploadWrapper>
      
      <Upload
      
        headers={header}
        listType="picture"
        fileList={fileList}
        showUploadList={{ showRemoveIcon: false, showPreviewIcon: false }}
        onChange={onChangeHandler}
        multiple={false}
        maxCount={1}
        previewFile={false}
        showRemoveIcon={true}
        id={id}
        data={date}
        accept="image/png, image/jpeg , image/svg"
        beforeUpload={()=>{ return false}}
      
      >
          <UploadOutlined style={{ fontSize: '21px', marginLeft: '1%', marginRight: '2%', width: '15px' ,cursor:'pointer' }} className="custom-icon" /> {title}
      </Upload>
      
      <div>
    
        {info == true ? <Popover placement="bottom" content={infoContent} ><InfoCircleFilled style={{ fontSize: '15px', marginLeft: '1%', width: '20%' }} onClick={infoClick} className="custom-icon" /></Popover> : ''}
        {page == "splash"
          ? <div style={{ color: 'lightslategray', width: '100%', marginLeft: '47px' }}><DeleteOutlined style={{ fontSize: '15px', marginLeft: '-2%', width: '20%',display:'none !important' }} className="custom-icon" /><br />
            <br /><br /><br />
            Recommeded size<br />1111 X 2222
            </div> : ""}
      </div>
    </css.ImageUploadWrapper>
  );
}
