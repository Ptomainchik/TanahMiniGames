import { useEffect, useState } from "react";
import classes from "../../Styles/SortingGame.module.css";
import OrcMushroomPicker from "../../assets/SortingGameImages/OrcMushroomPicker.png";
import { useNavigate } from "react-router-dom";
import Shelf from "../../assets/SortingGameImages/Shelf.png";
import RedShelf from "../../assets/SortingGameImages/RedShelf.png";
import BlueShelf from "../../assets/SortingGameImages/BlueShelf.png";
import GreenShelf from "../../assets/SortingGameImages/GreenShelf.png";

export const GameSorting1lvl = () => {
    const [states, setStates] = useState({
            counterCellsChoices: 0,
            counterOfEliminatedCells: 0,
            cellsRedJar: 0,
            cellsBlueJar: 0,
            cellsYellowJar: 0,
            cellsGreenJar: 0,
            cellsVioletJar: 0,
            cellsGrayJar: 0,
            cellsRedJarName: "RedJar",
            cellsBlueJarName: "BlueJar",
            cellsGreenJarName: "GreenJar",
            cellsYellowJarName: "YellowJar",
            cellsVioletJarName: "VioletJar",
            cellsGrayJarName: "GrayJar",
            stateStart: false,
            showButtonStart: true,
            showButtonsWhenWinning: false,
            showLoseModal: false,
            showModalInfo: true,
            showWinModalRecipe: false,
            door: true,
            selectedCell: null, 
    });

    const [cells, setCells]: any = useState({
        A1V1H1: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A2V2H1: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A3V3H1: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A4V4H1: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A5V5H1: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A6V6H1: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A7V7H1: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },

        A8V1H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A9V2H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A10V3H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A11V4H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A12V5H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A13V6H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A14V7H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },

        A15V1H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A16V2H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A17V3H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A18V4H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A19V5H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A20V6H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A21V7H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },

        A22V1H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: true,
        },
        A23V2H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: true,
        },
        A24V3H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: true,
        },
        A25V4H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: true,
        },
        A26V5H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: true,
        },
        A27V6H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: true,
        },
        A28V7H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: true,
        },

    });

    // НЕ СТАБИЛЬНЫ NAMES КОТОРЫЕ И МЕНЯЮТ UI CELLS ПЕРМЕЩАЮТСЯ ТОЛЬКО NAMES , CELLS СТАБИЛЬНЫ И НЕ МЕНЯЮТСЯ В ПЛАНЕ ПЕРЕМЕЩЕНИЯ НА UI. НЕ ТУПИ ПРЫГАЙ ОТ CELLS!!!

    function handleStartGame() {
        if (states.stateStart) return;

        const colors = [
            ...Array(7).fill(states.cellsRedJarName),
            ...Array(7).fill(states.cellsBlueJarName),
            ...Array(7).fill(states.cellsGreenJarName),
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

    setStates((prev: any) => ({...prev, showButtonStart: false, stateStart: true}));
    setTimeout(() => {
        setStates((prev:any) => ({...prev, door: false}));
    },2000);

    setTimeout(() => {
        setStates((prev:any) => ({...prev, showModalInfo: false}));
    },1500);
    
    };

    function handleChoiceCell(cellKey: string) {
        const selectedCell = cells[cellKey];
        
        // Если ячейка еще не выбрана
        if (states.selectedCell === null) {
            // Выберите непустую ячейку
            if (!selectedCell.empty && !selectedCell.choice && states.counterCellsChoices < 1) {
                setCells((prevCells: any) => ({ 
                    ...prevCells, 
                    [cellKey]: {
                        ...prevCells[cellKey], 
                        choice: true
                    }
                }));
                
                setStates((prevStates: any) => ({ 
                    ...prevStates, 
                    counterCellsChoices: prevStates.counterCellsChoices + 1,
                    selectedCell: cellKey
                }));
            }
        } 
        // Если ячейка уже выбрана
        else {
            const selectedCellKey = states.selectedCell;
            const targetCell = cells[cellKey];
            
            // Проверьте, пуста ли целевая ячейка.
            if (targetCell.empty) {
                // Поменяйте местами имя и пустые свойства.
                setCells((prevCells: any) => ({
                    ...prevCells,
                    [selectedCellKey]: {
                        ...prevCells[selectedCellKey],
                        name: "",
                        empty: true,
                        choice: false
                    },
                    [cellKey]: {
                        ...prevCells[cellKey],
                        name: prevCells[selectedCellKey].name,
                        empty: false,
                        choice: false
                    }
                }));
                
                // Сбросить состояние выбора
                setStates((prevStates: any) => ({ 
                    ...prevStates, 
                    counterCellsChoices: 0,
                    selectedCell: null
                }));
            }
            // При щелчке по той же ячейке снимите с нее выделение.
            else if (selectedCellKey === cellKey) {
                setCells((prevCells: any) => ({
                    ...prevCells,
                    [cellKey]: {
                        ...prevCells[cellKey],
                        choice: false
                    }
                }));
                
                setStates((prevStates: any) => ({ 
                    ...prevStates, 
                    counterCellsChoices: 0,
                    selectedCell: null
                }));
            }
            // При щелчке по другой непустой ячейке произойдет переключение выделения.
            else if (!targetCell.empty && !targetCell.choice) {
                // Отменить выбор текущей ячейки
                setCells((prevCells: any) => ({
                    ...prevCells,
                    [selectedCellKey]: {
                        ...prevCells[selectedCellKey],
                        choice: false
                    },
                    [cellKey]: {
                        ...prevCells[cellKey],
                        choice: true
                    }
                }));
                
                setStates((prevStates: any) => ({ 
                    ...prevStates, 
                    selectedCell: cellKey
                }));
            }
        }
    };

    const navigate = useNavigate();

    function handleRestart() {
        navigate(0);
    };

    function handleNextLevel() {
        navigate("/sort2");
    };

    useEffect(() => {
        if (cells.A1V1H1.name === "RedJar" && cells.A2V2H1.name === "RedJar" && cells.A3V3H1.name === "RedJar" 
            && cells.A4V4H1.name === "RedJar" && cells.A5V5H1.name === "RedJar" && cells.A6V6H1.name === "RedJar" && cells.A7V7H1.name === "RedJar"
            && cells.A8V1H2.name === "BlueJar" && cells.A9V2H2.name === "BlueJar" && cells.A10V3H2.name === "BlueJar" 
            && cells.A11V4H2.name === "BlueJar" && cells.A12V5H2.name === "BlueJar" && cells.A13V6H2.name === "BlueJar" && cells.A14V7H2.name === "BlueJar"
            && cells.A15V1H3.name === "GreenJar" && cells.A16V2H3.name === "GreenJar" && cells.A17V3H3.name === "GreenJar" 
            && cells.A18V4H3.name === "GreenJar" && cells.A19V5H3.name === "GreenJar" && cells.A20V6H3.name === "GreenJar" && cells.A21V7H3.name === "GreenJar"
        
        ) {

        setStates((prev: any) => ({...prev, showButtonsWhenWinning: true }));

        }
    }, [cells]);

    return (
        <>
            <div className={classes.gamePage}>

                { states.showButtonsWhenWinning && <div className={classes.winAndLoseModal}>   
                    <div className={classes.infoOverlay}>
                        <p className={classes.info}>Когда в кладовой порядок — это здорово.</p>
                    </div>
                    <div className={classes.leftDoorClosing}></div>
                    <div className={classes.rightDoorClosing}></div>
                    <img className={classes.imageInfoIntro} src={OrcMushroomPicker} alt="OrcMushroomPicker" draggable={false}/>
                    <h3>Ещё раз или на следующий уровень?</h3>
                    <p className={classes.buttonRestart} onClick={handleRestart}>Ещё раз</p>
                    <p className={classes.buttonNext} onClick={handleNextLevel}>Следующий уровень</p>
                </div>}

                <p className={classes.levelPointer}>Уровень 1</p>

                <div className={classes.gameField}>

                        { states.showButtonStart && <p className={classes.buttonStart} onClick={handleStartGame}>Старт</p>}

                        { states.showModalInfo && <div>
                            <div className={states.stateStart ? classes.infoOverlayOpacity : classes.infoOverlay}> 
                                <p className={classes.info}>Помоги мне навести порядок в кладовой с банками.</p>
                            </div>
                                <img className={states.stateStart ? classes.imageInfoIntroOpacity : classes.imageInfoIntro} src={OrcMushroomPicker} alt="OrcMushroomPicker" draggable={false}/>
                        </div> }

                        {states.door && <div className={states.stateStart ? classes.leftDoorOpening : !states.stateStart ? classes.leftDoorClose : classes.door}></div>}

                        {states.door && <div className={states.stateStart ? classes.rightDoorOpening : !states.stateStart ? classes.rightDoorClose : classes.door}></div>}
                                              
                    <div className={classes.fields}>
                        {/* HORIZONT 1 */}
                        <div className={classes.fieldH1} style={{background: `url(${RedShelf}) center no-repeat`,backgroundSize: "contain"}}>

                            {cells.A1V1H1.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A1V1H1.name === "RedJar" && cells.A1V1H1.choice === false ? classes.redCells :
                                        cells.A1V1H1.name === "BlueJar" && cells.A1V1H1.choice === false ? classes.blueCells :
                                        cells.A1V1H1.name === "GreenJar" && cells.A1V1H1.choice === false ? classes.greenCells :
                                        cells.A1V1H1.name === "YellowJar" && cells.A1V1H1.choice === false ? classes.yellowCells :
                                        cells.A1V1H1.name === "VioletJar" && cells.A1V1H1.choice === false ? classes.violetCells :
                                        cells.A1V1H1.name === "GrayJar" && cells.A1V1H1.choice === false ? classes.grayCells :
                                        cells.A1V1H1.name === "RedJar" && cells.A1V1H1.choice === true ? classes.redCellsChoice :
                                        cells.A1V1H1.name === "BlueJar" && cells.A1V1H1.choice === true ? classes.blueCellsChoice :
                                        cells.A1V1H1.name === "GreenJar" && cells.A1V1H1.choice === true ? classes.greenCellsChoice :
                                        cells.A1V1H1.name === "YellowJar" && cells.A1V1H1.choice === true ? classes.yellowCellsChoice :
                                        cells.A1V1H1.name === "VioletJar" && cells.A1V1H1.choice === true ? classes.violetCellsChoice :
                                        cells.A1V1H1.name === "GrayJar" && cells.A1V1H1.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A1V1H1")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice 
                                            || cells.A2V2H1.name !== "" || cells.A3V3H1.name !== "" 
                                            || cells.A4V4H1.name !== "" || cells.A5V5H1.name !== "" 
                                            || cells.A6V6H1.name !== "" || cells.A7V7H1.name !== ""}
                                ></button>
                            </div>}

                            {cells.A2V2H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A2V2H1.name === "RedJar" && cells.A2V2H1.choice === false ? classes.redCells :
                                        cells.A2V2H1.name === "BlueJar" && cells.A2V2H1.choice === false ? classes.blueCells :
                                        cells.A2V2H1.name === "GreenJar" && cells.A2V2H1.choice === false ? classes.greenCells :
                                        cells.A2V2H1.name === "YellowJar" && cells.A2V2H1.choice === false ? classes.yellowCells :
                                        cells.A2V2H1.name === "VioletJar" && cells.A2V2H1.choice === false ? classes.violetCells :
                                        cells.A2V2H1.name === "GrayJar" && cells.A2V2H1.choice === false ? classes.grayCells :
                                        cells.A2V2H1.name === "RedJar" && cells.A2V2H1.choice === true ? classes.redCellsChoice :
                                        cells.A2V2H1.name === "BlueJar" && cells.A2V2H1.choice === true ? classes.blueCellsChoice :
                                        cells.A2V2H1.name === "GreenJar" && cells.A2V2H1.choice === true ? classes.greenCellsChoice :
                                        cells.A2V2H1.name === "YellowJar" && cells.A2V2H1.choice === true ? classes.yellowCellsChoice :
                                        cells.A2V2H1.name === "VioletJar" && cells.A2V2H1.choice === true ? classes.violetCellsChoice :
                                        cells.A2V2H1.name === "GrayJar" && cells.A2V2H1.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A2V2H1")}
                                    disabled={!states.stateStart || cells.A2V2H1.choice
                                            || cells.A3V3H1.name !== "" 
                                            || cells.A4V4H1.name !== "" || cells.A5V5H1.name !== "" 
                                            || cells.A6V6H1.name !== "" || cells.A7V7H1.name !== ""
                                            || cells.A1V1H1.empty === true || cells.A1V1H1.choice}
                                ></button>
                            </div>}

                            {cells.A3V3H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A3V3H1.name === "RedJar" && cells.A3V3H1.choice === false ? classes.redCells :
                                        cells.A3V3H1.name === "BlueJar" && cells.A3V3H1.choice === false ? classes.blueCells :
                                        cells.A3V3H1.name === "GreenJar" && cells.A3V3H1.choice === false ? classes.greenCells :
                                        cells.A3V3H1.name === "YellowJar" && cells.A3V3H1.choice === false ? classes.yellowCells :
                                        cells.A3V3H1.name === "VioletJar" && cells.A3V3H1.choice === false ? classes.violetCells :
                                        cells.A3V3H1.name === "GrayJar" && cells.A3V3H1.choice === false ? classes.grayCells :
                                        cells.A3V3H1.name === "RedJar" && cells.A3V3H1.choice === true ? classes.redCellsChoice :
                                        cells.A3V3H1.name === "BlueJar" && cells.A3V3H1.choice === true ? classes.blueCellsChoice :
                                        cells.A3V3H1.name === "GreenJar" && cells.A3V3H1.choice === true ? classes.greenCellsChoice :
                                        cells.A3V3H1.name === "YellowJar" && cells.A3V3H1.choice === true ? classes.yellowCellsChoice :
                                        cells.A3V3H1.name === "VioletJar" && cells.A3V3H1.choice === true ? classes.violetCellsChoice :
                                        cells.A3V3H1.name === "GrayJar" && cells.A3V3H1.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A3V3H1")}
                                    disabled={!states.stateStart || cells.A3V3H1.choice
                                            || cells.A4V4H1.name !== "" || cells.A5V5H1.name !== "" 
                                            || cells.A6V6H1.name !== "" || cells.A7V7H1.name !== ""
                                            || cells.A2V2H1.empty === true
                                            || cells.A2V2H1.choice || cells.A1V1H1.choice}
                                ></button>
                            </div>}

                            {cells.A4V4H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A4V4H1.name === "RedJar" && cells.A4V4H1.choice === false ? classes.redCells :
                                        cells.A4V4H1.name === "BlueJar" && cells.A4V4H1.choice === false ? classes.blueCells :
                                        cells.A4V4H1.name === "GreenJar" && cells.A4V4H1.choice === false ? classes.greenCells :
                                        cells.A4V4H1.name === "YellowJar" && cells.A4V4H1.choice === false ? classes.yellowCells :
                                        cells.A4V4H1.name === "VioletJar" && cells.A4V4H1.choice === false ? classes.violetCells :
                                        cells.A4V4H1.name === "GrayJar" && cells.A4V4H1.choice === false ? classes.grayCells :
                                        cells.A4V4H1.name === "RedJar" && cells.A4V4H1.choice === true ? classes.redCellsChoice :
                                        cells.A4V4H1.name === "BlueJar" && cells.A4V4H1.choice === true ? classes.blueCellsChoice :
                                        cells.A4V4H1.name === "GreenJar" && cells.A4V4H1.choice === true ? classes.greenCellsChoice :
                                        cells.A4V4H1.name === "YellowJar" && cells.A4V4H1.choice === true ? classes.yellowCellsChoice :
                                        cells.A4V4H1.name === "VioletJar" && cells.A4V4H1.choice === true ? classes.violetCellsChoice :
                                        cells.A4V4H1.name === "GrayJar" && cells.A4V4H1.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A4V4H1")}
                                    disabled={!states.stateStart || cells.A4V4H1.choice
                                            || cells.A5V5H1.name !== "" 
                                            || cells.A6V6H1.name !== "" || cells.A7V7H1.name !== ""
                                            || cells.A3V3H1.empty === true
                                            || cells.A3V3H1.choice
                                            || cells.A2V2H1.choice || cells.A1V1H1.choice}
                                ></button>
                            </div>}

                            {cells.A5V5H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A5V5H1.name === "RedJar" && cells.A5V5H1.choice === false ? classes.redCells :
                                        cells.A5V5H1.name === "BlueJar" && cells.A5V5H1.choice === false ? classes.blueCells :
                                        cells.A5V5H1.name === "GreenJar" && cells.A5V5H1.choice === false ? classes.greenCells :
                                        cells.A5V5H1.name === "YellowJar" && cells.A5V5H1.choice === false ? classes.yellowCells :
                                        cells.A5V5H1.name === "VioletJar" && cells.A5V5H1.choice === false ? classes.violetCells :
                                        cells.A5V5H1.name === "GrayJar" && cells.A5V5H1.choice === false ? classes.grayCells :
                                        cells.A5V5H1.name === "RedJar" && cells.A5V5H1.choice === true ? classes.redCellsChoice :
                                        cells.A5V5H1.name === "BlueJar" && cells.A5V5H1.choice === true ? classes.blueCellsChoice :
                                        cells.A5V5H1.name === "GreenJar" && cells.A5V5H1.choice === true ? classes.greenCellsChoice :
                                        cells.A5V5H1.name === "YellowJar" && cells.A5V5H1.choice === true ? classes.yellowCellsChoice :
                                        cells.A5V5H1.name === "VioletJar" && cells.A5V5H1.choice === true ? classes.violetCellsChoice :
                                        cells.A5V5H1.name === "GrayJar" && cells.A5V5H1.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A5V5H1")}
                                    disabled={!states.stateStart || cells.A5V5H1.choice
                                            || cells.A6V6H1.name !== "" || cells.A7V7H1.name !== ""
                                            || cells.A4V4H1.empty === true 
                                            || cells.A4V4H1.choice || cells.A3V3H1.choice
                                            || cells.A2V2H1.choice || cells.A1V1H1.choice}
                                ></button>
                            </div>}

                            {cells.A6V6H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A6V6H1.name === "RedJar" && cells.A6V6H1.choice === false ? classes.redCells :
                                        cells.A6V6H1.name === "BlueJar" && cells.A6V6H1.choice === false ? classes.blueCells :
                                        cells.A6V6H1.name === "GreenJar" && cells.A6V6H1.choice === false ? classes.greenCells :
                                        cells.A6V6H1.name === "YellowJar" && cells.A6V6H1.choice === false ? classes.yellowCells :
                                        cells.A6V6H1.name === "VioletJar" && cells.A6V6H1.choice === false ? classes.violetCells :
                                        cells.A6V6H1.name === "GrayJar" && cells.A6V6H1.choice === false ? classes.grayCells :
                                        cells.A6V6H1.name === "RedJar" && cells.A6V6H1.choice === true ? classes.redCellsChoice :
                                        cells.A6V6H1.name === "BlueJar" && cells.A6V6H1.choice === true ? classes.blueCellsChoice :
                                        cells.A6V6H1.name === "GreenJar" && cells.A6V6H1.choice === true ? classes.greenCellsChoice :
                                        cells.A6V6H1.name === "YellowJar" && cells.A6V6H1.choice === true ? classes.yellowCellsChoice :
                                        cells.A6V6H1.name === "VioletJar" && cells.A6V6H1.choice === true ? classes.violetCellsChoice :
                                        cells.A6V6H1.name === "GrayJar" && cells.A6V6H1.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A6V6H1")}
                                    disabled={!states.stateStart || cells.A6V6H1.choice
                                            || cells.A7V7H1.name !== ""
                                            || cells.A5V5H1.empty === true
                                            || cells.A5V5H1.choice
                                            || cells.A4V4H1.choice || cells.A3V3H1.choice
                                            || cells.A2V2H1.choice || cells.A1V1H1.choice}
                                ></button>
                            </div>}

                            {cells.A7V7H1.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A7V7H1.name === "RedJar" && cells.A7V7H1.choice === false ? classes.redCells :
                                        cells.A7V7H1.name === "BlueJar" && cells.A7V7H1.choice === false ? classes.blueCells :
                                        cells.A7V7H1.name === "GreenJar" && cells.A7V7H1.choice === false ? classes.greenCells :
                                        cells.A7V7H1.name === "YellowJar" && cells.A7V7H1.choice === false ? classes.yellowCells :
                                        cells.A7V7H1.name === "VioletJar" && cells.A7V7H1.choice === false ? classes.violetCells :
                                        cells.A7V7H1.name === "GrayJar" && cells.A7V7H1.choice === false ? classes.grayCells :
                                        cells.A7V7H1.name === "RedJar" && cells.A7V7H1.choice === true ? classes.redCellsChoice :
                                        cells.A7V7H1.name === "BlueJar" && cells.A7V7H1.choice === true ? classes.blueCellsChoice :
                                        cells.A7V7H1.name === "GreenJar" && cells.A7V7H1.choice === true ? classes.greenCellsChoice :
                                        cells.A7V7H1.name === "YellowJar" && cells.A7V7H1.choice === true ? classes.yellowCellsChoice :
                                        cells.A7V7H1.name === "VioletJar" && cells.A7V7H1.choice === true ? classes.violetCellsChoice :
                                        cells.A7V7H1.name === "GrayJar" && cells.A7V7H1.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A7V7H1")}
                                    disabled={!states.stateStart || cells.A7V7H1.choice 
                                            || cells.A6V6H1.empty === true
                                            || cells.A6V6H1.choice || cells.A5V5H1.choice
                                            || cells.A4V4H1.choice || cells.A3V3H1.choice
                                            || cells.A2V2H1.choice || cells.A1V1H1.choice}
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 2 */}
                        <div className={classes.fieldH2} style={{background: `url(${BlueShelf}) center no-repeat`,backgroundSize: "contain"}}>

                            {cells.A8V1H2.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A8V1H2.name === "RedJar" && cells.A8V1H2.choice === false ? classes.redCells :
                                        cells.A8V1H2.name === "BlueJar" && cells.A8V1H2.choice === false ? classes.blueCells :
                                        cells.A8V1H2.name === "GreenJar" && cells.A8V1H2.choice === false ? classes.greenCells :
                                        cells.A8V1H2.name === "YellowJar" && cells.A8V1H2.choice === false ? classes.yellowCells :
                                        cells.A8V1H2.name === "VioletJar" && cells.A8V1H2.choice === false ? classes.violetCells :
                                        cells.A8V1H2.name === "GrayJar" && cells.A8V1H2.choice === false ? classes.grayCells :
                                        cells.A8V1H2.name === "RedJar" && cells.A8V1H2.choice === true ? classes.redCellsChoice :
                                        cells.A8V1H2.name === "BlueJar" && cells.A8V1H2.choice === true ? classes.blueCellsChoice :
                                        cells.A8V1H2.name === "GreenJar" && cells.A8V1H2.choice === true ? classes.greenCellsChoice :
                                        cells.A8V1H2.name === "YellowJar" && cells.A8V1H2.choice === true ? classes.yellowCellsChoice :
                                        cells.A8V1H2.name === "VioletJar" && cells.A8V1H2.choice === true ? classes.violetCellsChoice :
                                        cells.A8V1H2.name === "GrayJar" && cells.A8V1H2.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A8V1H2")}
                                    disabled={!states.stateStart || cells.A8V1H2.choice 
                                            || cells.A9V2H2.name !== "" || cells.A10V3H2.name !== "" 
                                            || cells.A11V4H2.name !== "" || cells.A12V5H2.name !== "" 
                                            || cells.A13V6H2.name !== "" || cells.A14V7H2.name !== ""}
                                ></button>
                            </div>}

                            {cells.A9V2H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A9V2H2.name === "RedJar" && cells.A9V2H2.choice === false ? classes.redCells :
                                        cells.A9V2H2.name === "BlueJar" && cells.A9V2H2.choice === false ? classes.blueCells :
                                        cells.A9V2H2.name === "GreenJar" && cells.A9V2H2.choice === false ? classes.greenCells :
                                        cells.A9V2H2.name === "YellowJar" && cells.A9V2H2.choice === false ? classes.yellowCells :
                                        cells.A9V2H2.name === "VioletJar" && cells.A9V2H2.choice === false ? classes.violetCells :
                                        cells.A9V2H2.name === "GrayJar" && cells.A9V2H2.choice === false ? classes.grayCells :
                                        cells.A9V2H2.name === "RedJar" && cells.A9V2H2.choice === true ? classes.redCellsChoice :
                                        cells.A9V2H2.name === "BlueJar" && cells.A9V2H2.choice === true ? classes.blueCellsChoice :
                                        cells.A9V2H2.name === "GreenJar" && cells.A9V2H2.choice === true ? classes.greenCellsChoice :
                                        cells.A9V2H2.name === "YellowJar" && cells.A9V2H2.choice === true ? classes.yellowCellsChoice :
                                        cells.A9V2H2.name === "VioletJar" && cells.A9V2H2.choice === true ? classes.violetCellsChoice :
                                        cells.A9V2H2.name === "GrayJar" && cells.A9V2H2.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A9V2H2")}
                                    disabled={!states.stateStart || cells.A9V2H2.choice
                                            || cells.A10V3H2.name !== "" 
                                            || cells.A11V4H2.name !== "" || cells.A12V5H2.name !== "" 
                                            || cells.A13V6H2.name !== "" || cells.A14V7H2.name !== ""
                                            || cells.A8V1H2.empty === true || cells.A8V1H2.choice}
                                ></button>
                            </div>}

                            {cells.A10V3H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A10V3H2.name === "RedJar" && cells.A10V3H2.choice === false ? classes.redCells :
                                        cells.A10V3H2.name === "BlueJar" && cells.A10V3H2.choice === false ? classes.blueCells :
                                        cells.A10V3H2.name === "GreenJar" && cells.A10V3H2.choice === false ? classes.greenCells :
                                        cells.A10V3H2.name === "YellowJar" && cells.A10V3H2.choice === false ? classes.yellowCells :
                                        cells.A10V3H2.name === "VioletJar" && cells.A10V3H2.choice === false ? classes.violetCells :
                                        cells.A10V3H2.name === "GrayJar" && cells.A10V3H2.choice === false ? classes.grayCells :
                                        cells.A10V3H2.name === "RedJar" && cells.A10V3H2.choice === true ? classes.redCellsChoice :
                                        cells.A10V3H2.name === "BlueJar" && cells.A10V3H2.choice === true ? classes.blueCellsChoice :
                                        cells.A10V3H2.name === "GreenJar" && cells.A10V3H2.choice === true ? classes.greenCellsChoice :
                                        cells.A10V3H2.name === "YellowJar" && cells.A10V3H2.choice === true ? classes.yellowCellsChoice :
                                        cells.A10V3H2.name === "VioletJar" && cells.A10V3H2.choice === true ? classes.violetCellsChoice :
                                        cells.A10V3H2.name === "GrayJar" && cells.A10V3H2.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A10V3H2")}
                                    disabled={!states.stateStart || cells.A10V3H2.choice
                                            || cells.A11V4H2.name !== "" || cells.A12V5H2.name !== "" 
                                            || cells.A13V6H2.name !== "" || cells.A14V7H2.name !== ""
                                            || cells.A9V2H2.empty === true
                                            || cells.A9V2H2.choice || cells.A8V1H2.choice}
                                ></button>
                            </div>}

                            {cells.A11V4H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A11V4H2.name === "RedJar" && cells.A11V4H2.choice === false ? classes.redCells :
                                        cells.A11V4H2.name === "BlueJar" && cells.A11V4H2.choice === false ? classes.blueCells :
                                        cells.A11V4H2.name === "GreenJar" && cells.A11V4H2.choice === false ? classes.greenCells :
                                        cells.A11V4H2.name === "YellowJar" && cells.A11V4H2.choice === false ? classes.yellowCells :
                                        cells.A11V4H2.name === "VioletJar" && cells.A11V4H2.choice === false ? classes.violetCells :
                                        cells.A11V4H2.name === "GrayJar" && cells.A11V4H2.choice === false ? classes.grayCells :
                                        cells.A11V4H2.name === "RedJar" && cells.A11V4H2.choice === true ? classes.redCellsChoice :
                                        cells.A11V4H2.name === "BlueJar" && cells.A11V4H2.choice === true ? classes.blueCellsChoice :
                                        cells.A11V4H2.name === "GreenJar" && cells.A11V4H2.choice === true ? classes.greenCellsChoice :
                                        cells.A11V4H2.name === "YellowJar" && cells.A11V4H2.choice === true ? classes.yellowCellsChoice :
                                        cells.A11V4H2.name === "VioletJar" && cells.A11V4H2.choice === true ? classes.violetCellsChoice :
                                        cells.A11V4H2.name === "GrayJar" && cells.A11V4H2.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A11V4H2")}
                                    disabled={!states.stateStart || cells.A11V4H2.choice
                                            || cells.A12V5H2.name !== "" 
                                            || cells.A13V6H2.name !== "" || cells.A14V7H2.name !== ""
                                            || cells.A10V3H2.empty === true
                                            || cells.A10V3H2.choice
                                            || cells.A9V2H2.choice || cells.A8V1H2.choice}
                                ></button>
                            </div>}

                            {cells.A12V5H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A12V5H2.name === "RedJar" && cells.A12V5H2.choice === false ? classes.redCells :
                                        cells.A12V5H2.name === "BlueJar" && cells.A12V5H2.choice === false ? classes.blueCells :
                                        cells.A12V5H2.name === "GreenJar" && cells.A12V5H2.choice === false ? classes.greenCells :
                                        cells.A12V5H2.name === "YellowJar" && cells.A12V5H2.choice === false ? classes.yellowCells :
                                        cells.A12V5H2.name === "VioletJar" && cells.A12V5H2.choice === false ? classes.violetCells :
                                        cells.A12V5H2.name === "GrayJar" && cells.A12V5H2.choice === false ? classes.grayCells :
                                        cells.A12V5H2.name === "RedJar" && cells.A12V5H2.choice === true ? classes.redCellsChoice :
                                        cells.A12V5H2.name === "BlueJar" && cells.A12V5H2.choice === true ? classes.blueCellsChoice :
                                        cells.A12V5H2.name === "GreenJar" && cells.A12V5H2.choice === true ? classes.greenCellsChoice :
                                        cells.A12V5H2.name === "YellowJar" && cells.A12V5H2.choice === true ? classes.yellowCellsChoice :
                                        cells.A12V5H2.name === "VioletJar" && cells.A12V5H2.choice === true ? classes.violetCellsChoice :
                                        cells.A12V5H2.name === "GrayJar" && cells.A12V5H2.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A12V5H2")}
                                    disabled={!states.stateStart || cells.A12V5H2.choice
                                            || cells.A13V6H2.name !== "" || cells.A14V7H2.name !== ""
                                            || cells.A11V4H2.empty === true 
                                            || cells.A11V4H2.choice || cells.A10V3H2.choice
                                            || cells.A9V2H2.choice || cells.A8V1H2.choice}
                                ></button>
                            </div>}

                            {cells.A13V6H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A13V6H2.name === "RedJar" && cells.A13V6H2.choice === false ? classes.redCells :
                                        cells.A13V6H2.name === "BlueJar" && cells.A13V6H2.choice === false ? classes.blueCells :
                                        cells.A13V6H2.name === "GreenJar" && cells.A13V6H2.choice === false ? classes.greenCells :
                                        cells.A13V6H2.name === "YellowJar" && cells.A13V6H2.choice === false ? classes.yellowCells :
                                        cells.A13V6H2.name === "VioletJar" && cells.A13V6H2.choice === false ? classes.violetCells :
                                        cells.A13V6H2.name === "GrayJar" && cells.A13V6H2.choice === false ? classes.grayCells :
                                        cells.A13V6H2.name === "RedJar" && cells.A13V6H2.choice === true ? classes.redCellsChoice :
                                        cells.A13V6H2.name === "BlueJar" && cells.A13V6H2.choice === true ? classes.blueCellsChoice :
                                        cells.A13V6H2.name === "GreenJar" && cells.A13V6H2.choice === true ? classes.greenCellsChoice :
                                        cells.A13V6H2.name === "YellowJar" && cells.A13V6H2.choice === true ? classes.yellowCellsChoice :
                                        cells.A13V6H2.name === "VioletJar" && cells.A13V6H2.choice === true ? classes.violetCellsChoice :
                                        cells.A13V6H2.name === "GrayJar" && cells.A13V6H2.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A13V6H2")}
                                    disabled={!states.stateStart || cells.A13V6H2.choice
                                            || cells.A14V7H2.name !== ""
                                            || cells.A12V5H2.empty === true
                                            || cells.A12V5H2.choice
                                            || cells.A11V4H2.choice || cells.A10V3H2.choice
                                            || cells.A9V2H2.choice || cells.A8V1H2.choice}
                                ></button>
                            </div>}

                            {cells.A14V7H2.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A14V7H2.name === "RedJar" && cells.A14V7H2.choice === false ? classes.redCells :
                                        cells.A14V7H2.name === "BlueJar" && cells.A14V7H2.choice === false ? classes.blueCells :
                                        cells.A14V7H2.name === "GreenJar" && cells.A14V7H2.choice === false ? classes.greenCells :
                                        cells.A14V7H2.name === "YellowJar" && cells.A14V7H2.choice === false ? classes.yellowCells :
                                        cells.A14V7H2.name === "VioletJar" && cells.A14V7H2.choice === false ? classes.violetCells :
                                        cells.A14V7H2.name === "GrayJar" && cells.A14V7H2.choice === false ? classes.grayCells :
                                        cells.A14V7H2.name === "RedJar" && cells.A14V7H2.choice === true ? classes.redCellsChoice :
                                        cells.A14V7H2.name === "BlueJar" && cells.A14V7H2.choice === true ? classes.blueCellsChoice :
                                        cells.A14V7H2.name === "GreenJar" && cells.A14V7H2.choice === true ? classes.greenCellsChoice :
                                        cells.A14V7H2.name === "YellowJar" && cells.A14V7H2.choice === true ? classes.yellowCellsChoice :
                                        cells.A14V7H2.name === "VioletJar" && cells.A14V7H2.choice === true ? classes.violetCellsChoice :
                                        cells.A14V7H2.name === "GrayJar" && cells.A14V7H2.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A14V7H2")}
                                    disabled={!states.stateStart || cells.A14V7H2.choice 
                                            || cells.A13V6H2.empty === true
                                            || cells.A13V6H2.choice || cells.A12V5H2.choice
                                            || cells.A11V4H2.choice || cells.A10V3H2.choice
                                            || cells.A9V2H2.choice || cells.A8V1H2.choice}
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 3 */}
                        <div className={classes.fieldH3} style={{background: `url(${GreenShelf}) center no-repeat`,backgroundSize: "contain"}}>

                            {cells.A15V1H3.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A15V1H3.name === "RedJar" && cells.A15V1H3.choice === false ? classes.redCells :
                                        cells.A15V1H3.name === "BlueJar" && cells.A15V1H3.choice === false ? classes.blueCells :
                                        cells.A15V1H3.name === "GreenJar" && cells.A15V1H3.choice === false ? classes.greenCells :
                                        cells.A15V1H3.name === "YellowJar" && cells.A15V1H3.choice === false ? classes.yellowCells :
                                        cells.A15V1H3.name === "VioletJar" && cells.A15V1H3.choice === false ? classes.violetCells :
                                        cells.A15V1H3.name === "GrayJar" && cells.A15V1H3.choice === false ? classes.grayCells :
                                        cells.A15V1H3.name === "RedJar" && cells.A15V1H3.choice === true ? classes.redCellsChoice :
                                        cells.A15V1H3.name === "BlueJar" && cells.A15V1H3.choice === true ? classes.blueCellsChoice :
                                        cells.A15V1H3.name === "GreenJar" && cells.A15V1H3.choice === true ? classes.greenCellsChoice :
                                        cells.A15V1H3.name === "YellowJar" && cells.A15V1H3.choice === true ? classes.yellowCellsChoice :
                                        cells.A15V1H3.name === "VioletJar" && cells.A15V1H3.choice === true ? classes.violetCellsChoice :
                                        cells.A15V1H3.name === "GrayJar" && cells.A15V1H3.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A15V1H3")}
                                    disabled={!states.stateStart || cells.A15V1H3.choice 
                                            || cells.A16V2H3.name !== "" || cells.A17V3H3.name !== "" 
                                            || cells.A18V4H3.name !== "" || cells.A19V5H3.name !== "" 
                                            || cells.A20V6H3.name !== "" || cells.A21V7H3.name !== ""}
                                ></button>
                            </div>}

                            {cells.A16V2H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A16V2H3.name === "RedJar" && cells.A16V2H3.choice === false ? classes.redCells :
                                        cells.A16V2H3.name === "BlueJar" && cells.A16V2H3.choice === false ? classes.blueCells :
                                        cells.A16V2H3.name === "GreenJar" && cells.A16V2H3.choice === false ? classes.greenCells :
                                        cells.A16V2H3.name === "YellowJar" && cells.A16V2H3.choice === false ? classes.yellowCells :
                                        cells.A16V2H3.name === "VioletJar" && cells.A16V2H3.choice === false ? classes.violetCells :
                                        cells.A16V2H3.name === "GrayJar" && cells.A16V2H3.choice === false ? classes.grayCells :
                                        cells.A16V2H3.name === "RedJar" && cells.A16V2H3.choice === true ? classes.redCellsChoice :
                                        cells.A16V2H3.name === "BlueJar" && cells.A16V2H3.choice === true ? classes.blueCellsChoice :
                                        cells.A16V2H3.name === "GreenJar" && cells.A16V2H3.choice === true ? classes.greenCellsChoice :
                                        cells.A16V2H3.name === "YellowJar" && cells.A16V2H3.choice === true ? classes.yellowCellsChoice :
                                        cells.A16V2H3.name === "VioletJar" && cells.A16V2H3.choice === true ? classes.violetCellsChoice :
                                        cells.A16V2H3.name === "GrayJar" && cells.A16V2H3.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A16V2H3")}
                                    disabled={!states.stateStart || cells.A16V2H3.choice
                                            || cells.A17V3H3.name !== "" 
                                            || cells.A18V4H3.name !== "" || cells.A19V5H3.name !== "" 
                                            || cells.A20V6H3.name !== "" || cells.A21V7H3.name !== ""
                                            || cells.A15V1H3.empty === true || cells.A15V1H3.choice}
                                ></button>
                            </div>}

                            {cells.A17V3H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A17V3H3.name === "RedJar" && cells.A17V3H3.choice === false ? classes.redCells :
                                        cells.A17V3H3.name === "BlueJar" && cells.A17V3H3.choice === false ? classes.blueCells :
                                        cells.A17V3H3.name === "GreenJar" && cells.A17V3H3.choice === false ? classes.greenCells :
                                        cells.A17V3H3.name === "YellowJar" && cells.A17V3H3.choice === false ? classes.yellowCells :
                                        cells.A17V3H3.name === "VioletJar" && cells.A17V3H3.choice === false ? classes.violetCells :
                                        cells.A17V3H3.name === "GrayJar" && cells.A17V3H3.choice === false ? classes.grayCells :
                                        cells.A17V3H3.name === "RedJar" && cells.A17V3H3.choice === true ? classes.redCellsChoice :
                                        cells.A17V3H3.name === "BlueJar" && cells.A17V3H3.choice === true ? classes.blueCellsChoice :
                                        cells.A17V3H3.name === "GreenJar" && cells.A17V3H3.choice === true ? classes.greenCellsChoice :
                                        cells.A17V3H3.name === "YellowJar" && cells.A17V3H3.choice === true ? classes.yellowCellsChoice :
                                        cells.A17V3H3.name === "VioletJar" && cells.A17V3H3.choice === true ? classes.violetCellsChoice :
                                        cells.A17V3H3.name === "GrayJar" && cells.A17V3H3.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A17V3H3")}
                                    disabled={!states.stateStart || cells.A17V3H3.choice
                                            || cells.A18V4H3.name !== "" || cells.A19V5H3.name !== "" 
                                            || cells.A20V6H3.name !== "" || cells.A21V7H3.name !== ""
                                            || cells.A16V2H3.empty === true
                                            || cells.A16V2H3.choice || cells.A15V1H3.choice}
                                ></button>
                            </div>}

                            {cells.A18V4H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A18V4H3.name === "RedJar" && cells.A18V4H3.choice === false ? classes.redCells :
                                        cells.A18V4H3.name === "BlueJar" && cells.A18V4H3.choice === false ? classes.blueCells :
                                        cells.A18V4H3.name === "GreenJar" && cells.A18V4H3.choice === false ? classes.greenCells :
                                        cells.A18V4H3.name === "YellowJar" && cells.A18V4H3.choice === false ? classes.yellowCells :
                                        cells.A18V4H3.name === "VioletJar" && cells.A18V4H3.choice === false ? classes.violetCells :
                                        cells.A18V4H3.name === "GrayJar" && cells.A18V4H3.choice === false ? classes.grayCells :
                                        cells.A18V4H3.name === "RedJar" && cells.A18V4H3.choice === true ? classes.redCellsChoice :
                                        cells.A18V4H3.name === "BlueJar" && cells.A18V4H3.choice === true ? classes.blueCellsChoice :
                                        cells.A18V4H3.name === "GreenJar" && cells.A18V4H3.choice === true ? classes.greenCellsChoice :
                                        cells.A18V4H3.name === "YellowJar" && cells.A18V4H3.choice === true ? classes.yellowCellsChoice :
                                        cells.A18V4H3.name === "VioletJar" && cells.A18V4H3.choice === true ? classes.violetCellsChoice :
                                        cells.A18V4H3.name === "GrayJar" && cells.A18V4H3.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A18V4H3")}
                                    disabled={!states.stateStart || cells.A18V4H3.choice
                                            || cells.A19V5H3.name !== "" 
                                            || cells.A20V6H3.name !== "" || cells.A21V7H3.name !== ""
                                            || cells.A17V3H3.empty === true
                                            || cells.A17V3H3.choice
                                            || cells.A16V2H3.choice || cells.A15V1H3.choice}
                                ></button>
                            </div>}

                            {cells.A19V5H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A19V5H3.name === "RedJar" && cells.A19V5H3.choice === false ? classes.redCells :
                                        cells.A19V5H3.name === "BlueJar" && cells.A19V5H3.choice === false ? classes.blueCells :
                                        cells.A19V5H3.name === "GreenJar" && cells.A19V5H3.choice === false ? classes.greenCells :
                                        cells.A19V5H3.name === "YellowJar" && cells.A19V5H3.choice === false ? classes.yellowCells :
                                        cells.A19V5H3.name === "VioletJar" && cells.A19V5H3.choice === false ? classes.violetCells :
                                        cells.A19V5H3.name === "GrayJar" && cells.A19V5H3.choice === false ? classes.grayCells :
                                        cells.A19V5H3.name === "RedJar" && cells.A19V5H3.choice === true ? classes.redCellsChoice :
                                        cells.A19V5H3.name === "BlueJar" && cells.A19V5H3.choice === true ? classes.blueCellsChoice :
                                        cells.A19V5H3.name === "GreenJar" && cells.A19V5H3.choice === true ? classes.greenCellsChoice :
                                        cells.A19V5H3.name === "YellowJar" && cells.A19V5H3.choice === true ? classes.yellowCellsChoice :
                                        cells.A19V5H3.name === "VioletJar" && cells.A19V5H3.choice === true ? classes.violetCellsChoice :
                                        cells.A19V5H3.name === "GrayJar" && cells.A19V5H3.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A19V5H3")}
                                    disabled={!states.stateStart || cells.A19V5H3.choice
                                            || cells.A20V6H3.name !== "" || cells.A21V7H3.name !== ""
                                            || cells.A18V4H3.empty === true 
                                            || cells.A18V4H3.choice || cells.A17V3H3.choice
                                            || cells.A16V2H3.choice || cells.A15V1H3.choice}
                                ></button>
                            </div>}

                            {cells.A20V6H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A20V6H3.name === "RedJar" && cells.A20V6H3.choice === false ? classes.redCells :
                                        cells.A20V6H3.name === "BlueJar" && cells.A20V6H3.choice === false ? classes.blueCells :
                                        cells.A20V6H3.name === "GreenJar" && cells.A20V6H3.choice === false ? classes.greenCells :
                                        cells.A20V6H3.name === "YellowJar" && cells.A20V6H3.choice === false ? classes.yellowCells :
                                        cells.A20V6H3.name === "VioletJar" && cells.A20V6H3.choice === false ? classes.violetCells :
                                        cells.A20V6H3.name === "GrayJar" && cells.A20V6H3.choice === false ? classes.grayCells :
                                        cells.A20V6H3.name === "RedJar" && cells.A20V6H3.choice === true ? classes.redCellsChoice :
                                        cells.A20V6H3.name === "BlueJar" && cells.A20V6H3.choice === true ? classes.blueCellsChoice :
                                        cells.A20V6H3.name === "GreenJar" && cells.A20V6H3.choice === true ? classes.greenCellsChoice :
                                        cells.A20V6H3.name === "YellowJar" && cells.A20V6H3.choice === true ? classes.yellowCellsChoice :
                                        cells.A20V6H3.name === "VioletJar" && cells.A20V6H3.choice === true ? classes.violetCellsChoice :
                                        cells.A20V6H3.name === "GrayJar" && cells.A20V6H3.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A20V6H3")}
                                    disabled={!states.stateStart || cells.A20V6H3.choice
                                            || cells.A21V7H3.name !== ""
                                            || cells.A19V5H3.empty === true
                                            || cells.A19V5H3.choice
                                            || cells.A18V4H3.choice || cells.A17V3H3.choice
                                            || cells.A16V2H3.choice || cells.A15V1H3.choice}
                                ></button>
                            </div>}

                            {cells.A21V7H3.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A21V7H3.name === "RedJar" && cells.A21V7H3.choice === false ? classes.redCells :
                                        cells.A21V7H3.name === "BlueJar" && cells.A21V7H3.choice === false ? classes.blueCells :
                                        cells.A21V7H3.name === "GreenJar" && cells.A21V7H3.choice === false ? classes.greenCells :
                                        cells.A21V7H3.name === "YellowJar" && cells.A21V7H3.choice === false ? classes.yellowCells :
                                        cells.A21V7H3.name === "VioletJar" && cells.A21V7H3.choice === false ? classes.violetCells :
                                        cells.A21V7H3.name === "GrayJar" && cells.A21V7H3.choice === false ? classes.grayCells :
                                        cells.A21V7H3.name === "RedJar" && cells.A21V7H3.choice === true ? classes.redCellsChoice :
                                        cells.A21V7H3.name === "BlueJar" && cells.A21V7H3.choice === true ? classes.blueCellsChoice :
                                        cells.A21V7H3.name === "GreenJar" && cells.A21V7H3.choice === true ? classes.greenCellsChoice :
                                        cells.A21V7H3.name === "YellowJar" && cells.A21V7H3.choice === true ? classes.yellowCellsChoice :
                                        cells.A21V7H3.name === "VioletJar" && cells.A21V7H3.choice === true ? classes.violetCellsChoice :
                                        cells.A21V7H3.name === "GrayJar" && cells.A21V7H3.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A21V7H3")}
                                    disabled={!states.stateStart || cells.A21V7H3.choice 
                                            || cells.A20V6H3.empty === true
                                            || cells.A20V6H3.choice || cells.A19V5H3.choice
                                            || cells.A18V4H3.choice || cells.A17V3H3.choice
                                            || cells.A16V2H3.choice || cells.A15V1H3.choice}
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 4 */}
                        <div className={classes.fieldH4} style={{background: `url(${Shelf}) center no-repeat`,backgroundSize: "contain"}}>

                            {cells.A22V1H4.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A22V1H4.name === "RedJar" && cells.A22V1H4.choice === false ? classes.redCells :
                                        cells.A22V1H4.name === "BlueJar" && cells.A22V1H4.choice === false ? classes.blueCells :
                                        cells.A22V1H4.name === "GreenJar" && cells.A22V1H4.choice === false ? classes.greenCells :
                                        cells.A22V1H4.name === "YellowJar" && cells.A22V1H4.choice === false ? classes.yellowCells :
                                        cells.A22V1H4.name === "VioletJar" && cells.A22V1H4.choice === false ? classes.violetCells :
                                        cells.A22V1H4.name === "GrayJar" && cells.A22V1H4.choice === false ? classes.grayCells :
                                        cells.A22V1H4.name === "RedJar" && cells.A22V1H4.choice === true ? classes.redCellsChoice :
                                        cells.A22V1H4.name === "BlueJar" && cells.A22V1H4.choice === true ? classes.blueCellsChoice :
                                        cells.A22V1H4.name === "GreenJar" && cells.A22V1H4.choice === true ? classes.greenCellsChoice :
                                        cells.A22V1H4.name === "YellowJar" && cells.A22V1H4.choice === true ? classes.yellowCellsChoice :
                                        cells.A22V1H4.name === "VioletJar" && cells.A22V1H4.choice === true ? classes.violetCellsChoice :
                                        cells.A22V1H4.name === "GrayJar" && cells.A22V1H4.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A22V1H4")}
                                    disabled={!states.stateStart || cells.A22V1H4.choice  
                                            || !cells.A23V2H4.empty || !cells.A24V3H4.empty 
                                            || !cells.A25V4H4.empty || !cells.A26V5H4.empty 
                                            || !cells.A27V6H4.empty || !cells.A28V7H4.empty}
                                ></button>

                            </div>}

                            {cells.A23V2H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A23V2H4.name === "RedJar" && cells.A23V2H4.choice === false ? classes.redCells :
                                        cells.A23V2H4.name === "BlueJar" && cells.A23V2H4.choice === false ? classes.blueCells :
                                        cells.A23V2H4.name === "GreenJar" && cells.A23V2H4.choice === false ? classes.greenCells :
                                        cells.A23V2H4.name === "YellowJar" && cells.A23V2H4.choice === false ? classes.yellowCells :
                                        cells.A23V2H4.name === "VioletJar" && cells.A23V2H4.choice === false ? classes.violetCells :
                                        cells.A23V2H4.name === "GrayJar" && cells.A23V2H4.choice === false ? classes.grayCells :
                                        cells.A23V2H4.name === "RedJar" && cells.A23V2H4.choice === true ? classes.redCellsChoice :
                                        cells.A23V2H4.name === "BlueJar" && cells.A23V2H4.choice === true ? classes.blueCellsChoice :
                                        cells.A23V2H4.name === "GreenJar" && cells.A23V2H4.choice === true ? classes.greenCellsChoice :
                                        cells.A23V2H4.name === "YellowJar" && cells.A23V2H4.choice === true ? classes.yellowCellsChoice :
                                        cells.A23V2H4.name === "VioletJar" && cells.A23V2H4.choice === true ? classes.violetCellsChoice :
                                        cells.A23V2H4.name === "GrayJar" && cells.A23V2H4.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A23V2H4")}
                                    disabled={!states.stateStart || cells.A23V2H4.choice
                                            || !cells.A24V3H4.empty 
                                            || !cells.A25V4H4.empty || !cells.A26V5H4.empty 
                                            || !cells.A27V6H4.empty || !cells.A28V7H4.empty
                                            || cells.A22V1H4.empty || cells.A22V1H4.choice}
                                ></button>
                            </div>}

                            {cells.A24V3H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A24V3H4.name === "RedJar" && cells.A24V3H4.choice === false ? classes.redCells :
                                        cells.A24V3H4.name === "BlueJar" && cells.A24V3H4.choice === false ? classes.blueCells :
                                        cells.A24V3H4.name === "GreenJar" && cells.A24V3H4.choice === false ? classes.greenCells :
                                        cells.A24V3H4.name === "YellowJar" && cells.A24V3H4.choice === false ? classes.yellowCells :
                                        cells.A24V3H4.name === "VioletJar" && cells.A24V3H4.choice === false ? classes.violetCells :
                                        cells.A24V3H4.name === "GrayJar" && cells.A24V3H4.choice === false ? classes.grayCells :
                                        cells.A24V3H4.name === "RedJar" && cells.A24V3H4.choice === true ? classes.redCellsChoice :
                                        cells.A24V3H4.name === "BlueJar" && cells.A24V3H4.choice === true ? classes.blueCellsChoice :
                                        cells.A24V3H4.name === "GreenJar" && cells.A24V3H4.choice === true ? classes.greenCellsChoice :
                                        cells.A24V3H4.name === "YellowJar" && cells.A24V3H4.choice === true ? classes.yellowCellsChoice :
                                        cells.A24V3H4.name === "VioletJar" && cells.A24V3H4.choice === true ? classes.violetCellsChoice :
                                        cells.A24V3H4.name === "GrayJar" && cells.A24V3H4.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A24V3H4")}
                                    disabled={!states.stateStart || cells.A24V3H4.choice
                                            || !cells.A25V4H4.empty || !cells.A26V5H4.empty 
                                            || !cells.A27V6H4.empty || !cells.A28V7H4.empty
                                            || cells.A23V2H4.empty
                                            || cells.A23V2H4.choice || cells.A22V1H4.choice}
                                ></button>
                            </div>}

                            {cells.A25V4H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A25V4H4.name === "RedJar" && cells.A25V4H4.choice === false ? classes.redCells :
                                        cells.A25V4H4.name === "BlueJar" && cells.A25V4H4.choice === false ? classes.blueCells :
                                        cells.A25V4H4.name === "GreenJar" && cells.A25V4H4.choice === false ? classes.greenCells :
                                        cells.A25V4H4.name === "YellowJar" && cells.A25V4H4.choice === false ? classes.yellowCells :
                                        cells.A25V4H4.name === "VioletJar" && cells.A25V4H4.choice === false ? classes.violetCells :
                                        cells.A25V4H4.name === "GrayJar" && cells.A25V4H4.choice === false ? classes.grayCells :
                                        cells.A25V4H4.name === "RedJar" && cells.A25V4H4.choice === true ? classes.redCellsChoice :
                                        cells.A25V4H4.name === "BlueJar" && cells.A25V4H4.choice === true ? classes.blueCellsChoice :
                                        cells.A25V4H4.name === "GreenJar" && cells.A25V4H4.choice === true ? classes.greenCellsChoice :
                                        cells.A25V4H4.name === "YellowJar" && cells.A25V4H4.choice === true ? classes.yellowCellsChoice :
                                        cells.A25V4H4.name === "VioletJar" && cells.A25V4H4.choice === true ? classes.violetCellsChoice :
                                        cells.A25V4H4.name === "GrayJar" && cells.A25V4H4.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A25V4H4")}
                                    disabled={!states.stateStart || cells.A25V4H4.choice
                                            || !cells.A26V5H4.empty
                                            || !cells.A27V6H4.empty || !cells.A28V7H4.empty
                                            || cells.A24V3H4.empty
                                            || cells.A24V3H4.choice
                                            || cells.A23V2H4.choice || cells.A22V1H4.choice}
                                ></button>
                            </div>}

                            {cells.A26V5H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A26V5H4.name === "RedJar" && cells.A26V5H4.choice === false ? classes.redCells :
                                        cells.A26V5H4.name === "BlueJar" && cells.A26V5H4.choice === false ? classes.blueCells :
                                        cells.A26V5H4.name === "GreenJar" && cells.A26V5H4.choice === false ? classes.greenCells :
                                        cells.A26V5H4.name === "YellowJar" && cells.A26V5H4.choice === false ? classes.yellowCells :
                                        cells.A26V5H4.name === "VioletJar" && cells.A26V5H4.choice === false ? classes.violetCells :
                                        cells.A26V5H4.name === "GrayJar" && cells.A26V5H4.choice === false ? classes.grayCells :
                                        cells.A26V5H4.name === "RedJar" && cells.A26V5H4.choice === true ? classes.redCellsChoice :
                                        cells.A26V5H4.name === "BlueJar" && cells.A26V5H4.choice === true ? classes.blueCellsChoice :
                                        cells.A26V5H4.name === "GreenJar" && cells.A26V5H4.choice === true ? classes.greenCellsChoice :
                                        cells.A26V5H4.name === "YellowJar" && cells.A26V5H4.choice === true ? classes.yellowCellsChoice :
                                        cells.A26V5H4.name === "VioletJar" && cells.A26V5H4.choice === true ? classes.violetCellsChoice :
                                        cells.A26V5H4.name === "GrayJar" && cells.A26V5H4.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A26V5H4")}
                                    disabled={!states.stateStart || cells.A26V5H4.choice
                                            || !cells.A27V6H4.empty || !cells.A28V7H4.empty
                                            || cells.A25V4H4.empty
                                            || cells.A25V4H4.choice || cells.A24V3H4.choice
                                            || cells.A23V2H4.choice || cells.A22V1H4.choice}
                                ></button>
                            </div>}

                            {cells.A27V6H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A27V6H4.name === "RedJar" && cells.A27V6H4.choice === false ? classes.redCells :
                                        cells.A27V6H4.name === "BlueJar" && cells.A27V6H4.choice === false ? classes.blueCells :
                                        cells.A27V6H4.name === "GreenJar" && cells.A27V6H4.choice === false ? classes.greenCells :
                                        cells.A27V6H4.name === "YellowJar" && cells.A27V6H4.choice === false ? classes.yellowCells :
                                        cells.A27V6H4.name === "VioletJar" && cells.A27V6H4.choice === false ? classes.violetCells :
                                        cells.A27V6H4.name === "GrayJar" && cells.A27V6H4.choice === false ? classes.grayCells :
                                        cells.A27V6H4.name === "RedJar" && cells.A27V6H4.choice === true ? classes.redCellsChoice :
                                        cells.A27V6H4.name === "BlueJar" && cells.A27V6H4.choice === true ? classes.blueCellsChoice :
                                        cells.A27V6H4.name === "GreenJar" && cells.A27V6H4.choice === true ? classes.greenCellsChoice :
                                        cells.A27V6H4.name === "YellowJar" && cells.A27V6H4.choice === true ? classes.yellowCellsChoice :
                                        cells.A27V6H4.name === "VioletJar" && cells.A27V6H4.choice === true ? classes.violetCellsChoice :
                                        cells.A27V6H4.name === "GrayJar" && cells.A27V6H4.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A27V6H4")}
                                    disabled={!states.stateStart || cells.A27V6H4.choice
                                            || !cells.A28V7H4.empty
                                            || cells.A26V5H4.empty
                                            || cells.A26V5H4.choice
                                            || cells.A25V4H4.choice || cells.A24V3H4.choice
                                            || cells.A23V2H4.choice || cells.A22V1H4.choice}
                                ></button>
                            </div>}

                            {cells.A28V7H4.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A28V7H4.name === "RedJar" && cells.A28V7H4.choice === false ? classes.redCells :
                                        cells.A28V7H4.name === "BlueJar" && cells.A28V7H4.choice === false ? classes.blueCells :
                                        cells.A28V7H4.name === "GreenJar" && cells.A28V7H4.choice === false ? classes.greenCells :
                                        cells.A28V7H4.name === "YellowJar" && cells.A28V7H4.choice === false ? classes.yellowCells :
                                        cells.A28V7H4.name === "VioletJar" && cells.A28V7H4.choice === false ? classes.violetCells :
                                        cells.A28V7H4.name === "GrayJar" && cells.A28V7H4.choice === false ? classes.grayCells :
                                        cells.A28V7H4.name === "RedJar" && cells.A28V7H4.choice === true ? classes.redCellsChoice :
                                        cells.A28V7H4.name === "BlueJar" && cells.A28V7H4.choice === true ? classes.blueCellsChoice :
                                        cells.A28V7H4.name === "GreenJar" && cells.A28V7H4.choice === true ? classes.greenCellsChoice :
                                        cells.A28V7H4.name === "YellowJar" && cells.A28V7H4.choice === true ? classes.yellowCellsChoice :
                                        cells.A28V7H4.name === "VioletJar" && cells.A28V7H4.choice === true ? classes.violetCellsChoice :
                                        cells.A28V7H4.name === "GrayJar" && cells.A28V7H4.choice === true ? classes.grayCellsChoice :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A28V7H4")}
                                    disabled={!states.stateStart || cells.A28V7H4.choice 
                                            || cells.A27V6H4.empty
                                            || cells.A27V6H4.choice || cells.A26V5H4.choice
                                            || cells.A25V4H4.choice || cells.A24V3H4.choice
                                            || cells.A23V2H4.choice || cells.A22V1H4.choice}
                                ></button>
                            </div>}

                        </div>

                    </div>

                </div>
                
            </div>
        
        </>
    )
}