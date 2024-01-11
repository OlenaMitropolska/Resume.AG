import React from 'react'

function Footer() {
  return (
    <div>
<footer className="footer footer-center p-5 bg-base-200 text-base-content rounded">
  {/* <nav className="grid grid-flow-col gap-4">
  </nav>  */}
  <nav>
    <div className="grid grid-flow-col gap-4">
      <button className='text-3xl'><a href=""></a><ion-icon name="logo-twitter"></ion-icon></button>
      <button className='text-3xl'><a href=""></a><ion-icon name="logo-linkedin"></ion-icon></button>
      <button className='text-3xl'><a href=""></a><ion-icon name="logo-facebook"></ion-icon></button>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by AG</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer