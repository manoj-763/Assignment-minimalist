import "./Hero.css";
import logo from '../../assets/Frame.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="logo">
        <img src={logo}/>
      </div>
      <div className="content">
        <div className="heading-content">
            <h2>The choice is yours. Because they don’t have one.</h2>
            <button className="button">Quick View</button>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
