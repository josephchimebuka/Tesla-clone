import React from 'react'
import './section.css'
// import styled from 'styled-components'
import arrowbtn from '../../images-20220625T234900Z-001/images/down-arrow.svg'
import Fade from 'react-reveal'
function Section({title,BG1}) {

  return (

    <div className='Section'  style={
      {
         backgroundImage: BG1,      
      }
   }>
     <Fade bottom>
     <div className="header_text">
        <h1>{title}</h1>
       <p>Order Online for Touchless Delivery</p>
        </div>
     </Fade>
     <Fade bottom>
     <div className="buttons">
      <div className="custom_buttons">
        <div className='custom_but a'>custom order</div>
        <div className='custom_but b'>existing inventory</div>
        </div>
                <img src={arrowbtn} className='arrowbtn' alt="" />
      </div>
      </Fade>
      </div>
  )
  
}

export default Section

// const Container = styled.div`
// background: url('/images/model-3.jpg');
// background-size: cover;
// background-position: center;
// height: 100vh;
// width: 100vw;
// background-repeat: no-repeat;
// display: flex;
// flex-direction: column;
// justify-content: space-between;

// `
//  const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `