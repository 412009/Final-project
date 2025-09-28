import React, { useState } from 'react';
import './App.css';
import Login from './login/login.jsx';
// IMPORTANT: Added 'Link' to the import list
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import pic4 from './assets/gleembay.jpg';
import pic3 from './assets/gleem.jpg';
import pic from './assets/san.jpg';
import pic2 from './assets/san3.jpg';
import Home from './Homepage/homepage.jsx';
import Section from './sections/sections.jsx';
import San from './San Stefano/san.jsx'
import Map from './Map/map.jsx';
import Elshatby from './Elshatby/elshatby.jsx';
import Mehata from './Mehata/mehata.jsx';
import Smouha from './Smouha/smouha.jsx';
import MapM from './MapM/map.jsx';
import Map1 from './Mapsh/map.jsx'
import Mapsm from './Mapsm/map.jsx'
import Mapss from './Mapss/map.jsx';

// Mapping region names to their URL paths for easy access in the sidebar
const REGION_PATHS = {
    'San Stefano': '/san-stefano',
    'El Shatby': '/el-shatby',
    'Mehatet Elraml': '/mehatet-elraml',
    'Smouha': '/smouha'
};


function App() {
  // State to hold the names of the favorited regions
  const [favoritedRegions, setFavoritedRegions] = useState([]);
  // New state to control the visibility of the favorites sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to add or remove a region from the favorites list
  const toggleFavorite = (regionName) => {
    setFavoritedRegions(prevFavorites => {
      if (prevFavorites.includes(regionName)) {
        return prevFavorites.filter(name => name !== regionName);
      } else {
        return [...prevFavorites, regionName];
      }
    });
  };

  // Function to toggle the sidebar's open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  // Handler for clicking a link in the sidebar (closes sidebar after navigation)
  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };


  return (
    <>
      <BrowserRouter>
        {/* Favorites Sidebar (using your preferred inline styles) */}
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '300px',
          height: '100%',
          backgroundColor: 'rgba(65, 66, 68, 0.82)',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.5)',
          transition: 'transform 0.3s ease-in-out',
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)',
          zIndex: 1000,
          padding: '20px',
          boxSizing: 'border-box',
          overflowY: 'auto'
        }}>
          <button 
            onClick={toggleSidebar} 
            style={{
              background: 'none', // Added background none for consistency
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: 'white', // Ensure the close button is visible on the dark background
            }}>
            <div className='close'>&times;</div>
          </button>
          <h2 className='title'style={{ 
            marginTop: '40px',color:'rgba(253, 75, 161, 1)',marginBottom:'20px'}}>My Saved Places</h2>
          {favoritedRegions.length === 0 ? (
            <p id='no' style={{ color: 'rgba(251, 247, 251, 1)' }}>No places saved yet. Click a heart to add one!</p>
          ) : (
            <ul style={{ padding: 0, listStyle: 'none' }}>
              {favoritedRegions.map((name, index) => (
                <li key={index} style={{ marginBottom: '20px', fontSize:'20px' }}>
                  {/* The name is now a clickable Link */}
                  <Link 
                    to={REGION_PATHS[name]} 
                    onClick={handleLinkClick} // Closes sidebar when link is clicked
                   className='fav2' style={{ textDecoration: 'none', color: 'rgba(251, 247, 251, 1)' }} // Your preferred color
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Routes>
          <Route 
            path='/' exact
            element={
              <>
                <section className='home-section'>
                  {/* Pass the toggleSidebar function down to the Home component */}
                  <Home onToggleSidebar={toggleSidebar} />
                </section>
                <div className='content'>
                  <div className='text'>
                    <h1>Where to go</h1>
                    <h6>pick a destination and start your experience in Alex</h6>
                  </div>
                  <div className='images'>
                    {/* Pass the favorite state and toggle function to each Section */}
                    <Section 
                      region='San Stefano' 
                      image={pic2} 
                      desc='city of fancy hotels and places' 
                      isFavorited={favoritedRegions.includes('San Stefano')}
                      onToggleFavorite={toggleFavorite}
                    />
                    <Section 
                      region='El Shatby' 
                      image={pic} 
                      desc='city of history and science' 
                      isFavorited={favoritedRegions.includes('El Shatby')}
                      onToggleFavorite={toggleFavorite}
                    />
                    <Section 
                      region='Mehatet Elraml' 
                      image={pic3} 
                      desc='city of the combination betwen greece and egypt' 
                      isFavorited={favoritedRegions.includes('Mehatet Elraml')}
                      onToggleFavorite={toggleFavorite}
                    />
                    <Section 
                      region='Smouha' 
                      image={pic4} 
                      desc='city of resorts,compounds and clubs' 
                      isFavorited={favoritedRegions.includes('Smouha')}
                      onToggleFavorite={toggleFavorite}
                    />
                  </div>
                </div>
              </>
            } 
          />
          <Route path='/san-stefano' exact element={<San />} />
          <Route path='/el-shatby' exact element={<Elshatby />} />
          <Route path='/mehatet-elraml' exact element={<Mehata />} />
          <Route path='/smouha' exact element={<Smouha />} />
          <Route path='/maps'exact element={<Map/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/sh' exact element={<Map1/>}/>
          <Route path='/m' exact element={<MapM/>}/>
          <Route path='/sm' exact element={<Mapsm/>}/>
          <Route path='/ss' exact element={<Mapss/>}/>
            
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
