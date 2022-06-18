
import { Link } from "react-router-dom";
import logo from './images/Screenshot (1340).png'
import search from"./images/Screenshot (1341).png"
import profile from"./images/Screenshot (1348).png"
import './Navbar.css';
export const Navbar=()=>{
    
    return(
        <div className="main">
           <div className="main1">
            <div className="logodiv">
                <img src={logo} className="logo"/>
            </div>
            <div className="liveScore">
                <Link  to="/liveScore" className="livescore1">LiveScore</Link>
            </div>
            <div className="liveScore">
                <Link  to="/schedule" className="livescore1">Schedule</Link>
            </div>
            <div className="liveScore">
                <Link  to="/archives" className="livescore1">Archives</Link>
            </div>
            <div className="liveScore">
                <Link  to="/news" className="livescore1">News</Link>
            </div>
            <div className="liveScore">
                <Link  to="/series" className="livescore1">Series</Link>
            </div>
            <div className="liveScore">
                <Link  to="/teams" className="livescore1">Teams</Link>
            </div>
            <div className="liveScore">
                <Link  to="/videos" className="livescore1">Videos</Link>
            </div>
            <div className="liveScore">
                <Link  to="/rankings" className="livescore1">Rankings</Link>
            </div>
            <div className="liveScore">
                <Link  to="/more" className="livescore1">More</Link>
            </div>
            <div className="cricbuzz_plus">
                <Link  to="/teams" className="cricbuzz_plus1">Cricbuzz Plus</Link>
            </div>
            <div className="search">
                <Link  to="/" >
                    <img src={search} className="search1"/>
                </Link>
            </div>
            <div className="search2">
                <Link  to="/profile" >
                    <img src={profile} className="search1"/>
                </Link>
            </div>
           </div>
           <div className="main2">
            <div className="matches">
                <p>
                MATCHES
                </p>
            </div>
            <div className="stumps">
                 <p>
                    MPvsBEN-Stupms
                 </p>
            </div>
            <div className="stumps">
                 <p>
                    SLvsAUR-Preview
                 </p>
            </div>
            <div className="stumps">
                 <p>
                     WIvsBAN-preview 
                 </p>
            </div>
            <div className="stumps">
                 <p>
                     INDvsRSA-IND Won
                 </p>
            </div>
            <div className="stumps">
                 <p>
                     NZvsENG-ENG Won
                 </p>
            </div>
            <div className="stumps2">
                
            </div>
            <div className="stumps3">
                 <p>
                     ALL
                 </p>
            </div>
           </div>
        </div>
    )
}