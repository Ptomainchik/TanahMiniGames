import { useNavigate } from "react-router-dom";
import classes from "../Styles/Game.module.css";
import { useEffect, useState } from "react";

export const GameMemory4lvl = () => {
    const [start, setStart] = useState(false);
    const [endTime, setEndTime] = useState(null);   
    const [timeLeft, setTimeLeft] = useState("01:00");
    const [states, setStates] = useState({
        counterCellsChoices: 0,
        counterOfEliminatedCells: 0,
        cellsApple: 6,
        cellsCone: 6,
        cellsMushroom: 6,
        cellsBerry: 6,
        cellsFish: 6,
        cellsMeat: 6,
        cellsAppleName: "Apple",
        cellsConeName: "Cone",
        cellsMushroomName: "Mushroom",
        cellsBerryName: "Berry",
        cellsFishName: "Fish",
        cellsMeatName: "Meat",
        showButtonStart: true,
        showButtonsWhenWinning: false,
        showLoseModal: false,
    });
    const [cells, setCells]: any = useState({
        A1V1H1: {
            id: "A1-V1-H1",
            name: "",
            chioce: false,
            showCell: true,
        },
        A2V2H1: {
            id: "A2-V2-H1",
            name: "",
            chioce: false,
            showCell: true,
        },
        A3V3H1: {
            id: "A3-V3-H1",
            name: "",
            chioce: false,
            showCell: true,
        },
        A4V4H1: {
            id: "A4-V4-H1",
            name: "",
            chioce: false,
            showCell: true,
        },
        A5V5H1: {
            id: "A5-V5-H1",
            name: "",
            chioce: false,
            showCell: true,
        },
        A6V6H1: {
            id: "A6-V6-H1",
            name: "",
            chioce: false,
            showCell: true,
        },
        A7V1H2: {
            id: "A7-V1-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A8V2H2: {
            id: "A8-V2-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A9V3H2: {
            id: "A9-V3-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A10V4H2: {
            id: "A10-V4-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A11V5H2: {
            id: "A11-V5-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A12V6H2: {
            id: "A12-V6-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A13V1H3: {
            id: "A13-V1-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A14V2H3: {
            id: "A14-V2-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A15V3H3: {
            id: "A15-V3-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A16V4H3: {
            id: "A16-V4-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A17V5H3: {
            id: "A17-V5-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A18V6H3: {
            id: "A18-V6-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A19V1H4: {
            id: "A19-V1-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A20V2H4: {
            id: "A20-V2-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A21V3H4: {
            id: "A21-V3-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A22V4H4: {
            id: "A22-V4-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A23V5H4: {
            id: "A23-V5-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A24V6H4: {
            id: "A24-V6-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A25V1H5: {
            id: "A25-V1-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A26V2H5: {
            id: "A26-V2-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A27V3H5: {
            id: "A27-V3-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A28V4H5: {
            id: "A28-V4-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A29V5H5: {
            id: "A29-V5-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A30V6H5: {
            id: "A30-V6-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A31V1H6: {
            id: "A31-V1-H6",
            name: "",
            chioce: false,
            showCell: true,
        },
        A32V2H6: {
            id: "A32-V2-H6",
            name: "",
            chioce: false,
            showCell: true,
        },
        A33V3H6: {
            id: "A33-V3-H6",
            name: "",
            chioce: false,
            showCell: true,
        },
        A34V4H6: {
            id: "A34-V4-H6",
            name: "",
            chioce: false,
            showCell: true,
        },
        A35V5H6: {
            id: "A35-V5-H6",
            name: "",
            chioce: false,
            showCell: true,
        },
        A36V6H6: {
            id: "A36-V6-H6",
            name: "",
            chioce: false,
            showCell: true,
        }
    });

    function handleStartGame() {
    if (start) return;
    
    const fiveMinutesLater: any = Date.now() + 1 * 60 * 1000;
    setEndTime(fiveMinutesLater);

    const colors = [
        ...Array(6).fill(states.cellsAppleName),
        ...Array(6).fill(states.cellsConeName),
        ...Array(6).fill(states.cellsMushroomName),
        ...Array(6).fill(states.cellsBerryName),
        ...Array(6).fill(states.cellsFishName),
        ...Array(6).fill(states.cellsMeatName)
    ];
    
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    
    setCells((prevCells: any) => { 
        const keys = Object.keys(prevCells);
        const newCells: any = {};   
        
        keys.forEach((key, index) => {
            newCells[key] = {
                ...prevCells[key],
                name: colors[index]
            };
        });
        
        return newCells;
    });
    
    setStart(true);
    setStates((prev: any) => ({...prev, showButtonStart: prev.showButtonStart === false}));
};

useEffect(() => {
    if (!endTime) return;

    const interval = setInterval(() => {
        const now = Date.now();
        const diff = endTime - now;

        if (diff <= 0) {
            clearInterval(interval);
            setTimeLeft("00:00");
            // ТВОЕ ДЕЙСТВИЕ: вызов модалки
            setStates(prev => ({ ...prev, showLoseModal: true })); 
            return;
        }

        // Форматируем остаток
        const mins = Math.floor(diff / 1000 / 60);
        const secs = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(interval); // Чистим, если ушли со страницы
}, [endTime]);

const navigate = useNavigate();

function handleRestart() {
    navigate(0);
};

function handleHomePageTranzition() {
    navigate("/");
};

function handleWin() {
    setStates((prev: any) => ({...prev, counterOfEliminatedCells: prev.counterOfEliminatedCells + 12}) )
}

useEffect(() => {
    // Проверяем, когда счетчик становится равен 3
    if (states.counterCellsChoices === 3) {
        // Находим все выбранные ячейки
        const selectedKeys = Object.keys(cells).filter(key => cells[key].chioce === true);
        
        setTimeout(() => {
            setStates((prevStates: any) => ({ 
                ...prevStates, 
                counterCellsChoices: prevStates.counterCellsChoices - 3
            }));
        }, 2000);
        
        // Проверяем, что выбрано именно 3 ячейки
        if (selectedKeys.length === 3) {
            // Получаем имена выбранных ячеек
            const selectedNames = selectedKeys.map(key => cells[key].name);
            
            // Проверяем, все ли имена одинаковые
            const allSameName = selectedNames.every(name => name === selectedNames[0]);
            
            // Если все имена одинаковые
            if (allSameName) {
                setTimeout(() => {
                    setCells((prevCells: any) => {
                    const newCells = { ...prevCells };
                    selectedKeys.forEach(key => {
                        newCells[key] = {
                            ...newCells[key],
                            showCell: false
                        };
                    });
                    return newCells;
                });
                },1500);
                
                
                // ВАЖНО: Выносим setStates за пределы setCells
                setStates((prev: any) => ({...prev, 
                    counterOfEliminatedCells: prev.counterOfEliminatedCells + 1
                }));
            }
        }
    }
}, [states.counterCellsChoices]);

useEffect(() => {
    if (states.counterOfEliminatedCells === 12) {
        setStates((prev: any) => ({...prev, showButtonsWhenWinning: true}));
    }
}, [states.counterOfEliminatedCells]);

useEffect(() => {
    // Проверяем, когда счетчик достигает 3
    setTimeout(() => {
        if (states.counterCellsChoices === 3) {
        // Получаем все ключи ячеек
        const cellKeys = Object.keys(cells);
        
        // Перебираем каждую ячейку
        cellKeys.forEach(key => {
            // Если ячейка выбрана (chioce === true)
            if (cells[key].chioce) {
                setCells((prevCells: any) => ({ 
                    ...prevCells, 
                    [key]: {
                        ...prevCells[key], 
                        chioce: false
                    }
                }));
            }
        });
    }   
    }, 2000);
    
}, [states.counterCellsChoices, cells]); // Добавляем cells в зависимости


useEffect(() => {

},[]);

// Функция выбора становится простой
function handleChoiceCell(cellKey: string) {
    if (!cells[cellKey].chioce && states.counterCellsChoices < 3) {
        setCells((prevCells: any) => ({ 
            ...prevCells, 
            [cellKey]: {
                ...prevCells[cellKey], 
                chioce: true
            }
        }));
        
        setStates((prevStates: any) => ({ 
            ...prevStates, 
            counterCellsChoices: prevStates.counterCellsChoices + 1
        }));
    }
};

    return (
    <>
        <div className={classes.gamePage}>
            
            <button onClick={handleWin}>WIN</button>

            <div>{timeLeft}</div>
            
            { states.showButtonsWhenWinning && <div className={classes.winAndLoseModal}>   
                    <p className={classes.buttonRestart} onClick={handleRestart}>Рестарт уровня</p>
                    <p className={classes.buttonNext} onClick={handleHomePageTranzition}>На главную</p>
                </div>}

            

            <div>Выбрано ячеек: {states.counterCellsChoices}/3</div>
            <div>Round for victory: {states.counterOfEliminatedCells}/12</div>
    
            <div className={classes.gameField}>

                { states.showLoseModal && <div className={classes.winAndLoseModal}>
                <h3>Вы не успели собрать все продукты и проиграли.</h3>
                <p className={classes.buttonRestartWin} onClick={handleRestart}>Рестарт уровня</p>
                </div> }

                { states.showButtonStart && <p className={classes.buttonStart} onClick={handleStartGame}>Старт</p>}
                
                <div className={classes.feilds}>

                    {/* HORIZONT 1 */}
                    <div className={classes.feildH1}>
                        { cells.A1V1H1.showCell && <button 
                            className={classes.a1}
                            onClick={() => handleChoiceCell("A1V1H1")} 
                            disabled={!start || cells.A1V1H1.chioce || states.counterCellsChoices === 3}
                        >  
                            <div className={
                                cells.A1V1H1.chioce === true && cells.A1V1H1.name === "Apple" ? classes.appleCells :
                                cells.A1V1H1.chioce === true && cells.A1V1H1.name === "Cone" ? classes.coneCells :
                                cells.A1V1H1.chioce === true && cells.A1V1H1.name === "Mushroom" ? classes.mushroomCells :
                                cells.A1V1H1.chioce === true && cells.A1V1H1.name === "Berry" ? classes.berryCells :
                                cells.A1V1H1.chioce === true && cells.A1V1H1.name === "Fish" ? classes.fishCells :
                                cells.A1V1H1.chioce === true && cells.A1V1H1.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>                        
                            </button>}

                        { cells.A2V2H1.showCell && <button 
                            className={classes.a2}
                            onClick={() => handleChoiceCell("A2V2H1")} 
                            disabled={!start || cells.A2V2H1.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A2V2H1.chioce === true && cells.A2V2H1.name === "Apple" ? classes.appleCells :
                                cells.A2V2H1.chioce === true && cells.A2V2H1.name === "Cone" ? classes.coneCells :
                                cells.A2V2H1.chioce === true && cells.A2V2H1.name === "Mushroom" ? classes.mushroomCells :
                                cells.A2V2H1.chioce === true && cells.A2V2H1.name === "Berry" ? classes.berryCells :
                                cells.A2V2H1.chioce === true && cells.A2V2H1.name === "Fish" ? classes.fishCells :
                                cells.A2V2H1.chioce === true && cells.A2V2H1.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>     
                            </button>}

                        { cells.A3V3H1.showCell && <button 
                            className={classes.a3}
                            onClick={() => handleChoiceCell("A3V3H1")} 
                            disabled={!start || cells.A3V3H1.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A3V3H1.chioce === true && cells.A3V3H1.name === "Apple" ? classes.appleCells :
                                cells.A3V3H1.chioce === true && cells.A3V3H1.name === "Cone" ? classes.coneCells :
                                cells.A3V3H1.chioce === true && cells.A3V3H1.name === "Mushroom" ? classes.mushroomCells :
                                cells.A3V3H1.chioce === true && cells.A3V3H1.name === "Berry" ? classes.berryCells :
                                cells.A3V3H1.chioce === true && cells.A3V3H1.name === "Fish" ? classes.fishCells :
                                cells.A3V3H1.chioce === true && cells.A3V3H1.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>                        
                            </button>}

                        { cells.A4V4H1.showCell && <button 
                            className={classes.a4}
                            onClick={() => handleChoiceCell("A4V4H1")} 
                            disabled={!start || cells.A4V4H1.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A4V4H1.chioce === true && cells.A4V4H1.name === "Apple" ? classes.appleCells :
                                cells.A4V4H1.chioce === true && cells.A4V4H1.name === "Cone" ? classes.coneCells :
                                cells.A4V4H1.chioce === true && cells.A4V4H1.name === "Mushroom" ? classes.mushroomCells :
                                cells.A4V4H1.chioce === true && cells.A4V4H1.name === "Berry" ? classes.berryCells :
                                cells.A4V4H1.chioce === true && cells.A4V4H1.name === "Fish" ? classes.fishCells :
                                cells.A4V4H1.chioce === true && cells.A4V4H1.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>                        
                            </button>}

                        { cells.A5V5H1.showCell && <button 
                            className={classes.a5}
                            onClick={() => handleChoiceCell("A5V5H1")} 
                            disabled={!start || cells.A5V5H1.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A5V5H1.chioce === true && cells.A5V5H1.name === "Apple" ? classes.appleCells :
                                cells.A5V5H1.chioce === true && cells.A5V5H1.name === "Cone" ? classes.coneCells :
                                cells.A5V5H1.chioce === true && cells.A5V5H1.name === "Mushroom" ? classes.mushroomCells :
                                cells.A5V5H1.chioce === true && cells.A5V5H1.name === "Berry" ? classes.berryCells :
                                cells.A5V5H1.chioce === true && cells.A5V5H1.name === "Fish" ? classes.fishCells :
                                cells.A5V5H1.chioce === true && cells.A5V5H1.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>                        
                            </button>}

                        { cells.A6V6H1.showCell && <button 
                            className={classes.a6}
                            onClick={() => handleChoiceCell("A6V6H1")} 
                            disabled={!start || cells.A6V6H1.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A6V6H1.chioce === true && cells.A6V6H1.name === "Apple" ? classes.appleCells :
                                cells.A6V6H1.chioce === true && cells.A6V6H1.name === "Cone" ? classes.coneCells :
                                cells.A6V6H1.chioce === true && cells.A6V6H1.name === "Mushroom" ? classes.mushroomCells :
                                cells.A6V6H1.chioce === true && cells.A6V6H1.name === "Berry" ? classes.berryCells :
                                cells.A6V6H1.chioce === true && cells.A6V6H1.name === "Fish" ? classes.fishCells :
                                cells.A6V6H1.chioce === true && cells.A6V6H1.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>                        
                            </button>}

                    </div>

                    {/* HORIZONT 2 */}
                    <div className={classes.feildH2}>

                        { cells.A7V1H2.showCell && <button 
                            className={classes.a7}
                            onClick={() => handleChoiceCell("A7V1H2")} 
                            disabled={!start || cells.A7V1H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A7V1H2.chioce === true && cells.A7V1H2.name === "Apple" ? classes.appleCells :
                                cells.A7V1H2.chioce === true && cells.A7V1H2.name === "Cone" ? classes.coneCells :
                                cells.A7V1H2.chioce === true && cells.A7V1H2.name === "Mushroom" ? classes.mushroomCells :
                                cells.A7V1H2.chioce === true && cells.A7V1H2.name === "Berry" ? classes.berryCells :
                                cells.A7V1H2.chioce === true && cells.A7V1H2.name === "Fish" ? classes.fishCells :
                                cells.A7V1H2.chioce === true && cells.A7V1H2.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>                       
                            </button>}

                        { cells.A8V2H2.showCell && <button 
                            className={classes.a8}
                            onClick={() => handleChoiceCell("A8V2H2")} 
                            disabled={!start || cells.A8V2H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A8V2H2.chioce === true && cells.A8V2H2.name === "Apple" ? classes.appleCells :
                                cells.A8V2H2.chioce === true && cells.A8V2H2.name === "Cone" ? classes.coneCells :
                                cells.A8V2H2.chioce === true && cells.A8V2H2.name === "Mushroom" ? classes.mushroomCells :
                                cells.A8V2H2.chioce === true && cells.A8V2H2.name === "Berry" ? classes.berryCells :
                                cells.A8V2H2.chioce === true && cells.A8V2H2.name === "Fish" ? classes.fishCells :
                                cells.A8V2H2.chioce === true && cells.A8V2H2.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>         
                            </button>}

                        { cells.A9V3H2.showCell && <button 
                            className={classes.a9}
                            onClick={() => handleChoiceCell("A9V3H2")} 
                            disabled={!start || cells.A9V3H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A9V3H2.chioce === true && cells.A9V3H2.name === "Apple" ? classes.appleCells :
                                cells.A9V3H2.chioce === true && cells.A9V3H2.name === "Cone" ? classes.coneCells :
                                cells.A9V3H2.chioce === true && cells.A9V3H2.name === "Mushroom" ? classes.mushroomCells :
                                cells.A9V3H2.chioce === true && cells.A9V3H2.name === "Berry" ? classes.berryCells :
                                cells.A9V3H2.chioce === true && cells.A9V3H2.name === "Fish" ? classes.fishCells :
                                cells.A9V3H2.chioce === true && cells.A9V3H2.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>
                        </button>}

                        { cells.A10V4H2.showCell && <button   
                            className={classes.a10}
                            onClick={() => handleChoiceCell("A10V4H2")} 
                            disabled={!start || cells.A10V4H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A10V4H2.chioce === true && cells.A10V4H2.name === "Apple" ? classes.appleCells :
                                cells.A10V4H2.chioce === true && cells.A10V4H2.name === "Cone" ? classes.coneCells :
                                cells.A10V4H2.chioce === true && cells.A10V4H2.name === "Mushroom" ? classes.mushroomCells :
                                cells.A10V4H2.chioce === true && cells.A10V4H2.name === "Berry" ? classes.berryCells :
                                cells.A10V4H2.chioce === true && cells.A10V4H2.name === "Fish" ? classes.fishCells :
                                cells.A10V4H2.chioce === true && cells.A10V4H2.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A11V5H2.showCell && <button   
                            className={classes.a11}
                            onClick={() => handleChoiceCell("A11V5H2")} 
                            disabled={!start || cells.A11V5H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A11V5H2.chioce === true && cells.A11V5H2.name === "Apple" ? classes.appleCells :
                                cells.A11V5H2.chioce === true && cells.A11V5H2.name === "Cone" ? classes.coneCells :
                                cells.A11V5H2.chioce === true && cells.A11V5H2.name === "Mushroom" ? classes.mushroomCells :
                                cells.A11V5H2.chioce === true && cells.A11V5H2.name === "Berry" ? classes.berryCells :
                                cells.A11V5H2.chioce === true && cells.A11V5H2.name === "Fish" ? classes.fishCells :
                                cells.A11V5H2.chioce === true && cells.A11V5H2.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A12V6H2.showCell && <button   
                            className={classes.a12}
                            onClick={() => handleChoiceCell("A12V6H2")} 
                            disabled={!start || cells.A12V6H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A12V6H2.chioce === true && cells.A12V6H2.name === "Apple" ? classes.appleCells :
                                cells.A12V6H2.chioce === true && cells.A12V6H2.name === "Cone" ? classes.coneCells :
                                cells.A12V6H2.chioce === true && cells.A12V6H2.name === "Mushroom" ? classes.mushroomCells :
                                cells.A12V6H2.chioce === true && cells.A12V6H2.name === "Berry" ? classes.berryCells :
                                cells.A12V6H2.chioce === true && cells.A12V6H2.name === "Fish" ? classes.fishCells :
                                cells.A12V6H2.chioce === true && cells.A12V6H2.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}
                    </div>

                    {/* HORIZONT 3 */}
                    <div className
                    ={classes.feildH3}>
                        { cells.A13V1H3.showCell && <button   
                            className={classes.a13}
                            onClick={() => handleChoiceCell("A13V1H3")} 
                            disabled={!start || cells.A13V1H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A13V1H3.chioce === true && cells.A13V1H3.name === "Apple" ? classes.appleCells :
                                cells.A13V1H3.chioce === true && cells.A13V1H3.name === "Cone" ? classes.coneCells :
                                cells.A13V1H3.chioce === true && cells.A13V1H3.name === "Mushroom" ? classes.mushroomCells :
                                cells.A13V1H3.chioce === true && cells.A13V1H3.name === "Berry" ? classes.berryCells :
                                cells.A13V1H3.chioce === true && cells.A13V1H3.name === "Fish" ? classes.fishCells :
                                cells.A13V1H3.chioce === true && cells.A13V1H3.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A14V2H3.showCell && <button   
                            className={classes.a14}
                            onClick={() => handleChoiceCell("A14V2H3")} 
                            disabled={!start || cells.A14V2H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A14V2H3.chioce === true && cells.A14V2H3.name === "Apple" ? classes.appleCells :
                                cells.A14V2H3.chioce === true && cells.A14V2H3.name === "Cone" ? classes.coneCells :
                                cells.A14V2H3.chioce === true && cells.A14V2H3.name === "Mushroom" ? classes.mushroomCells :
                                cells.A14V2H3.chioce === true && cells.A14V2H3.name === "Berry" ? classes.berryCells :
                                cells.A14V2H3.chioce === true && cells.A14V2H3.name === "Fish" ? classes.fishCells :
                                cells.A14V2H3.chioce === true && cells.A14V2H3.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A15V3H3.showCell && <button   
                            className={classes.a15}
                            onClick={() => handleChoiceCell("A15V3H3")} 
                            disabled={!start || cells.A15V3H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A15V3H3.chioce === true && cells.A15V3H3.name === "Apple" ? classes.appleCells :
                                cells.A15V3H3.chioce === true && cells.A15V3H3.name === "Cone" ? classes.coneCells :
                                cells.A15V3H3.chioce === true && cells.A15V3H3.name === "Mushroom" ? classes.mushroomCells :
                                cells.A15V3H3.chioce === true && cells.A15V3H3.name === "Berry" ? classes.berryCells :
                                cells.A15V3H3.chioce === true && cells.A15V3H3.name === "Fish" ? classes.fishCells :
                                cells.A15V3H3.chioce === true && cells.A15V3H3.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A16V4H3.showCell && <button   
                            className={classes.a16}
                            onClick={() => handleChoiceCell("A16V4H3")} 
                            disabled={!start || cells.A16V4H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A16V4H3.chioce === true && cells.A16V4H3.name === "Apple" ? classes.appleCells :
                                cells.A16V4H3.chioce === true && cells.A16V4H3.name === "Cone" ? classes.coneCells :
                                cells.A16V4H3.chioce === true && cells.A16V4H3.name === "Mushroom" ? classes.mushroomCells :
                                cells.A16V4H3.chioce === true && cells.A16V4H3.name === "Berry" ? classes.berryCells :
                                cells.A16V4H3.chioce === true && cells.A16V4H3.name === "Fish" ? classes.fishCells :
                                cells.A16V4H3.chioce === true && cells.A16V4H3.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A17V5H3.showCell && <button   
                            className={classes.a17}
                            onClick={() => handleChoiceCell("A17V5H3")} 
                            disabled={!start || cells.A17V5H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A17V5H3.chioce === true && cells.A17V5H3.name === "Apple" ? classes.appleCells :
                                cells.A17V5H3.chioce === true && cells.A17V5H3.name === "Cone" ? classes.coneCells :
                                cells.A17V5H3.chioce === true && cells.A17V5H3.name === "Mushroom" ? classes.mushroomCells :
                                cells.A17V5H3.chioce === true && cells.A17V5H3.name === "Berry" ? classes.berryCells :
                                cells.A17V5H3.chioce === true && cells.A17V5H3.name === "Fish" ? classes.fishCells :
                                cells.A17V5H3.chioce === true && cells.A17V5H3.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A18V6H3.showCell && <button   
                            className={classes.a18}
                            onClick={() => handleChoiceCell("A18V6H3")} 
                            disabled={!start || cells.A18V6H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A18V6H3.chioce === true && cells.A18V6H3.name === "Apple" ? classes.appleCells :
                                cells.A18V6H3.chioce === true && cells.A18V6H3.name === "Cone" ? classes.coneCells :
                                cells.A18V6H3.chioce === true && cells.A18V6H3.name === "Mushroom" ? classes.mushroomCells :
                                cells.A18V6H3.chioce === true && cells.A18V6H3.name === "Berry" ? classes.berryCells :
                                cells.A18V6H3.chioce === true && cells.A18V6H3.name === "Fish" ? classes.fishCells :
                                cells.A18V6H3.chioce === true && cells.A18V6H3.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}
                    </div>

                    {/* HORIZONT 4 */}
                    <div className
                    ={classes.feildH4}>
                        { cells.A19V1H4.showCell && <button   
                            className={classes.a19}
                            onClick={() => handleChoiceCell("A19V1H4")} 
                            disabled={!start || cells.A19V1H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A19V1H4.chioce === true && cells.A19V1H4.name === "Apple" ? classes.appleCells :
                                cells.A19V1H4.chioce === true && cells.A19V1H4.name === "Cone" ? classes.coneCells :
                                cells.A19V1H4.chioce === true && cells.A19V1H4.name === "Mushroom" ? classes.mushroomCells :
                                cells.A19V1H4.chioce === true && cells.A19V1H4.name === "Berry" ? classes.berryCells :
                                cells.A19V1H4.chioce === true && cells.A19V1H4.name === "Fish" ? classes.fishCells :
                                cells.A19V1H4.chioce === true && cells.A19V1H4.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A20V2H4.showCell && <button   
                            className={classes.a20}
                            onClick={() => handleChoiceCell("A20V2H4")} 
                            disabled={!start || cells.A20V2H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A20V2H4.chioce === true && cells.A20V2H4.name === "Apple" ? classes.appleCells :
                                cells.A20V2H4.chioce === true && cells.A20V2H4.name === "Cone" ? classes.coneCells :
                                cells.A20V2H4.chioce === true && cells.A20V2H4.name === "Mushroom" ? classes.mushroomCells :
                                cells.A20V2H4.chioce === true && cells.A20V2H4.name === "Berry" ? classes.berryCells :
                                cells.A20V2H4.chioce === true && cells.A20V2H4.name === "Fish" ? classes.fishCells :
                                cells.A20V2H4.chioce === true && cells.A20V2H4.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A21V3H4.showCell && <button   
                            className={classes.a21}
                            onClick={() => handleChoiceCell("A21V3H4")} 
                            disabled={!start || cells.A21V3H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A21V3H4.chioce === true && cells.A21V3H4.name === "Apple" ? classes.appleCells :
                                cells.A21V3H4.chioce === true && cells.A21V3H4.name === "Cone" ? classes.coneCells :
                                cells.A21V3H4.chioce === true && cells.A21V3H4.name === "Mushroom" ? classes.mushroomCells :
                                cells.A21V3H4.chioce === true && cells.A21V3H4.name === "Berry" ? classes.berryCells :
                                cells.A21V3H4.chioce === true && cells.A21V3H4.name === "Fish" ? classes.fishCells :
                                cells.A21V3H4.chioce === true && cells.A21V3H4.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A22V4H4.showCell && <button   
                            className={classes.a22}
                            onClick={() => handleChoiceCell("A22V4H4")} 
                            disabled={!start || cells.A22V4H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A22V4H4.chioce === true && cells.A22V4H4.name === "Apple" ? classes.appleCells :
                                cells.A22V4H4.chioce === true && cells.A22V4H4.name === "Cone" ? classes.coneCells :
                                cells.A22V4H4.chioce === true && cells.A22V4H4.name === "Mushroom" ? classes.mushroomCells :
                                cells.A22V4H4.chioce === true && cells.A22V4H4.name === "Berry" ? classes.berryCells :
                                cells.A22V4H4.chioce === true && cells.A22V4H4.name === "Fish" ? classes.fishCells :
                                cells.A22V4H4.chioce === true && cells.A22V4H4.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A23V5H4.showCell && <button   
                            className={classes.a23}
                            onClick={() => handleChoiceCell("A23V5H4")} 
                            disabled={!start || cells.A23V5H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A23V5H4.chioce === true && cells.A23V5H4.name === "Apple" ? classes.appleCells :
                                cells.A23V5H4.chioce === true && cells.A23V5H4.name === "Cone" ? classes.coneCells :
                                cells.A23V5H4.chioce === true && cells.A23V5H4.name === "Mushroom" ? classes.mushroomCells :
                                cells.A23V5H4.chioce === true && cells.A23V5H4.name === "Berry" ? classes.berryCells :
                                cells.A23V5H4.chioce === true && cells.A23V5H4.name === "Fish" ? classes.fishCells :
                                cells.A23V5H4.chioce === true && cells.A23V5H4.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A24V6H4.showCell && <button   
                            className={classes.a24}
                            onClick={() => handleChoiceCell("A24V6H4")} 
                            disabled={!start || cells.A24V6H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A24V6H4.chioce === true && cells.A24V6H4.name === "Apple" ? classes.appleCells :
                                cells.A24V6H4.chioce === true && cells.A24V6H4.name === "Cone" ? classes.coneCells :
                                cells.A24V6H4.chioce === true && cells.A24V6H4.name === "Mushroom" ? classes.mushroomCells :
                                cells.A24V6H4.chioce === true && cells.A24V6H4.name === "Berry" ? classes.berryCells :
                                cells.A24V6H4.chioce === true && cells.A24V6H4.name === "Fish" ? classes.fishCells :
                                cells.A24V6H4.chioce === true && cells.A24V6H4.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}
                    </div>

                    {/* HORIZONT 5 */}
                    <div className
                    ={classes.feildH5}>
                        { cells.A25V1H5.showCell && <button   
                            className={classes.a25}
                            onClick={() => handleChoiceCell("A25V1H5")} 
                            disabled={!start || cells.A25V1H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A25V1H5.chioce === true && cells.A25V1H5.name === "Apple" ? classes.appleCells :
                                cells.A25V1H5.chioce === true && cells.A25V1H5.name === "Cone" ? classes.coneCells :
                                cells.A25V1H5.chioce === true && cells.A25V1H5.name === "Mushroom" ? classes.mushroomCells :
                                cells.A25V1H5.chioce === true && cells.A25V1H5.name === "Berry" ? classes.berryCells :
                                cells.A25V1H5.chioce === true && cells.A25V1H5.name === "Fish" ? classes.fishCells :
                                cells.A25V1H5.chioce === true && cells.A25V1H5.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A26V2H5.showCell && <button   
                            className={classes.a26}
                            onClick={() => handleChoiceCell("A26V2H5")} 
                            disabled={!start || cells.A26V2H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A26V2H5.chioce === true && cells.A26V2H5.name === "Apple" ? classes.appleCells :
                                cells.A26V2H5.chioce === true && cells.A26V2H5.name === "Cone" ? classes.coneCells :
                                cells.A26V2H5.chioce === true && cells.A26V2H5.name === "Mushroom" ? classes.mushroomCells :
                                cells.A26V2H5.chioce === true && cells.A26V2H5.name === "Berry" ? classes.berryCells :
                                cells.A26V2H5.chioce === true && cells.A26V2H5.name === "Fish" ? classes.fishCells :
                                cells.A26V2H5.chioce === true && cells.A26V2H5.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A27V3H5.showCell && <button   
                            className={classes.a27}
                            onClick={() => handleChoiceCell("A27V3H5")} 
                            disabled={!start || cells.A27V3H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A27V3H5.chioce === true && cells.A27V3H5.name === "Apple" ? classes.appleCells :
                                cells.A27V3H5.chioce === true && cells.A27V3H5.name === "Cone" ? classes.coneCells :
                                cells.A27V3H5.chioce === true && cells.A27V3H5.name === "Mushroom" ? classes.mushroomCells :
                                cells.A27V3H5.chioce === true && cells.A27V3H5.name === "Berry" ? classes.berryCells :
                                cells.A27V3H5.chioce === true && cells.A27V3H5.name === "Fish" ? classes.fishCells :
                                cells.A27V3H5.chioce === true && cells.A27V3H5.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A28V4H5.showCell && <button   
                            className={classes.a28}
                            onClick={() => handleChoiceCell("A28V4H5")} 
                            disabled={!start || cells.A28V4H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A28V4H5.chioce === true && cells.A28V4H5.name === "Apple" ? classes.appleCells :
                                cells.A28V4H5.chioce === true && cells.A28V4H5.name === "Cone" ? classes.coneCells :
                                cells.A28V4H5.chioce === true && cells.A28V4H5.name === "Mushroom" ? classes.mushroomCells :
                                cells.A28V4H5.chioce === true && cells.A28V4H5.name === "Berry" ? classes.berryCells :
                                cells.A28V4H5.chioce === true && cells.A28V4H5.name === "Fish" ? classes.fishCells :
                                cells.A28V4H5.chioce === true && cells.A28V4H5.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A29V5H5.showCell && <button   
                            className={classes.a29}
                            onClick={() => handleChoiceCell("A29V5H5")} 
                            disabled={!start || cells.A29V5H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A29V5H5.chioce === true && cells.A29V5H5.name === "Apple" ? classes.appleCells :
                                cells.A29V5H5.chioce === true && cells.A29V5H5.name === "Cone" ? classes.coneCells :
                                cells.A29V5H5.chioce === true && cells.A29V5H5.name === "Mushroom" ? classes.mushroomCells :
                                cells.A29V5H5.chioce === true && cells.A29V5H5.name === "Berry" ? classes.berryCells :
                                cells.A29V5H5.chioce === true && cells.A29V5H5.name === "Fish" ? classes.fishCells :
                                cells.A29V5H5.chioce === true && cells.A29V5H5.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A30V6H5.showCell && <button   
                            className={classes.a30}
                            onClick={() => handleChoiceCell("A30V6H5")} 
                            disabled={!start || cells.A30V6H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A30V6H5.chioce === true && cells.A30V6H5.name === "Apple" ? classes.appleCells :
                                cells.A30V6H5.chioce === true && cells.A30V6H5.name === "Cone" ? classes.coneCells :
                                cells.A30V6H5.chioce === true && cells.A30V6H5.name === "Mushroom" ? classes.mushroomCells :
                                cells.A30V6H5.chioce === true && cells.A30V6H5.name === "Berry" ? classes.berryCells :
                                cells.A30V6H5.chioce === true && cells.A30V6H5.name === "Fish" ? classes.fishCells :
                                cells.A30V6H5.chioce === true && cells.A30V6H5.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}
                    </div>

                    {/* HORIZONT 6 */}
                    <div className
                    ={classes.feildH6}>
                        { cells.A31V1H6.showCell && <button   
                            className={classes.a31}
                            onClick={() => handleChoiceCell("A31V1H6")} 
                            disabled={!start || cells.A31V1H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A31V1H6.chioce === true && cells.A31V1H6.name === "Apple" ? classes.appleCells :
                                cells.A31V1H6.chioce === true && cells.A31V1H6.name === "Cone" ? classes.coneCells :
                                cells.A31V1H6.chioce === true && cells.A31V1H6.name === "Mushroom" ? classes.mushroomCells :
                                cells.A31V1H6.chioce === true && cells.A31V1H6.name === "Berry" ? classes.berryCells :
                                cells.A31V1H6.chioce === true && cells.A31V1H6.name === "Fish" ? classes.fishCells :
                                cells.A31V1H6.chioce === true && cells.A31V1H6.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A32V2H6.showCell && <button   
                            className={classes.a32}
                            onClick={() => handleChoiceCell("A32V2H6")} 
                            disabled={!start || cells.A32V2H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A32V2H6.chioce === true && cells.A32V2H6.name === "Apple" ? classes.appleCells :
                                cells.A32V2H6.chioce === true && cells.A32V2H6.name === "Cone" ? classes.coneCells :
                                cells.A32V2H6.chioce === true && cells.A32V2H6.name === "Mushroom" ? classes.mushroomCells :
                                cells.A32V2H6.chioce === true && cells.A32V2H6.name === "Berry" ? classes.berryCells :
                                cells.A32V2H6.chioce === true && cells.A32V2H6.name === "Fish" ? classes.fishCells :
                                cells.A32V2H6.chioce === true && cells.A32V2H6.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A33V3H6.showCell && <button   
                            className={classes.a33}
                            onClick={() => handleChoiceCell("A33V3H6")} 
                            disabled={!start || cells.A33V3H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A33V3H6.chioce === true && cells.A33V3H6.name === "Apple" ? classes.appleCells :
                                cells.A33V3H6.chioce === true && cells.A33V3H6.name === "Cone" ? classes.coneCells :
                                cells.A33V3H6.chioce === true && cells.A33V3H6.name === "Mushroom" ? classes.mushroomCells :
                                cells.A33V3H6.chioce === true && cells.A33V3H6.name === "Berry" ? classes.berryCells :
                                cells.A33V3H6.chioce === true && cells.A33V3H6.name === "Fish" ? classes.fishCells :
                                cells.A33V3H6.chioce === true && cells.A33V3H6.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A34V4H6.showCell && <button   
                            className={classes.a34}
                            onClick={() => handleChoiceCell("A34V4H6")} 
                            disabled={!start || cells.A34V4H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A34V4H6.chioce === true && cells.A34V4H6.name === "Apple" ? classes.appleCells :
                                cells.A34V4H6.chioce === true && cells.A34V4H6.name === "Cone" ? classes.coneCells :
                                cells.A34V4H6.chioce === true && cells.A34V4H6.name === "Mushroom" ? classes.mushroomCells :
                                cells.A34V4H6.chioce === true && cells.A34V4H6.name === "Berry" ? classes.berryCells :
                                cells.A34V4H6.chioce === true && cells.A34V4H6.name === "Fish" ? classes.fishCells :
                                cells.A34V4H6.chioce === true && cells.A34V4H6.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A35V5H6.showCell && <button   
                            className={classes.a35}
                            onClick={() => handleChoiceCell("A35V5H6")} 
                            disabled={!start || cells.A35V5H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A35V5H6.chioce === true && cells.A35V5H6.name === "Apple" ? classes.appleCells :
                                cells.A35V5H6.chioce === true && cells.A35V5H6.name === "Cone" ? classes.coneCells :
                                cells.A35V5H6.chioce === true && cells.A35V5H6.name === "Mushroom" ? classes.mushroomCells :
                                cells.A35V5H6.chioce === true && cells.A35V5H6.name === "Berry" ? classes.berryCells :
                                cells.A35V5H6.chioce === true && cells.A35V5H6.name === "Fish" ? classes.fishCells :
                                cells.A35V5H6.chioce === true && cells.A35V5H6.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                        { cells.A36V6H6.showCell && <button   
                            className={classes.a36}
                            onClick={() => handleChoiceCell("A36V6H6")} 
                            disabled={!start || cells.A36V6H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A36V6H6.chioce === true && cells.A36V6H6.name === "Apple" ? classes.appleCells :
                                cells.A36V6H6.chioce === true && cells.A36V6H6.name === "Cone" ? classes.coneCells :
                                cells.A36V6H6.chioce === true && cells.A36V6H6.name === "Mushroom" ? classes.mushroomCells :
                                cells.A36V6H6.chioce === true && cells.A36V6H6.name === "Berry" ? classes.berryCells :
                                cells.A36V6H6.chioce === true && cells.A36V6H6.name === "Fish" ? classes.fishCells :
                                cells.A36V6H6.chioce === true && cells.A36V6H6.name === "Meat" ? classes.meatCells :
                                classes.starCells
                            }></div>

                        </button>}

                    </div>

                </div>
            </div>
        </div>
    </>
    )
};