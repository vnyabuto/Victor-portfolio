import React from 'react'
<<<<<<< HEAD
import './Footer.css'
=======
import "./Footer.css"
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
import Logo from '../../Commons/Logo'
import SocialHandles from '../../Commons/SocialHandles'
import { footer } from '../../sources'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer id="footer">
      <div className="wrapper">
        <div className="column" data-aos="fade-right">
          <Logo />
          <div className="handles-container">
            <SocialHandles />
          </div>
        </div>

        {footer.map((list, index) => (
          <div className="column" data-aos="fade-right" key={index}>
            <h3 className="muted title">{list.title}</h3>
            {list.routes.map((route, i) => (
              <Link to={route.id || ''} smooth={true} className="route" key={i}>
                {route.name}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="flex-center copyright" data-aos="fade-left">
        <h4>Copyright &copy; All rights reserved -| 2026</h4>
        <p className="muted">Built with love by Victor Nyabuto</p>
      </div>
=======
    <footer id='footer'>
      <div className="wrapper">
        <div className="column" data-aos="fade-right" >
          <Logo />
          <SocialHandles />
        </div>
        {
          footer.map((list,index)=>(
            <div className="column"data-aos="fade-right" key={index}>
              <h3 className="muted title">{list.title}</h3>
              {
                list.routes.map((route, i)=>(
                  <Link to={route.id || ""} smooth={true} className='route' key={index}>
                  {route.name}
                  </Link>
                ))
              }
            </div>
          ))
        }
      </div>
      <dic className="flex-center copyright" data-aos="fade-left" >
        <h4>Copyright &copy; All rights reserved -| 2026</h4>
        <p className="muted">Built with love by Victor Nyabuto</p>
      </dic>
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
    </footer>
  )
}

<<<<<<< HEAD
export default Footer
=======
export default Footer
>>>>>>> 5b3a05d19eec8cf830028522b85aed9467d838e6
