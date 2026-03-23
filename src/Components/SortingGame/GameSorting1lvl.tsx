import { useState } from "react";
import classes from "../../Styles/SortingGame.module.css";
import OrcMushroomPicker from "../../assets/SortingGameImages/OrcMushroomPicker.png";

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
    });

    const [cells, setCells]: any = useState({
        A1V1H1: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A2V2H1: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A3V3H1: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A4V4H1: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A5V5H1: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A6V6H1: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A7V7H1: {
            name: "",
            chioce: false,
            showCell: true,
        },

        A8V1H2: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A9V2H2: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A10V3H2: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A11V4H2: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A12V5H2: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A13V6H2: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A14V7H2: {
            name: "",
            chioce: false,
            showCell: true,
        },

        A15V1H3: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A16V2H3: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A17V3H3: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A18V4H3: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A19V5H3: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A20V6H3: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A21V7H3: {
            name: "",
            chioce: false,
            showCell: true,
        },

        A22V1H4: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A23V2H4: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A24V3H4: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A25V4H4: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A26V5H4: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A27V6H4: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A28V7H4: {
            name: "",
            chioce: false,
            showCell: true,
        },

        A29V1H5: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A30V2H5: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A31V3H5: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A32V4H5: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A33V5H5: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A34V6H5: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A35V7H5: {
            name: "",
            chioce: false,
            showCell: true,
        },

        A36V1H6: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A37V2H6: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A38V3H6: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A39V4H6: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A40V5H6: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A41V6H6: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A42V7H6: {
            name: "",
            chioce: false,
            showCell: true,
        },

    });
    
    const [cellsSpare, setCellsSpare]: any = useState({
        A43V1H7: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A44V2H7: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A45V3H7: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A46V4H7: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A47V5H7: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A48V6H7: {
            name: "",
            chioce: false,
            showCell: true,
        },
        A49V7H7: {
            name: "",
            chioce: false,
            showCell: true,
        },
    });

    function handleStartGame() {
        if (states.stateStart) return;

        const colors = [
            ...Array(7).fill(states.cellsRedJarName),
            ...Array(7).fill(states.cellsBlueJarName),
            ...Array(7).fill(states.cellsGreenJarName),
            ...Array(7).fill(states.cellsYellowJarName),
            ...Array(7).fill(states.cellsVioletJarName),
            ...Array(7).fill(states.cellsGrayJarName)
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

    setStates((prev: any) => ({...prev, showButtonStart: false, stateStart: true, showModalIntro: false, showModalInfo: false}));
    setTimeout(() => {
        setStates((prev:any) => ({...prev, door: false}));
    },2000);
};

    function handleChoiceCell(cellKey: string) {
        if (!cells[cellKey].chioce && states.counterCellsChoices < 1) {
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

                <div className={classes.gameField}>

                        { states.showButtonStart && <p className={classes.buttonStart} onClick={handleStartGame}>Старт</p>}

                        { states.showModalInfo && <div>
                            <div className={classes.infoOverlay}> 
                                <p className={classes.info}>Пожалуйста, помоги мне навести порядок в кладовой с банками.</p>
                            </div>
                                <img className={classes.imageInfoIntro} src={OrcMushroomPicker} alt="OrcMushroomPicker" draggable={false}/>
                        </div> }

                        {states.door && <div className={states.stateStart ? classes.leftDoorOpen : !states.stateStart ? classes.leftDoorClose : classes.door}></div>}

                        {states.door && <div className={states.stateStart ? classes.rightDoorOpen : !states.stateStart ? classes.rightDoorClose : classes.door}></div>}

                    <div className={classes.fields}>

                        <div className={classes.fieldH1}>

                            {cells.A1V1H1.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A1V1H1.name === "RedJar" ? classes.redCells :
                                        cells.A1V1H1.name === "BlueJar" ? classes.blueCells :
                                        cells.A1V1H1.name === "GreenJar" ? classes.greenCells :
                                        cells.A1V1H1.name === "YellowJar" ? classes.yellowCells :
                                        cells.A1V1H1.name === "VioletJar" ? classes.violetCells :
                                        cells.A1V1H1.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A1V1H1")}
                                    disabled={!states.stateStart || cells.A1V1H1.chioce}
                                ></button>
                            </div>}

                            {cells.A2V2H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A2V2H1.name === "RedJar" ? classes.redCells :
                                        cells.A2V2H1.name === "BlueJar" ? classes.blueCells :
                                        cells.A2V2H1.name === "GreenJar" ? classes.greenCells :
                                        cells.A2V2H1.name === "YellowJar" ? classes.yellowCells :
                                        cells.A2V2H1.name === "VioletJar" ? classes.violetCells :
                                        cells.A2V2H1.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A2V2H1")}
                                    disabled={!states.stateStart || cells.A2V2H1.chioce}
                                ></button>
                            </div>}

                            {cells.A3V3H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A3V3H1.name === "RedJar" ? classes.redCells :
                                        cells.A3V3H1.name === "BlueJar" ? classes.blueCells :
                                        cells.A3V3H1.name === "GreenJar" ? classes.greenCells :
                                        cells.A3V3H1.name === "YellowJar" ? classes.yellowCells :
                                        cells.A3V3H1.name === "VioletJar" ? classes.violetCells :
                                        cells.A3V3H1.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A3V3H1")}
                                    disabled={!states.stateStart || cells.A3V3H1.chioce}
                                ></button>
                            </div>}

                            {cells.A4V4H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A4V4H1.name === "RedJar" ? classes.redCells :
                                        cells.A4V4H1.name === "BlueJar" ? classes.blueCells :
                                        cells.A4V4H1.name === "GreenJar" ? classes.greenCells :
                                        cells.A4V4H1.name === "YellowJar" ? classes.yellowCells :
                                        cells.A4V4H1.name === "VioletJar" ? classes.violetCells :
                                        cells.A4V4H1.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A4V4H1")}
                                    disabled={!states.stateStart || cells.A4V4H1.chioce}
                                ></button>
                            </div>}

                            {cells.A5V5H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A5V5H1.name === "RedJar" ? classes.redCells :
                                        cells.A5V5H1.name === "BlueJar" ? classes.blueCells :
                                        cells.A5V5H1.name === "GreenJar" ? classes.greenCells :
                                        cells.A5V5H1.name === "YellowJar" ? classes.yellowCells :
                                        cells.A5V5H1.name === "VioletJar" ? classes.violetCells :
                                        cells.A5V5H1.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A5V5H1")}
                                    disabled={!states.stateStart || cells.A5V5H1.chioce}
                                ></button>
                            </div>}

                            {cells.A6V6H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A6V6H1.name === "RedJar" ? classes.redCells :
                                        cells.A6V6H1.name === "BlueJar" ? classes.blueCells :
                                        cells.A6V6H1.name === "GreenJar" ? classes.greenCells :
                                        cells.A6V6H1.name === "YellowJar" ? classes.yellowCells :
                                        cells.A6V6H1.name === "VioletJar" ? classes.violetCells :
                                        cells.A6V6H1.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A6V6H1")}
                                    disabled={!states.stateStart || cells.A6V6H1.chioce}
                                ></button>
                            </div>}

                            {cells.A7V7H1.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A7V7H1.name === "RedJar" ? classes.redCells :
                                        cells.A7V7H1.name === "BlueJar" ? classes.blueCells :
                                        cells.A7V7H1.name === "GreenJar" ? classes.greenCells :
                                        cells.A7V7H1.name === "YellowJar" ? classes.yellowCells :
                                        cells.A7V7H1.name === "VioletJar" ? classes.violetCells :
                                        cells.A7V7H1.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A7V7H1")}
                                    disabled={!states.stateStart || cells.A7V7H1.chioce}
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 2 */}
                        <div className={classes.fieldH2}>

                            {cells.A8V1H2.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A8V1H2.name === "RedJar" ? classes.redCells :
                                        cells.A8V1H2.name === "BlueJar" ? classes.blueCells :
                                        cells.A8V1H2.name === "GreenJar" ? classes.greenCells :
                                        cells.A8V1H2.name === "YellowJar" ? classes.yellowCells :
                                        cells.A8V1H2.name === "VioletJar" ? classes.violetCells :
                                        cells.A8V1H2.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A8V1H2")}
                                    disabled={!states.stateStart || cells.A8V1H2.chioce}
                                ></button>
                            </div>}

                            {cells.A9V2H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A9V2H2.name === "RedJar" ? classes.redCells :
                                        cells.A9V2H2.name === "BlueJar" ? classes.blueCells :
                                        cells.A9V2H2.name === "GreenJar" ? classes.greenCells :
                                        cells.A9V2H2.name === "YellowJar" ? classes.yellowCells :
                                        cells.A9V2H2.name === "VioletJar" ? classes.violetCells :
                                        cells.A9V2H2.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A9V2H2")}
                                    disabled={!states.stateStart || cells.A9V2H2.chioce}
                                ></button>
                            </div>}

                            {cells.A10V3H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A10V3H2.name === "RedJar" ? classes.redCells :
                                        cells.A10V3H2.name === "BlueJar" ? classes.blueCells :
                                        cells.A10V3H2.name === "GreenJar" ? classes.greenCells :
                                        cells.A10V3H2.name === "YellowJar" ? classes.yellowCells :
                                        cells.A10V3H2.name === "VioletJar" ? classes.violetCells :
                                        cells.A10V3H2.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A10V3H2")}
                                    disabled={!states.stateStart || cells.A10V3H2.chioce}
                                ></button>
                            </div>}

                            {cells.A11V4H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A11V4H2.name === "RedJar" ? classes.redCells :
                                        cells.A11V4H2.name === "BlueJar" ? classes.blueCells :
                                        cells.A11V4H2.name === "GreenJar" ? classes.greenCells :
                                        cells.A11V4H2.name === "YellowJar" ? classes.yellowCells :
                                        cells.A11V4H2.name === "VioletJar" ? classes.violetCells :
                                        cells.A11V4H2.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A11V4H2")}
                                    disabled={!states.stateStart || cells.A11V4H2.chioce}
                                ></button>
                            </div>}

                            {cells.A12V5H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A12V5H2.name === "RedJar" ? classes.redCells :
                                        cells.A12V5H2.name === "BlueJar" ? classes.blueCells :
                                        cells.A12V5H2.name === "GreenJar" ? classes.greenCells :
                                        cells.A12V5H2.name === "YellowJar" ? classes.yellowCells :
                                        cells.A12V5H2.name === "VioletJar" ? classes.violetCells :
                                        cells.A12V5H2.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A12V5H2")}
                                    disabled={!states.stateStart || cells.A12V5H2.chioce}
                                ></button>
                            </div>}

                            {cells.A13V6H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A13V6H2.name === "RedJar" ? classes.redCells :
                                        cells.A13V6H2.name === "BlueJar" ? classes.blueCells :
                                        cells.A13V6H2.name === "GreenJar" ? classes.greenCells :
                                        cells.A13V6H2.name === "YellowJar" ? classes.yellowCells :
                                        cells.A13V6H2.name === "VioletJar" ? classes.violetCells :
                                        cells.A13V6H2.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A13V6H2")}
                                    disabled={!states.stateStart || cells.A13V6H2.chioce}
                                ></button>
                            </div>}

                            {cells.A14V7H2.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A14V7H2.name === "RedJar" ? classes.redCells :
                                        cells.A14V7H2.name === "BlueJar" ? classes.blueCells :
                                        cells.A14V7H2.name === "GreenJar" ? classes.greenCells :
                                        cells.A14V7H2.name === "YellowJar" ? classes.yellowCells :
                                        cells.A14V7H2.name === "VioletJar" ? classes.violetCells :
                                        cells.A14V7H2.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A14V7H2")}
                                    disabled={!states.stateStart || cells.A14V7H2.chioce}
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 3 */}
                        <div className={classes.fieldH3}>

                            {cells.A15V1H3.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A15V1H3.name === "RedJar" ? classes.redCells :
                                        cells.A15V1H3.name === "BlueJar" ? classes.blueCells :
                                        cells.A15V1H3.name === "GreenJar" ? classes.greenCells :
                                        cells.A15V1H3.name === "YellowJar" ? classes.yellowCells :
                                        cells.A15V1H3.name === "VioletJar" ? classes.violetCells :
                                        cells.A15V1H3.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A15V1H3")}
                                    disabled={!states.stateStart || cells.A15V1H3.chioce}
                                ></button>
                            </div>}

                            {cells.A16V2H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A16V2H3.name === "RedJar" ? classes.redCells :
                                        cells.A16V2H3.name === "BlueJar" ? classes.blueCells :
                                        cells.A16V2H3.name === "GreenJar" ? classes.greenCells :
                                        cells.A16V2H3.name === "YellowJar" ? classes.yellowCells :
                                        cells.A16V2H3.name === "VioletJar" ? classes.violetCells :
                                        cells.A16V2H3.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A16V2H3")}
                                    disabled={!states.stateStart || cells.A16V2H3.chioce}
                                ></button>
                            </div>}

                            {cells.A17V3H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A17V3H3.name === "RedJar" ? classes.redCells :
                                        cells.A17V3H3.name === "BlueJar" ? classes.blueCells :
                                        cells.A17V3H3.name === "GreenJar" ? classes.greenCells :
                                        cells.A17V3H3.name === "YellowJar" ? classes.yellowCells :
                                        cells.A17V3H3.name === "VioletJar" ? classes.violetCells :
                                        cells.A17V3H3.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A17V3H3")}
                                    disabled={!states.stateStart || cells.A17V3H3.chioce}
                                ></button>
                            </div>}

                            {cells.A18V4H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A18V4H3.name === "RedJar" ? classes.redCells :
                                        cells.A18V4H3.name === "BlueJar" ? classes.blueCells :
                                        cells.A18V4H3.name === "GreenJar" ? classes.greenCells :
                                        cells.A18V4H3.name === "YellowJar" ? classes.yellowCells :
                                        cells.A18V4H3.name === "VioletJar" ? classes.violetCells :
                                        cells.A18V4H3.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A18V4H3")}
                                    disabled={!states.stateStart || cells.A18V4H3.chioce}
                                ></button>
                            </div>}

                            {cells.A19V5H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A19V5H3.name === "RedJar" ? classes.redCells :
                                        cells.A19V5H3.name === "BlueJar" ? classes.blueCells :
                                        cells.A19V5H3.name === "GreenJar" ? classes.greenCells :
                                        cells.A19V5H3.name === "YellowJar" ? classes.yellowCells :
                                        cells.A19V5H3.name === "VioletJar" ? classes.violetCells :
                                        cells.A19V5H3.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A19V5H3")}
                                    disabled={!states.stateStart || cells.A19V5H3.chioce}
                                ></button>
                            </div>}

                            {cells.A20V6H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A20V6H3.name === "RedJar" ? classes.redCells :
                                        cells.A20V6H3.name === "BlueJar" ? classes.blueCells :
                                        cells.A20V6H3.name === "GreenJar" ? classes.greenCells :
                                        cells.A20V6H3.name === "YellowJar" ? classes.yellowCells :
                                        cells.A20V6H3.name === "VioletJar" ? classes.violetCells :
                                        cells.A20V6H3.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A20V6H3")}
                                    disabled={!states.stateStart || cells.A20V6H3.chioce}
                                ></button>
                            </div>}

                            {cells.A21V7H3.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A21V7H3.name === "RedJar" ? classes.redCells :
                                        cells.A21V7H3.name === "BlueJar" ? classes.blueCells :
                                        cells.A21V7H3.name === "GreenJar" ? classes.greenCells :
                                        cells.A21V7H3.name === "YellowJar" ? classes.yellowCells :
                                        cells.A21V7H3.name === "VioletJar" ? classes.violetCells :
                                        cells.A21V7H3.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A21V7H3")}
                                    disabled={!states.stateStart || cells.A21V7H3.chioce}
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 4 */}
                        <div className={classes.fieldH4}>

                            {cells.A22V1H4.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A22V1H4.name === "RedJar" ? classes.redCells :
                                        cells.A22V1H4.name === "BlueJar" ? classes.blueCells :
                                        cells.A22V1H4.name === "GreenJar" ? classes.greenCells :
                                        cells.A22V1H4.name === "YellowJar" ? classes.yellowCells :
                                        cells.A22V1H4.name === "VioletJar" ? classes.violetCells :
                                        cells.A22V1H4.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A22V1H4")}
                                    disabled={!states.stateStart || cells.A22V1H4.chioce}
                                ></button>
                            </div>}

                            {cells.A23V2H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A23V2H4.name === "RedJar" ? classes.redCells :
                                        cells.A23V2H4.name === "BlueJar" ? classes.blueCells :
                                        cells.A23V2H4.name === "GreenJar" ? classes.greenCells :
                                        cells.A23V2H4.name === "YellowJar" ? classes.yellowCells :
                                        cells.A23V2H4.name === "VioletJar" ? classes.violetCells :
                                        cells.A23V2H4.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A23V2H4")}
                                    disabled={!states.stateStart || cells.A23V2H4.chioce}
                                ></button>
                            </div>}

                            {cells.A24V3H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A24V3H4.name === "RedJar" ? classes.redCells :
                                        cells.A24V3H4.name === "BlueJar" ? classes.blueCells :
                                        cells.A24V3H4.name === "GreenJar" ? classes.greenCells :
                                        cells.A24V3H4.name === "YellowJar" ? classes.yellowCells :
                                        cells.A24V3H4.name === "VioletJar" ? classes.violetCells :
                                        cells.A24V3H4.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A24V3H4")}
                                    disabled={!states.stateStart || cells.A24V3H4.chioce}
                                ></button>
                            </div>}

                            {cells.A25V4H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A25V4H4.name === "RedJar" ? classes.redCells :
                                        cells.A25V4H4.name === "BlueJar" ? classes.blueCells :
                                        cells.A25V4H4.name === "GreenJar" ? classes.greenCells :
                                        cells.A25V4H4.name === "YellowJar" ? classes.yellowCells :
                                        cells.A25V4H4.name === "VioletJar" ? classes.violetCells :
                                        cells.A25V4H4.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A25V4H4")}
                                    disabled={!states.stateStart || cells.A25V4H4.chioce}
                                ></button>
                            </div>}

                            {cells.A26V5H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A26V5H4.name === "RedJar" ? classes.redCells :
                                        cells.A26V5H4.name === "BlueJar" ? classes.blueCells :
                                        cells.A26V5H4.name === "GreenJar" ? classes.greenCells :
                                        cells.A26V5H4.name === "YellowJar" ? classes.yellowCells :
                                        cells.A26V5H4.name === "VioletJar" ? classes.violetCells :
                                        cells.A26V5H4.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A26V5H4")}
                                    disabled={!states.stateStart || cells.A26V5H4.chioce}
                                ></button>
                            </div>}

                            {cells.A27V6H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A27V6H4.name === "RedJar" ? classes.redCells :
                                        cells.A27V6H4.name === "BlueJar" ? classes.blueCells :
                                        cells.A27V6H4.name === "GreenJar" ? classes.greenCells :
                                        cells.A27V6H4.name === "YellowJar" ? classes.yellowCells :
                                        cells.A27V6H4.name === "VioletJar" ? classes.violetCells :
                                        cells.A27V6H4.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A27V6H4")}
                                    disabled={!states.stateStart || cells.A27V6H4.chioce}
                                ></button>
                            </div>}

                            {cells.A28V7H4.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A28V7H4.name === "RedJar" ? classes.redCells :
                                        cells.A28V7H4.name === "BlueJar" ? classes.blueCells :
                                        cells.A28V7H4.name === "GreenJar" ? classes.greenCells :
                                        cells.A28V7H4.name === "YellowJar" ? classes.yellowCells :
                                        cells.A28V7H4.name === "VioletJar" ? classes.violetCells :
                                        cells.A28V7H4.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A28V7H4")}
                                    disabled={!states.stateStart || cells.A28V7H4.chioce}
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 5 */}
                        <div className={classes.fieldH5}>

                            {cells.A29V1H5.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A29V1H5.name === "RedJar" ? classes.redCells :
                                        cells.A29V1H5.name === "BlueJar" ? classes.blueCells :
                                        cells.A29V1H5.name === "GreenJar" ? classes.greenCells :
                                        cells.A29V1H5.name === "YellowJar" ? classes.yellowCells :
                                        cells.A29V1H5.name === "VioletJar" ? classes.violetCells :
                                        cells.A29V1H5.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A29V1H5")}
                                    disabled={!states.stateStart || cells.A29V1H5.chioce}
                                ></button>
                            </div>}

                            {cells.A30V2H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A30V2H5.name === "RedJar" ? classes.redCells :
                                        cells.A30V2H5.name === "BlueJar" ? classes.blueCells :
                                        cells.A30V2H5.name === "GreenJar" ? classes.greenCells :
                                        cells.A30V2H5.name === "YellowJar" ? classes.yellowCells :
                                        cells.A30V2H5.name === "VioletJar" ? classes.violetCells :
                                        cells.A30V2H5.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A30V2H5")}
                                    disabled={!states.stateStart || cells.A30V2H5.chioce}
                                ></button>
                            </div>}

                            {cells.A31V3H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A31V3H5.name === "RedJar" ? classes.redCells :
                                        cells.A31V3H5.name === "BlueJar" ? classes.blueCells :
                                        cells.A31V3H5.name === "GreenJar" ? classes.greenCells :
                                        cells.A31V3H5.name === "YellowJar" ? classes.yellowCells :
                                        cells.A31V3H5.name === "VioletJar" ? classes.violetCells :
                                        cells.A31V3H5.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A31V3H5")}
                                    disabled={!states.stateStart || cells.A31V3H5.chioce}
                                ></button>
                            </div>}

                            {cells.A32V4H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A32V4H5.name === "RedJar" ? classes.redCells :
                                        cells.A32V4H5.name === "BlueJar" ? classes.blueCells :
                                        cells.A32V4H5.name === "GreenJar" ? classes.greenCells :
                                        cells.A32V4H5.name === "YellowJar" ? classes.yellowCells :
                                        cells.A32V4H5.name === "VioletJar" ? classes.violetCells :
                                        cells.A32V4H5.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A32V4H5")}
                                    disabled={!states.stateStart || cells.A32V4H5.chioce}
                                ></button>
                            </div>}

                            {cells.A33V5H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A33V5H5.name === "RedJar" ? classes.redCells :
                                        cells.A33V5H5.name === "BlueJar" ? classes.blueCells :
                                        cells.A33V5H5.name === "GreenJar" ? classes.greenCells :
                                        cells.A33V5H5.name === "YellowJar" ? classes.yellowCells :
                                        cells.A33V5H5.name === "VioletJar" ? classes.violetCells :
                                        cells.A33V5H5.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A33V5H5")}
                                    disabled={!states.stateStart || cells.A33V5H5.chioce}
                                ></button>
                            </div>}

                            {cells.A34V6H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A34V6H5.name === "RedJar" ? classes.redCells :
                                        cells.A34V6H5.name === "BlueJar" ? classes.blueCells :
                                        cells.A34V6H5.name === "GreenJar" ? classes.greenCells :
                                        cells.A34V6H5.name === "YellowJar" ? classes.yellowCells :
                                        cells.A34V6H5.name === "VioletJar" ? classes.violetCells :
                                        cells.A34V6H5.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A34V6H5")}
                                    disabled={!states.stateStart || cells.A34V6H5.chioce}
                                ></button>
                            </div>}

                            {cells.A35V7H5.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A35V7H5.name === "RedJar" ? classes.redCells :
                                        cells.A35V7H5.name === "BlueJar" ? classes.blueCells :
                                        cells.A35V7H5.name === "GreenJar" ? classes.greenCells :
                                        cells.A35V7H5.name === "YellowJar" ? classes.yellowCells :
                                        cells.A35V7H5.name === "VioletJar" ? classes.violetCells :
                                        cells.A35V7H5.name === "GrayJar" ? classes.grayCells :
                                        classes.jarCells
                                    }
                                    onClick={() => handleChoiceCell("A35V7H5")}
                                    disabled={!states.stateStart || cells.A35V7H5.chioce}
                                ></button>
                            </div>}

                            </div>

                            {/* HORIZONT 6 */}
                            <div className={classes.fieldH6}>

                                {cells.A36V1H6.showCell && <div className={classes.cellsLeftSide}>
                                    <button
                                        className={
                                            cells.A36V1H6.name === "RedJar" ? classes.redCells :
                                            cells.A36V1H6.name === "BlueJar" ? classes.blueCells :
                                            cells.A36V1H6.name === "GreenJar" ? classes.greenCells :
                                            cells.A36V1H6.name === "YellowJar" ? classes.yellowCells :
                                            cells.A36V1H6.name === "VioletJar" ? classes.violetCells :
                                            cells.A36V1H6.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A36V1H6")}
                                        disabled={!states.stateStart || cells.A36V1H6.chioce}
                                    ></button>
                                </div>}

                                {cells.A37V2H6.showCell && <div className={classes.cellsCenterSide}>
                                    <button
                                        className={
                                            cells.A37V2H6.name === "RedJar" ? classes.redCells :
                                            cells.A37V2H6.name === "BlueJar" ? classes.blueCells :
                                            cells.A37V2H6.name === "GreenJar" ? classes.greenCells :
                                            cells.A37V2H6.name === "YellowJar" ? classes.yellowCells :
                                            cells.A37V2H6.name === "VioletJar" ? classes.violetCells :
                                            cells.A37V2H6.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A37V2H6")}
                                        disabled={!states.stateStart || cells.A37V2H6.chioce}
                                    ></button>
                                </div>}

                                {cells.A38V3H6.showCell && <div className={classes.cellsCenterSide}>
                                    <button
                                        className={
                                            cells.A38V3H6.name === "RedJar" ? classes.redCells :
                                            cells.A38V3H6.name === "BlueJar" ? classes.blueCells :
                                            cells.A38V3H6.name === "GreenJar" ? classes.greenCells :
                                            cells.A38V3H6.name === "YellowJar" ? classes.yellowCells :
                                            cells.A38V3H6.name === "VioletJar" ? classes.violetCells :
                                            cells.A38V3H6.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A38V3H6")}
                                        disabled={!states.stateStart || cells.A38V3H6.chioce}
                                    ></button>
                                </div>}

                                {cells.A39V4H6.showCell && <div className={classes.cellsCenterSide}>
                                    <button
                                        className={
                                            cells.A39V4H6.name === "RedJar" ? classes.redCells :
                                            cells.A39V4H6.name === "BlueJar" ? classes.blueCells :
                                            cells.A39V4H6.name === "GreenJar" ? classes.greenCells :
                                            cells.A39V4H6.name === "YellowJar" ? classes.yellowCells :
                                            cells.A39V4H6.name === "VioletJar" ? classes.violetCells :
                                            cells.A39V4H6.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A39V4H6")}
                                        disabled={!states.stateStart || cells.A39V4H6.chioce}
                                    ></button>
                                </div>}

                                {cells.A40V5H6.showCell && <div className={classes.cellsCenterSide}>
                                    <button
                                        className={
                                            cells.A40V5H6.name === "RedJar" ? classes.redCells :
                                            cells.A40V5H6.name === "BlueJar" ? classes.blueCells :
                                            cells.A40V5H6.name === "GreenJar" ? classes.greenCells :
                                            cells.A40V5H6.name === "YellowJar" ? classes.yellowCells :
                                            cells.A40V5H6.name === "VioletJar" ? classes.violetCells :
                                            cells.A40V5H6.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A40V5H6")}
                                        disabled={!states.stateStart || cells.A40V5H6.chioce}
                                    ></button>
                                </div>}

                                {cells.A41V6H6.showCell && <div className={classes.cellsCenterSide}>
                                    <button
                                        className={
                                            cells.A41V6H6.name === "RedJar" ? classes.redCells :
                                            cells.A41V6H6.name === "BlueJar" ? classes.blueCells :
                                            cells.A41V6H6.name === "GreenJar" ? classes.greenCells :
                                            cells.A41V6H6.name === "YellowJar" ? classes.yellowCells :
                                            cells.A41V6H6.name === "VioletJar" ? classes.violetCells :
                                            cells.A41V6H6.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A41V6H6")}
                                        disabled={!states.stateStart || cells.A41V6H6.chioce}
                                    ></button>
                                </div>}

                                {cells.A42V7H6.showCell && <div className={classes.cellsRightSide}>
                                    <button
                                        className={
                                            cells.A42V7H6.name === "RedJar" ? classes.redCells :
                                            cells.A42V7H6.name === "BlueJar" ? classes.blueCells :
                                            cells.A42V7H6.name === "GreenJar" ? classes.greenCells :
                                            cells.A42V7H6.name === "YellowJar" ? classes.yellowCells :
                                            cells.A42V7H6.name === "VioletJar" ? classes.violetCells :
                                            cells.A42V7H6.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A42V7H6")}
                                        disabled={!states.stateStart || cells.A42V7H6.chioce}
                                    ></button>
                                </div>}

                            </div>

                            {/* HORIZONT 7 */}
                            <div className={classes.fieldH7}>

                                {cellsSpare.A43V1H7.showCell && <div className={classes.cellsLeftSide}>
                                    <button
                                        className={
                                            cellsSpare.A43V1H7.name === "RedJar" ? classes.redCells :
                                            cellsSpare.A43V1H7.name === "BlueJar" ? classes.blueCells :
                                            cellsSpare.A43V1H7.name === "GreenJar" ? classes.greenCells :
                                            cellsSpare.A43V1H7.name === "YellowJar" ? classes.yellowCells :
                                            cellsSpare.A43V1H7.name === "VioletJar" ? classes.violetCells :
                                            cellsSpare.A43V1H7.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A43V1H7")}
                                        disabled={!states.stateStart || cellsSpare.A43V1H7.chioce}
                                    ></button>
                                </div>}

                                {cellsSpare.A44V2H7.showCell && <div className={classes.cellsCenterSide}>
                                    <button
                                        className={
                                            cellsSpare.A44V2H7.name === "RedJar" ? classes.redCells :
                                            cellsSpare.A44V2H7.name === "BlueJar" ? classes.blueCells :
                                            cellsSpare.A44V2H7.name === "GreenJar" ? classes.greenCells :
                                            cellsSpare.A44V2H7.name === "YellowJar" ? classes.yellowCells :
                                            cellsSpare.A44V2H7.name === "VioletJar" ? classes.violetCells :
                                            cellsSpare.A44V2H7.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A44V2H7")}
                                        disabled={!states.stateStart || cellsSpare.A44V2H7.chioce}
                                    ></button>
                                </div>}

                                {cellsSpare.A45V3H7.showCell && <div className={classes.cellsCenterSide}>
                                    <button
                                        className={
                                            cellsSpare.A45V3H7.name === "RedJar" ? classes.redCells :
                                            cellsSpare.A45V3H7.name === "BlueJar" ? classes.blueCells :
                                            cellsSpare.A45V3H7.name === "GreenJar" ? classes.greenCells :
                                            cellsSpare.A45V3H7.name === "YellowJar" ? classes.yellowCells :
                                            cellsSpare.A45V3H7.name === "VioletJar" ? classes.violetCells :
                                            cellsSpare.A45V3H7.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A45V3H7")}
                                        disabled={!states.stateStart || cellsSpare.A45V3H7.chioce}
                                    ></button>
                                </div>}

                                {cellsSpare.A46V4H7.showCell && <div className={classes.cellsCenterSide}>
                                    <button
                                        className={
                                            cellsSpare.A46V4H7.name === "RedJar" ? classes.redCells :
                                            cellsSpare.A46V4H7.name === "BlueJar" ? classes.blueCells :
                                            cellsSpare.A46V4H7.name === "GreenJar" ? classes.greenCells :
                                            cellsSpare.A46V4H7.name === "YellowJar" ? classes.yellowCells :
                                            cellsSpare.A46V4H7.name === "VioletJar" ? classes.violetCells :
                                            cellsSpare.A46V4H7.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A46V4H7")}
                                        disabled={!states.stateStart || cellsSpare.A46V4H7.chioce}
                                    ></button>
                                </div>}

                                {cellsSpare.A47V5H7.showCell && <div className={classes.cellsCenterSide}>
                                    <button
                                        className={
                                            cellsSpare.A47V5H7.name === "RedJar" ? classes.redCells :
                                            cellsSpare.A47V5H7.name === "BlueJar" ? classes.blueCells :
                                            cellsSpare.A47V5H7.name === "GreenJar" ? classes.greenCells :
                                            cellsSpare.A47V5H7.name === "YellowJar" ? classes.yellowCells :
                                            cellsSpare.A47V5H7.name === "VioletJar" ? classes.violetCells :
                                            cellsSpare.A47V5H7.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A47V5H7")}
                                        disabled={!states.stateStart || cellsSpare.A47V5H7.chioce}
                                    ></button>
                                </div>}

                                {cellsSpare.A48V6H7.showCell && <div className={classes.cellsCenterSide}>
                                    <button
                                        className={
                                            cellsSpare.A48V6H7.name === "RedJar" ? classes.redCells :
                                            cellsSpare.A48V6H7.name === "BlueJar" ? classes.blueCells :
                                            cellsSpare.A48V6H7.name === "GreenJar" ? classes.greenCells :
                                            cellsSpare.A48V6H7.name === "YellowJar" ? classes.yellowCells :
                                            cellsSpare.A48V6H7.name === "VioletJar" ? classes.violetCells :
                                            cellsSpare.A48V6H7.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A48V6H7")}
                                        disabled={!states.stateStart || cellsSpare.A48V6H7.chioce}
                                    ></button>
                                </div>}

                                {cellsSpare.A49V7H7.showCell && <div className={classes.cellsRightSide}>
                                    <button
                                        className={
                                            cellsSpare.A49V7H7.name === "RedJar" ? classes.redCells :
                                            cellsSpare.A49V7H7.name === "BlueJar" ? classes.blueCells :
                                            cellsSpare.A49V7H7.name === "GreenJar" ? classes.greenCells :
                                            cellsSpare.A49V7H7.name === "YellowJar" ? classes.yellowCells :
                                            cellsSpare.A49V7H7.name === "VioletJar" ? classes.violetCells :
                                            cellsSpare.A49V7H7.name === "GrayJar" ? classes.grayCells :
                                            classes.jarCells
                                        }
                                        onClick={() => handleChoiceCell("A49V7H7")}
                                        disabled={!states.stateStart || cellsSpare.A49V7H7.chioce}
                                    ></button>
                                </div>}

                        </div>

                    </div>

                </div>
                
            </div>
        
        </>
    )
}