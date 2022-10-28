import { Link, useNavigate } from "react-router-dom";
import { Header }  from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import "./style/contactUs.css"

const ContactUs = () => {
    const navigate = useNavigate();

    return (
        <>
        <div>
            <Header></Header>
            <Navbar menu={[<Link to="/ListOfBar">Access to list of bars </Link>,<button onClick={() => navigate('/contactUs')}> Contact Us PAGE </button>]}></Navbar>
            <div className="bodyContact">
                <Form></Form>
            </div>
            <Footer></Footer>
        </div>
        </>
    );
}

export default ContactUs;