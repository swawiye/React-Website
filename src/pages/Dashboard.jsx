import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const goToHome = () => {
        navigate("/");
    };

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    useEffect(() => {
        document.body.className = isDarkMode ? "dark-theme" : "light-theme";
    }, [isDarkMode]);

    return (
        <div className="dash-container">
            <h3>Dashboard</h3>
            <button onClick={goToHome}>Go Home</button>
            <button onClick={toggleTheme} style={{ marginLeft: "1rem" }}>
                Toggle Theme
            </button>
        </div>
    );
}

export default Dashboard;
