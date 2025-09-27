import styles from './map.module.css'
import { Link } from 'react-router-dom'
function Map1(){
  return(
    <div className={styles.container}>
     <div className={styles.nav}>
  <Link to="/" className={styles.logo}>Mattohsh</Link>
    <ul className={styles.navlinks}>
    <li><Link to='/' >Home</Link></li>
    <li><Link to="/maps">Maps</Link></li>
    <li><Link to="/login" id="sign">Log In</Link></li>

    </ul>
  </div>
        <h1>EL shatibi Map</h1>
  <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6824.793355814297!2d29.911406699999993!3d31.209737699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c477b40c63e5%3A0xc9d9b086a7ffac6b!2sShatby%2C%20Al%20Azaritah%20WA%20Ash%20Shatebi%2C%20Bab%20Shar'%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1758351628064!5m2!1sen!2seg"
        width="800"
        height="450"
        style={{ border: 0, borderRadius: '20px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Shatby Map"
      ></iframe> 
      </div> )}
export default Map1
