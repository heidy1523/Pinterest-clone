import React from 'react';
import './main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell,faComment} from '@fortawesome/free-solid-svg-icons'; 
import {faPinterest} from '@fortawesome/free-brands-svg-icons';
import {faUserCircle,faChevronCircleDown,faSearch} from '@fortawesome/free-solid-svg-icons'; 


const HeaderLayout = () => {
  return  <div
    style={{ ..._stiloHeader['pin'],}}>
    <FontAwesomeIcon className='rr' style={{..._stiloHeader.pinte}} icon={faPinterest}/>
    <button style={{..._stiloHeader.inicio}}>inicio</button>
    <button className='ff' style={{..._stiloHeader.btn}}>Hoy</button>
    
     <input className='btn' style= {{..._stiloHeader.search}} type="text" placeholder="Buscar" /> 
    <FontAwesomeIcon  style={{..._stiloHeader.lupa}} icon={faSearch}/>
    <FontAwesomeIcon className='qq' style={{..._stiloHeader.icono}} icon={faBell}/>
    <FontAwesomeIcon className='qq' style={{..._stiloHeader.icono}} icon={faComment}/>
    <FontAwesomeIcon className='qq' style={{..._stiloHeader.icono}} icon={faUserCircle}/>
    <FontAwesomeIcon className='qq' style={{..._stiloHeader.icono}} icon={faChevronCircleDown}/>

    </div>
};
const _stiloHeader={
pin: {
  display:'flex',
  margin:'10px 15px',
  paddig:'0',
  borderRadius: '40px',
  backgroundColor: 'white',

},
lupa:{
  position:'absolute',
  display: 'flex',
  margin:'25px 4px',
  color:'gray',
  left:'250px'

},
search:{
  display: 'flex',
  margin:'10px 5px',
  height: '48px',
  width: '500%',
  top: '0px',
  borderRadius:'50px',
  fontWeight:'bold',
  paddingLeft:'45px',
  border:'0px'

},
inicio:{
  backgroundColor:'black',
  margin:'10px 5px',
  display: 'flex',
  height:'48px',
  width: '80px',
  borderRadius:'50px',
  padding: '16px 16px ',
  color:'white',
  fontSize: '16px',
  fontWeight: '700',
  cursor:'pointer',
  border:'0px'

},
pinte:{
  display: 'flex',
  boxSizing:'border-box',
  borderRadius:'50%',
  cursor:'pointer',
  color:'red',
  height: '58px',
  width: '58px',
  padding: '0px 16px ',

},
icono:{
  display: 'inline',
  boxSizing:'border-box',
  borderRadius:'50%',
  cursor:'pointer',
  color:'gray',
  height: '55px',
  width: '55px',
  padding: '0px 16px ',
  float: 'right',

},
btn:{
  height:'48px',
  margin:'10px 5px',
  boxSizing:'border-box',
  borderRadius:'50px',
  padding: '16px 16px ',
  color:'black',
  fontSize:'12px',
  fontSize: '16px',
  fontWeight: '700',
  border:'0px' 
}

}
export default HeaderLayout;
