import Skill from "./Skill";
import data from "./skills.json";

export default function SkillList() {
  return (
    <div className="skill-list">
      {data.map((skill) => (
        <Skill
          skillName={
            skill.level === "advanced"
              ? skill.skill + " 🐈"
              : skill.level === "beginner"
              ? skill.skill + " 🌲"
              : skill.level === "intermediate"
              ? skill.skill + " 🤨"
              : skill.skill
          }
          bColor={skill.color}
          tColor={skill.textColor}
          bStyle="solid"
          textSize="15"
        />
      ))}
    </div>
  );
}
