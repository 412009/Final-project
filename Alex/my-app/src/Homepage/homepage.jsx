import './homepage.css'
import { Link } from 'react-router-dom'
import pic4 from '../assets/hot air ballon.webp'
import pic3 from '../assets/stanley.webp'
import pic2 from '../assets/citadel.jpg'
import pic5 from '../assets/fnoon.webp'
import pic from '../assets/taxi.jpg'
import pic6 from '../assets/el-alamein.jpg'
import React from 'react'; // Import React for component use

// Accept the onToggleSidebar function as a prop
function Home({ onToggleSidebar }) { 

  return (
    <div>
    <div className='container'>
      <div className='slider-wrapper'>
      <div className='slider' >
        <img id='slider1'src={pic} className='image'/>
        <img id='slider2'src={pic2} className='image'/>
        <img id='slider3'src={pic3} className='image'/> 
        <img id='slider4'src={pic4} className='image'/> 
        <img id='slider4'src={pic5} className='image'/> 
        <img id='slider4'src={pic6} className='image'/> 

      </div>
      </div>
       <div className="nav">
          <Link to="/" className="logo">Mattohsh</Link>
          <ul className="nav-links">
            <li><Link to='/' >Home</Link></li>
            <li><Link to="/maps">Maps</Link></li>
            <li>
              {/* This button calls the function passed from App.jsx to open the sidebar */}
              <a href='#'
                onClick={onToggleSidebar} 
              >
                Favorites
              </a>
            </li>
            {/* END NEW FAVORITES BUTTON */}
            <li><Link to="/login" id="sign">Log In</Link></li>
          </ul>
      </div>
    </div>

  </div>
  )
}

export default Home
