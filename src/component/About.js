import React from 'react'
import api from '../assets/img/icon-api.svg'
import budget from '../assets/img/icon-budgeting.svg'
import onboarding from '../assets/img/icon-onboarding.svg'
import online from '../assets/img/icon-online.svg'
function About() {
  return (
    <div className='about'>
        <div className="about__top">
            <h3 className='about__title'>Why choose Easybank?</h3>
            <p  className='about__desc'> We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.</p>
        </div>
        <div className="about__bottom">
            <div className="about__card">
                <div className="card__avater">
                    <img src={online} alt=""/>
                </div>
                <h3 className="card__title">Online Banking</h3>
                <p className="card__desc">  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.</p>
            </div>
            <div className="about__card">
                <div className="card__avater">
                    <img src={budget} alt=""/>
                </div>
                <h3 className="card__title">Simple Budgeting</h3>
                <p className="card__desc">  See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.</p>
            </div>
            <div className="about__card">
                <div className="card__avater">
                    <img src={onboarding} alt=""/>
                </div>
                <h3 className="card__title">Fast Onboarding</h3>
                <p className="card__desc">  We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.</p>
            </div>
            <div className="about__card">
                <div className="card__avater">
                    <img src={api} alt=""/>
                </div>
                <h3 className="card__title">Open API</h3>
                <p className="card__desc"> Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.</p>
            </div>
        </div>
    </div>
  )
}

export default About