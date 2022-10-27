import { Link, useNavigate } from "react-router-dom";
import { Header }  from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ContactUs = () => {
    const navigate = useNavigate();

    return (
        <>
        <div>
            <Header></Header>
            <Navbar menu={[<Link to="/ListOfBar">Access to list of bars </Link>,<button onClick={() => navigate('/contactUs')}> Contact Us PAGE </button>]}></Navbar>
            <h1>Contact </h1>
            <Link to="/ListOfBar"> Acess to list of bars </Link>
            <br/>
            <button onClick={() => navigate('/')}> Go Home </button>
            <Footer></Footer>
        </div>
        </>
    );
}

export default ContactUs;