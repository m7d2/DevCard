import "./styles.css";
import Avatar from "./Avatar.jsx";
import Intro from "./Intro.jsx";
import SkillList from "./SkillList.jsx";

export default function App() {
  return (
    <div className="card">
      <Avatar
        ImgSrc={
          "https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/smudge-the-viral-cat.jpg"
        }
      />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
      for each web dev skill that you have,
      customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
