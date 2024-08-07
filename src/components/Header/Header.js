import React from 'react';
import Rectangle1 from '../../../src/assets/Rectangle1.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  FaceBookIcon,
  InstaIcon,
  TwitterIcon,
  YouTubeIcon,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  Rectangle5,
  Rectangle6,
  Rectangle7,
  Rectangle8,
  Rectangle9,
  Rectangle10,
  Eclipse,
  ShareIcon,
  Image,
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  PostPicture,
  Postpic1,
  Postpic2,
  Postpic3,
  Postpic4
} from '../../../src/assets/assets.js';

const imageData = [
  { src: Rectangle2, text: "Integer Maecenas Eget Viverra" },
  { src: Rectangle3, text: "Aenean eleifend ante maecenas" },
  { src: Rectangle4, text: "Integer Maecenas Eget Viverra" },
  { src: Rectangle5, text: "Integer Maecenas Eget Viverra" },
  { src: Rectangle6, text: "Aenean eleifend ante maecenas" },
  { src: Rectangle7, text: "Integer Maecenas Eget Viverra" },
  { src: Rectangle8, text: "Integer Maecenas Eget Viverra" },
  { src: Rectangle9, text: "Aenean eleifend ante maecenas" },
  { src: Rectangle10, text: "Integer Maecenas Eget Viverra" },
];

const galleryData = [
  { src: Gallery1, text: "Dominican Republic" },
  { src: Gallery2, text: "Maecenas Tincidunt" },
  { src: Gallery3, text: "Dominican Republic" },
  { src: Gallery4, text: "Dominican Republic" },
  { src: Gallery5, text: "Dominican Republic" }
];

const postpicdata = [
  { src: Postpic1, text: "Akame Ga Kill: Season finale", date: "21 March 2021" },
  { src: Postpic2, text: "Naruto Uzumaki: Hidden Village", date: "21 March 2021" },
  { src: Postpic3, text: "Love juice Season Priemere", date: "21 March 2021" },
  { src: Postpic4, text: "Love juice Season Priemere", date: "21 March 2021" }
];

