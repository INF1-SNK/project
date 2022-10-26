import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from "../components/Card/Card";

const ListOfBar = () => {

    const navigate = useNavigate();
    const [bars, setBars] = useState([]);
    

    const fetchBars = async () => {
        const response = await fetch(`https://api.openbrewerydb.org/breweries/random?size=3`);
        const bars = await response.json();
        setBars(bars.message);
    }
    
    useEffect(() => {fetchBars(); }, [])

//Ne pas oublier d'ajouter l'index au link pour qu'il affiche les données correspondant au truc sur lequelle on a cliqué
    return (
        <div>

            <h1>Bar presentation </h1>

            <div className='cardsContainer'>
                
                {bars && bars.map((bar, index) => <Link to="/barPresentation"><Card key={index} format = "large" color = "white" title = "{bar.name}" tag = "{bar.country}}" description = "description of the bar or his adress"/> </Link>)}
            </div>

            <Link to="/"> Home </Link>
            <br/>
            <button onClick={() => navigate('/')}> HOME Page </button>
            <br/> <br/>
            <Card format = "large" color = "white" title = "Name of the bar" tag = "Contrie" description = "description of the bar or his adress" />

        </div>
    );
}

export default ListOfBar;