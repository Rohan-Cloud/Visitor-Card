import styled from 'styled-components';

import * as constants from "../../views/constantParameter";


export const CustomLayoutWrapper = styled.div`

.sidebar
{   
    background-color:white;
    min-width:33% !important;
    position: fixed;    
    overflow: hidden;
    overflow-y: auto;
    top: 0;
    bottom: 0;
    margin-top:60px;
    padding-top:20px;
    margin-bottom:40px;
    padding-bottom:30px;
    border-right:1px solid lightgrey;
    border-left:1px solid lightgrey;

}

.header{
    position: fixed;    
    width: 100%;
    z-index: 99;
    top:0;
    line-height: 0;
    padding: 27px 29px;
    background: white;
    -webkit-box-shadow: 0 3px 5px rgb(57 63 72 / 30%);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgb(57 63 72 / 30%);
    height:55px;
}
.footer
{
    position: fixed;    
    z-index: 99;
    bottom:0;
    font-size: 12px;
    color: grey;
    font-weight: 500;
    text-align:center;
    background: #dadee4;
    border-top:1px solid lightgrey;
    padding:12px 50px;
}
.sidebar-wrapper
{
    float:left;
    width:100%;
    padding:0 20px 20px 14px;
}   
.ant-layout
{
    background:#ffffff;
}
.ant-layout-content {
    position: relative;
    margin-left: 30%;
    background: gray;
    margin-top: 90px;
    min-height: 471px;
    width: 100%;
    overflow: hidden;
    padding: 20px;
    background: #f6f6f6;
    color: black;
}
.site-logo {
    width: 75px;
    top: 7px;
    position: absolute;
    max-width:47px;
    max-height:65px
}
.site-logo-title {
    width: auto;
    color: #6b993e;
    font-size: 15px;
    font-family: system-ui;
    position: relative;
    margin-left: 48px;
    margin-top: -1px;
}
.site-by-name {
    float: left;
    width: auto;
    color: black;
    clear: both;
    margin-left:48px;
    font-size: 12px;
    font-family: system-ui;
}
.logo-wrapper {
    float: left;
}
.menu-wrapper {
    float: right;
}
.menu {
    list-style: none;
    float: left;
    width: 100%;
}
.menu > li {
    padding: 2px 14px;
    color: #000000d1;
    width: auto;
    float: right;
    font-size: 12px;
    text-transform: uppercase;
}
.menu > li > a {color: black;}
.menu-mobile-wrapper, .mobile-menu {
    display: none;
}

.container {
    display: inline-block;
    cursor: grab;
}

.bar1, .bar2, .bar3 {
    width: 33px;
    height: 4px;
    background-color: ${constants.MENUCOLOR};
    margin: 5px 0;
    transition: 0.4s;
}

.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
}
.middle-content
{
    margin: 0 auto;
    width: 93%; 
    background-color:white;
}
.layout-content{
    background-color: #b1a4a93d;
    margin-top: 1.666%;
    margin-left:35.4%;
    height: 850px;
    padding: 32px;
}
@media screen and (max-width: 1224px) {
    .layout-content {
      padding-top:100px !important;
    }
}
.main-layout
{
    background-color:white;
}
.m-logo-fixed {
    width: 445px;
    margin: 0 auto;
    position: absolute;
    top: 57px;
    text-align: center;
}
.mobile-screen {
    width: 301px;
    height: 608px;
    background-image: url('${constants.MOBILE_BG_IMAGE}');
    margin: 0px auto;
    transition: height 0.3s ease-out 0s;
    line-height: 1px;
    filter: drop-shadow(2px 4px 6px black);
}
.mobile-container {
    margin-top: 93px;
    margin-left:2px;
    // padding: 1px 17px;
    // padding: 0px 3px 0px 4px;
    float: left;
    width: 98.5%;
    height: 513px;
    overflow-y: scroll;
    border-bottom-left-radius: 7%;
    border-bottom-right-radius: 7%;
    font-family: ${constants.REGULARFONT};
    cursor:grab;
    scrollbar-width: none;
}
.mobile-container::-webkit-scrollbar {
    display: none;
    
  }
.m-header {
    float: left;
    width: 100%;
}
.m-header-menu {
    float: left;
    width: 35px;
}
.m-logo {
    // max-width: 150px;
    margin: 0 auto;
    text-align: center;
    font-size: 24px;
}
.m-logo img {
    width: 84px;
    padding: 0px;
    margin-top: -31px;
    height: 32px;
    object-fit: contain;
    position: absolute;
    left: 107px;
}
.m-cart {
    text-align: right;
    width: auto;
    font-size: 32px;
}
.m-search {
    float: left;
    width: 100%;
    border-radius: 5px;
    margin-top: 7px;
    background: #f7f7f7;
    line-height: 2;
    padding-left: 41px;
    font-size: 18px;
}
.m-search-icon {
    position: absolute;
    left: 0;
    top: 20px;
    font-size: 20px;
    left: 12px;
}
.m-banner {
    float: left;
    width: 100%;
    height: 162px;
    background: white;
    //width: 305px;
    object-fit:cover;
}
.m-slider { float: left; width: 100%; margin-bottom: 0px;  }
.rec-carousel-wrapper { margin-top: 15px; }
.rec-arrow.rec-arrow-left, .rec-arrow.rec-arrow-right, .rec-pagination {
    display: none !important;
}
.rec-slider-container { margin: 0;}
.rec-item-wrapper > div { margin: 5px; }
.rec-item-wrapper > div:first-child { margin-left: 0px; }
.slider-tag {
    float: left;
    width: 100%;
   
    cursor: grab;
    
    text-align: center;
}
.slider-tag div {
    min-height: 200px;
    text-align: center;
    float: left;
    width: 100%;
}
.slider-tag div img {
    width: 100%;
    height:180px;
    cursor: grab;
    max-height: 240px;
}
.slider-img img {
   // width: 95%;
}
.slider-tag img {
    cursor: grab;
   // height: 218px;
   // border-radius: 3px; 
    object-fit:cover;  
    //object-fit: contain; 
}
.product-grid .slider-tag img {
    object-fit:contain;  
}
.m-slider-label {
    font-size: 14px;
    color: ${constants.LABELCOLOR};
    float: left;
    width: auto;
    margin-bottom: 9px;
    padding-left: 6px;
    margin-top: 3px;
}
.m-slider-product-grid
{
    font-size: 14px;
    color: ${constants.LABELCOLOR};
    float: left;
    width: auto;
    // margin-bottom: 19px;
    padding-left: 6px;
    margin-top: 16px;
}
.m-slider-product-grid-right
{
    font-size: 12px;
    color: ${constants.LABELCOLOR};
    float: right;
    width: auto;
    padding-right: 21px;
    margin-top: 19px;
}
.m-slider-right {
    float: right;
    padding: 0px 20px;
    font-size: 12px;
    color: ${constants.LABELCOLOR};
    margin-top: 6px;
    
}
.m-slider-right a
{
    color: ${constants.LABELCOLOR};
}

.rotate-slider
{
    height:200px;
   // margin-left: 1px;
}

.m-product-slider .slick-slide
{
    //width: 171px !important;
}
.m-slider .slick-slide{
    position:relative;
}
.slick-slide img
{
    display:initial
}
.item-desc { 
    font-size: 10px;
    float: left;
    width: 100%;
    // margin-top: 14px;
    color: black;
    padding-left: 5px;
    line-height: 1.2;
    text-align: left;
    margin-top:4px;
    font-family: ${constants.REGULARFONT};
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
}
.product-grid .item-desc
{
    font-size: 11px;
    float: left;
    width: 100%;
    // margin-top: 14px;
    color: black;
    padding-left: 5px;
    line-height: 1.2;
    text-align: left;
    margin-top:4px;
    font-family: ${constants.REGULARFONT};
    display: inline-block;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
}
.item-price {
    // margin-top: 16px;
    float: left;
    width: 100%;
    font-size: 12px;
    
    color: black;
    padding-left: 5px;
    text-align: left;
    font-family: ${constants.BOLDFONT};
}
.rec-item-wrappe:focus, .rec-item-wrapper > div {
    outline: none;
}
.mg-tp-20 {
    margin-top: 20px;
}
.header-add {
    float: left;
    width: 100%;
    max-height: 785px;
}
.view-all {
    height : 250px;
    font-size: 20px;
    margin: 0 auto;
    vertical-align: middle;
    text-align: center;
    line-height: 10;
    text-transform: uppercase;
}

.ant-carousel .slick-dots li button {
    border-radius:150%;
    height:10px;
    width:68%;
}
.ant-carousel .slick-dots li.slick-active button {
    background: #fff;
    opacity: 1;
}
.ant-carousel .slick-dots li.slick-active {
    width: 6px;
}
.slick-dots li {
    width: 6px;
}
.rotating-image
{
    float: left;
    width: 103% !important;
    max-height: 200px;
    background: white;
    border-radius: 5px;
    margin-top: 5%;
}
.m-product-slider {
    float: left;
    width: 99.5%;
    overflow: hidden;
   // height: 242px;
}
.slick-track
{
    display:flex;
}
#collection .slick-list
{
    overflow: hidden !important;
    height: 65px !important;
    
}
#collection
{
    margin-left: -1px;
}
.collection-slider > .slick-slide
{
    outline: none;
    width: 114px;
    height: 87px;
}
.slick-prev 
{
    display:none !important;
}
.slick-next 
{
    display:none !important;
}
.slider-tag-grid {
    float: left;
    width: 100%;
    // height: 360px;
    cursor: grab;
    // min-width: 180px;
    // margin-bottom:30px;
}
.img-banner-img
{
    width:100%;
    object-fit:cover !important;
}
.istext-collection
{
    width: 103%;
    line-height: 1.2;
    font-size: 12px;
    position: absolute;
    color: white;
    text-align: center;
    font-family: Poppins-Regular;
    height: 65px;
    font-family: Poppins-Regular;
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: ${constants.REGULARFONT};
    padding: 7px;

}
.collection-slider-tag {

    float: left;
    width: 100%;
    height: 29px !important;
    padding-right: 3%;
    cursor: grab;
}
.ant-modal-root
{
    color:red;
}
.collection-slider-tag img {
    width: 100%;
    height:65px !important;
    border-radius:2px;
    margin-left:5px;
    
    object-fit:cover !important;
}
.rec-item-wrapper
{
    height:70px;
}
.slick-dots
{
    position: absolute;
    margin-bottom: 8%;
    color:white;
}

.m-rotate-slider > .m-slider {
    overflow: hidden;
}
.m-rotate-slider > .slick-slide  > div
{
    width : 449px !important;
    margin-left: 1px;
    outline: none;
}
.m-rotate-slider  .slick-slide  
{
    width : 300px !important;
}
.slider-viewmore
{
    margin-left:20% !important;
    margin-top:64% !important;
    color: ${constants.LABELCOLOR};
}
.announcement-bar
{
    height: 38px;
    width: 300px;
    background-color: white;
    text-align: center;
    color: red;
    font-size: 14px;
    font-family: ${constants.REGULARFONT};
    padding-top: 19px;
    margin-left: 1px;
}
.ant-row
{
    margin-bottom: 12px;
}
.ant-col
{
    min-height: 28px;
}
.product-grid
{
    // margin-top:-22px;
}
.product-slider
{
   // height: 177px !important;
}
@media screen and (max-width: 1200px){
    .ant-layout .container-div{
        height:auto;
    }
    .ant-layout .mobile-screen{
        margin-bottom:40px;
    }
    // .ant-layout .ant-row{
    //    flex-direction: column;
    // }
    .ant-layout ..ant-col-7{
        max-width: 100%;
    }
    .ant-layout .ant-col.left-side{
        margin-bottom:40px;
    }
    .parent-div, .account-creation{
        grid-template-columns: 100%;
    }
}
.loading-screen
{
    position: absolute;
    float: left;
    margin: 0 auto;
    margin-top: 71%;
    z-index: 999;
    margin-left: 50%;
}
.m-time
{
    /* width: 445px; */
    margin: 0 auto;
    position: absolute;
    top: 27px;
    text-align: center;
}
.saving-text
{
    margin-left: 7px;
    color: #80a8e4;
    text-align: center;
    padding-top: 31px;
    font-size: 20px;
}
.ant-modal-title
{
    text-align: center;
    font-size: 30px;
    height: 34px;
    margin-top: 41px;
}
.deactiveNav
{
    color:black;
}
.activeNav
{
    color:${constants.MENUCOLOR} !important;
}
.side-active-nav
{
    color:black !important;
}
@keyframes dots {
    0%, 20% {
      color: rgba(0,0,0,0);
      text-shadow:
        .25em 0 0 rgba(0,0,0,0),
        .5em 0 0 rgba(0,0,0,0);}
    40% {
      color: blue;
      text-shadow:
        .25em 0 0 rgba(0,0,0,0),
        .5em 0 0 rgba(0,0,0,0);}
    60% {
      text-shadow:
        .25em 0 0 blue,
        .5em 0 0 rgba(0,0,0,0);}
    80%, 100% {
      text-shadow:
        .25em 0 0 blue,
        .5em 0 0 blue;}}
  
.saving-text:after 
{
    content: ' .';
    animation: dots 1s steps(5, end) infinite;
    font-size: 50px;
}
    
.loading-image-div
{
    float: left;
    width: 136px;
    margin-left: 25%;
    margin-top: 46%;
    text-align-last: center;
}
.loading-image
{
    width: auto;
    height: 87px;
}
.square-image-orientation-product-slider
{
    width: 110px;
    height:110px;
    object-fit:cover !important;
}
.portrait-image-orientation-product-slider
{
    width: 110px;
    height: 165px;
    object-fit:cover !important;
}
.square-image-orientation-product-grid
{
    width: 137px;
    height: 137px;
    object-fit:cover !important;
}
.portrait-image-orientation-product-grid
{
    width: 137px;
    height: 206px;
    object-fit:cover !important;
}
.isDisabled {
    color: black !important;
    cursor: not-allowed;
    opacity: 0.5;
    text-decoration: none;
    
  }
@media screen and (max-width: 1224px) { 
    .menu-wrapper {
        display: none;
    }
    .mobile-menu {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
    }
    .menu-mobile-wrapper {
        display: block;
        position: absolute;
        right: 30px;
        top: 20px;
    }
    .header { padding: 35px 20px;}
    .site-logo {
        width: 55px;
    }
    .site-logo-title {
        margin-left: 48px;
        font-size: 18px;
    }
    .site-by-name {
        margin-left: 48px;
        font-size: 12px;
    }
    .mobile-menu > .menu {
        float: left;
        padding-left: 0px;
    }
    .mobile-menu > .menu > li{
        float: left;
        width: 100%;
    }
    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        background-color: ${constants.MENUCOLOR};
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
      }
      
      .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #FFFF;
        display: block;
        transition: 0.3s;
      }
      
      .sidenav a:hover {
        color: #f1f1f1;
      }
      
      .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
      }
}

@media (max-width: 992px){
    .splash-div-col{
        display: flex;
        flex-direction: column;
        bottom:40px;
        height:auto;
    }
}
@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}


.characters-thumb{
    display:flex;
    font-size:14px;
    padding-bottom:6%;
    justify-content:space-between;
}

@media screen and (max-width: 767px){
    .header{
        z-index:99999;
    }
    .sidenav{
        z-index:999999;
    }
    .middle-content{
        display:block;
    }
    ul.characters{
        padding-top: 4% !important;
    }
    .characters-thumb{
        display:flex;
        padding-bottom: 4%;
    }
    .sidebar{
        flex: 0 0 100% !important;
        max-width: 100% !important;
        width: 100% !important;
        position: relative;
        margin-bottom: 0px;
        padding-bottom: 0px;
    }
    .layout-content{
        width: 100% !important;
        margin-left:0px;
        margin-top: 0px;
        border-right: 1px solid lightgrey;
        border-left: 1px solid lightgrey;
        height: 850px;
    }
    .splash-div-col{
        position: relative;
        width: 100%;
        height: 170px;
        border:none;
        flex-wrap: wrap;
        bottom: auto;
        top: 0px;
    }
    .splash-div-col:before {
        content: "";
        position: absolute;
        top: -1px;
        height: 1px;
        width: calc(100% + 34px);
        background: lightgrey;
        left: 0px;
    }
    .splash-div-col >div{
        width: 57%;
    }
    .title-bar{
        width:93%;
    }
    .dispable-link
    {
        pointer-events:none; 
        opacity:0.6;           
    }
}

`;
