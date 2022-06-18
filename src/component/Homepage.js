import { Navbar } from './Navbar';
import { Footer } from './footer';
import './Homepage.css';
export const Homepage=()=>{
  
    return(
      <>
      <Navbar/>
        <div className="container">
          <div className="box1">
            <div className="featured-matches">
                <p>
                FEATURED MATCHES
                </p>
            </div>
            <div className="featured-matches2">
                <div className="featured-matches2-sub">
                    <div className="featured-matches2-sub-div">
                        <p>MP</p>
                        <p>341</p>
                    </div>
                    <div className="featured-matches2-sub-div2">
                        <p>BEN</p>
                        <p>197-5</p>
                    </div>
                    <div className="featured-matches2-sub-div3">
                       <p>Day 2: Stumps - Bengal trail by 144 runs</p>
                    </div>
                </div>
                <div className="featured-matches2-sub">
                    <div className="sri">
                      <p>Sri Lanka</p>
                    </div>
                    <div className="sri">
                      <p>Australia</p>
                    </div>
                    <div className="sri2">
                      <p>Thursday, 16 Jun, 02:30 PM</p>
                    </div>
                </div>
                <div className="featured-matches2-sub">
                    <div className="sri">
                      <p>West Indies</p>
                    </div>
                    <div className="sri">
                      <p>Bangladesh</p>
                    </div>
                    <div className="sri2">
                      <p>Thursday, 16 Jun, 07:30 PM</p>
                    </div>
                </div>
                <div className="featured-matches2-sub">
                    <div className="featured-matches2-sub-div">
                        <p>IND</p>
                        <p>179-5</p>
                    </div>
                    <div className="featured-matches2-sub-div2">
                        <p>RSA</p>
                        <p>131(91.1)</p>
                    </div>
                    <div className="featured-matches2-sub-div4">
                       <p>India won by 48 runs</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="box2">
            <div className="box2_sub1">
                <div className="latest_news">
                    <p>LATEST NEWS</p>
                </div>
                <div className="latest_news2">
                  <p className="latest_news2_p">KL Rahul set to miss England tour, to go abroad for treatment</p>
                  <p className="time">1h ago</p>
                </div>
                <div className="latest_news2">
                  <p className="latest_news2_p">Roach added to West Indies Test squad</p>
                  <p className="time">6h ago</p>
                </div>
                <div className="latest_news2">
                  <p className="latest_news2_p">Bangladesh include Anamul Haque for second Test against West Indies</p>
                  <p className="time">15h ago</p>
                </div>
                <div className="latest_news2">
                  <p className="latest_news2_p">Mustafizur shouldn't be forced to play Test cricket</p>
                  <p className="time">17h ago</p>
                </div>
                <div className="latest_news2">
                  <p className="latest_news2_p">Markram ruled out of last two T20Is vs India</p>
                  <p className="time">17h ago</p>
                </div>
                <div className="latest_news2">
                  <p className="latest_news2_p">Hardik to captain in Ireland T20Is; Samson, Tripathi picked</p>
                  <p className="time">17h ago</p>
                </div>
            </div>
            <div className="box2_sub2">
              <div className="card">
                <p className="UPDATE">INJURY UPDATE</p>
                <div className="img_div">
                <img src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c236030/kl-rahul-set-to-miss-england-t.jpg"/>
                </div>
                <div className="title_img">
                  <h3>KL Rahul set to miss England tour, to go abroad for treatment</h3>
                </div>
                <p className="title_img_sub">The current India vice-captain is set to miss the entire tour and go to Germany for his injury treatment</p>
                <hr/>
              </div>
              <div className="card">
                <p className="UPDATE">SL VS AUS, 2ND ODI</p>
                <div className="img_div">
                <img src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c236032/dhananjaya-mendis-prop-up-sri.jpg"/>
                </div>
                <div className="title_img">
                  <h3>Dhananjaya, Mendis prop up Sri Lanka</h3>
                </div>
                <p className="title_img_sub">The hosts lost a couple of early wickets</p>
                <hr/>
              </div>
              <div className="card">
                <p className="UPDATE">INDIA IN IRELAND, 2022</p>
                <div className="img_div">
                <img src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c236020/hardik-to-captain-in-ireland-t.jpg"/>
                </div>
                <div className="title_img">
                  <h3>Hardik to captain in Ireland T20Is; Samson, Tripathi picked</h3>
                </div>
                <p className="title_img_sub">Suryakumar returns; Bhuvneshwar to serve as Hardik's deputy</p>
                <hr/>
              </div>
              <div className="card">
                <p className="UPDATE">SOUTH AFRICA TOUR OF INDIA 2022</p>
                <div className="img_div">
                <img src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c236006/chahal-mastery-keeps-south-afr.jpg"/>
                </div>
                <div className="title_img">
                  <h3>Chahal mastery keeps South Africa in check</h3>
                </div>
                <p className="title_img_sub">The leggie finished with figures that read: 4 overs, 11 dots, 20 runs, 3 wickets as South Africa crumbled in chase</p>
                <hr/>
              </div>
              <div className="card">
                <p className="UPDATE">IPL MEDIA RIGHTS 2023-27</p>
                <div className="img_div">
                <img src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c236003/space-for-two-in-the-ipl-right.jpg"/>
                </div>
                <div className="title_img">
                  <h3>Space for two in the IPL rights pie</h3>
                </div>
                <p className="title_img_sub">Digital India drives IPL's valuation on global lanes, enhancing the brand and reputation of this prospering T20 league</p>
                <hr/>
              </div>
              <div className="card">
                <p className="UPDATE">WAY BACK TO CRICKET</p>
                <div className="img_div">
                <img src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c236011/i-beat-cancer-because-i-wante.jpg"/>
                </div>
                <div className="title_img">
                  <h3>"I beat cancer because I wanted to play cricket"</h3>
                </div>
                <p className="title_img_sub">Kamal Singh, an opening batter for Uttarakhand, doesn't like to carry the burden of the past. It's a part of his personality, much like the way he views his battle with blood cancer</p>
                <hr/>
              </div>
            </div>
            <div className="box2_sub3">
               <h4 className="featured_video">FEATURED VIDEO</h4>
               <div className="featured_card">
                <div className="featured_card_img">
                  <img src="https://www.cricbuzz.com/a/img/v1/290x164/i1/c236029/hardik-to-lead-india-in-irelan.jpg"/>
                </div>
                <h5>What does it take to win, and not to win, the IPL</h5>
                <p>3h ago</p>
               </div>
               <div className="featured_card">
                <div className="featured_card_img">
                  <img src="https://www.cricbuzz.com/a/img/v1/290x164/i1/c235916/answered-does-toss-determine.jpg"/>
                </div>
                <h5> Does Toss determine results in a T20 game?</h5>
                <p>6h ago</p>
               </div>
               <div className="featured_card">
                <div className="featured_card_img">
                  <img src="https://www.cricbuzz.com/a/img/v1/290x164/i1/c235983/indias-clinical-win-will-fill.jpg"/>
                </div>
                <h5> India का clinical प्रदर्शन, जीत देगी आत्मविश्वास: Ashish Nehra</h5>
                <p>1d ago</p>
               </div>
               <div className="featured_card">
                <div className="featured_card_img">
                  <img src="https://www.cricbuzz.com/a/img/v1/300x170/i1/c235456/sarfaraz-khan-has-been-in-terr.jpg"/>
                </div>
                <h5> In the world of Sarfaraz Khan</h5>
                <p>2d ago</p>
               </div>
               <div className="featured_card">
                <div className="featured_card_img">
                  <img src="https://www.cricbuzz.com/a/img/v1/300x170/i1/c232369/in-ipl-2022-kohli-has-found-h.jpg"/>
                </div>
                <h5> In the world of Sarfaraz Khan</h5>
                <p>2d ago</p>
               </div>
               <div className="featured_card">
                <div className="featured_card_img">
                  <img src="https://www.cricbuzz.com/a/img/v1/300x170/i1/c234687/how-given-all-that-could-it.jpg"/>
                </div>
                <h5> What does it take to win, and not to win, the IPL</h5>
                <p>2d ago</p>
               </div>
               <div className="featured_card">
                <div className="featured_card_img">
                  <img src="https://www.cricbuzz.com/a/img/v1/300x170/i1/c228929/as-head-coach-of-delhi-capital.jpg"/>
                </div>
                <h5>The Ricky Ponting doctrine: inside the mind of the IPL coach</h5>
                <p>2d ago</p>
               </div>
               <div className="featured_card">
                <div className="featured_card_img">
                  <img src="https://www.cricbuzz.com/a/img/v1/300x170/i1/c231869/he-made-six-hitting-the-norm-i.jpg"/>
                </div>
                <h5>Chris Gayle: IPL's Six Appeal</h5>
                <p>2d ago</p>
               </div>
               <div className="featured_card">
                <div className="featured_card_img">
                  <img src="https://www.cricbuzz.com/a/img/v1/300x170/i1/c230280/du-plessis-is-leading-rcbs-qu.jpg"/>
                </div>
                <h5>What makes Faf tick as a captain</h5>
                <p>2d ago</p>
               </div>
            </div>
          </div>
        </div>
        <Footer/>
        </>
    )
}