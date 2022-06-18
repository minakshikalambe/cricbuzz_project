import { Footer } from "./footer"
import { Navbar } from "./Navbar"
import"./LiveScore.css"

export const LiveScore=()=>{

    return(
       <>
       <Navbar/>
       <div className="login_container">
         <div className="current_matches">
            <div className="current_matches1">
                <p>Current Matches</p>
            </div>
            <div className="current_matches2">
                <p>Current & Future Series</p>
            </div>
            <div className="current_matches3">
                <p>Matches By Day</p>
            </div>
            <div className="current_matches3">
                <p>Teams</p>
            </div>
            <div className="current_matches3">
                <p>Series Archive</p>
            </div>
         </div>
         <div className="Cricket">
            <h2>Live Cricket Score</h2>
         </div>
         <div className="live_cricket">
            <div>Live</div>
            <div>Recent</div>
            <div>Upcoming</div>
         </div>
         <hr></hr>
         <div className="login_container_sub1">
            <div className="internal_div">
                <div className="international">
                    International
                </div>
                <div className="international1"> 
                    Domestic
                </div>
            </div>
            <div className="bangladesh_tour">
                <h3>BANGLADESH TOUR OF WEST INDIES, 2022</h3>
            </div>
            <div className="West_Indies">
                <div className="West_Indies1">
                    <span><h5>Bangladesh vs West Indies,</h5></span>
                    <span><p>1st Test</p></span>
                </div>
                <p>Jun 16 - Jun 21  •  7:30 PM at North Sound, Antigua, Sir Vivian Richards Stadium</p>
            </div>
            <div className="ban">
                <span>BAN</span>
                <span>103</span>
                <p>
                    <span>WI</span>
                    <span>95-2</span>
                </p>
                <div>Day 1:Stumps-West Indies trail by 8 runs</div>
            </div>
            <div className="Scoreboard">
                <div className="border1">Live Score</div>
                <div className="border"></div>
                <div className="border1">ScoreCard</div>
                <div className="border"></div>
                <div className="border1">Full Commentary</div>
                <div className="border"></div>
                <div className="border1">News</div>
                <div className="border"></div>
            </div>
         </div>
       </div>
       <Footer/>
       </>
    )
}