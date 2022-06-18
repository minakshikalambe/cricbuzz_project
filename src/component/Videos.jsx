import { Footer } from "./footer"
import { Navbar } from "./Navbar"
import"./Videos.css"

export const Videos=()=>{
 
    return(
       <>
       <Navbar/>
       <div className="videos_container">
       <div className="schedule_div">
            <h2>Cricket Teams</h2>
         </div>
       <div className="current_matches">
            <div className="current_matches1">
                <p>All Videos</p>
            </div>
            <div className="current_matches2">
                <p>Categories</p>
            </div>
            <div className="current_matches3">
                <p>Playlist</p>
            </div>
         </div>
         <div className="latest_news">
            <h4>Latest Videos</h4>
         </div>
         <div className="video_type">
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c236156/cms-img.jpg"/>
             </div>
             <p>Rahul Dravid's backing creates environment of trust in the team: Avesh</p>
           </div>
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c236146/cms-img.jpg"/>
             </div>
             <p>Dominant India floor South Africa in 4th T20I! Cricbuzz Panel react</p>
           </div>
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c236144/cms-img.jpg"/>
             </div>
             <p>India v South Africa, 5th T20I: Preview</p>
           </div>
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c236142/cms-img.jpg"/>
             </div>
             <p>In-form Hardik brings unmatched balance to playing XI: Zaheer Khan</p>
           </div>
         </div>
         <div className="latest_news">
            <h4>India</h4>
         </div>
         <div className="video_type">
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c236156/cms-img.jpg"/>
             </div>
             <p>Rahul Dravid's backing creates environment of trust in the team: Avesh Khan</p>
           </div>
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c236146/cms-img.jpg"/>
             </div>
             <p>Dominant India floor South Africa in 4th T20I! Cricbuzz Panel react</p>
           </div>
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c236144/cms-img.jpg"/>
             </div>
             <p>India v South Africa, 5th T20I: Preview</p>
           </div>
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c236142/cms-img.jpg"/>
             </div>
             <p>In-form Hardik brings unmatched balance to playing XI: Zaheer Khan</p>
           </div>
         </div>
         <div className="latest_news">
            <h4>Playlists</h4>
         </div>
         <div className="video_type">
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c235439/cms-img.jpg"/>
             </div>
             <p>South Africa's tour of India, 2022</p>
           </div>
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c219608/cms-img.jpg"/>
             </div>
             <p>IPL 2022</p>
           </div>
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c228444/cms-img.jpg"/>
             </div>
             <p>Women's World Cup, 2022</p>
           </div>
           <div className="video_type1">
             <div className="video_type_img">
                <img src="https://www.cricbuzz.com/a/img/v1/220x124/i1/c236142/cms-img.jpg"/>
             </div>
             <p>In-form Hardik brings unmatched balance to playing XI: Zaheer Khan</p>
           </div>
         </div>
       </div>
       <Footer/>
       </>
    )
}