const Header = () => {
  return (
    <div className='container'>
      <header className='Header'>
        <img src={Rectangle1} alt="Background" />
        <div className='nav-container'>
          <nav>
            <ul>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Food</a></li>
              <li><a href="#">Well Being</a></li>
              <li><a href="#">Sport</a></li>
              <li><a href="#">Family</a></li>
              <li><a href="#">Lifestyle</a></li>
            </ul>
          </nav>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faSearch} className="fa-icon" />
          </div>
          <div className='empty-image-container'>
            <h1>Get your $120 Christmas gift</h1>
          </div>
        </div>
        <div className='Header-content'>
          <div className='Header-text'>
            <h1>INSPIRATION FOR TRAVEL BY REAL PEOPLE</h1>
            <h5>Book smart, travel simple</h5>
          </div>
          <div className='Small-image-container'>
            <h1>Start planning your trip</h1>
          </div>
        </div>
      </header>

      <main className='main-content'>
        <div className='social-media-container'>
          <a className='social-icon' href="#">
            <img src={FaceBookIcon} alt="Facebook" />
            <span className='social-text'>3.7M</span>
          </a>
          <a className='social-icon' href="#">
            <img src={InstaIcon} alt="Instagram" />
            <span className='social-text'>2.4M</span>
          </a>
          <a className='social-icon' href="#">
            <img src={TwitterIcon} alt="Twitter" />
            <span className='social-text'>3.7M</span>
          </a>
          <a className='social-icon' href="#">
            <img src={YouTubeIcon} alt="YouTube" />
            <span className='social-text'>2.4M</span>
          </a>
        </div>

        <div className="container mt-5">
          <div className="row">
            {imageData.map((data, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <div className="position-relative">
                    <img src={data.src} className="card-img-top" alt={`Image ${index + 1}`} />
                    <div className="overlay-black"></div>
                    <div className="overlay-container">
                      <div className="overlay-top">
                        <h5 className="text-white mb-0">Aenean Eleifend</h5>
                      </div>
                      <div className="overlay-bottom">
                        <h5 className="text-white mb-0">Aliquam</h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.text}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <img src={Eclipse} alt="Profile" className="rounded-circle" />
                    <small className="text-muted">Joanna Wellick</small>
                    <small className='text-muted'>June 28, 2018</small>
                    <div className="float-end">
                      <img src={ShareIcon} alt="Share Icon" className="share-icon" />
                      <span className="ms-2">1K Shares</span>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 post-description">
                    <p>
                      Aenean eleifend ante maecenas pulvinar montes lore et pede
                      dis dolor pretium donec dictum. Vici consequat justo enim.
                      Venenatis eget adipiscing luctus lorem.
                    </p>
                  </div>
                  <div>
                    <h1 className="view-post-heading">View Post</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="btn-load-more">Load More</button>
          </div>
        </div>

        <div className='body'>
          <div className='image-container'>
            <img src={Image} alt="Image" />
            <div className='Body-content'>
              <div className='Body-text'>
                <h1>Richard Norton photorealistic rendering as real photos</h1>
                <h5>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</h5>
              </div>
              <div className='Small-image-container'>
                <h1 style={{ color: "#7A65E1" }}>Start planning your trip</h1>
              </div>
            </div>
          </div>
          <div className='gallery-container'>
            <h1>Top Destinations</h1>
            <h5>Tick one more destination off of your bucket list with one of our most popular vacations in 2022</h5>
            <div className='image-gallery'>
              {galleryData.map((data, index) => (
                <div key={index} className='image-item'>
                  <img src={data.src} alt={`Gallery Image ${index + 1}`} />
                  <p>{data.text}</p>
                  <div className='overlay'></div>
                </div>
              ))}
            </div>
          </div>
          <div className='category-container'>
            <div className='category-item active'>
              <h2>Category Name</h2>
            </div>
            <div className='category-item'>
              <h2>Category Name</h2>
            </div>
            <div className='category-item'>
              <h2>Category Name</h2>
            </div>
            <div className='category-item'>
              <h2>Category Name</h2>
            </div>
            <div className='category-item'>
              <h2>Category Name</h2>
            </div>
            <div className='category-item'>
              <h2>Category Name</h2>
            </div>
            {/* Add more categories as needed */}
          </div>
          <div className='postviews-container'>
            <div className='box'>
              <div>
                <img src={PostPicture} alt='PostPicture' />
                <h2>1 Month Ago</h2>
                <h1>Tick one more destination off of your bucket list with one of our most popular vacations in 2022</h1>
                <p>lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.</p>
                <h1 className="view-post">View Post</h1>
              </div>
              <div className='images-texts-container'>
                <div className='images-container'>
                  {postpicdata.map((data, index) => (
                    <div key={index}>
                      <img src={data.src} alt={`PostPicImage ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <div className='texts-container'>
                  {postpicdata.map((data, index) => (
                    <div key={index} className='texts'>
                      <h2>{data.text}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='box2'>
              <div className='images-texts-container'>
                <div className='images-container'>
                  {postpicdata.map((data, index) => (
                    <div key={index} style={{ marginTop: "10px", marginLeft: "10px" }}>
                      <img src={data.src} alt={`PostPicImage ${index + 1}`} style={{ width: "100px", height: "70px" }} />
                    </div>
                  ))}
                </div>
                <div className='texts-container'>
                  {postpicdata.map((data, index) => (
                    <div key={index} className='texts'>
                      <h2>{data.text}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className='footer'>
        <p>Designed & Developed by XP DESIGN</p>
        <div className='footer-icons-container'>
        <a className='footer-social-icon' href="#">
            <img src={FaceBookIcon} alt="Facebook" />
        </a>
        <a className='footer-social-icon' href="#">
            <img src={InstaIcon} alt="Instagram" />
           
        </a>
        <a className='footer-social-icon' href="#">
            <img src={TwitterIcon} alt="Twitter" />
           
        </a>
        <a className='footer-social-icon' href="#">
            <img src={YouTubeIcon} alt="YouTube" />
          
        </a>


        </div>
      </footer>
    </div>
  );
}

export default Header;
