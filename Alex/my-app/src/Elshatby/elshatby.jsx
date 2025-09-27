import styles from './elshatby.module.css'
import { Link } from 'react-router-dom'
import pic2 from '../assets/sadat.jpg'
import pic from '../assets/pharoah.jpg'
import pic5 from '../assets/AB.jpg'
import pic6 from '../assets/AB2.jpg'
import pic7 from '../assets/AB3.jpg'
import pic8 from'../assets/AB4.webp'
import pic9 from '../assets/AB5.webp'
import pic10 from '../assets/AB6.webp'
import pic11 from '../assets/casino.png'
import pic12 from '../assets/graves.jpg'
import pic13 from '../assets/graves2.jpg'
import pic14 from '../assets/statues.jpg'
import pic15 from '../assets/statues2.jpg'
import pic16 from '../assets/greece.webp'
import pic17 from '../assets/greece2.jpg'
function Elshatby() {

  return (
     
         <div>
         <div className={styles.container}>
         <div className={styles.nav}>
       <a href="#" className={styles.logo}>Mattohsh</a>
       <ul className={styles.navlinks}>
    <li><Link to='/' >Home</Link></li>
    <li><Link to="/maps">Maps</Link></li>
    
    <li><Link to="/login" id="sign">Log In</Link></li>

       </ul>
     </div>
               <div class={styles.intro}>
               <div className={styles.textsection}>
                 <h1 id={styles.title}>El shatibi</h1>
                 <h1 id={styles.head}>Visit Alex!</h1>
                 <h2>
                 El shatby is one of the most famous and magnificant neighborhoods in Alex
                 with a wealth of sciense and history</h2>
                <Link to='/sh'> <button>Map</button></Link>
               </div>
               <div className={styles.imagesection}>
                 <img src={pic2} alt="San Stefano Alexandria"  />
                 <img src={pic} alt="San Stefano Alexandria" />
               </div>
             </div>
             </div>
              <div class={styles.container2}>
                     <h1 id={styles.bio}>Graeco Archeological Remains</h1>
                     <div class={styles.greco}>
                       <div class={styles.title2}>
                         <h1 id={styles.g}>Alexandria Bibliotheca</h1>
                       </div>
                       <div class={styles.sliderwrapper}>
                        <div class={styles.slider} >
                               <img id='slider1' src={pic5} class={styles.image}/>
                               <img id='slider2' src={pic6} class={styles.image}/>
                               <img id='slider3' src={pic7} class={styles.image}/>
                               <img id='slider4' src={pic8} class={styles.image}/>
                               <img id='slider5' src={pic9} class={styles.image}/>
                               <img id='slider6' src={pic10} class={styles.image}/>

                         </div>
                         <div class={styles.slidernav}>
                           <a href='#slider1'></a>
                           <a href='#slider2'></a>
                           <a href='#slider3'></a>
                           <a href='#slider4'></a>
                           <a href='#slider5'></a>
                           <a href='#slider6'></a>
                         </div>
                       </div>
                       <div class={styles.text}>
The Bibliotheca Alexandrina is a spectacular modern library and cultural center, inaugurated in 2002 as a revival of the ancient Library of Alexandria. Its striking architecture features a massive, tilted circular roof and an exterior granite wall carved with characters from 120 scripts. More than just a library, it serves as a major hub for research, arts, and cultural events across the Mediterranean region.                        </div>
                     </div>
                    </div>
                    <div class={styles.venisia}>
                     <h1 id={styles.bio}>Architectural Creativity</h1>
                     <div class={styles.title2}>
                       <h1>El shatibi casino</h1>
                     </div>
                     <img src={pic11}/>
                     <div class={styles.text}>
The El Shatibi Casino is a commercial complex on the Alexandria Corniche, originally a historical casino. Today, the seaside venue primarily operates as a modern food and retail hub, utilizing its high-traffic, prominent location in the Shatibi neighborhood.                     </div>
                     </div>
                     <div className={styles.grave}>
                      <div class={styles.gr}>
                       <h1>Commowealth War cemetry </h1>
                     </div>
                     <div className={styles.graves}><img src={pic12}/> <img src={pic13}/></div>
                      <div class={styles.text}>
The Alexandria (Hadra) War Memorial Cemetery is a major Commonwealth War Graves Commission site in Egypt. It contains over 3,000 graves from both World War I and World War II, primarily for personnel who died in the city's extensive wartime hospitals. The serene cemetery commemorates soldiers from the UK, Australia, New Zealand, India, and other Commonwealth nations.                     </div>
                     </div>
                    
                     <div class={styles.fouad}>
                       <h1 id={styles.bio}>The Graeco Remains</h1>
                       <div class={styles.title2}>
                         <h1 id={styles.f}>The greeks graves in Alex</h1>
                       </div>
                       <div class={styles.sliderwrapper}>
                        <div class={styles.slider} >
                               <img id="slider7" src={pic14} class={styles.image}/>
                               <img id="slider8" src={pic15} class={styles.image}/>
                               <img id="slider9" src={pic16} class={styles.image}/>
                               <img id="slider10" src={pic17} class={styles.image}/>

                         </div>
                         <div class={styles.slidernav}>
                           <a href='#slider7'></a>
                           <a href='#slider8'></a>
                           <a href='#slider9'></a>
                           <a href='#slider10'></a>
                         </div>
                       </div>
                       <div class={styles.text}>
The El Shatibi Necropolis in Alexandria features the city's oldest known Greek graves, dating to the late 4th century BCE. These **rock-cut tombs** blend Greek and Egyptian styles, notably including burial chambers with **stone couches (klinai)**. They serve as a vital archaeological record of Alexandria's earliest Hellenistic settlers.                       </div>
                       </div>
           </div>
       )
}

export default Elshatby;
