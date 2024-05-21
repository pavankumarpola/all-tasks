import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
  const visible = () => {
    {
      document.getElementById("unorderlist").style.display = "block";
      document.getElementById("open").style.display = "none";
      document.getElementById("close").style.display="block";
    }
  }
  const hide=()=>{
   {
      document.getElementById("unorderlist").style.display = "none";
      document.getElementById("open").style.display="block"
      document.getElementById("close").style.display = "none";
    
    }
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xl-1' >
          <div className='row  ms-5 pt-3  ' id='open' onClick={visible}><i class="ri-menu-line" style={{ color: "black" }}></i></div>
          <div className='row   ms-5 pt-3 ' id='close'   onClick={hide}><i class="ri-close-circle-line" style={{ color: "black" }} ></i></div>
        </div>
        <div className='col-xl-12'>
          <ul id='unorderlist'>
            <div className='row pt-4 pb-4  '>

              <div className='col-xl-2  col-lg-2  col-md-2   ms-5'>
                <li id='pavan' ><Link to="/">Home</Link></li>
              </div>
              <div className='col-xl-2   col-lg-2  col-md-2  ms-5'>
                <li id='pavan' ><Link to="/calculator">Calculator</Link></li>
              </div>
              <div className='col-xl-2  col-lg-2   col-md-2   ms-5'>
                <li id='pavan'><Link to="/Todolist">Todolist</Link></li>
              </div>
              <div className='col-xl-2  col-lg-2   col-md-2  ms-5'>
                <li id='pavan'><Link to="/text">Text </Link></li>
              </div>
              <div className='col-xl-2  col-lg-2   col-md-2  ms-5'>
                <li id='pavan'><Link to="/quiz">Quiz </Link></li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar;