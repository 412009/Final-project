import styles from "./smouha.module.css"
import { Link } from "react-router-dom"
import pic2 from '../assets/smoha.jpg'
import pic from '../assets/greenplaza.jpg'
import pic5 from '../assets/Antoniades.jpg'
import pic6 from '../assets/Antoniades2.jpg'
import pic7 from '../assets/Antoniades3.webp'
import pic8 from '../assets/Antoniades4.png'
import pic9 from '../assets/stefano2.jpg'
import pic10 from '../assets/padestrian.jpg'
import pic11 from '../assets/greenplaza3.jpg'
function Smouha() {

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
                    <h1 id={styles.title}>Smouha</h1>
                    <h1 id={styles.head}>Visit Alex!</h1>
                    <h2>
                    Smouha is one of the most famous and magnificant neighborhoods in Alex
                    with a wealth of fancy and elegant hotels and malls</h2>
                   <Link to='/sm'><button>Map</button></Link> 
                  </div>
                  <div className={styles.imagesection}>
                    <img src={pic2} alt="San Stefano Alexandria"  />
                    <img src={pic} alt="San Stefano Alexandria" />
                  </div>
                </div>
                </div>
                 <div class={styles.container2}>
                        <h1 id={styles.bio}>Gardens </h1>
                        <div class={styles.greco}>
                          <div class={styles.title2}>
                            <h1>Antoniades garden</h1>
                          </div>
                          <div class={styles.sliderwrapper}>
                           <div class={styles.slider} >
                                  <img id='slider1' src={pic5} class={styles.image}/>
                                  <img id='slider2' src={pic6} class={styles.image}/>
                                  <img id='slider3' src={pic7} class={styles.image}/>
                                  <img id='slider4' src={pic8} class={styles.image}/>

                            </div>
                            <div class={styles.slidernav}>
                              <a href='#slider1'></a>
                              <a href='#slider2'></a>
                              <a href='#slider3'></a>
                              <a href='#slider4'></a>
                            </div>
                          </div>
                          <div class={styles.text}>
The Antoniades Garden is one of Alexandria's oldest and most historic green spaces, with roots tracing back to the Ptolemaic era. It surrounds the 19th-century neoclassical Palais d'Antoniadis and is famous for its European-inspired design, featuring ornate marble statues, classical columns, and a Royal Greenhouse. This expansive park has hosted numerous historical events and is currently undergoing a comprehensive renovation to restore its former grandeur.                          </div>
                        </div>
                       </div>
                       <div class={styles.venisia}>
                        <h1 id={styles.bio}>Architectural Creativity</h1>
                        <div class={styles.title2}>
                          <h1 id={styles.sk}>Skyline compounds</h1>
                        </div>
                        <img src={pic9}/>
                        <div class={styles.text}>
Skylines Compound, developed by Orouba Misr in Smouha, Alexandria, is a modern integrated residential complex. It is known for its strategic location and luxurious amenities, which include a private sports club, a medical center, and an international hotel. The project features diverse unit types—apartments, duplexes, and villas—with significant green spaces and contemporary design.                        </div>
                        
                        </div>
                        <div class={styles.fouad}>
                          <h1 id={styles.bio}>Malls</h1>
                          <div class={styles.title2}>
                            <h1 id={styles.sk}>Green plaza</h1>
                          </div>
                          <div class={styles.sliderwrapper}>
                           <div class={styles.slider} >
                                  <img id="slider5" src={pic10} class={styles.image}/>
                                  <img id="slider6" src={pic11} class={styles.image}/>
                            </div>
                            <div class={styles.slidernav}>
                              <a href='#slider5'></a>
                              <a href='#slider6'></a>
                            </div>
                          </div>
                          <div class={styles.text}>
Green Plaza Mall is a premier shopping, dining, and entertainment destination located in the heart of the Smouha district of Alexandria. Distinctive for its open-air concept, the complex includes numerous international and local retail stores, a cinema, and is famously home to the five-star Hilton Alexandria Green Plaza hotel. It serves as a major hub for both shopping and leisure activities in the city.                          </div>
                          </div>
              </div>
          )
}

export default Smouha
