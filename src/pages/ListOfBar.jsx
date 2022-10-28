import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";
import Description from "../components/Description/Description";
import './style/barList.css';

const ListOfBar = () => {
    const [bars, setBars] = useState([]);
    const navigate = useNavigate();


const fetchBars = async () => {
        const response = await fetch(`https://api.openbrewerydb.org/breweries/random?size=6`);
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
            ]}>
        </Navbar>

        <div className="App">

        <Title text="Here the list of our bars "/> 
        <Description text = "Let click on one of it to see more information about it " size = "large"/>

        <button onClick={() => navigate('/listOfBar')}> Click here to show other bars </button>
                

          <div className='cardsContainer'>
              {bars && bars.map((bar, index) =>
                    <div className="barCard"> 
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