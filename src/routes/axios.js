import React from 'react'
import axios, { AxiosResponse } from 'axios'

/**
 * api Request base url
 */
const mainAxios = axios.create({
    baseURL: ""
})
/**
 * Bind request inrterceptore
 */
mainAxios.interceptors.request.use(function (config) {
    
    let headers
    if(config.url && config.url.match('shopify.com'))
    {
         headers = {
            'Content-Type': 'application/json ',
           //'X-Shopify-Storefront-Access-Token': '16309e92deebfc425a1d8e66b5b38c0c',
           'X-Shopify-Storefront-Access-Token': sessionStorage.getItem('st_front_token'),
        } 
    }
    else{
         headers = {
            'Content-Type': 'application/json ',
            'Api_token': sessionStorage.getItem('api_token'),
            'store_id': sessionStorage.getItem('store_id'),
            //'Api_token': 'eyJpdiI6IjgzclIvTCttU0pMdEJzODhkSE0zRkE9PSIsInZhbHVlIjoiOEdOTTZPUmtGMG5acVdiUWI5RlBNdz09IiwibWFjIjoiZmZiMWYwN2Y2MDk2Y2MzYWI5YTI0MzhhOTVmMTk4Nzc3YzhjMzQ1MjFkMjFkMGE3ZjkzNTAwYTk4ZTM5MDAwNiJ9  ',
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    }
    
    config.headers = headers;
    return config;
});
/**
 * Request response interceptor
 */
mainAxios.interceptors.response.use(function (res) {

    // if (res.data.status == false && res.data.message != "Data Not Find") {
    // }
    // else {
    //     if (res.data.message != "Data Find Successfully" && res.data.message != "Data Not Find") {
    //     }
    // }
    return res
})
export default mainAxios