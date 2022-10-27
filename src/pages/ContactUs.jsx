import { Link, useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Contact </h1>
            <Link to="/ListOfBar"> Acess to list of bars </Link>
            <br/>
            <button onClick={() => navigate('/')}> Go Home </button>
        </div>
    );
}

export default ContactUs;