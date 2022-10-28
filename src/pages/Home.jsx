import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Dropdown/Dropdown";
import './style/home.css';
import Title from "../components/Title/Title";
import { Button } from "../components/Button/Button";
import { useEffect } from "react";
import Description from "../components/Description/Description";


const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {document.title="Welcome !"; }, [])
    

    return (
        <>
            <Header></Header>

            <Navbar menu={[
                <Dropdown label='Bars' menu={[{content:'List of bars', url:"/ListOfBar"}, {content:'A random bar', url:"/listOfBar/barInformation/" }]}></Dropdown>,
                <Link to="/contactUs"> Contact Us PAGE </Link>
                ]}>
            </Navbar>

            <div className="welcome">
                <div><h1>Welcome to our page!</h1></div>
            </div>

            <div className="middleBody"> 
                <div className="titleHome"> <Title text="The perfect website to find your next bar "/> </div>
                <Description text = "You will find here a lot of bar availlable on different contries " size = "large"/>
                <Button onClick={() => navigate('/ListOfBar')} size='large' label='click here to see the list of our bars' />
                <br/>
                <Description text = " Bla Bla Bla  " size = "medium"/>
            </div>


            <Footer></Footer>
        </>
    );
}

export default Home;