import { Link, useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Contact </h1>
            <Link to="/Home"> Acess to list of bars </Link>
            <br/>
            <button onClick={() => navigate('/Home')}> List of bars </button>
        </div>
    );
}

export default ContactUs;