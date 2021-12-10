import React, { useState, useRef, useEffect } from "react";
import reactCSS from 'reactcss'
import { ChromePicker  } from 'react-color';
import 'antd/dist/antd.css';

export default function ColorPicker(props) {
  let { title,defaultColor,className,onClose,screen } = props
  
  const [state, setState] = useState({
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
    hexa:defaultColor
  })
  
  useEffect(() => {  
      setState((prevState)=>({...prevState,hexa:defaultColor}))
  },[],[state])

  const styles = reactCSS({
    'default': {
      color: {
        width: '33px',
        height: '28px',
        borderRadius: '2px',
        background:state.hexa,
      },
      swatch: {
        padding: '5px',
        background:'#fff',
        display: 'inline-flex',
        cursor: 'pointer',
        width:'100%',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
        marginTop:  screen=="global"?'-309px':'',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });
  const handleClick = () => {
    setState({ ...state, displayColorPicker: true })
  };

  const handleClose = () => {
    setState({ ...state, displayColorPicker: false })
    
  };

  const handleChange = (color) => {
    setState({ ...state, hexa: color.hex })
    defaultColor=undefined
  };
  
  return (
    <div>
      <div style={styles.swatch} onClick={handleClick} > 
        <div  className={className} id={state.hexa} style={styles.color} />
        <div style={{paddingLeft:'5%',width:'96%',color:'black',fontSize:'12px'}}>{title}</div>
      </div>
      { state.displayColorPicker ? 
        <div className={className} style={styles.popover}>
          <div  style={styles.cover} onClick={handleClose} onClickCapture={onClose} />
          <ChromePicker   className={className}  color={state.hexa} disableAlpha={true} onChange={handleChange} />
          </div> : null}
    </div>

  )
}


