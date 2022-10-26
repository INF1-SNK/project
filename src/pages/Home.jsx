import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome</h1>
            <Link to="/barPresentation">Acess to list of bars </Link>
            <button onClick={() => navigate('/contactUs')}> Contact Us PAGE </button>
        </div>
    );
}

export default Home;