import { useState } from "react";
import classes from "../../Styles/SortingGame.module.css";

export const GameSorting1lvl = () => {
    const [states, setStates] = useState({
            counterCellsChoices: 0,
            counterOfEliminatedCells: 0,
            cellsRedMushroom: 0,
            cellsBlueMushroom: 0,
            cellsYellowMushroom: 0,
            cellsGreenMushroom: 0,
            cellsGrayMushroom: 0,
            cellsWhiteMushroom: 0,
            cellsRedMushroomName: "RedMushroom",
            cellsBlueMushroomName: "BlueMushroom",
            cellsGreenMushroomName: "GreenMushroom",
            cellsYellowMushroomName: "YellowMushroom",
            cellsGrayMushroomName: "GrayMushroom",
            cellsWhiteMushroomName: "WhiteMushroom",
            stateStart: false,
            showButtonStart: true,
            showButtonsWhenWinning: false,
            showLoseModal: false,
            showModalInfo: true,
            showWinModalRecipe: false,
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
        A7V7H1: {
            id: "A7-V7-H1",
            name: "",
            chioce: false,
            showCell: true,
        },

        A8V1H2: {
            id: "A8-V1-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A9V2H2: {
            id: "A9-V2-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A10V3H2: {
            id: "A10-V3-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A11V4H2: {
            id: "A11-V4-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A12V5H2: {
            id: "A12-V5-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A13V6H2: {
            id: "A13-V6-H2",
            name: "",
            chioce: false,
            showCell: true,
        },
        A14V7H2: {
            id: "A14-V7-H2",
            name: "",
            chioce: false,
            showCell: true,
        },

        A15V1H3: {
            id: "A15-V1-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A16V2H3: {
            id: "A16-V2-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A17V3H3: {
            id: "A17-V3-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A18V4H3: {
            id: "A18-V4-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A19V5H3: {
            id: "A19-V5-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A20V6H3: {
            id: "A20-V6-H3",
            name: "",
            chioce: false,
            showCell: true,
        },
        A21V7H3: {
            id: "A21-V7-H3",
            name: "",
            chioce: false,
            showCell: true,
        },

        A22V1H4: {
            id: "A22-V1-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A23V2H4: {
            id: "A23-V2-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A24V3H4: {
            id: "A24-V3-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A25V4H4: {
            id: "A25-V4-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A26V5H4: {
            id: "A26-V5-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A27V6H4: {
            id: "A27-V6-H4",
            name: "",
            chioce: false,
            showCell: true,
        },
        A28V7H4: {
            id: "A28-V7-H4",
            name: "",
            chioce: false,
            showCell: true,
        },

        A29V1H5: {
            id: "A29-V1-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A30V2H5: {
            id: "A30-V2-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A31V3H5: {
            id: "A31-V3-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A32V4H5: {
            id: "A32-V4-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A33V5H5: {
            id: "A33-V5-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A34V6H5: {
            id: "A34-V6-H5",
            name: "",
            chioce: false,
            showCell: true,
        },
        A35V7H5: {
            id: "A35-V7-H5",
            name: "",
            chioce: false,
            showCell: true,
        },

        A36V1H6: {
            id: "A36-V1-H6",
            name: "",
            chioce: false,
            showCell: true,
        },
        A37V2H6: {
            id: "A37-V2-H6",
            name: "",
            chioce: false,
            showCell: true,
        },
        A38V3H6: {
            id: "A38-V3-H6",
            name: "",
            chioce: false,
            showCell: true,
        },
        A39V4H6: {
            id: "A39-V4-H6",
            name: "",
            chioce: false,
            showCell: true,
        },
        A40V5H6: {
            id: "A40-V5-H6",
            name: "",
            chioce: false,
            showCell: true,
        },
        A41V6H6: {
            id: "A41-V6-H6",
            name: "",
            chioce: false,
            showCell: true,
        },
        A42V7H6: {
            id: "A42-V7-H6",
            name: "",
            chioce: false,
            showCell: true,
        },

        A43V1H7: {
            id: "A43-V1-H7",
            name: "",
            chioce: false,
            showCell: true,
        },
        A44V2H7: {
            id: "A44-V2-H7",
            name: "",
            chioce: false,
            showCell: true,
        },
        A45V3H7: {
            id: "A45-V3-H7",
            name: "",
            chioce: false,
            showCell: true,
        },
        A46V4H7: {
            id: "A46-V4-H7",
            name: "",
            chioce: false,
            showCell: true,
        },
        A47V5H7: {
            id: "A47-V5-H7",
            name: "",
            chioce: false,
            showCell: true,
        },
        A48V6H7: {
            id: "A48-V6-H7",
            name: "",
            chioce: false,
            showCell: true,
        },
        A49V7H7: {
            id: "A49-V7-H7",
            name: "",
            chioce: false,
            showCell: true,
        },

    });

    function handleStartGame() {
        setStates((prev: any) => ({...prev, stateStart: true }));
        setStates((prev: any) => ({...prev, showButtonStart: false }));
    };

    return (
        <>
            <div className={classes.gamePage}>

                { states.showButtonStart && <button className={classes.buttonStart} onClick={handleStartGame}>Старт</button>}

                <div className={classes.fieldH1}>
                    <button className={classes.cell}></button>

                </div>

                <div className={classes.fieldH2}>

                </div>

                <div className={classes.fieldH3}>

                </div>

                <div className={classes.fieldH4}>

                </div>

                <div className={classes.fieldH5}>

                </div>
                
            </div>
        
        </>
    )
}