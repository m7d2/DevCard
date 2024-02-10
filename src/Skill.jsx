export default function Skill(props) {
  return (
    <div
      className="skill"
      style={{
        border: `5px ${props.bStyle}  ${props.bColor}`,
        background: `${props.bColor}`,
        color: `${props.tColor}`,
        fontSize: `${props.textSize}`,
        textAlign: "center",
      }}
    >
      <h3>{props.skillName}</h3>
    </div>
  );
}
