import styled from 'styled-components';
// import * as constant from "../../../src/constant";

export const ChooseDesignStyled = styled.div`
    .copyright
    {
        bottom: 0 !important;
        position: fixed;
        border: 0;
        width: 100%;
    }
    .navbar{
        position: fixed !important; 
        top:0;
        width: 100%;
        background-color: #000;
        height:10px !important
    }
    .middleContent
    {
        padding-right:12%;
        padding-left:12%;
        padding-top:7%;
    }
    .iphoneimage-container
    {
        display:flex;
        justify-content:space-between;
        text-align:center;
    }
    .iphone-img
    {
        width:100%;
    }
    .inner-content
    {
        position: absolute;
        margin-top: 3%;
        margin-left: 4.7%;
        width: 16%;      
    }
    .inner-image
    {
        border-bottom-right-radius: 23px;
        border-bottom-left-radius: 23px;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        width: 100%;
    }

    .inner-image-3
    {
        
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        width: 100%;
    }
    .username
    {
        position: absolute;
        margin-top: 77%;
        font-size: xx-large;
        margin-left: 25%;
        -webkit-text-size-adjust:none;
        -ms-text-size-adjust:none;
        -moz-text-size-adjust:none;
        text-size-adjust:none;
    }
    .black{
        margin-top: 106%;
    }
    .cream{
        margin-top: 68%;
    }
    .btnStyle{
        color:black;
    }
    .next-btn
    {
        text-align-last: end;
    }
`;
