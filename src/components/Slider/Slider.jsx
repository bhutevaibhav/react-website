import './Slider.css';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-img-wrapper">
        <img src='/img/john-profile.jpg' className="slider-img" alt="Description" />
      </div>

      <div className="slider-content">
        <h1>
          Hi, I'm Vaibhav, <br />
          <span>Creative Technologist</span>
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <button className='slider-btn' >Download Resume</button>
      </div>
    </div>
  )
}

export default Slider