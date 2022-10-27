import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Button } from "../components/Button/Button";
import './style/barList.css';

const ListOfBar = () => {
    const navigate = useNavigate();
    const [bars, setBars] = useState([]);


const fetchBars = async () => {
        const response = await fetch(`https://api.openbrewerydb.org/breweries/random?size=9`);
        const bars = await response.json();
        setBars(bars);
    }

    useEffect(() => { fetchBars(); }, [])
    return (
      <>
        <Header></Header>
        <Navbar menu={[
                    <Link to="/ListOfBar">Access to list of bars </Link>,
                    <Link to="/contactUs"> Contact Us PAGE </Link>
                ]}></Navbar>
        <div className="App">
          <div className='cardsContainer'>
            {bars && bars.map((bar, index) =>
                  <div> 
                      <Link to={'barInformation/' + bar.id} key={bar.id} > 
                      <Card format = "large" color = "white" title = {bar.name} tag = {bar.country} description = {bar.street+ ", " + bar.city + (bar.state != null ? ", " + bar.state : "" )}/>    
                      </Link><br/> 
                  </div>          
            )}
          </div>
        </div>
        <Footer></Footer>
      </>
    );
}


export default ListOfBar;