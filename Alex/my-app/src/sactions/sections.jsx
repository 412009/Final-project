import './sections.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Section({ region, image, desc, isFavorited, onToggleFavorite }) {
  // The function to call when the heart is clicked
  const handleToggle = () => {
    onToggleFavorite(region);
  };

  const path = `/${region.toLowerCase().replace(/\s+/g, '-')}`;

  // SVG icon for the heart. The fill color is controlled by the `isFavorited` prop.
  const heartSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={isFavorited ? "red" : "none"} // Fills red if favorited
      stroke={isFavorited ? "red" : "currentColor"} // Strokes the color of the text
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: '24px', height: '24px', transition: 'fill 0.3s ease' }}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
  
  return (
    <>
      <div className='container9'>
        <article className='card__article'>
          <img src={image} alt={region} className='card__img'/>
          <div className='card__data'>
            {/* Wrapper to align the title and the heart button side-by-side */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <h2 className='card__title'>{region}</h2>
              <button
                className="heart-button"
                onClick={handleToggle}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, margin: 0 }}
                aria-label={isFavorited ? 'Unfavorite' : 'Favorite'}
              >
                {heartSvg}
              </button>
            </div>
            
            <span className="card__description">{desc}</span>
            <Link to={path} className="card__button">Read More</Link>
          </div>
        </article>
      </div>
    </>
  );
}

export default Section;
