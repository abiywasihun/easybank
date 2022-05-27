import React from 'react'
import mockup from '../assets/img/image-mockups.png'
function Home() {
  return (
    <div className='home'>
        <div className='right__home'>
          <img src={mockup} alt=''/>
      </div>
      <div className='left__home'>
          <h2 className='home__title'>  Next generation digital banking
</h2>
          <p className='home_p'>Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more. </p>
          <button className='button'>Request Invite</button>
      </div>
      
    </div>
  )
}

export default Home
