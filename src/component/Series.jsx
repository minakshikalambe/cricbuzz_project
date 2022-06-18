import"./Series.css"
import { Footer } from "./footer";
import { Navbar } from "./Navbar";

export const Series=()=>{
   
    return(
      <>
      <Navbar/>  
      <div className="series_container">
      <div className="current_matches">
            <div className="current_matches1">
                <p>Current & Future Series</p>
            </div>
            <div className="current_matches5">
                <p>Series Archive</p>
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
         <div className="schedule_div">
            <h2>Cricket Schedule</h2>
         </div>
         <div className="domestic_div">
            <div className="domestic_div_sub">International</div>
            <div className="domestic_div_sub2">Domestic & Others</div>
            <div className="domestic_div_sub2">T20 Leagues</div>
            <div className="domestic_div_sub2">Women</div>
            <div className="domestic_div_sub2">All Matches</div>
         </div>
         <div className="series_container_sub2">
            <div className="month_div">
                <div className="month_div1">
                    <p>Month</p>
                </div>
                <div className="month_div2">
                    <p>August 2019</p>
                </div>
                <div className="month_div2">
                    <p>May 2022</p>
                </div>
                <div className="month_div2">
                    <p>June 2022</p>
                </div>
            </div>
            <div className="series_name_div">
                <div className="series_name_div1">
                   <p>Series Name</p>
                </div>
                <div className="series_name_div2">
                   <p>ICC Cricket World Cup League Two 2019-23</p>
                   <p>Aug 14 - Aug 21</p>
                   <hr/>
                </div>
                <div className="series_name_div2">
                   <p>New Zealand tour of England, 2022</p>
                   <p>May 20 - Jun 27</p>
                   <hr/>
                </div>
                <div className="series_name_div2">
                   <p>Australia tour of Sri Lanka, 2022</p>
                   <p>Jun 07 - Jul 12</p>
                   <hr/>
                </div>
                <div className="series_name_div2">
                   <p>South Africa tour of India, 2022</p>
                   <p>Jun 09 - Jun 19</p>
                   <hr/>
                </div>
                <div className="series_name_div2">
                   <p>Bangladesh tour of West Indies, 2022</p>
                   <p>Jun 16 - Jul 16</p>
                   <hr/>
                </div>
                <div className="series_name_div2">
                   <p>England tour of Netherlands, 2022</p>
                   <p>Jun 17 - Jun 22</p>
                   <hr/>
                </div>
                <div className="series_name_div2">
                   <p>Estonia tour of Finland, 2022</p>
                   <p>Jun 19 - Jun 19</p>
                   <hr/>
                </div>
                <div className="series_name_div2">
                   <p>Serbia tour of Bulgaria, 2022</p>
                   <p>Jun 24 - Jun 26</p>
                   <hr/>
                </div>
                <div className="series_name_div2">
                   <p>India tour of England, 2022</p>
                   <p>Jun 24 - Jul 17</p>
                   <hr/>
                </div>
            </div>
         </div>
      </div> 
      <Footer/>   
      </>
    )
}