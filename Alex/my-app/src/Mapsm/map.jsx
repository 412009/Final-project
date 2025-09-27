import styles from './map.module.css'
import { Link } from 'react-router-dom'
function Mapsm(){
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
        <h1>Smouha Map</h1>
<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13648.751693560074!2d29.93168490340688!3d31.215522587965168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4919c447a91%3A0xd0f971e233ebf6c9!2sSmouha%2C%20Ezbet%20Saad%2C%20Sidi%20Gaber%2C%20Alexandria%20Governorate%205432062!5e0!3m2!1sen!2seg!4v1758360302007!5m2!1sen!2seg"
        width="800"
        height="450"
        style={{ border: 0, borderRadius: '20px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Smouha Map"
      ></iframe> 
</div>  )
}
export default Mapsm
