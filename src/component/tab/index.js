// import React from "react";
// import { Tabs } from 'antd';
// import RegulerButton from '../button/index.js';
// import HomeScreen from "../../views/homeScreen/index";
// import GlobalScreen from "../../views/globalSettingScreen/index";

// import 'antd/dist/antd.css';
// import ImageBanner from "../../views/homeScreen/imageBanner/index.js";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useHistory,
//   useLocation
// } from "react-router-dom";
// import RotatingImageSlider from "../../views/homeScreen/rotatingImageSlider/index.js";
// import { GlobalScreenRoute, HomeScreenRoute } from "../../routes/index.js";
// import { BackNavigation } from "../../views/backNavigation/index.js";
// import { Layout } from 'antd';
// import * as css from "./style";
// // import {
// //   BrowserRouter as Router,
// //   Redirect,
// //   Route,
// // } from "react-router-dom";
// const TabPane = Tabs.TabPane
// const { Header, Footer, Sider, Content } = Layout
// export default function Tab(props) {
//   const { home, global } = props;
//   const history = useHistory()
//   const operations = <RegulerButton className="primary-button" text='PUBLISH' type="primary" />;
//   const onClickTab = (e) => {
//     if (e == 2) {
//       history.push('/globalsettings')
//     }
//     else {
//       history.push('/homesettings');
//     }
//   }
//   return (

//     <css.TabWrapper >
//       <Router history={Router}>
//         <Tabs type="card" tabBarExtraContent={operations} activeKey={window.location.pathname == '/globalsettings' ? "2" : "1"} onChange={(e) => { onClickTab(e) }} >
//           <TabPane tab="Home Screen Settings" key="1" className="tab-container" style={{ width: '100%' }}>
//             <div className="container" >
//               <div className="home">
//                 <HomeScreenRoute />
//               </div>
//               <div className="preview">

//               </div>
//             </div>
//           </TabPane>
//           <TabPane tab="Global Settings" key="2" className="tab-container" style={{ width: '100%' }}>
//             <div className="container" >
//               <div className="home">
//                 <GlobalScreenRoute />
//               </div>
//               <div className="preview">

//               </div>

//             </div>
//           </TabPane>
//         </Tabs>
//       </Router>
//     </css.TabWrapper>
//   )
// }

