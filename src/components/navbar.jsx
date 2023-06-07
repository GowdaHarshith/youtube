import YTLogo from '../images/YTLogo.png'
import notification from '../images/notification.png'
import video from '../images/video.png'
import '../styles/navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="log">
                <img width={150}src={YTLogo} alt="" />
            </div>
            <div className="searchBar">
                <input type="text" placeholder='Search' />
            </div>
            <div className="userOptions">
                <img width={30} src={video} alt=""/>
                <img width={30} src={notification} alt=""/>
                <h4>H</h4>
            </div>
        </div>
    )
}
export default Navbar;