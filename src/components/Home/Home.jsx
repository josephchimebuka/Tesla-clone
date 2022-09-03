import React from 'react'
import Section from '../Section/Section'

import './home.css'
function Home() {
  return (
    <div className='Home'>
      <Section
      title='Model 3'
      head_paragraph='Order Online for Touchless Delivery'
      Custom_button_a='custom order'
      Custom_button_b='existing inventory'
      BG1 = {`url(${require('../../images-20220625T234900Z-001/images/model-3.jpg')})`}
      />
        <Section
      title='Model Y'
      head_paragraph='Order Online for Touchless Delivery'
      Custom_button_a='custom order'
      Custom_button_b='existing inventory'
      BG1 = {`url(${require('../../images-20220625T234900Z-001/images/model-y.jpg')})`}
      />
        <Section
      title='Model S'
      head_paragraph='Order Online for Touchless Delivery'
      Custom_button_a='custom order'
      Custom_button_b='existing inventory'
      BG1 = {`url(${require('../../images-20220625T234900Z-001/images/model-s.jpg')})`}
      />
        <Section
      title='Model X'
      head_paragraph='Order Online for Touchless Delivery'
      Custom_button_a='custom order'
      Custom_button_b='existing inventory'
      BG1 = {`url(${require('../../images-20220625T234900Z-001/images/model-x.jpg')})`}
      />
        <Section
      title='Solar Panels'
      head_paragraph='Order Online for Touchless Delivery'
      Custom_button_a='custom order'
      Custom_button_b='existing inventory'
      BG1 = {`url(${require('../../images-20220625T234900Z-001/images/solar-panel.jpg')})`}
      />
        <Section
      title='Solar Roofs'
      head_paragraph='Order Online for Touchless Delivery'
      Custom_button_a='custom order'
      Custom_button_b='existing inventory'
      BG1 = {`url(${require('../../images-20220625T234900Z-001/images/solar-roof.jpg')})`}
      />
        <Section
      title='Accessories'
      head_paragraph='Order Online for Touchless Delivery'
      Custom_button_a='custom order'
      Custom_button_b='existing inventory'
      BG1 = {`url(${require('../../images-20220625T234900Z-001/images/accessories.jpg')})`}
      />
    </div>
  )
}

export default Home
