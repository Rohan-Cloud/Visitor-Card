import { React, useContext, useEffect, useState } from "react";
import { Row, Col, Input, Button, Carousel } from 'antd';

import { Context } from "./context";
import * as constants from "../../views/constantParameter";
import axios from "../../routes/axios";
import Slider from "react-slick";

import CurrencyCode from "../../views/currencyCode.json";

export default function MobilePreview() {

  const [date, setDate] = useState(new Date())
  const [constextState, dispatch] = useContext(Context);
  const [imageOrientation, setImageOrientation] = useState()
  const [state, setState] = useState({ image_banner: [], rotating_image: [], collection_slider: [], product_slider: [], announcement_bar: [], navigationList: [], navigationList_logo: [] })
  const [list, setList] = useState({ collectionList: [], productList: [] })
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    itemsToShow: 3,
    slidesToShow: 1,
    autoplay: false
  };
  const productSlidersettings = {
    dots: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    infinite: false,
    swipe: true
  };

  const defaultListCollectionSlider = [{
    'collection_slider_id': 0,
    'imgUrl': constants.PLACEHOLDER_IMAGE,
    'isOverlay': true,
    'isText': true,
    'custom_title': 'Dress',
    'collection_name': '',
    'platform_collection_id': '',
    'optional_title': ''
  }, {
    'collection_slider_id': 0,
    'imgUrl': constants.PLACEHOLDER_IMAGE,
    'isOverlay': true,
    'isText': true,
    'custom_title': 'Shoes',
    'collection_name': '',
    'platform_collection_id': '',
    'optional_title': ''
  },
  {
    'collection_slider_id': 0,
    'imgUrl': constants.PLACEHOLDER_IMAGE,
    'isOverlay': true,
    'isText': true,
    'custom_title': 'Pants',
    'collection_name': '',
    'platform_collection_id': '',
    'optional_title': ''
  }]
  const defaultListImageBanner =
  {
    image: [{ url: constants.PLACEHOLDER_IMAGE }],
    click_redirect: '0',
    select_list_id: '0'
  }
  const defaultListRotatingImageBanner =
    [
      {
        image: [{ url: constants.PLACEHOLDER_IMAGE }],
        click_redirect: '0',
        select_list_id: '0'
      },
      {
        image: [{ url: constants.PLACEHOLDER_IMAGE }],
        click_redirect: '0',
        select_list_id: '0'
      },
    ]
  const getImageBanner = () => {
    axios({
      method: "POST",
      url: constants.URL + "/client-image-banner",
    })
      .then(function (response) {
        if (response.data.code != 0) {
          const list = {
            image: [{ url: response.data.data.banner_image_url != null ? constants.IMAGE_URL + constants.IBFOLDER + response.data.data.banner_image_url : '' }],
            click_redirect: response.data.data.on_click_redirection,
            select_list_id: response.data.data.on_click_redirection == '0' ? response.data.data.platform_collection_id : response.data.data.platform_product_id
          }
          setState((prevState) => ({ ...prevState, image_banner: list }))
          dispatch(constextState.image_banner_context.posts = list)
        }
        else {
          setState((prevState) => ({ ...prevState, image_banner: defaultListImageBanner }))
          dispatch(constextState.image_banner_context.posts = defaultListImageBanner)
        }
      })
  }
  const getRotatingImage = (collection, product) => {

    let cardItem = []
    axios({
      method: "POST",
      url: constants.URL + "/client-rotate-slider",
    })
      .then(function (response) {
        if (response.data.data && response.data.data.length != 0) {
          response.data.data.map((item, index) => {
            let image = constants.PLACEHOLDER_IMAGE
            if (item.on_click_redirection == '0') {
              image = returnCollectionImage(item.platform_collection_id, collection)
            }
            else if (item.on_click_redirection == '1') {
              image = returnProductImage(item.platform_product_id, product)
            }
            cardItem.push({
              rotate_slider_id: item.rotate_slider_id,
              image: [{ url: item.image_url == null ? image : constants.IMAGE_URL + constants.ROT_SLI_FOLDER + item.image_url }],
              onClickRedirect: item.on_click_redirection,
              select_list_id: item.on_click_redirection == '0' ? item.platform_collection_id : item.platform_product_id
            })

          })
          setState((prevState) => ({ ...prevState, rotating_image: cardItem }))
          dispatch(constextState.rotating_image_banner_context.posts = cardItem)
        }
        else {
          setState((prevState) => ({ ...prevState, rotating_image: defaultListRotatingImageBanner }))
          dispatch(constextState.rotating_image_banner_context.posts = defaultListRotatingImageBanner)
        }
      })
  }
  const getProductSliders = () => {

    axios({
      method: "POST",
      url: constants.URL + "/client-product-slider/update",
    })
      .then(function (response) {
        if (response.data.data && response.data.data.length != 0) {
          getProductSliderData(response.data.data[0].platform_collection_id);
          dispatch({ type: 'PRODUCT_SLIDER_FORM', payload: response.data.data[0] })
        }
        else {
          getProductSliderId()
        }

      })
  }
  const getProductSliderId = () => {
    axios
      .post(constants.URL + '/collections/list', {
        query: constants.COLLECTIONLIST, store_id: sessionStorage.getItem('store_id')
      })
      .then(res => {
        if (res.data.code == 1) {
          if (res.data.data.collections.edges[0] != undefined) {
            let formData = new FormData()
            // change collection list 
            formData.append('platform_collection_id', res.data.data.collections.edges[0].node.id);
            formData.append('type', 'add');
            axios({
              method: "post",
              url: constants.URL + '/client-product-slider/update',
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
            })
              .then(function (response) {
                getProductSliderData(res.data.data.collections.edges[0].node.id);
              })
          }
        }
      })
      .catch(error => {
        console.error(error)
      })


  }
  const getProductSliderData = (collectionId, name) => {
    axios
      .post(constants.URL + '/collections/list', {
        query: constants.GET_COLLECTION_DETAIL_PRODUCT_SLIDER(collectionId), store_id: sessionStorage.getItem('store_id')
      })
      .then(res => {
        if (res.data.code == 1) {
          dispatch({ type: 'PRODUCT_SLIDER', payload: res.data.data });
        }

      })
      .catch(error => {
        console.error(error)
      })
  }
  const getProductGrid = () => {

    axios({
      method: "POST",
      url: constants.URL + "/client-product-grid/update",
    })
      .then(function (response) {
        if (response.data.data && response.data.data.length != 0) {
          getProductGridData(response.data.data[0].platform_collection_id);
          dispatch({ type: 'PRODUCT_GRID_FORM', payload: response.data.data[0] })
        }
        else {
          getProductGridId()
        }
      })
  }
  const getProductGridId = () => {
    axios
      .post(constants.URL + '/collections/list', {
        query: constants.COLLECTIONLIST, store_id: sessionStorage.getItem('store_id')
      })
      .then(res => {
        if (res.data.code == 1) {
          if (res.data.data && res.data.data.collections.edges[0] != undefined) {
            let formData = new FormData()
            formData.append('platform_collection_id', res.data.data.collections.edges[0].node.id);
            formData.append('type', 'add');
            axios({
              method: "post",
              url: constants.URL + '/client-product-grid/update',
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
            })
              .then(function (response) {
                getProductGridData(res.data.data.collections.edges[0].node.id);
              })
          }
        }
      })
      .catch(error => {
        console.error(error)
      })
  }
  const getProductGridData = (collectionId) => {
    axios
      .post(constants.URL + '/collections/list', {
        query: constants.GET_COLLECTION_DETAIL(collectionId), store_id: sessionStorage.getItem('store_id')
      })
      .then(res => {
        if (res.data.code == 1) {
          dispatch({ type: 'PRODUCT_GRID', payload: res.data.data });
        }

      })
      .catch(error => {
        console.error(error)
      })
  }
  const returnCollectionImage = (id, col) => {
    let name = ''

    col.map((item) => {
      if (item.node.id == id) {
        name = item.node.images && item.node.images.edges[0].node.originalSrc != null
          ? item.node.images && item.node.images.edges[0].node.originalSrc :
          item.node.image && item.node.image.originalSrc ? item.node.image.originalSrc : item.node.image
      }
    })

    return name
  }
  const collectionApi = async () => {
    const res = await axios
      .post(constants.URL + '/collections/list', {
        query: constants.COLLECTIONLIST, store_id: sessionStorage.getItem('store_id')
      })
      .then(res => {
        if (res.data.code == 1) { return res.data.data.collections.edges }
      })
      .catch(error => {
        console.error(error);
      })
    return res
  }
  const productApi = async () => {
    const res = await axios
      .post(constants.URL + '/collections/list', {
        query: constants.PRODUCTLIST, store_id: sessionStorage.getItem('store_id')
      })
      .then(res => {
        if (res.data.code == 1) {
          return res.data.data.products.edges
        }
      })
      .catch(error => {
        console.error(error);
      })
    return res
  }
  const returnCollectionName = (id, col) => {
    let name = ''
    col && col.map((item) => {
      if (item.node.id == id) {
        name = item.node.title
      }
    })
    return name
  }
  const returnProductImage = (id, col) => {
    let name = ''
    col && col.map((item) => {
      if (item.node.id == id) {
        name = item.node.images && item.node.images.edges[0].node.originalSrc != null ? item.node.images && item.node.images.edges[0].node.originalSrc : item.node.image.originalSrc
      }
    })
    return name
  }
  const collectionSliderList = async (col) => {
    let resultImageList = []
    axios({
      method: "post",
      url: constants.URL + '/client-collection-slider',
    })
      .then(function (response) {
        if (response.data.data && response.data.data.length > 0) {
          response.data.data.map((item) => {
            let name = returnCollectionName(item.platform_collection_id, col,)
            let image = returnCollectionImage(item.platform_collection_id, col,)
            resultImageList.push({
              'collection_slider_id': item.collection_slider_id,
              'imgUrl': item.custom_image_url != null ? constants.IMAGE_URL + constants.COL_SLI_FOLDER + item.custom_image_url : image,
              'isOverlay': item.is_show_overlay == '1' ? true : false,
              'isText': item.is_show_custom_title == '1' ? true : false,
              'custom_title': item.custom_title,
              'collection_name': name,
              'platform_collection_id': item.platform_collection_id,
              'optional_title': item.collection_title
            })
          })
          setState((prevState) => ({ ...prevState, collection_slider: resultImageList }))
          dispatch({ type: "COLLECTION_SLIDER", payload: resultImageList })
        }
        else {
          dynamicCollectionInsert(col)
        }
      })
  }
  const dynamicCollectionInsert = async (col) => {
    let colArray = []
    let resultImageList = []
    col && col.map((item, index) => {
      if (index <= 9) {
        var details = { 'collection_title': null, 'custom_title': null, 'platform_collection_id': item.node.id, 'is_show_overlay': '1', 'is_show_custom_title': '1' }
        colArray.push(details)
      }
    })
    axios({
      method: "post",
      url: constants.URL + "/client-collection-slider/add",
      data: { data: JSON.stringify(colArray) },

    })
      .then(function (response) {
        if (response.data.data && response.data.data.length > 0) {
          response.data.data.map((item) => {
            let name = returnCollectionName(item.platform_collection_id, col,)
            let image = returnCollectionImage(item.platform_collection_id, col,)
            resultImageList.push({
              'collection_slider_id': item.collection_slider_id,
              'imgUrl': item.custom_image_url != null ? constants.IMAGE_URL + constants.COL_SLI_FOLDER + item.custom_image_url : image,
              'isOverlay': item.is_show_overlay == '1' ? true : false,
              'isText': item.is_show_custom_title == '1' ? true : false,
              'custom_title': item.custom_title,
              'collection_name': name,
              'platform_collection_id': item.platform_collection_id,
              'optional_title': item.collection_title
            })
          })
          setState((prevState) => ({ ...prevState, collection_slider: resultImageList }))
          dispatch({ type: "COLLECTION_SLIDER", payload: resultImageList })

        }
        else {
          setState((prevState) => ({ ...prevState, collection_slider: defaultListCollectionSlider }))
          dispatch({ type: "COLLECTION_SLIDER", payload: defaultListCollectionSlider })
        }
      })

    axios
      .post(constants.URL + '/collections/list', {
        query: constants.PRODUCTLIST, store_id: sessionStorage.getItem('store_id')
      })
      .then(res => {
        if (res.data.code == 1) {
          let formData = new FormData()
          formData.append("type", "image_orientation");
          if ((res.data.data.products.edges[0] && res.data.data.products.edges[0].node.images.edges[0].node.width) <= (res.data.data.products.edges[0] && res.data.data.products.edges[0].node.images.edges[0].node.height)) {
            setImageOrientation('portrait')
            formData.append('image_orientation', '1')
          }
          else {
            setImageOrientation('square')
            formData.append('image_orientation', '0')
          }
          axios({
            method: "POST",
            url: constants.URL + "/client-global-settings/update",
            data: formData
          })
            .then(function (response) {
            })
        }
      })


  }
  const getAnnouncementBar = () => {
    let cardItem = []
    axios({
      method: "POST",
      url: constants.URL + "/client-announcement/update",
    })
      .then(function (response) {

        if (response.data.data && response.data.data.length != 0) {
          cardItem = {
            announce_text: response.data.data[0].announce_text
            , background_color: response.data.data[0].background_color,
            text_color: response.data.data[0].text_color,
            from_date: response.data.data[0].from_date,
            to_date: response.data.data[0].to_date
          }
          setState({ ...state, announcement_bar: cardItem }, dispatch(constextState.announcement_bar_context.posts = cardItem))
        }
      })
  }
  const navigationList = () => {
    axios({
      method: "POST",
      url: constants.URL + "/client-home-settings",
    })
      .then(function (response) {
        setState((prevState) => ({ ...prevState, navigationList: response.data.data }));
        dispatch({ type: "NAVIGATION_LIST_HOME", payload: response.data.data })
      })
  }
  const navigationList_home_logo = () => {
    axios({
      method: "POST",
      url: constants.URL + "/client-global-settings",
    })
      .then(function (response) {
        if (response.data.code == 1 && response.data.data != null) {
          let list = { 'imgUrl': [], 'imageOrientation': '' }
          list.imgUrl = [{ url: response.data.data.brand_logo_url == null ? constants.PLACEHOLDER_IMAGE : constants.IMAGE_URL + constants.BRANDFOLDER + response.data.data.brand_logo_url }]
          list.imageOrientation = response.data.data.app_layout_type == "Square" ? 'square' : 'portrait'
          setState((prevState) => ({ ...prevState, navigationList_logo: list }));
          dispatch({ type: "NAVIGATION_LIST_HOME_LOGO", payload: list })
          dispatch({ type: "LOAD", payload: false })
        }

      })
  }
  const collectionLayout = () => {
    return <Context.Consumer >
      {
        (item) => {
          return item[0].collection_slider_context.posts.length != 0 ? <Row >
            <Col span={24}>
              <div className="m-slider" id="collection">
                {/* <span className="m-slider-label">
                            {<Context.Consumer >
                                {(item) => {
                                    return <span className="m-slider-label">{item[0].collection_slider_context.posts.length != 0 ? item[0].collection_slider_context.posts[0].custom_title : ''}</span>
                                }}
                            </Context.Consumer>}
                        </span> */}
                {<Context.Consumer >

                  {(item) => {
                    return item[0].collection_slider_context.posts.length != 0 ? <Slider slidesToShow={2.5} infinite={false} nextArrow={false}  >{item[0].collection_slider_context && item[0].collection_slider_context.posts.map((item1, index) => {
                      return (
                        <div className="collection-slider-tag" key={'col_sli_' + index}>
                          <img className="m-banner" src={item1.imgUrl} style={{ filter: item1.isOverlay ? 'brightness(0.6)' : '' }} />
                          <div className="istext-collection" style={{ display: item1.isText ? "" : "none" }} >{(item1.custom_title == "" || item1.custom_title == null) ? item1.collection_name : item1.custom_title}</div>
                        </div>)
                    })}</Slider> : ''
                  }
                  }
                </Context.Consumer>}
              </div>
            </Col>
          </Row> : ''
        }}</Context.Consumer>

  }
  const rotatingImageBannerLayout = () => {
    return <Context.Consumer >
      {
        (item) => {
          return item[0].rotating_image_banner_context.posts.length != 0 ?
            <Row>
              <Col span={24} className="m-rotate-slider">
                <div className="m-slider" >
                  {<Context.Consumer >
                    {(item) => {

                      return <Slider {...settings}>
                        {

                          item[0].rotating_image_banner_context && item[0].rotating_image_banner_context.posts.map((item1, index) => {
                            return (<div className="slider-tag rotate-slider" style={{ color: 'black' }} key={'rot_img_' + index} >
                              <img className="m-banner" src={item1.image[0].url} style={{ height: '100%' }} />
                            </div>)
                          })
                        }
                      </Slider>
                    }}
                  </Context.Consumer>}
                </div>
              </Col>
            </Row> : null
        }}</Context.Consumer>
  }
  const productSliderLayout = () => {

    return <Context.Consumer >
      {
        (item) => {
          return item[0].product_slider_context.posts && item[0].product_slider_context.posts.length != 0 ?
            <Row>
              <Col span={24}>
                <div className="m-slider">
                  <span className="m-slider-label">
                    {<Context.Consumer >
                      {(item) => {
                        return <span className="m-slider-label">
                          {item[0].product_slider_context.posts && item[0].product_slider_context.posts.node && item[0].product_slider_context.posts.length != 0 ?
                            (item[0].product_slider_form_context.posts.product_title == null ||
                              item[0].product_slider_form_context.posts.product_title == "" || item[0].product_slider_form_context.posts.product_title == "null") ?
                              item[0].product_slider_context.posts.node.title :
                              item[0].product_slider_form_context.posts.product_title : ''}</span>
                      }}
                    </Context.Consumer>}
                  </span>
                  {<Context.Consumer >
                    {(item) => {
                      return item[0].product_slider_context.posts && item[0].product_slider_context.posts.length != 0 ? <span className="m-slider-right"><a href="#">View All</a></span> : ''
                    }}
                  </Context.Consumer>}

                  {<Context.Consumer >
                    {(item) => {
                      return <Slider className="m-product-slider" {...productSlidersettings} >
                        {
                          item[0].product_slider_context.posts && item[0].product_slider_context.posts.length != 0 && item[0].product_slider_context.posts.node && item[0].product_slider_context.posts.node.products.edges.map((r, i) => {
                            return (
                              <Col span={24}>
                                <div className="m-slider " key={'pro-sli_' + i}>
                                  <div className="slider-tag slider-img ">
                                    <img className={item[0].navigation_list_home_logo_context.posts && item[0].navigation_list_home_logo_context.posts.imageOrientation == "square" ? "square-image-orientation-product-slider product-slider" : "portrait-image-orientation-product-slider product-slider"} src={r.node.variants.edges[0] && r.node.images.edges[0].node.transformedSrc} key={'pro_sli_img_' + i} />
                                    <p className="item-desc">{r.node.title}</p>
                                    <p className="item-price">{getCurrencySymbol(r.node.priceRange.minVariantPrice.currencyCode) + r.node.priceRange.minVariantPrice.amount}</p>
                                  </div>
                                </div>
                              </Col>
                            )
                          })
                        }
                        {item[0].product_slider_context.posts && item[0].product_slider_context.posts.length != 0 ?
                          <div className="slider-tag slider-img " style={{ marginLeft: '33% !important', marginTop: '64% !important' }}>

                            <p className="item-price slider-viewmore">View All </p>
                          </div> : ''
                        }

                      </Slider>
                    }}
                  </Context.Consumer>}
                </div>
              </Col>
            </Row> : null
        }}</Context.Consumer>
  }
  const announcementBarLayout = () => {
    return <Context.Consumer >
      {
        (item) => {
          return item[0].announcement_bar_context.posts.announce_text != null ? <Row>
            <Col span={24}>
              <div className="m-slider" id="collection">
                {<Context.Consumer >
                  {(item) => {
                    return <div className="announcement-bar" style={{ backgroundColor: item[0].announcement_bar_context.posts.background_color, color: item[0].announcement_bar_context.posts.text_color }} >{item[0].announcement_bar_context.posts.announce_text} </div>
                  }}
                </Context.Consumer>}
              </div>
            </Col>
          </Row> : null
        }}</Context.Consumer>

  }
  const productGridLayout = () => {
    return <div>
      <Row>
        <Col span={24}>
          <span className="m-slider-label">
            {<Context.Consumer >
              {(item) => {
                return <span className="m-slider-product-grid">
                  {(item[0].product_grid_context.posts && item[0].product_grid_context.posts.length != 0) ?
                    (item[0].product_grid_form_context.posts.product_title == null
                      || item[0].product_grid_form_context.posts.product_title == "" ||
                      item[0].product_grid_form_context.posts.product_title == "null") ?
                      item[0].product_grid_context.posts.node && item[0].product_grid_context.posts.node.title :
                      item[0].product_grid_form_context.posts.product_title : ''}</span>
              }}
            </Context.Consumer>}
          </span>
          {<Context.Consumer >
            {(item) => {
              return item[0].product_slider_context.posts && item[0].product_slider_context.posts.length != 0 ? <span className="m-slider-product-grid-right"><a style={{ color: 'black' }} href="#">View All</a></span> : ''
            }}
          </Context.Consumer>}
        </Col>
      </Row>

      <Row>
        <Context.Consumer >
          {
            (item) => {
              let abc = "";
              return (

                item[0].product_grid_context.posts && item[0].product_grid_context.posts.length != 0 && item[0].product_grid_context.posts.node && item[0].product_grid_context.posts.node.products.edges.map((r, i) => {
                  return (

                    <Col span={12}>

                      <div className="m-slider m-slider-grid product-grid" key={'pro_grid_' + i}>
                        <div className="slider-tag slider-tag-grid slider-img" >
                          <img className={item[0].navigation_list_home_logo_context.posts && item[0].navigation_list_home_logo_context.posts.imageOrientation == "square" ? "square-image-orientation-product-grid" : "portrait-image-orientation-product-grid"} src={r.node.images.edges[0] && r.node.images.edges[0].node.transformedSrc} />
                          <p className="item-desc">{r && r.node.title}</p>
                          <p className="item-price">{getCurrencySymbol(r.node.priceRange.minVariantPrice.currencyCode) + r.node.priceRange.minVariantPrice.amount}</p>
                        </div>
                      </div>
                    </Col>
                  )
                })
              )
            }}
        </Context.Consumer>
      </Row>
    </div>
  }
  const getCurrencySymbol = (e) => {
    return CurrencyCode[e].symbol
  }
  const imageBannerLayout = () => {
    return <Context.Consumer >
      {
        (item) => {

          return item[0].image_banner_context.posts.length != 0 ?
            <Row>
              <Col span={24}>
                {<Context.Consumer >
                  {(item) => {
                    return item[0].image_banner_context.posts.length != 0 ? <img className="m-banner img-banner-img" src={item[0].image_banner_context.posts.image[0].url} /> : ''
                  }}
                </Context.Consumer>}
              </Col>
            </Row> : null
        }
      }
    </Context.Consumer>

  }
  const lay = []

  useEffect(() => {

    const resCollection = collectionApi()
    const resProducts = productApi()
    setList((prevState) => ({ ...prevState, productList: resProducts, collectionList: resCollection }))
    Promise.all([resCollection, resProducts]).then((values) => {
      getRotatingImage(values[0], values[1]);
      collectionSliderList(values[0])
    })
    getImageBanner();
    getProductSliders();
    getProductGrid();
    getAnnouncementBar();
    navigationList();
    navigationList_home_logo();
  }, [])
  useEffect(() => {

    var timer = setInterval(() => { setDate(new Date()) }, 1000)
    return function cleanup() {
      clearInterval(timer)
    }

  })

  return (
    <div className="mobile-screen">

      <Row className="m-time">
        <Col span={24} style={{ fontSize: '14px', left: '28px', top: '-10px' }}>
          {date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', hour12: false })}

        </Col>
      </Row>
      <Row className="m-time">
        <Col span={24} style={{ fontSize: '14px', width: '10px', left: '10px', top: '15px' }}>

        </Col>
      </Row>
      <Row className="m-logo-fixed m-logo">
        <Col span={24}>
          {<Context.Consumer>
            {(item) => {

              return item[0].navigation_list_home_logo_context.posts.length != 0 ? <div>
                <img src={item[0].navigation_list_home_logo_context.posts.imgUrl[0].url} />
              </div> : ''

            }

            }
          </Context.Consumer>

          }

        </Col>
      </Row>
      <div className="mobile-container" id="container">
        {<Context.Consumer >
          {(item) => {

            item[0].navigation_list_home_context.posts && item[0].navigation_list_home_context.posts.map((item1, index) => {
              switch (item1.home_settings_name) {
                case 'Rotating Image Slider':
                  if (item1.status == 'enable')
                    lay.push(rotatingImageBannerLayout())
                  break;
                case 'Image Banner':
                  if (item1.status == 'enable')
                    lay.push(imageBannerLayout())
                  break;
                case 'Collections Slider':
                  if (item1.status == 'enable')
                    lay.push(collectionLayout())
                  break;
                case 'Conversion/Announcement Bar':
                  if (item1.status == 'enable')
                    lay.push(announcementBarLayout())
                  break;
                case "Products Slider":
                  if (item1.status == 'enable')
                    lay.push(productSliderLayout())
                  break;
                case 'Products Grid':
                  if (item1.status == 'enable')
                    lay.push(productGridLayout())
                  break;
              }
            })

          }}
        </Context.Consumer>}
        {<Context.Consumer>
          {(item) => {
            return item[0].load.isLoad ?
              <div className="loading-image-div" >
                <img className="loading-image" src={constants.LOGO_IMAGE} />
                <p className="saving-text">Updating</p>
              </div> : lay
          }
          }

        </Context.Consumer>

        }
      </div>

    </div >
  )
}

