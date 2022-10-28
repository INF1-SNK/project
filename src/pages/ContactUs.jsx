import { Link } from "react-router-dom";
import { Header }  from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import "./style/contactUs.css"

const ContactUs = () => {
    return (
        <>
        <div>
            <Header></Header>
            <Navbar menu={[<Link to="/ListOfBar">Access to list of bars </Link>,<Link to="/contactUs"> Contact Us PAGE </Link>]}></Navbar>
            <div className="bodyContact">
                <Form></Form>
            </div>
            <Footer></Footer>
        </div>
        </>
    );
}
export default ContactUs;