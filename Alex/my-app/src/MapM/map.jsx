import styles from './map.module.css'
import { Link } from 'react-router-dom'
function MapM(){
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
        <h1>El Raml station Map</h1>
<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1684.5956649277598!2d29.8982203502083!3d31.20085383546839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3f26558d5b5%3A0xebba6805cd2d2062!2sEl%20Raml%20Station!5e0!3m2!1sen!2seg!4v1758360515320!5m2!1sen!2seg"        width="800"
        height="450"
        style={{ border: 0, borderRadius: '20px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="El Raml station Map"
      ></iframe> 
</div>  )
}
export default MapM
