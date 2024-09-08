import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  
function Header() {
  return (
    <div>
       <MDBNavbar light bgColor='secondary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn.dribbble.com/users/2759171/screenshots/6848553/cal-line-graph-animation-small.gif'
              height='50'
              alt=''
              loading='lazy'
            />
           Discount Calculator
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
