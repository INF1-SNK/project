import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from "../components/Card/Card";
import { useParams } from 'react-router-dom';


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
        <div>

            <h1>Bar presentation  </h1>

            <div className='cardsContainer'>
                 <Card format = "large" color = "white" title = "{bar.name}" tag = "{bar.country}}" description = "description of the bar or his adress"/>
            </div>

            <Link to="/ListOfBar"> Acess to list of bars </Link>
            <br/>
            <button onClick={() => navigate('/')}> Go Home </button>
            <br/> <br/>
            <Card format = "large" color = "white" title = "Name of the bar" tag = "Contrie" description = "description of the bar or his adress" />

        </div>
    );
}

export default BarPresentation;