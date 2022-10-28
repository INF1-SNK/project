import { Link } from "react-router-dom";
import { Header }  from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";

const ContactUs = () => {
    return (
        <>
        <div>
            <Header></Header>
            <Navbar menu={[
                <Link to="/ListOfBar">Access to list of bars </Link>
                ]}></Navbar>
            <Form></Form>
            <Footer></Footer>
        </div>
        </>
    );
}

export default ContactUs;