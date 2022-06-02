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
            </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
