import { useNavigate } from "react-router-dom";
import classes from "../Styles/Game.module.css";
import { useState } from "react";

export const Game = () => {
    const [start, setStart] = useState(false);
    const [states, setStates] = useState({
        counterCellsChoices: 0,
        cellsRed: 12,
        cellsBlue: 12,
        cellsGreen: 12,
        cellsRedName: "Red",
        cellsBlueName: "Blue",
        cellsGreenName: "Green",
    });
    const [cells, setCells]: any = useState({
        A1V1H1: {
            id: "A1-V1-H1",
            name: "",
            chioce: false,
            showCell: false,
        },
        A2V2H1: {
            id: "A2-V2-H1",
            name: "",
            chioce: false,
            showCell: false,
        },
        A3V3H1: {
            id: "A3-V3-H1",
            name: "",
            chioce: false,
            showCell: false,
        },
        A4V4H1: {
            id: "A4-V4-H1",
            name: "",
            chioce: false,
            showCell: false,
        },
        A5V5H1: {
            id: "A5-V5-H1",
            name: "",
            chioce: false,
            showCell: false,
        },
        A6V6H1: {
            id: "A6-V6-H1",
            name: "",
            chioce: false,
            showCell: false,
        },
        A7V1H2: {
            id: "A7-V1-H2",
            name: "",
            chioce: false,
            showCell: false,
        },
        A8V2H2: {
            id: "A8-V2-H2",
            name: "",
            chioce: false,
            showCell: false,
        },
        A9V3H2: {
            id: "A9-V3-H2",
            name: "",
            chioce: false,
            showCell: false,
        },
        A10V4H2: {
            id: "A10-V4-H2",
            name: "",
            chioce: false,
            showCell: false,
        },
        A11V5H2: {
            id: "A11-V5-H2",
            name: "",
            chioce: false,
            showCell: false,
        },
        A12V6H2: {
            id: "A12-V6-H2",
            name: "",
            chioce: false,
            showCell: false,
        },
        A13V1H3: {
            id: "A13-V1-H3",
            name: "",
            chioce: false,
            showCell: false,
        },
        A14V2H3: {
            id: "A14-V2-H3",
            name: "",
            chioce: false,
            showCell: false,
        },
        A15V3H3: {
            id: "A15-V3-H3",
            name: "",
            chioce: false,
            showCell: false,
        },
        A16V4H3: {
            id: "A16-V4-H3",
            name: "",
            chioce: false,
            showCell: false,
        },
        A17V5H3: {
            id: "A17-V5-H3",
            name: "",
            chioce: false,
            showCell: false,
        },
        A18V6H3: {
            id: "A18-V6-H3",
            name: "",
            chioce: false,
            showCell: false,
        },
        A19V1H4: {
            id: "A19-V1-H4",
            name: "",
            chioce: false,
            showCell: false,
        },
        A20V2H4: {
            id: "A20-V2-H4",
            name: "",
            chioce: false,
            showCell: false,
        },
        A21V3H4: {
            id: "A21-V3-H4",
            name: "",
            chioce: false,
            showCell: false,
        },
        A22V4H4: {
            id: "A22-V4-H4",
            name: "",
            chioce: false,
            showCell: false,
        },
        A23V5H4: {
            id: "A23-V5-H4",
            name: "",
            chioce: false,
            showCell: false,
        },
        A24V6H4: {
            id: "A24-V6-H4",
            name: "",
            chioce: false,
            showCell: false,
        },
        A25V1H5: {
            id: "A25-V1-H5",
            name: "",
            chioce: false,
            showCell: false,
        },
        A26V2H5: {
            id: "A26-V2-H5",
            name: "",
            chioce: false,
            showCell: false,
        },
        A27V3H5: {
            id: "A27-V3-H5",
            name: "",
            chioce: false,
            showCell: false,
        },
        A28V4H5: {
            id: "A28-V4-H5",
            name: "",
            chioce: false,
            showCell: false,
        },
        A29V5H5: {
            id: "A29-V5-H5",
            name: "",
            chioce: false,
            showCell: false,
        },
        A30V6H5: {
            id: "A30-V6-H5",
            name: "",
            chioce: false,
            showCell: false,
        },
        A31V1H6: {
            id: "A31-V1-H6",
            name: "",
            chioce: false,
            showCell: false,
        },
        A32V2H6: {
            id: "A32-V2-H6",
            name: "",
            chioce: false,
            showCell: false,
        },
        A33V3H6: {
            id: "A33-V3-H6",
            name: "",
            chioce: false,
            showCell: false,
        },
        A34V4H6: {
            id: "A34-V4-H6",
            name: "",
            chioce: false,
            showCell: false,
        },
        A35V5H6: {
            id: "A35-V5-H6",
            name: "",
            chioce: false,
            showCell: false,
        },
        A36V6H6: {
            id: "A36-V6-H6",
            name: "",
            chioce: false,
            showCell: false,
        }
    });

    const navigate = useNavigate()

    function handleTransition() {
        navigate("/counter");
    };

    function handleStartGame() {
    if (start) return;
    
    const colors = [
        ...Array(12).fill(states.cellsRedName),
        ...Array(12).fill(states.cellsBlueName),
        ...Array(12).fill(states.cellsGreenName)
    ];
    
    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    
    setCells((prevCells: any) => {  // Добавлено :any
        const keys = Object.keys(prevCells);
        const newCells: any = {};    // Добавлено :any
        
        keys.forEach((key, index) => {
            newCells[key] = {
                ...prevCells[key],
                name: colors[index]
            };
        });
        
        return newCells;
    });
    
    setStart(true);
}

function handleChoiceCell(cellKey: string) {
    if (!cells[cellKey].chioce && states.counterCellsChoices < 3) {
        setCells((prevCells: any) => ({  // Добавлено :any
            ...prevCells, 
            [cellKey]: {
                ...prevCells[cellKey], 
                chioce: true
            }
        }));
        
        setStates((prevStates: any) => ({  // Добавлено :any
            ...prevStates, 
            counterCellsChoices: prevStates.counterCellsChoices + 1
        }));
    }
};

    return (
    <>
        <div className={classes.gamePage}>
            <button className={classes.buttonCounter} onClick={handleTransition}>Counter</button>
            <button className={classes.buttonStart} onClick={handleStartGame}>Start</button>
            
            <div>Выбрано ячеек: {states.counterCellsChoices}/3</div>
    
            <div className={classes.gameField}>
                <div className={classes.feilds}>

                    {/* HORIZONT 1 */}
                    <div className={classes.feildH1}>
                        <button 
                            className={classes.a1}
                            onClick={() => handleChoiceCell("A1V1H1")} 
                            disabled={!start || cells.A1V1H1.chioce || states.counterCellsChoices === 3}
                        >  
                            <div className={
                                cells.A1V1H1.chioce === true && cells.A1V1H1.name === "Red" ? classes.redCells :
                                cells.A1V1H1.chioce === true && cells.A1V1H1.name === "Blue" ? classes.blueCells :
                                cells.A1V1H1.chioce === true && cells.A1V1H1.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A1-V1-H1 {cells.A1V1H1.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a2}
                            onClick={() => handleChoiceCell("A2V2H1")} 
                            disabled={!start || cells.A2V2H1.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A2V2H1.chioce === true && cells.A2V2H1.name === "Red" ? classes.redCells :
                                cells.A2V2H1.chioce === true && cells.A2V2H1.name === "Blue" ? classes.blueCells :
                                cells.A2V2H1.chioce === true && cells.A2V2H1.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A2-V2-H1 {cells.A2V2H1.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a3}
                            onClick={() => handleChoiceCell("A3V3H1")} 
                            disabled={!start || cells.A3V3H1.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A3V3H1.chioce === true && cells.A3V3H1.name === "Red" ? classes.redCells :
                                cells.A3V3H1.chioce === true && cells.A3V3H1.name === "Blue" ? classes.blueCells :
                                cells.A3V3H1.chioce === true && cells.A3V3H1.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A3-V3-H1 {cells.A3V3H1.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a4}
                            onClick={() => handleChoiceCell("A4V4H1")} 
                            disabled={!start || cells.A4V4H1.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A4V4H1.chioce === true && cells.A4V4H1.name === "Red" ? classes.redCells :
                                cells.A4V4H1.chioce === true && cells.A4V4H1.name === "Blue" ? classes.blueCells :
                                cells.A4V4H1.chioce === true && cells.A4V4H1.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A4-V4-H1 {cells.A4V4H1.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a5}
                            onClick={() => handleChoiceCell("A5V5H1")} 
                            disabled={!start || cells.A5V5H1.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A5V5H1.chioce === true && cells.A5V5H1.name === "Red" ? classes.redCells :
                                cells.A5V5H1.chioce === true && cells.A5V5H1.name === "Blue" ? classes.blueCells :
                                cells.A5V5H1.chioce === true && cells.A5V5H1.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A5-V5-H1 {cells.A5V5H1.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a6}
                            onClick={() => handleChoiceCell("A6V6H1")} 
                            disabled={!start || cells.A6V6H1.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A6V6H1.chioce === true && cells.A6V6H1.name === "Red" ? classes.redCells :
                                cells.A6V6H1.chioce === true && cells.A6V6H1.name === "Blue" ? classes.blueCells :
                                cells.A6V6H1.chioce === true && cells.A6V6H1.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A6-V6-H1 {cells.A6V6H1.chioce && "✓"}
                        </button>
                    </div>

                    {/* HORIZONT 2 */}
                    <div className={classes.feildH2}>
                        <button 
                            className={classes.a7}
                            onClick={() => handleChoiceCell("A7V1H2")} 
                            disabled={!start || cells.A7V1H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A7V1H2.chioce === true && cells.A7V1H2.name === "Red" ? classes.redCells :
                                cells.A7V1H2.chioce === true && cells.A7V1H2.name === "Blue" ? classes.blueCells :
                                cells.A7V1H2.chioce === true && cells.A7V1H2.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A7-V1-H2 {cells.A7V1H2.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a8}
                            onClick={() => handleChoiceCell("A8V2H2")} 
                            disabled={!start || cells.A8V2H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A8V2H2.chioce === true && cells.A8V2H2.name === "Red" ? classes.redCells :
                                cells.A8V2H2.chioce === true && cells.A8V2H2.name === "Blue" ? classes.blueCells :
                                cells.A8V2H2.chioce === true && cells.A8V2H2.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A8-V2-H2 {cells.A8V2H2.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a9}
                            onClick={() => handleChoiceCell("A9V3H2")} 
                            disabled={!start || cells.A9V3H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A9V3H2.chioce === true && cells.A9V3H2.name === "Red" ? classes.redCells :
                                cells.A9V3H2.chioce === true && cells.A9V3H2.name === "Blue" ? classes.blueCells :
                                cells.A9V3H2.chioce === true && cells.A9V3H2.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A9-V3-H2 {cells.A9V3H2.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a10}
                            onClick={() => handleChoiceCell("A10V4H2")} 
                            disabled={!start || cells.A10V4H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A10V4H2.chioce === true && cells.A10V4H2.name === "Red" ? classes.redCells :
                                cells.A10V4H2.chioce === true && cells.A10V4H2.name === "Blue" ? classes.blueCells :
                                cells.A10V4H2.chioce === true && cells.A10V4H2.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A10-V4-H2 {cells.A10V4H2.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a11}
                            onClick={() => handleChoiceCell("A11V5H2")} 
                            disabled={!start || cells.A11V5H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A11V5H2.chioce === true && cells.A11V5H2.name === "Red" ? classes.redCells :
                                cells.A11V5H2.chioce === true && cells.A11V5H2.name === "Blue" ? classes.blueCells :
                                cells.A11V5H2.chioce === true && cells.A11V5H2.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A11-V5-H2 {cells.A11V5H2.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a12}
                            onClick={() => handleChoiceCell("A12V6H2")} 
                            disabled={!start || cells.A12V6H2.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A12V6H2.chioce === true && cells.A12V6H2.name === "Red" ? classes.redCells :
                                cells.A12V6H2.chioce === true && cells.A12V6H2.name === "Blue" ? classes.blueCells :
                                cells.A12V6H2.chioce === true && cells.A12V6H2.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A12-V6-H2 {cells.A12V6H2.chioce && "✓"}
                        </button>
                    </div>

                    {/* HORIZONT 3 */}
                    <div className={classes.feildH3}>
                        <button 
                            className={classes.a13}
                            onClick={() => handleChoiceCell("A13V1H3")} 
                            disabled={!start || cells.A13V1H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A13V1H3.chioce === true && cells.A13V1H3.name === "Red" ? classes.redCells :
                                cells.A13V1H3.chioce === true && cells.A13V1H3.name === "Blue" ? classes.blueCells :
                                cells.A13V1H3.chioce === true && cells.A13V1H3.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A13-V1-H3 {cells.A13V1H3.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a14}
                            onClick={() => handleChoiceCell("A14V2H3")} 
                            disabled={!start || cells.A14V2H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A14V2H3.chioce === true && cells.A14V2H3.name === "Red" ? classes.redCells :
                                cells.A14V2H3.chioce === true && cells.A14V2H3.name === "Blue" ? classes.blueCells :
                                cells.A14V2H3.chioce === true && cells.A14V2H3.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A14-V2-H3 {cells.A14V2H3.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a15}
                            onClick={() => handleChoiceCell("A15V3H3")} 
                            disabled={!start || cells.A15V3H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A15V3H3.chioce === true && cells.A15V3H3.name === "Red" ? classes.redCells :
                                cells.A15V3H3.chioce === true && cells.A15V3H3.name === "Blue" ? classes.blueCells :
                                cells.A15V3H3.chioce === true && cells.A15V3H3.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A15-V3-H3 {cells.A15V3H3.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a16}
                            onClick={() => handleChoiceCell("A16V4H3")} 
                            disabled={!start || cells.A16V4H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A16V4H3.chioce === true && cells.A16V4H3.name === "Red" ? classes.redCells :
                                cells.A16V4H3.chioce === true && cells.A16V4H3.name === "Blue" ? classes.blueCells :
                                cells.A16V4H3.chioce === true && cells.A16V4H3.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A16-V4-H3 {cells.A16V4H3.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a17}
                            onClick={() => handleChoiceCell("A17V5H3")} 
                            disabled={!start || cells.A17V5H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A17V5H3.chioce === true && cells.A17V5H3.name === "Red" ? classes.redCells :
                                cells.A17V5H3.chioce === true && cells.A17V5H3.name === "Blue" ? classes.blueCells :
                                cells.A17V5H3.chioce === true && cells.A17V5H3.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A17-V5-H3 {cells.A17V5H3.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a18}
                            onClick={() => handleChoiceCell("A18V6H3")} 
                            disabled={!start || cells.A18V6H3.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A18V6H3.chioce === true && cells.A18V6H3.name === "Red" ? classes.redCells :
                                cells.A18V6H3.chioce === true && cells.A18V6H3.name === "Blue" ? classes.blueCells :
                                cells.A18V6H3.chioce === true && cells.A18V6H3.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A18-V6-H3 {cells.A18V6H3.chioce && "✓"}
                        </button>
                    </div>

                    {/* HORIZONT 4 */}
                    <div className={classes.feildH4}>
                        <button 
                            className={classes.a19}
                            onClick={() => handleChoiceCell("A19V1H4")} 
                            disabled={!start || cells.A19V1H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A19V1H4.chioce === true && cells.A19V1H4.name === "Red" ? classes.redCells :
                                cells.A19V1H4.chioce === true && cells.A19V1H4.name === "Blue" ? classes.blueCells :
                                cells.A19V1H4.chioce === true && cells.A19V1H4.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A19-V1-H4 {cells.A19V1H4.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a20}
                            onClick={() => handleChoiceCell("A20V2H4")} 
                            disabled={!start || cells.A20V2H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A20V2H4.chioce === true && cells.A20V2H4.name === "Red" ? classes.redCells :
                                cells.A20V2H4.chioce === true && cells.A20V2H4.name === "Blue" ? classes.blueCells :
                                cells.A20V2H4.chioce === true && cells.A20V2H4.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A20-V2-H4 {cells.A20V2H4.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a21}
                            onClick={() => handleChoiceCell("A21V3H4")} 
                            disabled={!start || cells.A21V3H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A21V3H4.chioce === true && cells.A21V3H4.name === "Red" ? classes.redCells :
                                cells.A21V3H4.chioce === true && cells.A21V3H4.name === "Blue" ? classes.blueCells :
                                cells.A21V3H4.chioce === true && cells.A21V3H4.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A21-V3-H4 {cells.A21V3H4.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a22}
                            onClick={() => handleChoiceCell("A22V4H4")} 
                            disabled={!start || cells.A22V4H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A22V4H4.chioce === true && cells.A22V4H4.name === "Red" ? classes.redCells :
                                cells.A22V4H4.chioce === true && cells.A22V4H4.name === "Blue" ? classes.blueCells :
                                cells.A22V4H4.chioce === true && cells.A22V4H4.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A22-V4-H4 {cells.A22V4H4.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a23}
                            onClick={() => handleChoiceCell("A23V5H4")} 
                            disabled={!start || cells.A23V5H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A23V5H4.chioce === true && cells.A23V5H4.name === "Red" ? classes.redCells :
                                cells.A23V5H4.chioce === true && cells.A23V5H4.name === "Blue" ? classes.blueCells :
                                cells.A23V5H4.chioce === true && cells.A23V5H4.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A23-V5-H4 {cells.A23V5H4.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a24}
                            onClick={() => handleChoiceCell("A24V6H4")} 
                            disabled={!start || cells.A24V6H4.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A24V6H4.chioce === true && cells.A24V6H4.name === "Red" ? classes.redCells :
                                cells.A24V6H4.chioce === true && cells.A24V6H4.name === "Blue" ? classes.blueCells :
                                cells.A24V6H4.chioce === true && cells.A24V6H4.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A24-V6-H4 {cells.A24V6H4.chioce && "✓"}
                        </button>
                    </div>

                    {/* HORIZONT 5 */}
                    <div className={classes.feildH5}>
                        <button 
                            className={classes.a25}
                            onClick={() => handleChoiceCell("A25V1H5")} 
                            disabled={!start || cells.A25V1H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A25V1H5.chioce === true && cells.A25V1H5.name === "Red" ? classes.redCells :
                                cells.A25V1H5.chioce === true && cells.A25V1H5.name === "Blue" ? classes.blueCells :
                                cells.A25V1H5.chioce === true && cells.A25V1H5.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A25-V1-H5 {cells.A25V1H5.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a26}
                            onClick={() => handleChoiceCell("A26V2H5")} 
                            disabled={!start || cells.A26V2H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A26V2H5.chioce === true && cells.A26V2H5.name === "Red" ? classes.redCells :
                                cells.A26V2H5.chioce === true && cells.A26V2H5.name === "Blue" ? classes.blueCells :
                                cells.A26V2H5.chioce === true && cells.A26V2H5.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A26-V2-H5 {cells.A26V2H5.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a27}
                            onClick={() => handleChoiceCell("A27V3H5")} 
                            disabled={!start || cells.A27V3H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A27V3H5.chioce === true && cells.A27V3H5.name === "Red" ? classes.redCells :
                                cells.A27V3H5.chioce === true && cells.A27V3H5.name === "Blue" ? classes.blueCells :
                                cells.A27V3H5.chioce === true && cells.A27V3H5.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A27-V3-H5 {cells.A27V3H5.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a28}
                            onClick={() => handleChoiceCell("A28V4H5")} 
                            disabled={!start || cells.A28V4H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A28V4H5.chioce === true && cells.A28V4H5.name === "Red" ? classes.redCells :
                                cells.A28V4H5.chioce === true && cells.A28V4H5.name === "Blue" ? classes.blueCells :
                                cells.A28V4H5.chioce === true && cells.A28V4H5.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A28-V4-H5 {cells.A28V4H5.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a29}
                            onClick={() => handleChoiceCell("A29V5H5")} 
                            disabled={!start || cells.A29V5H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A29V5H5.chioce === true && cells.A29V5H5.name === "Red" ? classes.redCells :
                                cells.A29V5H5.chioce === true && cells.A29V5H5.name === "Blue" ? classes.blueCells :
                                cells.A29V5H5.chioce === true && cells.A29V5H5.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A29-V5-H5 {cells.A29V5H5.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a30}
                            onClick={() => handleChoiceCell("A30V6H5")} 
                            disabled={!start || cells.A30V6H5.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A30V6H5.chioce === true && cells.A30V6H5.name === "Red" ? classes.redCells :
                                cells.A30V6H5.chioce === true && cells.A30V6H5.name === "Blue" ? classes.blueCells :
                                cells.A30V6H5.chioce === true && cells.A30V6H5.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A30-V6-H5 {cells.A30V6H5.chioce && "✓"}
                        </button>
                    </div>

                    {/* HORIZONT 6 */}
                    <div className={classes.feildH6}>
                        <button 
                            className={classes.a31}
                            onClick={() => handleChoiceCell("A31V1H6")} 
                            disabled={!start || cells.A31V1H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A31V1H6.chioce === true && cells.A31V1H6.name === "Red" ? classes.redCells :
                                cells.A31V1H6.chioce === true && cells.A31V1H6.name === "Blue" ? classes.blueCells :
                                cells.A31V1H6.chioce === true && cells.A31V1H6.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A31-V1-H6 {cells.A31V1H6.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a32}
                            onClick={() => handleChoiceCell("A32V2H6")} 
                            disabled={!start || cells.A32V2H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A32V2H6.chioce === true && cells.A32V2H6.name === "Red" ? classes.redCells :
                                cells.A32V2H6.chioce === true && cells.A32V2H6.name === "Blue" ? classes.blueCells :
                                cells.A32V2H6.chioce === true && cells.A32V2H6.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A32-V2-H6 {cells.A32V2H6.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a33}
                            onClick={() => handleChoiceCell("A33V3H6")} 
                            disabled={!start || cells.A33V3H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A33V3H6.chioce === true && cells.A33V3H6.name === "Red" ? classes.redCells :
                                cells.A33V3H6.chioce === true && cells.A33V3H6.name === "Blue" ? classes.blueCells :
                                cells.A33V3H6.chioce === true && cells.A33V3H6.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A33-V3-H6 {cells.A33V3H6.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a34}
                            onClick={() => handleChoiceCell("A34V4H6")} 
                            disabled={!start || cells.A34V4H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A34V4H6.chioce === true && cells.A34V4H6.name === "Red" ? classes.redCells :
                                cells.A34V4H6.chioce === true && cells.A34V4H6.name === "Blue" ? classes.blueCells :
                                cells.A34V4H6.chioce === true && cells.A34V4H6.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A34-V4-H6 {cells.A34V4H6.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a35}
                            onClick={() => handleChoiceCell("A35V5H6")} 
                            disabled={!start || cells.A35V5H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A35V5H6.chioce === true && cells.A35V5H6.name === "Red" ? classes.redCells :
                                cells.A35V5H6.chioce === true && cells.A35V5H6.name === "Blue" ? classes.blueCells :
                                cells.A35V5H6.chioce === true && cells.A35V5H6.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A35-V5-H6 {cells.A35V5H6.chioce && "✓"}
                        </button>
                        <button 
                            className={classes.a36}
                            onClick={() => handleChoiceCell("A36V6H6")} 
                            disabled={!start || cells.A36V6H6.chioce || states.counterCellsChoices === 3}
                        >
                            <div className={
                                cells.A36V6H6.chioce === true && cells.A36V6H6.name === "Red" ? classes.redCells :
                                cells.A36V6H6.chioce === true && cells.A36V6H6.name === "Blue" ? classes.blueCells :
                                cells.A36V6H6.chioce === true && cells.A36V6H6.name === "Green" ? classes.greenCells :
                                classes.cells
                            }></div>
                            A36-V6-H6 {cells.A36V6H6.chioce && "✓"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </>
    )
};