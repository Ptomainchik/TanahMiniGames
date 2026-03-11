import { useNavigate } from "react-router-dom";
import classes from "../Styles/HomePage.module.css";

export const HomePage = () => {
    let navigate = useNavigate();

    function handleTransitionMemoryPage() {
        navigate("/memory1");
    };

    function handleTransitionSortingPage() {
        navigate("/sort1");
    };

    return (
        <>
        <div className={classes.homePage}>
           <h1>Мини игры</h1>
           <button className={classes.buttonMemoryGame} onClick={handleTransitionMemoryPage}>Игра на память</button>
           <button className={classes.buttonSortingGame} onClick={handleTransitionSortingPage}>Сортировочная игра</button>
        </div>
        
        </>
    )
}