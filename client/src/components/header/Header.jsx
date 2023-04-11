import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span> */}
        <span className="headerTitleLg">RECIPES</span>
      </div>
      <img
        className="headerImg"
        src="./images/black.jpg"
        alt=""
      />
    </div>
  );
}
