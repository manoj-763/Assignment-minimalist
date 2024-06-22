import "./About.css";
import line from "../../assets/Fram.png";
import Sparkle from '../../assets/sparkle.png'

const About = () => {
  return (
    <div>
      <div className="container">
        <img src={line} />
        <h1>About</h1>
        <img src={line} />
      </div>
      <div className="paragraph-container">
        <img src={Sparkle}/>
        <div className="paragraph">
            <p>
            Our products are crafted exclusively from the dreams and screams of
            young kids who wanted to show their mastery in their chosen fields,
            but were directed towards a factory for daily wages. Each cracker
            bursts brighter than their lost smiles, and can be heard louder than
            their cries for miles. Buy them, burst them, brag about them. The
            choice is yours. Because they don’t have one.
            </p>
            <p>
            <span>The choice is yours. Because they don’t have one.</span>
            </p>
        </div>
        <img src={Sparkle}/>
      </div>
    </div>
  );
};

export default About;
