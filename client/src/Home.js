import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

export default function Home(){
  const [news, setNews] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [marsPhotos, setMarsPhotos] = useState([]); // State for Mars Rover Photos
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  // Fetch tech news from NewsAPI
  useEffect(() => {
    const fetchTechNews = async () => {
      const apiKey = '57776be23ad0431491c66c246203cad7';  // Replace with your NewsAPI key
      const url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles);  // Store fetched news articles in state
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchTechNews();
  }, []);

  const nextPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex + 1) % news.length);
  };

  const prevPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length);
  };

  //ANIMATE THE GREENTECH TITLE //

  useEffect(() => {
    // Select the title element
    const title = document.querySelector('.animated-title');
    if (title) {
      const text = title.textContent; // Get the text content
      title.innerHTML = ''; // Clear the original text
  
      // Split the text into characters but preserve spaces
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        if (char === ' ') {
          // Preserve spaces by adding a non-breaking space
          span.innerHTML = '&nbsp;';
        } else {
          span.textContent = char;
        }
        title.appendChild(span);
      });
    }
  }, []);

// api for content in box number 2 //

useEffect(() => {
  const fetchMarsPhotos = async () => {
    const apiKey = 'DEMO_KEY'; // Replace with your NASA API key
    const sol = 1000; // Example Martian day
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMarsPhotos(data.photos); // Store the photos in state
    } catch (error) {
      console.error('Error fetching Mars rover photos:', error);
    }
  };

  fetchMarsPhotos();
}, []);

const next = () => {
  setCurrentPostIndex((prevIndex) => (prevIndex + 1) % news.length);
};

const prev = () => {
  setCurrentPostIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length);
};

  
  return (
    <div className="Home">
      <div className="background-wrapper">
        <img src="/leaf.jpg" alt="leaf" />
      </div>
      <div className="title-wrapper">
        <h1 className="animated-title">Welcome to GreenTech</h1>
      </div>
      <div className="box-container">
      <div className="box">
        {news.length > 0 ? (
          <div className="news-article">
            <div style={{ position: "relative" }}>
              <img
                src={news[currentPostIndex].urlToImage}
                alt="Article"
                className="article-image"
              />
              <div className="news-overlay">
                <h3>{news[currentPostIndex].title}</h3>
                <p>{news[currentPostIndex].description}</p>
              </div>
            </div>
            <a
              href={news[currentPostIndex].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Full Article
            </a>
            <div className="navigation">
              <button onClick={prevPost}>&lt; Previous</button>
              <button onClick={nextPost}>Next &gt;</button>
            </div>
          </div>
        ) : (
          <p>Loading news...</p>
        )}
        </div>



      {/* Box 2: Mars Rover Photos */}
{/* Box 2: Mars Rover Photos */}
      <div className="box">
        {marsPhotos.length > 0 ? (
          <div style={{ textAlign: 'center' , color: 'black'}}>
            <img
              src={marsPhotos[currentImageIndex].img_src}
              alt={`Mars Rover Photo ${currentImageIndex + 1}`}
              style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <p><strong>Camera:</strong> {marsPhotos[currentImageIndex].camera.full_name}</p>
            <p><strong>Date Taken:</strong> {marsPhotos[currentImageIndex].earth_date}</p>
            <div className="navigation">
              <button
                onClick={() => setCurrentImageIndex((currentImageIndex - 1 + marsPhotos.length) % marsPhotos.length)}
              >
                &lt; Previous
              </button>
              <button
                onClick={() => setCurrentImageIndex((currentImageIndex + 1) % marsPhotos.length)}
              >
                Next &gt;
              </button>
            </div>
          </div>
        ) : (
          <p>Loading Mars rover photos...</p>
        )}
      </div>

      </div>
    </div>
  );
}