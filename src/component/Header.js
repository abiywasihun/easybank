import React, { useState } from 'react'
import easybank from '../assets/img/logo.svg'
import humberger from '../assets/img/icon-hamburger.svg'
import close from '../assets/img/icon-close.svg'
function Header() {
    const [isActive, setIsActive] = useState('n__comp');

    const handleClick = () => {
        // 👇️ toggle
        setIsActive('d__comp');
    
        // 👇️ or set to true
        // setIsActive(true);
      };
      const closeMenu=()=>{
        setIsActive('n__comp'); 
      }
  return (
    <div className='header'>
        <div className='web__logo'>
         <img src={easybank} alt=''/>
        </div>
        <div className={'menu__components  '+isActive}>
            <span className='menu__names'>Home</span>
            <span className='menu__names'>About</span>
            <span className='menu__names'>Contact</span>
            <span className='menu__names'>Blog</span>
            <span className='menu__names'>Careers</span>
        </div>
        <div className='nav__button'>
            <img onClick={handleClick}  className='humberger' src={humberger} alt=''/>
            <img  onClick={closeMenu} className={'close__icon '+isActive} src={close} alt=''/>
            <button className='button header__button'>Request Invite</button>
        </div>
    </div>
  )
}

export default Header