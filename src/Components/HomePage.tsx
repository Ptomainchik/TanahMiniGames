import { useNavigate } from "react-router-dom";
import classes from "../Styles/HomePage.module.css";

export const HomePage = () => {
    let navigate = useNavigate();

    function handleTransition() {
        navigate("/memory1");
    };

    return (
        <>
        <div className={classes.homePage}>
           <h1>Mini Game</h1>
           <button className={classes.buttonMemoryGame} onClick={handleTransition}>Memory game</button>
        </div>
        
        </>
    )
}