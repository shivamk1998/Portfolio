import React from 'react'
import "./sidebar.css"
import Logo from "../../assets/vacation.png";


const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href='#home' id='homeLogo'   className='nav_logo'>
        <img src={Logo} alt='' />
      </a>

      <nav className='nav'>
        <div className='nav_menu'>
          <ul className="nav_list">
            <li className='nav_item'>
              <a href='#home' className='nav_link'>
                <i className='icon-home' title="Home"></i>
              </a>
            </li>
            <li className='nav_item'>
              <a href='#about' className='nav_link'>
                <i className='icon-user-following' title="About"></i>
              </a>
            </li>
            <li className='nav_item'>
              <a href='#services' className='nav_link'>
                <i className='icon-briefcase' title="Services"></i>
              </a>
            </li>
            <li className='nav_item'>
              <a href='#resume' className='nav_link'>
                <i className='icon-graduation' title="Resume"></i>
              </a>
            </li>
            {/* <li className='nav_item'>
            <a href='#portfolio' className='nav_link'>
            <i className='icon-layers'></i>
            </a>
          </li> */}
            {/* <li className='nav_item'>
              <a href='#blog' className='nav_link'>
                <i className='icon-note' title="Blog"></i>
              </a>
            </li> */}

            <li className='nav_item'>
              <a href='#contact' className='nav_link'>
                <i className='icon-bubble' title="Contact"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='nav_footer'>
        <span className='copyright'>&copy; 2023 - 2024.</span>
      </div>
    </aside>
  )
}

export default Sidebar