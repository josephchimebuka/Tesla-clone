import React from 'react'
import logo from '../../images-20220625T234900Z-001/images/logo.svg'
import './header.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Fade } from 'react-reveal';


function Header() {

   

    const [open, setOpen] = useState(false);
   
    
  return (
    <div className='Header'>
      <a href="../"><img src={logo} alt="" /></a>

        <div className="models">
          <a  href="../" className='Model-listing'>Model S</a>
          <a  href="../" className='Model-listing'>Model 3</a>
          <a  href="../" className='Model-listing'>Model X</a>
          <a  href="../" className='Model-listing'>Model Y</a>
          <a  href="../" className='Model-listing'>Solar roof</a>
          <a  href="../" className='Model-listing'>Solar panel</a>
        </div>

        <div className="account-session">
          <a href="../" >Shop</a >
          <a href="../" >Account</a >
        <MenuSharpIcon className='menu'
         onClick={()=>setOpen(true)}
         />
        </div>


       {
        open &&
        <Fade right>
            <div className="sidebar">
            <div className="close">
              <CloseIcon  onClick={()=>setOpen(false)} />
            </div>
            <li><a href="../">Existing Inventory</a></li>
            <li><a href="../">Used Inventory</a></li>
            <li><a href="../">Trade-In</a></li>
            <li><a href="../">Insurance</a></li>
            <li><a href="../">Cybertruck</a></li>
            <li><a href="../">Roadster</a></li>
            <li><a href="../">Charging</a></li>
            <li><a href="../">Roadster</a></li>
            <li><a href="../">Charging</a></li>
            <li><a href="../">Roadster</a></li>
            <li><a href="../">Charging</a></li>
            <li><a href="../">Roadster</a></li>
            <li><a href="../">Charging</a></li>
            <li><a href="../">Roadster</a></li>
            <li><a href="../">Charging</a></li>
            <li><a href="../">Roadster</a></li>
            <li><a href="../">Charging</a></li>
            <li><a href="../">Roadster</a></li>
            <li><a href="../">Charging</a></li>
          </div>
          </Fade>
        }
        
    </div>
  )
}

export default Header