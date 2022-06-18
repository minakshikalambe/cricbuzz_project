import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import{Routes,Route} from"react-router-dom";
import { Homepage } from './component/Homepage';
import{Login}from"./component/login";
import { LiveScore } from './component/LiveScore';
import { Schedule } from './component/Schedule';
import { Archives } from './component/Archives';
import { News } from './component/News';
import { Series } from './component/Series';
import { Teams } from './component/Teams';
import { Videos } from './component/Videos';
function App() {
  return (
    <div >
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/liveScore" element={<LiveScore/>}></Route>
      <Route path="/schedule" element={<Schedule/>}></Route>
      <Route path="/archives" element={<Archives/>}></Route>
      <Route path="/news" element={<News/>}></Route>
      <Route path="/series" element={<Series/>}></Route>
      <Route path="/teams" element={<Teams/>}></Route>
      <Route path="/videos" element={<Videos/>}></Route>
      <Route path="/profile" element={<Login/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
