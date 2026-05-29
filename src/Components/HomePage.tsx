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

    function handleTransitionMatchThreePage() {
        navigate("/three1");
    };

    function handleTransitionNumberMergePuzzlePage() {
        navigate("/merge4");
    };

    return (
        <>
        <div className={classes.homePage}>
           <h1>Мини игры</h1>
           <button className={classes.buttonMemoryGame} onClick={handleTransitionMemoryPage}>Игра на память</button>
           <button className={classes.buttonSortingGame} onClick={handleTransitionSortingPage}>Сортировочная игра</button>
           <button className={classes.buttonMatchThreeGame} onClick={handleTransitionMatchThreePage}>Три в ряд</button>
           <button className={classes.buttonNumberMergePuzzle} onClick={handleTransitionNumberMergePuzzlePage}>Слияние</button>
        </div>
        
        </>
    )
}