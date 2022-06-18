import { Footer } from "./footer"
import { Navbar } from "./Navbar"
import"./Archives.css"
export const Archives=()=>{
   
    return(
        <>
       <Navbar/>
       <div className="archives_container">
       <div className="current_matches">
            <div className="current_matches1">
                <p>Series Archive</p>
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
                <p>Current Matches</p>
            </div>
         </div>
         <div className="cricket_archives1">
            <div className="cricket_archives1_div">
                <h3 className="cricket_archives1_h1">Cricket Match Archives</h3>
                <h3 className="cricket_archives1_h2">2022</h3>
            </div>
            <div className="international_div">
                <div className="international_div_sub">
                    <h5>International</h5>
                </div>
                <div className="international_div2">
                    <div className="international_div3">
                    <span><h5>England tour of Netherlands,2022 </h5></span>
                    <span><p>Jun 17 - Jun 22</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Bangladesh tour of West Indies, 2022 </h5></span>
                    <span><p> Jun 16 - Jul 16</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>SMalta tour of Belgium, 2022  </h5></span>
                    <span><p>Jun 11 - Jun 12</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Switzerland tour of Luxembourg, 2022 </h5></span>
                    <span><p> Jun 11 - Jun 11</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Germany T20I Tri-Series 2022 </h5></span>
                    <span><p> Jun 09 - Jun 12</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>South Africa tour of India, 2022  </h5></span>
                    <span><p>Jun 09 - Jun 19</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Australia tour of Sri Lanka, 2022 </h5></span>
                    <span><p>Jun 07 - Jul 12 </p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Afghanistan tour of Zimbabwe, 2022 </h5></span>
                    <span><p>Jun 04 - Jun 14 </p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Hungary tour of Austria, 2022  </h5></span>
                    <span><p>Jun 04 - Jun 05 </p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>West Indies tour of Netherlands, 2022</h5></span>
                    <span><p>May 31 - Jun 04 </p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Jersey tour of Guernsey, 2022 </h5></span>
                    <span><p>May 20 - May 22</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>New Zealand tour of England, 2022  </h5></span>
                    <span><p>May 20 - Jun 27</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Namibia tour of Zimbabwe, 2022  </h5></span>
                    <span><p>May 17 - May 24</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Sri Lanka tour of Bangladesh, 2022 </h5></span>
                    <span><p> May 11 - May 27</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Valletta Cup 2022 </h5></span>
                    <span><p> May 10 - May 15</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Finland tour of Denmark, 2022</h5></span>
                    <span><p>  May 07 - May 08</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Spain Triangular T20I Series, 2022</h5></span>
                    <span><p> Apr 29 - May 01</p></span>
                    </div>
                    <div className="international_div3">
                    <span><h5>Bahamas tour of Cayman Islands, 2022</h5></span>
                    <span><p>  Apr 13 - Apr 17</p></span>
                    </div>
                </div> 
            </div>
           
         </div>
         <div className="international_div4"></div>
       </div>
       <Footer/>
       </>
    )
}