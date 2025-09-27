import styles from './map.module.css'
import { Link } from 'react-router-dom'
function Map(){
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
        <h1>Alexandria Map</h1>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109180.09413296978!2d29.954885900000004!3d31.224110850000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1758030152631!5m2!1sen!2seg"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    </div>
  )
}
export default Map
