import styles from './map.module.css'
import { Link } from 'react-router-dom'
function Mapss(){
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
        <h1>San Stefano Map</h1>
       <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13644.384639668677!2d29.95703265342495!3d31.245761237738343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c52e1a5ee849%3A0x5cd20a5c630c58be!2sSan%20Stefano%2C%20El%20Raml%201%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1758360649100!5m2!1sen!2seg"         width="800"
        height="450"
        style={{ border: 0, borderRadius: '20px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="San stefano Map"
      ></iframe> </div>
  )
}
export default Mapss
