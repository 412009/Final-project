import styles from './san.module.css'
import { Link } from 'react-router-dom'
import pic2 from '../assets/san stefano2.jpg'
import pic from '../assets/san stefano1.jpg'
import pic5 from '../assets/ss1.jpg' 
import pic6 from '../assets/ss2.jpg'
import pic7 from '../assets/ss2.webp'
import pic8 from '../assets/ss3.jpg'
import pic9 from'../assets/ss5.jpg'
import pic10 from '../assets/ss4.jpg'
import pic11 from '../assets/ss6.webp'
import pic12 from '../assets/ss7.jpg'
import pic13 from '../assets/ss8.jpg'
import pic14 from '../assets/ss9.jpg'
import pic15 from '../assets/ss10.jpg'
import pic16 from '../assets/Aziza.jpg'
function San() {

  return (

    <div>
    <div className={styles.container}>
    <div className={styles.nav}>
  <Link to="/" className={styles.logo}>Mattohsh</Link>
  <ul className={styles.navlinks}>
    <li><Link to='/' >Home</Link></li>
    <li><Link to="/maps">Maps</Link></li>
    <li><Link to="/login" id="sign">Log In</Link></li>
  </ul>
</div>
          <div class={styles.intro}>
          <div className={styles.textsection}>
            <h1 id={styles.title}>San Stefano</h1>
            <h1 id={styles.head}>Visit Alex!</h1>
            <h2>
            San stefano is one of the most famous and magnificant neighborhoods in Alex
            with a wealth of fancy and elegant hotels and museums</h2>
            <Link to ='/ss'><button>Map</button></Link>
          </div>
          <div className={styles.imagesection}>
            <img src={pic2} alt="San Stefano Alexandria"  />
            <img src={pic} alt="San Stefano Alexandria" />
          </div>
        </div>
        </div>
         <div class={styles.container8}>
                <h1 id={styles.bio}>Royal and Fancy Museums</h1>
                <div class={styles.greco}>
                  <div class={styles.title2}>
                    <h1>Royal Jewelery Museum</h1>
                  </div>
                  <div class={styles.sliderwrapper}>
                   <div class={styles.slider}>
                          <img id='slider1' src={pic5} class={styles.image}/>
                          <img id='slider10' src={pic15} class={styles.image}/>
                          <img id='slider2' src={pic6} class={styles.image}/>
                          <img id='slider3' src={pic7} class={styles.image}/>
                          <img id='slider3' src={pic8} class={styles.image}/>
                          <img id='slider4' src={pic9} class={styles.image}/>
                          <img id='slider5' src={pic10} class={styles.image}/>
                          <img id='slider6' src={pic11} class={styles.image}/>
                          <img id='slider7' src={pic12} class={styles.image}/>
                          <img id='slider8' src={pic13} class={styles.image}/>
                          <img id='slider9' src={pic14} class={styles.image}/>

                    </div>
                    <div class={styles.slidernav}>
                      <a href='#slider1'></a>
                      <a href='#slider10'></a>                     
                      <a href='#slider2'></a>
                      <a href='#slider3'></a>
                       <a href='#slider4'></a>
                       <a href='#slider5'></a>
                       <a href='#slider6'></a>
                       <a href='#slider7'></a>
                       <a href='#slider8'></a>
                       <a href='#slider9'></a>

                    </div>
                  </div>
                  <div class={styles.text}>
The Royal Jewelry Museum in Alexandria is housed in the stunning European-style palace of Princess Fatma Al-Zahra. It displays an invaluable collection of over 11,000 pieces of jewelry, ornaments, and precious artifacts. These treasures once belonged to the Muhammad Ali Dynasty, who ruled Egypt from 1805 to 1952.                  </div>
                </div>
               </div>
               <div class={styles.venisia}>
                <h1 id={styles.bio}>Architectural Creativity</h1>
                <div class={styles.title2}>
                  <h1>Aziza Fahmy palace</h1>
                </div>
                <img src={pic16}/>
                <div class={styles.text}>
The Princess Aziza Fahmy Palace is an opulent Neoclassical villa in Alexandria, famous for its prime location overlooking the Mediterranean Sea. Although closed to the public and slated for hotel development, this architectural jewel reflects the luxury of Egypt's aristocratic past.                </div>
               
                </div>
                <div class={styles.fouad}>
                  <div class={styles.title2}>
                    <h1> SAN STEFANO Hotel</h1>
                  </div>
      <div className={styles.vid}>            
        <iframe width="420" height="315"
       src="https://www.youtube.com/embed/6E_oB-w2op0?mute=1"
       allow='autoplay' frameborder="0" allowfullscreen>
      </iframe>
      <div className={styles.text}>
The historic San Stefano Hotel and Casino, a 19th-century landmark, was sadly demolished in the late 1990s. Its legacy is carried on by the massive San Stefano Grand Plaza complex. This modern waterfront development is anchored by the luxury Four Seasons Hotel Alexandria at San Stefano.      </div>
   </div>
      </div>
      </div>
  )
}

export default San
