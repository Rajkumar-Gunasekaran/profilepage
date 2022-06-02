import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Footer from './components/Footer'
import Home from './components/Home'
function App() {
  return (
    <div className="App" class="bg-dark">
      <Navbar />
      <Header />
      <div className='row'>
        <div className='col-lg-3'>
          <Sidebar />
        </div>
        <div className='col-lg-9'>
          <Home />
        </div>
      </div>
      <Body />
      <div>
        <h style={{ color: "gray" }}><b><u>Education :</u></b></h>
        <ul style={{ color: "gray" }}>
          <li><a href="https://www.kpriet.ac.in/">KPR Institute of Engineering And Technology - ( Btech Artificial Intelligence and data Science 2021 - 2025 )</a></li>
          <li><a href="https://thengpschool.ac.in/">The NGP School - ( AISSCE , AISSE 2016-2021 )</a></li>
          <li><a href="http://www.kannammalgroup.com/">Kannamal national Hr secondary school - ( 2009-2016 )</a></li>
        </ul>
      </div>
      <div align="center" ><font size="+1">
        <h style={{ color: "gray" }} ><b><u>CERTIFICATIONS</u></b></h>
        <ul style={{ color: "gray" }} class="list-group" align="center">
          <li>
            professional certificate in machine learning (2020)
          </li>
          <li>
            Introduction to AI(2020)
          </li>
          <li>
            Deep learning with Python (2020)
          </li>
          <li>
            UI & UX design (2020)
          </li>
          <li>
            Google analytics (2021)
          </li>
          <li>
            Azure Data Engineer Associate (2021)
          </li>
          <li></li>
        </ul>
        </font>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <ul>
            <li align="center" class="list-group-item bg-dark" style={{ color: "gray" }}><b>Area of Interests</b></li>
            <li align="center" class="list-group-item bg-dark" ><a class="dropdown-item" href="https://www.investopedia.com/terms/b/blockchain.asp" style={{ color: "gray" }}>Blockchain</a></li>
            <li align="center" class="list-group-item bg-dark" ><a class="dropdown-item" href="https://www.techtarget.com/searchsecurity/definition/cybersecurity#:~:text=Cybersecurity%20is%20the%20protection%20of,centers%20and%20other%20computerized%20systems." style={{ color: "gray" }}>Cybersecurity</a></li>
            <li align="center" class="list-group-item bg-dark" ><a class="dropdown-item" href="https://www.ibm.com/topics/automation#:~:text=Automation%20is%20a%20term%20for,as%20home%20automation%20and%20more." style={{ color: "gray" }}>Automation</a></li>
            <li align="center" class="list-group-item bg-dark" ><a class="dropdown-item" href="https://www.splunk.com/en_us/data-insider/what-are-augmented-reality-and-virtual-reality.html#:~:text=Augmented%20reality%20(AR)%20augments%20your,environment%20with%20a%20simulated%20one." style={{ color: "gray" }}>VR and AR</a></li>
            <li align="center" class="list-group-item bg-dark" ><a class="dropdown-item" href="https://en.wikipedia.org/wiki/Video_game_industry#:~:text=The%20video%20game%20industry%20has,to%20the%20ESA%20annual%20report." style={{ color: "gray" }}>Video game industry</a></li>
          </ul>
        </div>
        <div className="col-lg-6">
        <ul>
            <li align="center" class="list-group-item bg-dark" style={{ color: "gray" }}><b>Soft skills</b></li>
            <li align="center" class="list-group-item bg-dark" ><u   style={{ color: "gray" }}>Good communication skills</u></li>
            <li align="center" class="list-group-item bg-dark" ><u   style={{ color: "gray" }}>Adaptablity</u></li>
            <li align="center" class="list-group-item bg-dark" ><u   style={{ color: "gray" }}>Critical Thinking</u></li>
            <li align="center" class="list-group-item bg-dark" ><u   style={{ color: "gray" }}>Time management</u></li>
            <li align="center" class="list-group-item bg-dark" ><u   style={{ color: "gray" }}>Team player</u></li>
          </ul>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
