import YTLogo from "../images/YTLogo.png";
import notification from "../images/notification.png";
import video from "../images/video.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="log">
        <img width={150} src={YTLogo} alt="" />
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="userOptions">
        <Link to="/">Home</Link>
        <Link to="/add-video">Add Video</Link>
        {/* by using anchor tag it will lead to reload the page so use Link by importing it is present in browserRouter */}
        {/* in place of a write Link and in place of href write to
         it Link to that page which is present in browser router */}
        {/* <a href="/">Home</a>
        <a href="/add-video">Add Video</a> */}

        {/* <img width={30} src={video} alt=""/>
                <img width={30} src={notification} alt=""/> */}
        <h4>H</h4>
      </div>
    </div>
  );
}
export default Navbar;
