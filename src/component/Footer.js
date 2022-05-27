import React from 'react'
import easybank from '../assets/img/logo-light.svg'
import facebook from '../assets/img/icon-facebook.svg'
import youtube from '../assets/img/icon-youtube.svg'
import twitter from '../assets/img/icon-twitter.svg'
import pinterest from '../assets/img/icon-pinterest.svg'
import instagram from '../assets/img/icon-instagram.svg'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
          <div className="left__items">
          <img src={easybank} alt=''/>
          <div className="socila__media">
          <img className='social__icon' src={facebook} alt=''/>
          <img className='social__icon' src={youtube} alt=''/>
          <img className='social__icon' src={twitter} alt=''/>
          <img className='social__icon' src={pinterest} alt=''/>
          <img className='social__icon' src={instagram} alt=''/>
          </div>
          </div>
          <div className="left__items">
              <span className='footer__link'>About Us</span>
              <span className='footer__link'>Contact</span>
              <span className='footer__link'>Blog</span>
          </div>
          <div className="left__items">
          <span className='footer__link'>Careers</span>
              <span className='footer__link'>Support</span>
              <span className='footer__link'>Privacy Policy</span>
          </div>
      </div>
      <div className="footer__right">
      <button className='button footer-button'>Request Invite</button>
      <p className="copy__right">© Easybank. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
