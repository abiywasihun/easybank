import React from 'react'
import imageCurrency from '../assets/img/image-currency.jpg'
import imageResturant from '../assets/img/image-restaurant.jpg'
import imagePlane from '../assets/img/image-plane.jpg'
import imageConfetti from '../assets/img/image-confetti.jpg'
function Articles() {
  return (
    <div className='Articles'>
        <h3 className='Articles__title'>Latest Articles</h3>
        <div className="articles__list">
            <div className="articles__card">
            <div className='articles__card__image'>
                <img className='article__image' src={imageCurrency} alt=''/>
                </div>
                <div className='articles__card_a'>
                    <p className="articles__author"> By Claire Robinson</p>
                    <h3 className="articles__title">Receive money in any currency with no fees</h3>
                    <p className="articles__desc">The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single…</p>
                </div>
            </div>
            <div className="articles__card">
            <div className='articles__card__image'>
            <img className='article__image' src={imageResturant} alt=''/>
            </div>
                <div className='articles__card_a'>
                    <p className="articles__author">By Wilson Hutton</p>
                    <h3 className="articles__title">Treat yourself without worrying about money</h3>
                    <p className="articles__desc">Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you…</p>
                </div>
            </div>
            <div className="articles__card">
                <div className='articles__card__image'>
            <img className='article__image' src={imagePlane} alt=''/>
            </div>
                <div className='articles__card_a'>
                    <p className="articles__author">By Wilson Hutton</p>
                    <h3 className="articles__title">Take your Easybank card wherever you go</h3>
                    <p className="articles__desc">We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you…</p>
                </div>
            </div>
            <div className="articles__card">
            <div className='articles__card__image'>
            <img className='article__image' src={imageConfetti} alt=''/>
            </div>
                <div className='articles__card_a'>
                    <p className="articles__author">By Claire Robinson</p>
                    <h3 className="articles__title">Our invite-only Beta accounts are now live!</h3>
                    <p className="articles__desc">After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site…</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles