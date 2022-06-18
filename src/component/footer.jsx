import footerlog2 from"./images/Screenshot (1343).png"
import footerlog3 from"./images/Screenshot (1349).png"
import footerlog4 from"./images/Screenshot (1345).png"
import"./footer.css"
import footerlog from "./images/Screenshot (1342).png"
export const Footer=()=>{ 
return(
       <div className="footer_container">
        <div className="footer_container1">
            <div className="footer_container_sub1">
                <img src={footerlog}/>
            </div>
            <div className="footer_container_sub2">
                <div className="footer_container_sub_sub2">
                    <img  src={footerlog2}/>
                </div>
                <div className="footer_container_sub_sub2">
                    <img  src={footerlog3}/>
                </div>
            </div>
            <div className="footer_container_sub_sub2">
                <img src={footerlog4}/>
            </div>
        </div>
        <div className="footer_container2">
            <p>© 2022 Cricbuzz.com, Times Internet Limited. All rights reserved | The Times of India | Navbharat Times</p>
        </div>
       </div>
    )
}