import {useNavigate} from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/"); //redirect to the home page
    };

    return (
        <div className="dash-container">
            <h3>Dashboard</h3>
            <button onClick={goToHome}>Go Home</button>
        </div>
    )
}

export default Dashboard;