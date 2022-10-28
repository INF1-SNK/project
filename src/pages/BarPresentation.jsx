import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from "../components/Card/Card";
import { useParams } from 'react-router-dom';
import Dropdown from "../components/Dropdown/Dropdown";
import { Header } from "../components/Header/Header";
import Title from "../components/Title/Title";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Text from "../components/Text/Text";
import './style/barPresentation.css'

const BarPresentation = () => {

    //On crée notre variable qui vas nous permettre d'utiliser le useNavigate afin de bouger de page en page 
    const navigate = useNavigate();
    const params = useParams();
    const barId = params.id;
    const barDescription="";
    const [bar, setBar] = useState([]);
    
    let fetchBar
    if (barId === undefined){ 
        fetchBar = async () => {
            const response = await fetch('https://api.openbrewerydb.org/breweries/random');
            const bar = await response.json();
            setBar(bar[0]);
        }
    } else {
        fetchBar = async () => {
            const response = await fetch(`https://api.openbrewerydb.org/breweries/${barId}`);
            const bar = await response.json();
            setBar(bar);
        }
    }

    useEffect(() => { fetchBar(); document.title="Bar details";}, [])
    console.log(bar);
    return (
       <>
            <Header></Header>
            <Navbar menu={[
                <Dropdown label='Bars' menu={[{content:'List of bars', url:"/ListOfBar"}, {content:'A random bar', url:"/listOfBar/barInformation/" }]}></Dropdown>,
                <Link to="/contactUs"> Contact Us PAGE </Link>
                ]}>
            </Navbar>
            <div className="bodyBarInformation">

                <Title className="titleBodyBarInformation" text="Information on this bar"/> 

                <div className='single-bar-card'>
                    <Card format = "big" color = "white" title = {bar.name} tag = {bar.country} description = {"Address : " + bar.street+ ", " + bar.city + (bar.state != null ? ", " + bar.state : "")}/>
                    <div>
                        <Text content={"Phone number : " + bar.phone}></Text>
                        <a href={bar.website_url}>{bar.website_url}</a>
                    </div>
                 </div>
              </div>
            <Footer></Footer>
        </>
    );
}

export default BarPresentation;