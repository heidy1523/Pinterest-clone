import React, { useState } from 'react';
import './main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUpload} from '@fortawesome/free-solid-svg-icons'; 
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'; 

const PinCard = (props) => {
  const [inHover, setHover] = useState(false);
  return (
    <div 
     onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
  
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}>

      {inHover &&
      <div className = 'app'>
        <button className='hh' style={{ ..._stylesPinCard.btn1}}>Guardar</button>
 
        <FontAwesomeIcon className='tt' style={{..._stylesPinCard.icono, ..._stylesPinCard[props.tam], ..._stylesPinCard.ml1}} icon={faUpload}/>
        <FontAwesomeIcon className='tt' style={{..._stylesPinCard.icono, ..._stylesPinCard[props.tam], ..._stylesPinCard.ml2}} icon={faEllipsisH}/>
      </div>
      }

    <img className={  `${inHover ? "imgenHover" : ""} `} src= {props.image} alt="no se puede cargar la imagen " style={{..._stylesPinCard.image}}/>
    </div>
    
  );
};

const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'black',
    display:'flex',
    
    
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
  image:{
    width:'100%',
    height:'100%',
     borderRadius:'16px',
     cursor:'pointer',
    
  },
  btn1:{
    position: 'absolute',
    margin:'15px 0 0 8em',
    display: 'flex',
    height:'48px',
    width: '95px',
    borderRadius:'50px',
    padding: '16px 16px ', 
    color:'white',
    fontSize: '16px',
    fontWeight: '700',
    textAlign:'center',
    border:'0px',
  },
  icono:{
  position: 'absolute',
  boxSizing:'border-box',
  display: 'flex',
  marginRight: '1px',
  borderRadius:'50px',
  color:'black',
  height: '48px',
  width: '48px',
  float: 'right',
  overflow:'hidden',
  padding: '0px 16px ',
 

  },
  
  mtLarge:{
marginTop:'18em',
  },
  mtMedio:{
marginTop:'12em',
  },
  mtPeque:{
marginTop:'8.5em',
  },
  ml1:{
marginLeft:'8.8em',
  },
  ml2:{
marginLeft:'6em',
  },
 
  }


export default PinCard;
