import React from 'react'

function Footer() {
  return (
    <div>
<footer className="footer footer-center p-5 bg-base-200 text-base-content rounded">
  {/* <nav className="grid grid-flow-col gap-4">
  </nav>  */}
  <nav>
    <div className="grid grid-flow-col gap-4">
      <button className='text-3xl'><a  target='blank' href="https://twitter.com"><ion-icon name="logo-twitter"></ion-icon></a></button>
      <button className='text-3xl'><a  target='blank' href="https://de.linkedin.com/in/alexander-gossmann-177a2b177"><ion-icon name="logo-linkedin"></ion-icon></a></button>
      <button className='text-3xl'><a  target='blank' href="https://www.facebook.com/?locale=de_DE"><ion-icon name="logo-facebook"></ion-icon></a></button>
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