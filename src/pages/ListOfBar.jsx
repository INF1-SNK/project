import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from "../components/Card/Card";

const ListOfBar = () => {

    const [bars, setBars] = useState([]);
    
    const fetchBars = async () => {
        const response = await fetch(`https://api.openbrewerydb.org/breweries/random?size=9`);
        const bars = await response.json();
        setBars(bars);
    }

    useEffect(() => { fetchBars(); }, [])

    return (
        <div className="App">
            
            <Link to='/' > Go to Home</Link>

            <div className='cardsContainer'>
                {bars && bars.map((bar, index) => <div> <Link to={'barInformation/' + bar.id} key={bar.id} > <Card format = "large" color = "white" title = {bar.name} tag = {bar.country} description = "description of the bar or his adress"/> </Link> <br/> </div>)}
            </div>
        </div>
    );
}


export default ListOfBar;