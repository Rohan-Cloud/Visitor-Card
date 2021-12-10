// import React, { useEffect, useState, useContext } from "react";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { SettingOutlined, SettingFilled, EyeOutlined, MenuOutlined } from '@ant-design/icons';

// import axios from '../../routes/axios';
// import * as constants from "../../views/constantParameter";
// import { Context } from "../../component/layout/context";
// import {
//   useHistory,
// } from "react-router-dom";
// import { Tooltip } from "antd";
// import ToggleButton from "../toggleButton";
// import * as css from "./style";

// function DragableList(props) {
//   const [constextState, dispatch] = useContext(Context);
//   const { list, type, page } = props
//   const history = useHistory();
//   const [characters, updateCharacters] = useState(list);
//   const ClickHandler = (index, e, menuId) => {
    
//     let visibleStatus = 0;
//     if (e == true) {
//       visibleStatus = 1
//     }
//     else {
//       visibleStatus = 0
//     }
//     // if (e.currentTarget.classList[2] == "inactive_icon" || e.currentTarget.classList[2] == "") {
//     //   document.getElementsByClassName("inactive_icon").className = "custom_icon"
//     //   visibleStatus = 1
//     // }
//     // else {
//     //   document.getElementsByClassName("custom_icon").className = "inactive_icon"
//     //   visibleStatus = 0
//     // }
//     const items = [
//       ...characters.slice(0, index),
//       { ...characters[index], status: characters[index].status == 'enable' ? 'disable' : 'enable' },
//       ...characters.slice(index + 1),
//     ]

//     updateCharacters(items);
//     visibleApiCall(menuId, visibleStatus)
//   }

//   function handleOnDragEnd(result) {

//     if (!result.destination) return;
//     const items = Array.from(characters);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
//     let orderArray = [];
//     if (page == 'global') {
//       items.map((item) => {
//         orderArray.push(item.navigation_menu_id);
//       })
//     }
//     else {
//       items.map((item) => {
//         orderArray.push(item.home_settings_id);
//       })
//     }
//     updateCharacters(items);
//     orderApiCall(orderArray)
//   }
//   const visibleApiCall = (id, status) => {

//     if (page == 'global') {
//       let formData = new FormData()
//       formData.append('navigation_menu_id', id);
//       formData.append('status', status);
//       axios({
//         method: "POST",
//         url: constants.URL + "/client-navigation-list/update",
//         data: formData
//       })
//         .then(function (response) {

//         })
//         .catch(function (response) {

//         });
//     }
//     else {
//       dispatch({ type: 'LOAD', payload: true })
//       let formData = new FormData()
//       formData.append('home_settings_id', id);
//       formData.append('status', status);
//       axios({
//         method: "POST",
//         url: constants.URL + "/client-home-settings/update",
//         data: formData
//       })
//         .then(function (response) {
//           dispatch({ type: 'NAVIGATION_LIST_HOME', payload: response.data.data })
//           dispatch({ type: 'LOAD', payload: false })
//         })
//     }
//   }
//   const orderApiCall = (array) => {
//     if (page == 'global') {
//       let formData = new FormData()
//       formData.append('navigation_order', array)
//       axios({
//         method: "POST",
//         url: constants.URL + "/client-navigation-list",
//         data: formData
//       })
//         .then(function (response) {

//         })
//     }
//     else {
//       dispatch({ type: 'LOAD', payload: true })
//       let formData = new FormData()
//       formData.append('navigation_order', array)
//       axios({
//         method: "POST",
//         url: constants.URL + "/client-home-settings",
//         data: formData
//       })
//         .then(function (response) {
//           dispatch({ type: 'NAVIGATION_LIST_HOME', payload: response.data.data })
//           dispatch({ type: 'LOAD', payload: false })
//         })
//     }
//   }
//   const onclicksetting = (name) => {
//     switch (name) {
//       case 'Image Banner':
//         history.push(constants.BASE_URL + '/builder/imagebanner')
//         break;
//       case 'Rotating Image Slider':
//         history.push(constants.BASE_URL + '/builder/rotatingimage')
//         break;
//       case 'Collections Slider':
//         history.push(constants.BASE_URL + '/builder/collectionslider')
//         break;
//       case 'Products Grid':
//         history.push(constants.BASE_URL + '/builder/productgrid')
//         break;
//       case 'Products Slider':
//         history.push(constants.BASE_URL + '/builder/productslider')
//         break;
//       case 'Conversion/Announcement Bar':
//         history.push(constants.BASE_URL + '/builder/announcement')
//         break;
//       default:
//         break;
//     }
//   }


