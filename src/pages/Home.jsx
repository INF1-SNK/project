import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome</h1>
            <Link to="/contactUs">Acess to list of bars </Link>
            <button onClick={() => navigate('/contactUs')}>List of bars </button>
        </div>
    );
}

export default Home;