import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Header }  from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Dropdown from "../components/Dropdown/Dropdown";
import "./style/contactUs.css"

const ContactUs = () => {
    useEffect(() => {document.title="Contact us"; }, [])
    
    return (
        <>
        <div>
            <Header></Header>
            <Navbar menu={[
                <Dropdown label='Bars' menu={[{content:'List of bars', url:"/ListOfBar"}, {content:'A random bar', url:"/listOfBar/barInformation/" }]}></Dropdown>,
                <Link to="/contactUs"> Contact Us PAGE </Link>
                ]}>
            </Navbar>
            <div className="bodyContact">
                <Form></Form>
            </div>
            <Footer></Footer>
        </div>
        </>
    );
}
export default ContactUs;