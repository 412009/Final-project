import styles from './mehata.module.css'
import { Link } from 'react-router-dom'
import pic2 from '../assets/Mehata.jpg'
import pic from '../assets/mehata2.avif'
import pic3 from '../assets/venesia.jpg'
import pic4 from '../assets/lemetropole.jpg'
import pic5 from '../assets/grm.jpg'
import pic6 from '../assets/grm2.jpg'
import pic7 from '../assets/grm3.jpg'
import pic8 from '../assets/grm4.webp'
import pic9 from '../assets/grm5.jpg'
import pic10 from '../assets/grm6.webp'
import pic11 from '../assets/grm7.jpg'
import vid from'../assets/fouad.mp4'
function Mehata() {

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
                <h1 id={styles.title}>MehatetElraml</h1>
                <h1 id={styles.head}>Visit Alex!</h1>
                <h2>
                Mehate Eleaml is one of the most famous and magnificant neighborhoods in Alex
                with a combination between European and egyptian civilizatio</h2>
             <Link to='/m' ><button>Map</button></Link>
              </div>
              <div className={styles.imagesection}>
                <img src={pic2} alt="San Stefano Alexandria"  />
                <img src={pic} alt="San Stefano Alexandria" />
              </div>
            </div>
            </div>
             <div class={styles.container2}>
                    <h1 id={styles.bio}>Ancient Roma and greece</h1>
                    <div class={styles.greco}>
                      <div class={styles.title2}>
                        <h1 id={styles.g}>Graeco Roman Museum</h1>
                      </div>
                      <div class={styles.sliderwrapper}>
                       <div class={styles.slider} >
                              <img id='slider1' src={pic5} class={styles.image}/>
                              <img id='slider2' src={pic6} class={styles.image}/>
                              <img id='slider3' src={pic7} class={styles.image}/>
                              <img id='slider4' src={pic8} class={styles.image}/>
                              <img id='slider5' src={pic9} class={styles.image}/>
                              <img id='slider6' src={pic10} class={styles.image}/>
                              <img id='slider7' src={pic11} class={styles.image}/>
                        </div>
                        <div class={styles.slidernav}>
                          <a href='#slider1'></a>
                          <a href='#slider2'></a>
                          <a href='#slider3'></a>
                          <a href='#slider4'></a>
                          <a href='#slider5'></a>
                          <a href='#slider6'></a>
                          <a href='#slider7'></a>
                        </div>
                      </div>
                      <div class={styles.text}>
                      The Greco-Roman Museum in Alexandria is a key cultural hub dedicated to preserving artifacts from Egypt's Greco-Roman period. After extensive renovations, it reopened in 2023, showcasing a diverse collection of arts including impressive sculptures, intricate mosaics, and ancient pottery. The museum stands as a crucial monument to Alexandria's rich history as a crossroads of civilizations.            </div>
                    </div>
                   </div>
                   <div class={styles.venisia}>
                    <h1 id={styles.bio}>Architectural Creativity</h1>
                    <div class={styles.title2}>
                      <h1>Venice Architecture</h1>
                    </div>
                    <img src={pic3}/>
                    <div class={styles.text}>
                  In Alexandria, Venetian architecture is a notable feature, primarily found in the **Little Venice** building on the Corniche. Designed by Italian architect Giacomo Loria, the structure incorporates distinctive elements like pointed Moorish arches and Gothic details inspired by Venice's Palazzo Ducale. This architectural style reflects the city's rich, cosmopolitan past and its connection to European influences.                     </div>
                    <div class={styles.title2}>
                      <h1>Le Metropole Hotel </h1>
                    </div>
                    <img src={pic4}/>
                     <div class={styles.text}>
                    Le Metropole Hotel, a prominent landmark in Alexandria, stands as a testament to the city's cosmopolitan past. Built in 1902, the hotel's classical architecture and Belle Époque charm offer a glimpse into a bygone era, and it is famously known for having been the long-time residence of the renowned Greek poet, Constantine Cavafy.                    </div>
                    </div>
                    <div class={styles.fouad}>
                      <h1 id={styles.bio}>The Quiet and Upscale streets</h1>
                      <div class={styles.title2}>
                        <h1 id={styles.f}>Fouad Street</h1>
                      </div>
                      <div className={styles.video}>
                        <video autoPlay loop muted>
                       <source src={vid} type='video/mp4'/>
                      </video>
                      </div>
                      <div class={styles.text}>
Fouad Street is one of the oldest planned and continuously inhabited streets in the world, tracing its origins back to the city's founding by Alexander the Great in 331 BC. Originally known as the Canopic Way, it served as Alexandria's main artery and a stage for important public and religious ceremonies. Over centuries, it has evolved into a showcase of the city's cosmopolitan past, lined with elegant villas and public buildings that feature a blend of European architectural styles, including Neo-Classical, Art Deco, and Art Nouveau.            </div>
                      </div>
          </div>
      )
}


export default Mehata
