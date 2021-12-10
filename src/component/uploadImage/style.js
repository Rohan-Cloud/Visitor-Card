import styled from 'styled-components';

export const ImageUploadWrapper = styled.div`
        display:grid;
        grid-template-columns: 100% ;
        position: relative;
        height:auto;
    > span {
        /* margin-right: 0; */
    }
    >span >div 
    {
        // width:150px;
    }
    .ant-upload.ant-upload-select{
        width:100%;
    }
    
    .ant-upload-list-picture .ant-upload-list-item-thumbnail img, .ant-upload-list-picture-card .ant-upload-list-item-thumbnail img{
        width: 100%;
        height: 200px;
        min-width: auto;
        min-height: auto;
    }
    .ant-upload-list-picture .ant-upload-list-item-thumbnail, .ant-upload-list-picture-card .ant-upload-list-item-thumbnail{
        width: 100%;
        height: auto;
        opacity:1 !important;
    }
    
    >span >div > span
    {
        cursor:pointer;
        font-size:14px;
        position:relative;
        // top:-3px;
    }
    >div{
        margin-left: 115px;
        margin-top: 48px;
        position:absolute;
    }
    > span > div > div {
        width: 100%;
        // height: 200px;
        margin-right:15px;
    }
    > span > div > div > div {
        width: 100%;
        height: 150px;
        margin-right:15px;
        display:table-footer-group
    }
    .ant-upload-list-picture .ant-upload-list-item, .ant-upload-list-picture-card .ant-upload-list-item{
        height:100%;
    }
    .ant-upload-list-picture .ant-upload-list-item{
        display: inline-block;
        border: none;
        padding: 0px;
        margin: 0px;
    }
    .sc-kfzAmx .ant-upload-list-item-info > span .ant-upload-list-item-thumbnail img{
        height:auto;
    }
    img{
        min-height: 350%;
        min-width: 750%;
        object-fit: cover;
        position: relative;
        pointer-events:non
    }
    a
    {
        pointer-events:none;
    }
`;




