import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Home = () => {

    return (
        <>
            <Header></Header>
            <Navbar menu={[
                <Link to="/ListOfBar">Access to list of bars </Link>,
                <Link to="/contactUs"> Contact Us PAGE </Link>
                ]}></Navbar>
            <div>
                <h1>Welcome</h1>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Home;