//   return (
//     <css.DraggableWrapper>
//       {
//         type == "navigation" ?
//           <DragDropContext onDragEnd={handleOnDragEnd}>
//             <Droppable droppableId="characters">
//               {(provided) => (
//                 <ul className="characters" style={{ listStyle: 'none', paddingLeft: '1%', paddingTop: '7.5%' }} {...provided.droppableProps} ref={provided.innerRef}>
//                   {page == "global" ?
//                     characters && characters.map(({ id, navigation_order, navigation_name, navigation_menu_id, status }, index) => {
//                       return (
//                         <Draggable key={navigation_menu_id} draggableId={navigation_menu_id.toString()} index={index}>
//                           {(provided) => (
//                             <li ref={provided.innerRef} {...provided.draggableProps}>
//                               <div className="characters-thumb">
//                                 <div style={{ display: 'flex', width: '90%' }}>
//                                   <Tooltip title="Drag to Move">
//                                     <MenuOutlined className="custom-icon" style={{ marginRight: '2%', cursor: 'move' }}  {...provided.dragHandleProps} />
//                                   </Tooltip>
//                                   {/* <DragOutlined className="custom-icon" style={{ marginRight: '2%' }}  {...provided.dragHandleProps} /> */}
//                                   {/* <Tooltip title={status == 'enable' ? "Click to Disable" : 'Click to Enable'}>
//                                   <EyeOutlined className={status == 'enable' ? "custom-icon" : "inactive_icon"} id="menuItem" style={{ marginRight: '2%' }} onClick={(e) => { ClickHandler(index, e, navigation_menu_id) }} />
//                                 </Tooltip> */}
//                                   {page == "global" ? "" : <SettingOutlined id={navigation_menu_id} name={navigation_name} className="custom-icon" style={{ marginRight: '2%' }} onClick={() => { onclicksetting(navigation_name) }}></SettingOutlined>}
//                                   <p onClick={() => { onclicksetting(navigation_name) }} style={{ cursor: 'pointer', width: '400px', marginTop: '-2px' }}>{navigation_name}</p>
//                                 </div>

//                                 <div>
//                                   <Tooltip title={status == 'enable' ? "Click to Disable" : 'Click to Enable'}>
//                                     <ToggleButton value={status == 'enable' ? true : false} id="menuItem" style={{ marginRight: '3%' }} onChangeHandler={(e) => { ClickHandler(index, e, navigation_menu_id) }} />
//                                   </Tooltip>
//                                 </div>
//                               </div>
//                             </li>
//                           )}
//                         </Draggable>
//                       );
//                     }) : characters && characters.map(({ id, navigation_order, home_settings_name, home_settings_id, status }, index) => {
//                       return (
//                         <Draggable key={home_settings_id} draggableId={home_settings_id.toString()} index={index}>
//                           {(provided) => (
//                             <li ref={provided.innerRef} {...provided.draggableProps}>
//                               <div className="characters-thumb">

//                                 <div style={{ display: 'flex', width: '90%' }}>
//                                   <Tooltip title="Drag to Move">
//                                     <MenuOutlined className="custom-icon" style={{ marginRight: '2%', cursor: 'move' }}  {...provided.dragHandleProps} />
//                                   </Tooltip>
//                                   {/* <DragOutlined className="custom-icon" style={{ marginRight: '2%' }}  {...provided.dragHandleProps} /> */}

//                                   {page == "global" ? "" : <Tooltip title="Configure"><div className="setting-div"> <SettingOutlined id={home_settings_id} name={home_settings_name} className="custom-icon" style={{ marginRight: '5%', marginTop: '-5px' }} onClick={() => { onclicksetting(home_settings_name) }}></SettingOutlined></div></Tooltip>}
//                                   <p onClick={() => { onclicksetting(home_settings_name) }} style={{ cursor: 'pointer', width: '400px', marginTop: '-2px' }}>{home_settings_name}</p>
//                                 </div>
//                                 <div>
//                                   <Tooltip title={status == 'enable' ? "Click to Disable" : 'Click to Enable'}>
//                                     <ToggleButton value={status == 'enable' ? true : false} id="menuItem" style={{ marginRight: '3%' }} onChangeHandler={(e) => { ClickHandler(index, e, home_settings_id) }} />
//                                   </Tooltip>
//                                 </div>

//                               </div>
//                             </li>
//                           )}
//                         </Draggable>
//                       );
//                     })}
//                   {provided.placeholder}
//                 </ul>
//               )}
//             </Droppable>

//           </DragDropContext> : ''}
//     </css.DraggableWrapper>

//   );
// };
// export default DragableList
