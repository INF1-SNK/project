import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from "../components/Card/Card";
import { useParams } from 'react-router-dom';
import { Header } from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Text from "../components/Text/Text";
import './style/barPresentation.css'

//import Link from "../components/Link/Link";


const BarPresentation = () => {

    //On crée notre variable qui vas nous permettre d'utiliser le useNavigate afin de bouger de page en page 
    const navigate = useNavigate();
    const params = useParams();
    const barId = params.id;
    const [bar, setBar] = useState([]);
    
    console.log(barId);

    const fetchBar = async () => {
        const response = await fetch(`https://api.openbrewerydb.org/breweries/${barId}`);
        const bar = await response.json();
        setBar(bar);
        console.log(bar)
    }


    useEffect(() => { fetchBar(); }, [])

    console.log(params)
    console.log(bar)

//Il faut recuperer le bon bar et les données de celui sur lequel on a cliqué pour les mettre dans la cards 

    return (
       <>
            <Header></Header>
            <Navbar menu={[
                <Link to="/ListOfBar">Access to list of bars </Link>,
                <Link to="/contactUs"> Contact Us PAGE </Link>
                ]}></Navbar>
            <h1>Bar presentation  </h1>

            <div className='single-bar-card'>
                <Card format = "large" color = "white" title = {bar.name} tag = {bar.country} description = {"Address : " + bar.street+ ", " + bar.city + (bar.state != null ? ", " + bar.state : "")}/>
                <div>
                    <Text content={"Phone number : " + bar.phone}></Text>
                    <a href={bar.website_url}>{bar.website_url}</a>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default BarPresentation;