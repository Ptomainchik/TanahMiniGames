import { useEffect, useState } from "react";
import classes from "../../Styles/MatchThreeGame.module.css";
import { useNavigate } from "react-router-dom";
import DwarfWomen from "../../assets/MatchThreeGameImages/DwarfWomen.png";
import DwarfWomenLose from "../../assets/MatchThreeGameImages/DwarfWomenLose.png";

export const GameThree1lvl = () => {
    const [endTime, setEndTime] = useState(null);   
    const [timeLeft, setTimeLeft] = useState("10:00");
    const [states, setStates] = useState({
            counterCellsChoices: 0,
            counterOfEliminatedCells: 0,
            cellsStrawberries: 0,
            cellsPear: 0,
            cellsPlum: 0,
            cellsCranberry: 0,
            cellsSeaBuckthorn: 0,
            cellsGooseberry: 0,
            cellsStrawberriesName: "Strawberries",
            cellsPearName: "Pear",
            cellsPlumName: "Plum",
            cellsCranberryName: "Cranberry",
            cellsSeaBuckthornName: "SeaBuckthorn",
            cellsGooseberryName: "Gooseberry",
            stateStart: false,
            showButtonStart: true,
            showButtonsWhenWinning: false,
            showLoseModal: false,
            showModalInfo: true,
            showWinModalRecipe: false,
            plate: true,
            plateEnding: true,
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

        A7V1H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A8V2H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A9V3H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A10V4H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A11V5H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A12V6H2: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },

        A13V1H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A14V2H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A15V3H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A16V4H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A17V5H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A18V6H3: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },

        A19V1H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A20V2H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A21V3H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A22V4H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A23V5H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A24V6H4: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },

        A25V1H5: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A26V2H5: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A27V3H5: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A28V4H5: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A29V5H5: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A30V6H5: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },

        A31V1H6: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A32V2H6: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A33V3H6: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A34V4H6: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A35V5H6: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },
        A36V6H6: {
            name: "",
            choice: false,
            showCell: true,
            empty: false,
        },

    });

    // Вспомогательная функция: проверяет одномерный массив цветов (длина 36) на наличие линий 3+
    function hasAnyMatch(board: string[]): boolean {
    const rows = 6;
    const cols = 6;
    // Превращаем в матрицу 6x6
    const matrix: string[][] = Array(rows).fill(null).map(() => Array(cols).fill(""));
    for (let i = 0; i < 36; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;
        matrix[row][col] = board[i];
    }

    // Проверка горизонталей
    for (let row = 0; row < rows; row++) {
        let start = 0;
        while (start < cols) {
        const name = matrix[row][start];
        if (name === "") {
            start++;
            continue;
        }
        let end = start;
        while (end + 1 < cols && matrix[row][end + 1] === name) end++;
        if (end - start + 1 >= 3) return true;
        start = end + 1;
        }
    }

    // Проверка вертикалей
    for (let col = 0; col < cols; col++) {
        let start = 0;
        while (start < rows) {
        const name = matrix[start][col];
        if (name === "") {
            start++;
            continue;
        }
        let end = start;
        while (end + 1 < rows && matrix[end + 1][col] === name) end++;
        if (end - start + 1 >= 3) return true;
        start = end + 1;
        }
    }
    return false;
    }

    // Генератор чистой доски
    function generateCleanBoard(colorsArray: string[]): string[] {
    let attempts = 0;
    const maxAttempts = 500; // запас
    while (attempts < maxAttempts) {
        // Перемешиваем копию исходного массива
        const shuffled = [...colorsArray];
        for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        if (!hasAnyMatch(shuffled)) {
        return shuffled;
        }
        attempts++;
    }
    // Фолбэк: если вдруг не повезло, возвращаем последний перемешанный (редко)
    console.warn("Не удалось сгенерировать доску без линий с 500 попыток");
    return colorsArray; // или вернуть что-то заведомо без линий, например, идеально упорядоченную доску
    }

    function handleStartGame() {
    if (states.stateStart) return;

    const fiveMinutesLater: any = Date.now() + 10.01 * 60 * 1000;
    setEndTime(fiveMinutesLater);

    // Исходный набор цветов (6 каждого)
    const rawColors = [
        ...Array(6).fill(states.cellsStrawberriesName),
        ...Array(6).fill(states.cellsPearName),
        ...Array(6).fill(states.cellsPlumName),
        ...Array(6).fill(states.cellsCranberryName),
        ...Array(6).fill(states.cellsSeaBuckthornName),
        ...Array(6).fill(states.cellsGooseberryName)
    ];

    // Генерируем раскладку без линий
    const cleanColors = generateCleanBoard(rawColors);

    setCells((prevCells: any) => { 
        const keys = Object.keys(prevCells);
        const newCells: any = {};   
        keys.forEach((key, index) => {
        newCells[key] = {
            ...prevCells[key],
            name: cleanColors[index]  // ← используем чистую раскладку
        };
        });
        return newCells;
    });

    setStates((prev: any) => ({...prev, showButtonStart: false, stateStart: true}));
    setTimeout(() => setStates((prev:any) => ({...prev, plate: false})), 2000);
    setTimeout(() => setStates((prev:any) => ({...prev, showModalInfo: false})), 1500);
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
            
            // Проверьте, не пуста ли целевая ячейка.
            if (!targetCell.empty) {
                // Поменяйте местами имена свойства.
                setCells((prevCells: any) => ({
                    ...prevCells,
                    [selectedCellKey]: {
                        ...prevCells[selectedCellKey],
                        name: prevCells[cellKey].name,
                        empty: false,
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
        }
    };

    const navigate = useNavigate();

    function handleRestart() {
        navigate(0);
    };

    function handleHomePageTranzition() {
        navigate("/");
    };

    function handleOpenWinModalRecipe() {
        setStates((prev: any) => ({...prev, showWinModalRecipe: true}));
    }

    useEffect(() => {
        if (!endTime) return;
    
        const interval = setInterval(() => {
            const now = Date.now();
            const diff = endTime - now;
    
            if (states.showButtonsWhenWinning) return;
    
            if (diff <= 0 && states.stateStart) {
                clearInterval(interval);
                setTimeLeft("00:00");
                // ТВОЕ ДЕЙСТВИЕ: вызов модалки
                setStates(prev => ({ ...prev, showLoseModal: true, plateEnding: true })); 
                return;
            }
    
            // Форматируем остаток
            const mins = Math.floor(diff / 1000 / 60);
            const secs = Math.floor((diff / 1000) % 60);
            setTimeLeft(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
        }, 1000);
    
        return () => clearInterval(interval); // Чистим, если ушли со страницы
    }, [endTime, states.showButtonsWhenWinning]);

useEffect(() => {
    // 1. Построим матрицу 6×6 из имён и ключей
    const rows = 6;
    const cols = 6;
    const matrix: string[][] = Array(rows).fill(null).map(() => Array(cols).fill(""));
    const keyMatrix: string[][] = Array(rows).fill(null).map(() => Array(cols).fill(""));

    for (let h = 0; h < rows; h++) {        // h = номер горизонтали (H) от 0 до 5
        for (let v = 0; v < cols; v++) {      // v = номер вертикали (V) от 0 до 5
        const cellNumber = h * cols + v + 1;
        const key = `A${cellNumber}V${v + 1}H${h + 1}`;
        const cell = cells[key];
        if (cell) {
            matrix[h][v] = cell.name || "";
            keyMatrix[h][v] = key;
        }
        }
    }

    useEffect(() => {
        if (cells.A1V1H1.empty && cells.A7V1H2.empty && cells.A13V1H3.empty) {
            // захардженная логика смещения
        }
        else if (cells.A1V1H1.empty && cells.A7V1H2.empty && cells.A13V1H3.empty && cells.A19V1H4.empty) {
            // захардженная логика смещения
        }
        else if (cells.A1V1H1.empty && cells.A7V1H2.empty && cells.A13V1H3.empty && cells.A19V1H4.empty && cells.A25V1H5.empty) {
            // захардженная логика смещения
        }
        else if (cells.A7V1H2.empty && cells.A13V1H3.empty && cells.A19V1H4.empty && cells.A25V1H5.empty && cells.A31V1H6.empty) {
            // захардженная логика смещения
        }
        else if (cells.A7V1H2.empty && cells.A13V1H3.empty && cells.A19V1H4.empty && cells.A25V1H5.empty) {
            // захардженная логика смещения
        }
        else if (cells.A7V1H2.empty && cells.A13V1H3.empty && cells.A19V1H4.empty) {
            // захардженная логика смещения
        }
        else if (cells.A13V1H3.empty && cells.A19V1H4.empty && cells.A25V1H5.empty && cells.A31V1H6.empty) {
            // захардженная логика смещения
        }
        else if (cells.A13V1H3.empty && cells.A19V1H4.empty && cells.A25V1H5.empty) {
            // захардженная логика смещения
        }
        else if (cells.A19V1H4.empty && cells.A25V1H5.empty && cells.A31V1H6.empty) {
            // захардженная логика смещения
        }
        else if (cells.A1V1H1.empty) {
            // захардженная логика смещения
        }
        else if (cells.A7V1H2.empty) {
            // захардженная логика смещения
        }
        else if (cells.A13V1H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: prev.A13V1H3.name = cells.A7V1H2.name,
                    empty: false,    
            },
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: prev.A7V1H2.name = cells.A1V1H1.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: prev.A1V1H1.name = "А здесь уже просто рандомим универсальной функцией.",
                    empty: false,    
            }
            }));
        }
        else if (cells.A19V1H4.empty) {
            // захардженная логика смещения
        }
        else if (cells.A25V1H5.empty) {
            // захардженная логика смещения
        }
        else if (cells.A31V1H6.empty) {
            // захардженная логика смещения
        }// Единичными проверками я контролирую как раз те случаи если вдруг будет собранно по горизонтале. 
    }, [cells]);

    const toClear = new Set<string>(); // ключи клеток, которые нужно очистить

    // 2. Поиск горизонтальных линий
    for (let h = 0; h < rows; h++) {
        let start = 0;
        while (start < cols) {
        const currentName = matrix[h][start];
        if (currentName === "") {
            start++;
            continue;
        }
        let end = start;
        while (end + 1 < cols && matrix[h][end + 1] === currentName) {
            end++;
        }
        const length = end - start + 1;
        if (length >= 3) {
            for (let v = start; v <= end; v++) {
            toClear.add(keyMatrix[h][v]);
            }
        }
        start = end + 1;
        
        }
        
    // 3. Поиск вертикальных линий
    for (let v = 0; v < cols; v++) {
        let start = 0;
        while (start < rows) {
        const currentName = matrix[start][v];
        if (currentName === "") {
            start++;
            continue;
        }
        let end = start;
        while (end + 1 < rows && matrix[end + 1][v] === currentName) {
            end++;
        }
        const length = end - start + 1;
        if (length >= 3) {
            for (let h = start; h <= end; h++) {
            toClear.add(keyMatrix[h][v]);
            }
        }
        start = end + 1;
        }
    }

    // 4. Если есть что очищать – обновляем состояние
  if (toClear.size > 0) {
    setCells((prevCells: any) => {
      const newCells = { ...prevCells };
      for (const key of toClear) {
        if (newCells[key]) {
          newCells[key] = {
            ...newCells[key],
            name: "",
            empty: true,
            choice: false,
          };
        }
      }
      return newCells;
    });
  }
}}, [cells]); // Зависимость – меняется при любом обновлении клеток

    return (
        <>
            <div className={classes.gamePage}>

                <div className={classes.timer}>
                    <p>
                        Возвращение наставника:
                    </p>
                    {timeLeft}
                </div>

                { states.showButtonsWhenWinning && <div className={classes.winAndLoseModal}>  
                    <div className={classes.infoOverlay}>
                        <p className={classes.info}>Вот это сноровка! Вот тебе секретный рецепт наставника в награду.</p>
                    </div>
                    <div className={classes.leftDoorClosing}></div>
                    <div className={classes.rightDoorClosing}></div>
                    <img className={classes.imageInfoIntro} src={DwarfWomen} alt="DwarfWomen" draggable={false}/> 
                    <p className={classes.buttonRecipe} onClick={handleOpenWinModalRecipe}>Секретный рецепт</p>
                    <p className={classes.buttonRestart} onClick={handleRestart}>Ещё раз</p>
                    <p className={classes.buttonNext} onClick={handleHomePageTranzition}>На главную</p>
                </div>}

                <p className={classes.levelPointer}>Уровень 4</p>

                { states.showLoseModal && <div className={classes.winAndLoseModal}>
                    <div className={classes.infoOverlay}>
                        <p className={classes.info}>(Шаги у дверей) О нет! Это наставник. Ну и влетит же мне.</p>
                    </div>
                    <div className={classes.leftDoorClosing}></div>
                    <div className={classes.rightDoorClosing}></div>
                    <img className={classes.imageInfoIntro} src={DwarfWomenLose} alt="DwarfWomenLose" draggable={false}/> 
                    <h3>Время вышло, попробуете ещё раз?</h3>
                    <p className={classes.buttonRestart} onClick={handleRestart}>Ещё раз</p>
                </div> }

                <div className={classes.gameField}>

                        { states.showButtonStart && <p className={classes.buttonStart} onClick={handleStartGame}>Старт</p>}

                        { states.showModalInfo && <div>
                            <div className={states.stateStart ? classes.infoOverlayOpacity : classes.infoOverlay}> 
                                <p className={classes.info}>Спаси! Нам нужно успеть навести порядок до прихода наставника.</p>
                            </div>
                                <img className={states.stateStart ? classes.imageInfoIntroOpacity : classes.imageInfoIntro} src={DwarfWomen} alt="DwarfWomen" draggable={false}/>
                        </div> }

                        {states.plate && <div className={states.stateStart ? classes.leftPlateEnd : !states.stateStart ? classes.leftPlateStart : classes.plate}></div>}

                        {states.plateEnding && <div className={states.showLoseModal ? classes.rightPlateStart : classes.plate}></div>}

                    <div className={classes.fields}>
                        {/* HORIZONT 1 */}
                        <div className={classes.fieldH1}>

                            {cells.A1V1H1.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A1V1H1.name === "Strawberries" && cells.A1V1H1.choice === false ? classes.strawberriesCells :
                                        cells.A1V1H1.name === "Pear" && cells.A1V1H1.choice === false ? classes.pearCells :
                                        cells.A1V1H1.name === "Plum" && cells.A1V1H1.choice === false ? classes.plumCells :
                                        cells.A1V1H1.name === "Cranberry" && cells.A1V1H1.choice === false ? classes.cranberryCells :
                                        cells.A1V1H1.name === "SeaBuckthorn" && cells.A1V1H1.choice === false ? classes.seaBuckthornCells :
                                        cells.A1V1H1.name === "Gooseberry" && cells.A1V1H1.choice === false ? classes.gooseberryCells :
                                        cells.A1V1H1.name === "Strawberries" && cells.A1V1H1.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A1V1H1.name === "Pear" && cells.A1V1H1.choice === true ? classes.pearCellsChoice :
                                        cells.A1V1H1.name === "Plum" && cells.A1V1H1.choice === true ? classes.plumCellsChoice :
                                        cells.A1V1H1.name === "Cranberry" && cells.A1V1H1.choice === true ? classes.cranberryCellsChoice :
                                        cells.A1V1H1.name === "SeaBuckthorn" && cells.A1V1H1.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A1V1H1.name === "Gooseberry" && cells.A1V1H1.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A1V1H1")}
                                    disabled={!states.stateStart || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A2V2H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A2V2H1.name === "Strawberries" && cells.A2V2H1.choice === false ? classes.strawberriesCells :
                                        cells.A2V2H1.name === "Pear" && cells.A2V2H1.choice === false ? classes.pearCells :
                                        cells.A2V2H1.name === "Plum" && cells.A2V2H1.choice === false ? classes.plumCells :
                                        cells.A2V2H1.name === "Cranberry" && cells.A2V2H1.choice === false ? classes.cranberryCells :
                                        cells.A2V2H1.name === "SeaBuckthorn" && cells.A2V2H1.choice === false ? classes.seaBuckthornCells :
                                        cells.A2V2H1.name === "Gooseberry" && cells.A2V2H1.choice === false ? classes.gooseberryCells :
                                        cells.A2V2H1.name === "Strawberries" && cells.A2V2H1.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A2V2H1.name === "Pear" && cells.A2V2H1.choice === true ? classes.pearCellsChoice :
                                        cells.A2V2H1.name === "Plum" && cells.A2V2H1.choice === true ? classes.plumCellsChoice :
                                        cells.A2V2H1.name === "Cranberry" && cells.A2V2H1.choice === true ? classes.cranberryCellsChoice :
                                        cells.A2V2H1.name === "SeaBuckthorn" && cells.A2V2H1.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A2V2H1.name === "Gooseberry" && cells.A2V2H1.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A2V2H1")}
                                    disabled={!states.stateStart || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A3V3H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A3V3H1.name === "Strawberries" && cells.A3V3H1.choice === false ? classes.strawberriesCells :
                                        cells.A3V3H1.name === "Pear" && cells.A3V3H1.choice === false ? classes.pearCells :
                                        cells.A3V3H1.name === "Plum" && cells.A3V3H1.choice === false ? classes.plumCells :
                                        cells.A3V3H1.name === "Cranberry" && cells.A3V3H1.choice === false ? classes.cranberryCells :
                                        cells.A3V3H1.name === "SeaBuckthorn" && cells.A3V3H1.choice === false ? classes.seaBuckthornCells :
                                        cells.A3V3H1.name === "Gooseberry" && cells.A3V3H1.choice === false ? classes.gooseberryCells :
                                        cells.A3V3H1.name === "Strawberries" && cells.A3V3H1.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A3V3H1.name === "Pear" && cells.A3V3H1.choice === true ? classes.pearCellsChoice :
                                        cells.A3V3H1.name === "Plum" && cells.A3V3H1.choice === true ? classes.plumCellsChoice :
                                        cells.A3V3H1.name === "Cranberry" && cells.A3V3H1.choice === true ? classes.cranberryCellsChoice :
                                        cells.A3V3H1.name === "SeaBuckthorn" && cells.A3V3H1.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A3V3H1.name === "Gooseberry" && cells.A3V3H1.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A3V3H1")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A4V4H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A4V4H1.name === "Strawberries" && cells.A4V4H1.choice === false ? classes.strawberriesCells :
                                        cells.A4V4H1.name === "Pear" && cells.A4V4H1.choice === false ? classes.pearCells :
                                        cells.A4V4H1.name === "Plum" && cells.A4V4H1.choice === false ? classes.plumCells :
                                        cells.A4V4H1.name === "Cranberry" && cells.A4V4H1.choice === false ? classes.cranberryCells :
                                        cells.A4V4H1.name === "SeaBuckthorn" && cells.A4V4H1.choice === false ? classes.seaBuckthornCells :
                                        cells.A4V4H1.name === "Gooseberry" && cells.A4V4H1.choice === false ? classes.gooseberryCells :
                                        cells.A4V4H1.name === "Strawberries" && cells.A4V4H1.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A4V4H1.name === "Pear" && cells.A4V4H1.choice === true ? classes.pearCellsChoice :
                                        cells.A4V4H1.name === "Plum" && cells.A4V4H1.choice === true ? classes.plumCellsChoice :
                                        cells.A4V4H1.name === "Cranberry" && cells.A4V4H1.choice === true ? classes.cranberryCellsChoice :
                                        cells.A4V4H1.name === "SeaBuckthorn" && cells.A4V4H1.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A4V4H1.name === "Gooseberry" && cells.A4V4H1.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A4V4H1")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice  || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A5V5H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A5V5H1.name === "Strawberries" && cells.A5V5H1.choice === false ? classes.strawberriesCells :
                                        cells.A5V5H1.name === "Pear" && cells.A5V5H1.choice === false ? classes.pearCells :
                                        cells.A5V5H1.name === "Plum" && cells.A5V5H1.choice === false ? classes.plumCells :
                                        cells.A5V5H1.name === "Cranberry" && cells.A5V5H1.choice === false ? classes.cranberryCells :
                                        cells.A5V5H1.name === "SeaBuckthorn" && cells.A5V5H1.choice === false ? classes.seaBuckthornCells :
                                        cells.A5V5H1.name === "Gooseberry" && cells.A5V5H1.choice === false ? classes.gooseberryCells :
                                        cells.A5V5H1.name === "Strawberries" && cells.A5V5H1.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A5V5H1.name === "Pear" && cells.A5V5H1.choice === true ? classes.pearCellsChoice :
                                        cells.A5V5H1.name === "Plum" && cells.A5V5H1.choice === true ? classes.plumCellsChoice :
                                        cells.A5V5H1.name === "Cranberry" && cells.A5V5H1.choice === true ? classes.cranberryCellsChoice :
                                        cells.A5V5H1.name === "SeaBuckthorn" && cells.A5V5H1.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A5V5H1.name === "Gooseberry" && cells.A5V5H1.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A5V5H1")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice 
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A6V6H1.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A6V6H1.name === "Strawberries" && cells.A6V6H1.choice === false ? classes.strawberriesCells :
                                        cells.A6V6H1.name === "Pear" && cells.A6V6H1.choice === false ? classes.pearCells :
                                        cells.A6V6H1.name === "Plum" && cells.A6V6H1.choice === false ? classes.plumCells :
                                        cells.A6V6H1.name === "Cranberry" && cells.A6V6H1.choice === false ? classes.cranberryCells :
                                        cells.A6V6H1.name === "SeaBuckthorn" && cells.A6V6H1.choice === false ? classes.seaBuckthornCells :
                                        cells.A6V6H1.name === "Gooseberry" && cells.A6V6H1.choice === false ? classes.gooseberryCells :
                                        cells.A6V6H1.name === "Strawberries" && cells.A6V6H1.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A6V6H1.name === "Pear" && cells.A6V6H1.choice === true ? classes.pearCellsChoice :
                                        cells.A6V6H1.name === "Plum" && cells.A6V6H1.choice === true ? classes.plumCellsChoice :
                                        cells.A6V6H1.name === "Cranberry" && cells.A6V6H1.choice === true ? classes.cranberryCellsChoice :
                                        cells.A6V6H1.name === "SeaBuckthorn" && cells.A6V6H1.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A6V6H1.name === "Gooseberry" && cells.A6V6H1.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A6V6H1")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice 
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice 
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 2 */}
                        <div className={classes.fieldH2}>

                            {cells.A7V1H2.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A7V1H2.name === "Strawberries" && cells.A7V1H2.choice === false ? classes.strawberriesCells :
                                        cells.A7V1H2.name === "Pear" && cells.A7V1H2.choice === false ? classes.pearCells :
                                        cells.A7V1H2.name === "Plum" && cells.A7V1H2.choice === false ? classes.plumCells :
                                        cells.A7V1H2.name === "Cranberry" && cells.A7V1H2.choice === false ? classes.cranberryCells :
                                        cells.A7V1H2.name === "SeaBuckthorn" && cells.A7V1H2.choice === false ? classes.seaBuckthornCells :
                                        cells.A7V1H2.name === "Gooseberry" && cells.A7V1H2.choice === false ? classes.gooseberryCells :
                                        cells.A7V1H2.name === "Strawberries" && cells.A7V1H2.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A7V1H2.name === "Pear" && cells.A7V1H2.choice === true ? classes.pearCellsChoice :
                                        cells.A7V1H2.name === "Plum" && cells.A7V1H2.choice === true ? classes.plumCellsChoice :
                                        cells.A7V1H2.name === "Cranberry" && cells.A7V1H2.choice === true ? classes.cranberryCellsChoice :
                                        cells.A7V1H2.name === "SeaBuckthorn" && cells.A7V1H2.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A7V1H2.name === "Gooseberry" && cells.A7V1H2.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A7V1H2")}
                                    disabled={!states.stateStart  || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A8V2H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A8V2H2.name === "Strawberries" && cells.A8V2H2.choice === false ? classes.strawberriesCells :
                                        cells.A8V2H2.name === "Pear" && cells.A8V2H2.choice === false ? classes.pearCells :
                                        cells.A8V2H2.name === "Plum" && cells.A8V2H2.choice === false ? classes.plumCells :
                                        cells.A8V2H2.name === "Cranberry" && cells.A8V2H2.choice === false ? classes.cranberryCells :
                                        cells.A8V2H2.name === "SeaBuckthorn" && cells.A8V2H2.choice === false ? classes.seaBuckthornCells :
                                        cells.A8V2H2.name === "Gooseberry" && cells.A8V2H2.choice === false ? classes.gooseberryCells :
                                        cells.A8V2H2.name === "Strawberries" && cells.A8V2H2.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A8V2H2.name === "Pear" && cells.A8V2H2.choice === true ? classes.pearCellsChoice :
                                        cells.A8V2H2.name === "Plum" && cells.A8V2H2.choice === true ? classes.plumCellsChoice :
                                        cells.A8V2H2.name === "Cranberry" && cells.A8V2H2.choice === true ? classes.cranberryCellsChoice :
                                        cells.A8V2H2.name === "SeaBuckthorn" && cells.A8V2H2.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A8V2H2.name === "Gooseberry" && cells.A8V2H2.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A8V2H2")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A9V3H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A9V3H2.name === "Strawberries" && cells.A9V3H2.choice === false ? classes.strawberriesCells :
                                        cells.A9V3H2.name === "Pear" && cells.A9V3H2.choice === false ? classes.pearCells :
                                        cells.A9V3H2.name === "Plum" && cells.A9V3H2.choice === false ? classes.plumCells :
                                        cells.A9V3H2.name === "Cranberry" && cells.A9V3H2.choice === false ? classes.cranberryCells :
                                        cells.A9V3H2.name === "SeaBuckthorn" && cells.A9V3H2.choice === false ? classes.seaBuckthornCells :
                                        cells.A9V3H2.name === "Gooseberry" && cells.A9V3H2.choice === false ? classes.gooseberryCells :
                                        cells.A9V3H2.name === "Strawberries" && cells.A9V3H2.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A9V3H2.name === "Pear" && cells.A9V3H2.choice === true ? classes.pearCellsChoice :
                                        cells.A9V3H2.name === "Plum" && cells.A9V3H2.choice === true ? classes.plumCellsChoice :
                                        cells.A9V3H2.name === "Cranberry" && cells.A9V3H2.choice === true ? classes.cranberryCellsChoice :
                                        cells.A9V3H2.name === "SeaBuckthorn" && cells.A9V3H2.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A9V3H2.name === "Gooseberry" && cells.A9V3H2.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A9V3H2")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A10V4H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A10V4H2.name === "Strawberries" && cells.A10V4H2.choice === false ? classes.strawberriesCells :
                                        cells.A10V4H2.name === "Pear" && cells.A10V4H2.choice === false ? classes.pearCells :
                                        cells.A10V4H2.name === "Plum" && cells.A10V4H2.choice === false ? classes.plumCells :
                                        cells.A10V4H2.name === "Cranberry" && cells.A10V4H2.choice === false ? classes.cranberryCells :
                                        cells.A10V4H2.name === "SeaBuckthorn" && cells.A10V4H2.choice === false ? classes.seaBuckthornCells :
                                        cells.A10V4H2.name === "Gooseberry" && cells.A10V4H2.choice === false ? classes.gooseberryCells :
                                        cells.A10V4H2.name === "Strawberries" && cells.A10V4H2.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A10V4H2.name === "Pear" && cells.A10V4H2.choice === true ? classes.pearCellsChoice :
                                        cells.A10V4H2.name === "Plum" && cells.A10V4H2.choice === true ? classes.plumCellsChoice :
                                        cells.A10V4H2.name === "Cranberry" && cells.A10V4H2.choice === true ? classes.cranberryCellsChoice :
                                        cells.A10V4H2.name === "SeaBuckthorn" && cells.A10V4H2.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A10V4H2.name === "Gooseberry" && cells.A10V4H2.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A10V4H2")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A11V5H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A11V5H2.name === "Strawberries" && cells.A11V5H2.choice === false ? classes.strawberriesCells :
                                        cells.A11V5H2.name === "Pear" && cells.A11V5H2.choice === false ? classes.pearCells :
                                        cells.A11V5H2.name === "Plum" && cells.A11V5H2.choice === false ? classes.plumCells :
                                        cells.A11V5H2.name === "Cranberry" && cells.A11V5H2.choice === false ? classes.cranberryCells :
                                        cells.A11V5H2.name === "SeaBuckthorn" && cells.A11V5H2.choice === false ? classes.seaBuckthornCells :
                                        cells.A11V5H2.name === "Gooseberry" && cells.A11V5H2.choice === false ? classes.gooseberryCells :
                                        cells.A11V5H2.name === "Strawberries" && cells.A11V5H2.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A11V5H2.name === "Pear" && cells.A11V5H2.choice === true ? classes.pearCellsChoice :
                                        cells.A11V5H2.name === "Plum" && cells.A11V5H2.choice === true ? classes.plumCellsChoice :
                                        cells.A11V5H2.name === "Cranberry" && cells.A11V5H2.choice === true ? classes.cranberryCellsChoice :
                                        cells.A11V5H2.name === "SeaBuckthorn" && cells.A11V5H2.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A11V5H2.name === "Gooseberry" && cells.A11V5H2.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A11V5H2")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A12V6H2.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A12V6H2.name === "Strawberries" && cells.A12V6H2.choice === false ? classes.strawberriesCells :
                                        cells.A12V6H2.name === "Pear" && cells.A12V6H2.choice === false ? classes.pearCells :
                                        cells.A12V6H2.name === "Plum" && cells.A12V6H2.choice === false ? classes.plumCells :
                                        cells.A12V6H2.name === "Cranberry" && cells.A12V6H2.choice === false ? classes.cranberryCells :
                                        cells.A12V6H2.name === "SeaBuckthorn" && cells.A12V6H2.choice === false ? classes.seaBuckthornCells :
                                        cells.A12V6H2.name === "Gooseberry" && cells.A12V6H2.choice === false ? classes.gooseberryCells :
                                        cells.A12V6H2.name === "Strawberries" && cells.A12V6H2.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A12V6H2.name === "Pear" && cells.A12V6H2.choice === true ? classes.pearCellsChoice :
                                        cells.A12V6H2.name === "Plum" && cells.A12V6H2.choice === true ? classes.plumCellsChoice :
                                        cells.A12V6H2.name === "Cranberry" && cells.A12V6H2.choice === true ? classes.cranberryCellsChoice :
                                        cells.A12V6H2.name === "SeaBuckthorn" && cells.A12V6H2.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A12V6H2.name === "Gooseberry" && cells.A12V6H2.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A12V6H2")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice 
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 3 */}
                        <div className={classes.fieldH3}>

                            {cells.A13V1H3.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A13V1H3.name === "Strawberries" && cells.A13V1H3.choice === false ? classes.strawberriesCells :
                                        cells.A13V1H3.name === "Pear" && cells.A13V1H3.choice === false ? classes.pearCells :
                                        cells.A13V1H3.name === "Plum" && cells.A13V1H3.choice === false ? classes.plumCells :
                                        cells.A13V1H3.name === "Cranberry" && cells.A13V1H3.choice === false ? classes.cranberryCells :
                                        cells.A13V1H3.name === "SeaBuckthorn" && cells.A13V1H3.choice === false ? classes.seaBuckthornCells :
                                        cells.A13V1H3.name === "Gooseberry" && cells.A13V1H3.choice === false ? classes.gooseberryCells :
                                        cells.A13V1H3.name === "Strawberries" && cells.A13V1H3.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A13V1H3.name === "Pear" && cells.A13V1H3.choice === true ? classes.pearCellsChoice :
                                        cells.A13V1H3.name === "Plum" && cells.A13V1H3.choice === true ? classes.plumCellsChoice :
                                        cells.A13V1H3.name === "Cranberry" && cells.A13V1H3.choice === true ? classes.cranberryCellsChoice :
                                        cells.A13V1H3.name === "SeaBuckthorn" && cells.A13V1H3.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A13V1H3.name === "Gooseberry" && cells.A13V1H3.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A13V1H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A14V2H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A14V2H3.name === "Strawberries" && cells.A14V2H3.choice === false ? classes.strawberriesCells :
                                        cells.A14V2H3.name === "Pear" && cells.A14V2H3.choice === false ? classes.pearCells :
                                        cells.A14V2H3.name === "Plum" && cells.A14V2H3.choice === false ? classes.plumCells :
                                        cells.A14V2H3.name === "Cranberry" && cells.A14V2H3.choice === false ? classes.cranberryCells :
                                        cells.A14V2H3.name === "SeaBuckthorn" && cells.A14V2H3.choice === false ? classes.seaBuckthornCells :
                                        cells.A14V2H3.name === "Gooseberry" && cells.A14V2H3.choice === false ? classes.gooseberryCells :
                                        cells.A14V2H3.name === "Strawberries" && cells.A14V2H3.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A14V2H3.name === "Pear" && cells.A14V2H3.choice === true ? classes.pearCellsChoice :
                                        cells.A14V2H3.name === "Plum" && cells.A14V2H3.choice === true ? classes.plumCellsChoice :
                                        cells.A14V2H3.name === "Cranberry" && cells.A14V2H3.choice === true ? classes.cranberryCellsChoice :
                                        cells.A14V2H3.name === "SeaBuckthorn" && cells.A14V2H3.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A14V2H3.name === "Gooseberry" && cells.A14V2H3.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A14V2H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice  || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A15V3H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A15V3H3.name === "Strawberries" && cells.A15V3H3.choice === false ? classes.strawberriesCells :
                                        cells.A15V3H3.name === "Pear" && cells.A15V3H3.choice === false ? classes.pearCells :
                                        cells.A15V3H3.name === "Plum" && cells.A15V3H3.choice === false ? classes.plumCells :
                                        cells.A15V3H3.name === "Cranberry" && cells.A15V3H3.choice === false ? classes.cranberryCells :
                                        cells.A15V3H3.name === "SeaBuckthorn" && cells.A15V3H3.choice === false ? classes.seaBuckthornCells :
                                        cells.A15V3H3.name === "Gooseberry" && cells.A15V3H3.choice === false ? classes.gooseberryCells :
                                        cells.A15V3H3.name === "Strawberries" && cells.A15V3H3.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A15V3H3.name === "Pear" && cells.A15V3H3.choice === true ? classes.pearCellsChoice :
                                        cells.A15V3H3.name === "Plum" && cells.A15V3H3.choice === true ? classes.plumCellsChoice :
                                        cells.A15V3H3.name === "Cranberry" && cells.A15V3H3.choice === true ? classes.cranberryCellsChoice :
                                        cells.A15V3H3.name === "SeaBuckthorn" && cells.A15V3H3.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A15V3H3.name === "Gooseberry" && cells.A15V3H3.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A15V3H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A16V4H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A16V4H3.name === "Strawberries" && cells.A16V4H3.choice === false ? classes.strawberriesCells :
                                        cells.A16V4H3.name === "Pear" && cells.A16V4H3.choice === false ? classes.pearCells :
                                        cells.A16V4H3.name === "Plum" && cells.A16V4H3.choice === false ? classes.plumCells :
                                        cells.A16V4H3.name === "Cranberry" && cells.A16V4H3.choice === false ? classes.cranberryCells :
                                        cells.A16V4H3.name === "SeaBuckthorn" && cells.A16V4H3.choice === false ? classes.seaBuckthornCells :
                                        cells.A16V4H3.name === "Gooseberry" && cells.A16V4H3.choice === false ? classes.gooseberryCells :
                                        cells.A16V4H3.name === "Strawberries" && cells.A16V4H3.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A16V4H3.name === "Pear" && cells.A16V4H3.choice === true ? classes.pearCellsChoice :
                                        cells.A16V4H3.name === "Plum" && cells.A16V4H3.choice === true ? classes.plumCellsChoice :
                                        cells.A16V4H3.name === "Cranberry" && cells.A16V4H3.choice === true ? classes.cranberryCellsChoice :
                                        cells.A16V4H3.name === "SeaBuckthorn" && cells.A16V4H3.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A16V4H3.name === "Gooseberry" && cells.A16V4H3.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A16V4H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A17V5H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A17V5H3.name === "Strawberries" && cells.A17V5H3.choice === false ? classes.strawberriesCells :
                                        cells.A17V5H3.name === "Pear" && cells.A17V5H3.choice === false ? classes.pearCells :
                                        cells.A17V5H3.name === "Plum" && cells.A17V5H3.choice === false ? classes.plumCells :
                                        cells.A17V5H3.name === "Cranberry" && cells.A17V5H3.choice === false ? classes.cranberryCells :
                                        cells.A17V5H3.name === "SeaBuckthorn" && cells.A17V5H3.choice === false ? classes.seaBuckthornCells :
                                        cells.A17V5H3.name === "Gooseberry" && cells.A17V5H3.choice === false ? classes.gooseberryCells :
                                        cells.A17V5H3.name === "Strawberries" && cells.A17V5H3.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A17V5H3.name === "Pear" && cells.A17V5H3.choice === true ? classes.pearCellsChoice :
                                        cells.A17V5H3.name === "Plum" && cells.A17V5H3.choice === true ? classes.plumCellsChoice :
                                        cells.A17V5H3.name === "Cranberry" && cells.A17V5H3.choice === true ? classes.cranberryCellsChoice :
                                        cells.A17V5H3.name === "SeaBuckthorn" && cells.A17V5H3.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A17V5H3.name === "Gooseberry" && cells.A17V5H3.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A17V5H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A18V6H3.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A18V6H3.name === "Strawberries" && cells.A18V6H3.choice === false ? classes.strawberriesCells :
                                        cells.A18V6H3.name === "Pear" && cells.A18V6H3.choice === false ? classes.pearCells :
                                        cells.A18V6H3.name === "Plum" && cells.A18V6H3.choice === false ? classes.plumCells :
                                        cells.A18V6H3.name === "Cranberry" && cells.A18V6H3.choice === false ? classes.cranberryCells :
                                        cells.A18V6H3.name === "SeaBuckthorn" && cells.A18V6H3.choice === false ? classes.seaBuckthornCells :
                                        cells.A18V6H3.name === "Gooseberry" && cells.A18V6H3.choice === false ? classes.gooseberryCells :
                                        cells.A18V6H3.name === "Strawberries" && cells.A18V6H3.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A18V6H3.name === "Pear" && cells.A18V6H3.choice === true ? classes.pearCellsChoice :
                                        cells.A18V6H3.name === "Plum" && cells.A18V6H3.choice === true ? classes.plumCellsChoice :
                                        cells.A18V6H3.name === "Cranberry" && cells.A18V6H3.choice === true ? classes.cranberryCellsChoice :
                                        cells.A18V6H3.name === "SeaBuckthorn" && cells.A18V6H3.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A18V6H3.name === "Gooseberry" && cells.A18V6H3.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A18V6H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice 
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 4 */}
                        <div className={classes.fieldH4}>

                            {cells.A19V1H4.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A19V1H4.name === "Strawberries" && cells.A19V1H4.choice === false ? classes.strawberriesCells :
                                        cells.A19V1H4.name === "Pear" && cells.A19V1H4.choice === false ? classes.pearCells :
                                        cells.A19V1H4.name === "Plum" && cells.A19V1H4.choice === false ? classes.plumCells :
                                        cells.A19V1H4.name === "Cranberry" && cells.A19V1H4.choice === false ? classes.cranberryCells :
                                        cells.A19V1H4.name === "SeaBuckthorn" && cells.A19V1H4.choice === false ? classes.seaBuckthornCells :
                                        cells.A19V1H4.name === "Gooseberry" && cells.A19V1H4.choice === false ? classes.gooseberryCells :
                                        cells.A19V1H4.name === "Strawberries" && cells.A19V1H4.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A19V1H4.name === "Pear" && cells.A19V1H4.choice === true ? classes.pearCellsChoice :
                                        cells.A19V1H4.name === "Plum" && cells.A19V1H4.choice === true ? classes.plumCellsChoice :
                                        cells.A19V1H4.name === "Cranberry" && cells.A19V1H4.choice === true ? classes.cranberryCellsChoice :
                                        cells.A19V1H4.name === "SeaBuckthorn" && cells.A19V1H4.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A19V1H4.name === "Gooseberry" && cells.A19V1H4.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A19V1H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A20V2H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A20V2H4.name === "Strawberries" && cells.A20V2H4.choice === false ? classes.strawberriesCells :
                                        cells.A20V2H4.name === "Pear" && cells.A20V2H4.choice === false ? classes.pearCells :
                                        cells.A20V2H4.name === "Plum" && cells.A20V2H4.choice === false ? classes.plumCells :
                                        cells.A20V2H4.name === "Cranberry" && cells.A20V2H4.choice === false ? classes.cranberryCells :
                                        cells.A20V2H4.name === "SeaBuckthorn" && cells.A20V2H4.choice === false ? classes.seaBuckthornCells :
                                        cells.A20V2H4.name === "Gooseberry" && cells.A20V2H4.choice === false ? classes.gooseberryCells :
                                        cells.A20V2H4.name === "Strawberries" && cells.A20V2H4.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A20V2H4.name === "Pear" && cells.A20V2H4.choice === true ? classes.pearCellsChoice :
                                        cells.A20V2H4.name === "Plum" && cells.A20V2H4.choice === true ? classes.plumCellsChoice :
                                        cells.A20V2H4.name === "Cranberry" && cells.A20V2H4.choice === true ? classes.cranberryCellsChoice :
                                        cells.A20V2H4.name === "SeaBuckthorn" && cells.A20V2H4.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A20V2H4.name === "Gooseberry" && cells.A20V2H4.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A20V2H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A21V3H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A21V3H4.name === "Strawberries" && cells.A21V3H4.choice === false ? classes.strawberriesCells :
                                        cells.A21V3H4.name === "Pear" && cells.A21V3H4.choice === false ? classes.pearCells :
                                        cells.A21V3H4.name === "Plum" && cells.A21V3H4.choice === false ? classes.plumCells :
                                        cells.A21V3H4.name === "Cranberry" && cells.A21V3H4.choice === false ? classes.cranberryCells :
                                        cells.A21V3H4.name === "SeaBuckthorn" && cells.A21V3H4.choice === false ? classes.seaBuckthornCells :
                                        cells.A21V3H4.name === "Gooseberry" && cells.A21V3H4.choice === false ? classes.gooseberryCells :
                                        cells.A21V3H4.name === "Strawberries" && cells.A21V3H4.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A21V3H4.name === "Pear" && cells.A21V3H4.choice === true ? classes.pearCellsChoice :
                                        cells.A21V3H4.name === "Plum" && cells.A21V3H4.choice === true ? classes.plumCellsChoice :
                                        cells.A21V3H4.name === "Cranberry" && cells.A21V3H4.choice === true ? classes.cranberryCellsChoice :
                                        cells.A21V3H4.name === "SeaBuckthorn" && cells.A21V3H4.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A21V3H4.name === "Gooseberry" && cells.A21V3H4.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A21V3H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A22V4H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A22V4H4.name === "Strawberries" && cells.A22V4H4.choice === false ? classes.strawberriesCells :
                                        cells.A22V4H4.name === "Pear" && cells.A22V4H4.choice === false ? classes.pearCells :
                                        cells.A22V4H4.name === "Plum" && cells.A22V4H4.choice === false ? classes.plumCells :
                                        cells.A22V4H4.name === "Cranberry" && cells.A22V4H4.choice === false ? classes.cranberryCells :
                                        cells.A22V4H4.name === "SeaBuckthorn" && cells.A22V4H4.choice === false ? classes.seaBuckthornCells :
                                        cells.A22V4H4.name === "Gooseberry" && cells.A22V4H4.choice === false ? classes.gooseberryCells :
                                        cells.A22V4H4.name === "Strawberries" && cells.A22V4H4.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A22V4H4.name === "Pear" && cells.A22V4H4.choice === true ? classes.pearCellsChoice :
                                        cells.A22V4H4.name === "Plum" && cells.A22V4H4.choice === true ? classes.plumCellsChoice :
                                        cells.A22V4H4.name === "Cranberry" && cells.A22V4H4.choice === true ? classes.cranberryCellsChoice :
                                        cells.A22V4H4.name === "SeaBuckthorn" && cells.A22V4H4.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A22V4H4.name === "Gooseberry" && cells.A22V4H4.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A22V4H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A23V5H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A23V5H4.name === "Strawberries" && cells.A23V5H4.choice === false ? classes.strawberriesCells :
                                        cells.A23V5H4.name === "Pear" && cells.A23V5H4.choice === false ? classes.pearCells :
                                        cells.A23V5H4.name === "Plum" && cells.A23V5H4.choice === false ? classes.plumCells :
                                        cells.A23V5H4.name === "Cranberry" && cells.A23V5H4.choice === false ? classes.cranberryCells :
                                        cells.A23V5H4.name === "SeaBuckthorn" && cells.A23V5H4.choice === false ? classes.seaBuckthornCells :
                                        cells.A23V5H4.name === "Gooseberry" && cells.A23V5H4.choice === false ? classes.gooseberryCells :
                                        cells.A23V5H4.name === "Strawberries" && cells.A23V5H4.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A23V5H4.name === "Pear" && cells.A23V5H4.choice === true ? classes.pearCellsChoice :
                                        cells.A23V5H4.name === "Plum" && cells.A23V5H4.choice === true ? classes.plumCellsChoice :
                                        cells.A23V5H4.name === "Cranberry" && cells.A23V5H4.choice === true ? classes.cranberryCellsChoice :
                                        cells.A23V5H4.name === "SeaBuckthorn" && cells.A23V5H4.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A23V5H4.name === "Gooseberry" && cells.A23V5H4.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A23V5H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A24V6H4.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A24V6H4.name === "Strawberries" && cells.A24V6H4.choice === false ? classes.strawberriesCells :
                                        cells.A24V6H4.name === "Pear" && cells.A24V6H4.choice === false ? classes.pearCells :
                                        cells.A24V6H4.name === "Plum" && cells.A24V6H4.choice === false ? classes.plumCells :
                                        cells.A24V6H4.name === "Cranberry" && cells.A24V6H4.choice === false ? classes.cranberryCells :
                                        cells.A24V6H4.name === "SeaBuckthorn" && cells.A24V6H4.choice === false ? classes.seaBuckthornCells :
                                        cells.A24V6H4.name === "Gooseberry" && cells.A24V6H4.choice === false ? classes.gooseberryCells :
                                        cells.A24V6H4.name === "Strawberries" && cells.A24V6H4.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A24V6H4.name === "Pear" && cells.A24V6H4.choice === true ? classes.pearCellsChoice :
                                        cells.A24V6H4.name === "Plum" && cells.A24V6H4.choice === true ? classes.plumCellsChoice :
                                        cells.A24V6H4.name === "Cranberry" && cells.A24V6H4.choice === true ? classes.cranberryCellsChoice :
                                        cells.A24V6H4.name === "SeaBuckthorn" && cells.A24V6H4.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A24V6H4.name === "Gooseberry" && cells.A24V6H4.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A24V6H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice 
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 5 */}
                        <div className={classes.fieldH5}>

                            {cells.A25V1H5.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A25V1H5.name === "Strawberries" && cells.A25V1H5.choice === false ? classes.strawberriesCells :
                                        cells.A25V1H5.name === "Pear" && cells.A25V1H5.choice === false ? classes.pearCells :
                                        cells.A25V1H5.name === "Plum" && cells.A25V1H5.choice === false ? classes.plumCells :
                                        cells.A25V1H5.name === "Cranberry" && cells.A25V1H5.choice === false ? classes.cranberryCells :
                                        cells.A25V1H5.name === "SeaBuckthorn" && cells.A25V1H5.choice === false ? classes.seaBuckthornCells :
                                        cells.A25V1H5.name === "Gooseberry" && cells.A25V1H5.choice === false ? classes.gooseberryCells :
                                        cells.A25V1H5.name === "Strawberries" && cells.A25V1H5.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A25V1H5.name === "Pear" && cells.A25V1H5.choice === true ? classes.pearCellsChoice :
                                        cells.A25V1H5.name === "Plum" && cells.A25V1H5.choice === true ? classes.plumCellsChoice :
                                        cells.A25V1H5.name === "Cranberry" && cells.A25V1H5.choice === true ? classes.cranberryCellsChoice :
                                        cells.A25V1H5.name === "SeaBuckthorn" && cells.A25V1H5.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A25V1H5.name === "Gooseberry" && cells.A25V1H5.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A25V1H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A26V2H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A26V2H5.name === "Strawberries" && cells.A26V2H5.choice === false ? classes.strawberriesCells :
                                        cells.A26V2H5.name === "Pear" && cells.A26V2H5.choice === false ? classes.pearCells :
                                        cells.A26V2H5.name === "Plum" && cells.A26V2H5.choice === false ? classes.plumCells :
                                        cells.A26V2H5.name === "Cranberry" && cells.A26V2H5.choice === false ? classes.cranberryCells :
                                        cells.A26V2H5.name === "SeaBuckthorn" && cells.A26V2H5.choice === false ? classes.seaBuckthornCells :
                                        cells.A26V2H5.name === "Gooseberry" && cells.A26V2H5.choice === false ? classes.gooseberryCells :
                                        cells.A26V2H5.name === "Strawberries" && cells.A26V2H5.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A26V2H5.name === "Pear" && cells.A26V2H5.choice === true ? classes.pearCellsChoice :
                                        cells.A26V2H5.name === "Plum" && cells.A26V2H5.choice === true ? classes.plumCellsChoice :
                                        cells.A26V2H5.name === "Cranberry" && cells.A26V2H5.choice === true ? classes.cranberryCellsChoice :
                                        cells.A26V2H5.name === "SeaBuckthorn" && cells.A26V2H5.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A26V2H5.name === "Gooseberry" && cells.A26V2H5.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A26V2H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A27V3H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A27V3H5.name === "Strawberries" && cells.A27V3H5.choice === false ? classes.strawberriesCells :
                                        cells.A27V3H5.name === "Pear" && cells.A27V3H5.choice === false ? classes.pearCells :
                                        cells.A27V3H5.name === "Plum" && cells.A27V3H5.choice === false ? classes.plumCells :
                                        cells.A27V3H5.name === "Cranberry" && cells.A27V3H5.choice === false ? classes.cranberryCells :
                                        cells.A27V3H5.name === "SeaBuckthorn" && cells.A27V3H5.choice === false ? classes.seaBuckthornCells :
                                        cells.A27V3H5.name === "Gooseberry" && cells.A27V3H5.choice === false ? classes.gooseberryCells :
                                        cells.A27V3H5.name === "Strawberries" && cells.A27V3H5.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A27V3H5.name === "Pear" && cells.A27V3H5.choice === true ? classes.pearCellsChoice :
                                        cells.A27V3H5.name === "Plum" && cells.A27V3H5.choice === true ? classes.plumCellsChoice :
                                        cells.A27V3H5.name === "Cranberry" && cells.A27V3H5.choice === true ? classes.cranberryCellsChoice :
                                        cells.A27V3H5.name === "SeaBuckthorn" && cells.A27V3H5.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A27V3H5.name === "Gooseberry" && cells.A27V3H5.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A27V3H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A28V4H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A28V4H5.name === "Strawberries" && cells.A28V4H5.choice === false ? classes.strawberriesCells :
                                        cells.A28V4H5.name === "Pear" && cells.A28V4H5.choice === false ? classes.pearCells :
                                        cells.A28V4H5.name === "Plum" && cells.A28V4H5.choice === false ? classes.plumCells :
                                        cells.A28V4H5.name === "Cranberry" && cells.A28V4H5.choice === false ? classes.cranberryCells :
                                        cells.A28V4H5.name === "SeaBuckthorn" && cells.A28V4H5.choice === false ? classes.seaBuckthornCells :
                                        cells.A28V4H5.name === "Gooseberry" && cells.A28V4H5.choice === false ? classes.gooseberryCells :
                                        cells.A28V4H5.name === "Strawberries" && cells.A28V4H5.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A28V4H5.name === "Pear" && cells.A28V4H5.choice === true ? classes.pearCellsChoice :
                                        cells.A28V4H5.name === "Plum" && cells.A28V4H5.choice === true ? classes.plumCellsChoice :
                                        cells.A28V4H5.name === "Cranberry" && cells.A28V4H5.choice === true ? classes.cranberryCellsChoice :
                                        cells.A28V4H5.name === "SeaBuckthorn" && cells.A28V4H5.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A28V4H5.name === "Gooseberry" && cells.A28V4H5.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A28V4H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A29V5H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A29V5H5.name === "Strawberries" && cells.A29V5H5.choice === false ? classes.strawberriesCells :
                                        cells.A29V5H5.name === "Pear" && cells.A29V5H5.choice === false ? classes.pearCells :
                                        cells.A29V5H5.name === "Plum" && cells.A29V5H5.choice === false ? classes.plumCells :
                                        cells.A29V5H5.name === "Cranberry" && cells.A29V5H5.choice === false ? classes.cranberryCells :
                                        cells.A29V5H5.name === "SeaBuckthorn" && cells.A29V5H5.choice === false ? classes.seaBuckthornCells :
                                        cells.A29V5H5.name === "Gooseberry" && cells.A29V5H5.choice === false ? classes.gooseberryCells :
                                        cells.A29V5H5.name === "Strawberries" && cells.A29V5H5.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A29V5H5.name === "Pear" && cells.A29V5H5.choice === true ? classes.pearCellsChoice :
                                        cells.A29V5H5.name === "Plum" && cells.A29V5H5.choice === true ? classes.plumCellsChoice :
                                        cells.A29V5H5.name === "Cranberry" && cells.A29V5H5.choice === true ? classes.cranberryCellsChoice :
                                        cells.A29V5H5.name === "SeaBuckthorn" && cells.A29V5H5.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A29V5H5.name === "Gooseberry" && cells.A29V5H5.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A29V5H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A30V6H5.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A30V6H5.name === "Strawberries" && cells.A30V6H5.choice === false ? classes.strawberriesCells :
                                        cells.A30V6H5.name === "Pear" && cells.A30V6H5.choice === false ? classes.pearCells :
                                        cells.A30V6H5.name === "Plum" && cells.A30V6H5.choice === false ? classes.plumCells :
                                        cells.A30V6H5.name === "Cranberry" && cells.A30V6H5.choice === false ? classes.cranberryCells :
                                        cells.A30V6H5.name === "SeaBuckthorn" && cells.A30V6H5.choice === false ? classes.seaBuckthornCells :
                                        cells.A30V6H5.name === "Gooseberry" && cells.A30V6H5.choice === false ? classes.gooseberryCells :
                                        cells.A30V6H5.name === "Strawberries" && cells.A30V6H5.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A30V6H5.name === "Pear" && cells.A30V6H5.choice === true ? classes.pearCellsChoice :
                                        cells.A30V6H5.name === "Plum" && cells.A30V6H5.choice === true ? classes.plumCellsChoice :
                                        cells.A30V6H5.name === "Cranberry" && cells.A30V6H5.choice === true ? classes.cranberryCellsChoice :
                                        cells.A30V6H5.name === "SeaBuckthorn" && cells.A30V6H5.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A30V6H5.name === "Gooseberry" && cells.A30V6H5.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A30V6H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice 
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice
                                    }
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 6 */}
                        <div className={classes.fieldH6}>

                            {cells.A31V1H6.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={
                                        cells.A31V1H6.name === "Strawberries" && cells.A31V1H6.choice === false ? classes.strawberriesCells :
                                        cells.A31V1H6.name === "Pear" && cells.A31V1H6.choice === false ? classes.pearCells :
                                        cells.A31V1H6.name === "Plum" && cells.A31V1H6.choice === false ? classes.plumCells :
                                        cells.A31V1H6.name === "Cranberry" && cells.A31V1H6.choice === false ? classes.cranberryCells :
                                        cells.A31V1H6.name === "SeaBuckthorn" && cells.A31V1H6.choice === false ? classes.seaBuckthornCells :
                                        cells.A31V1H6.name === "Gooseberry" && cells.A31V1H6.choice === false ? classes.gooseberryCells :
                                        cells.A31V1H6.name === "Strawberries" && cells.A31V1H6.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A31V1H6.name === "Pear" && cells.A31V1H6.choice === true ? classes.pearCellsChoice :
                                        cells.A31V1H6.name === "Plum" && cells.A31V1H6.choice === true ? classes.plumCellsChoice :
                                        cells.A31V1H6.name === "Cranberry" && cells.A31V1H6.choice === true ? classes.cranberryCellsChoice :
                                        cells.A31V1H6.name === "SeaBuckthorn" && cells.A31V1H6.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A31V1H6.name === "Gooseberry" && cells.A31V1H6.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A31V1H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A32V2H6.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A32V2H6.name === "Strawberries" && cells.A32V2H6.choice === false ? classes.strawberriesCells :
                                        cells.A32V2H6.name === "Pear" && cells.A32V2H6.choice === false ? classes.pearCells :
                                        cells.A32V2H6.name === "Plum" && cells.A32V2H6.choice === false ? classes.plumCells :
                                        cells.A32V2H6.name === "Cranberry" && cells.A32V2H6.choice === false ? classes.cranberryCells :
                                        cells.A32V2H6.name === "SeaBuckthorn" && cells.A32V2H6.choice === false ? classes.seaBuckthornCells :
                                        cells.A32V2H6.name === "Gooseberry" && cells.A32V2H6.choice === false ? classes.gooseberryCells :
                                        cells.A32V2H6.name === "Strawberries" && cells.A32V2H6.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A32V2H6.name === "Pear" && cells.A32V2H6.choice === true ? classes.pearCellsChoice :
                                        cells.A32V2H6.name === "Plum" && cells.A32V2H6.choice === true ? classes.plumCellsChoice :
                                        cells.A32V2H6.name === "Cranberry" && cells.A32V2H6.choice === true ? classes.cranberryCellsChoice :
                                        cells.A32V2H6.name === "SeaBuckthorn" && cells.A32V2H6.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A32V2H6.name === "Gooseberry" && cells.A32V2H6.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A32V2H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A33V3H6.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A33V3H6.name === "Strawberries" && cells.A33V3H6.choice === false ? classes.strawberriesCells :
                                        cells.A33V3H6.name === "Pear" && cells.A33V3H6.choice === false ? classes.pearCells :
                                        cells.A33V3H6.name === "Plum" && cells.A33V3H6.choice === false ? classes.plumCells :
                                        cells.A33V3H6.name === "Cranberry" && cells.A33V3H6.choice === false ? classes.cranberryCells :
                                        cells.A33V3H6.name === "SeaBuckthorn" && cells.A33V3H6.choice === false ? classes.seaBuckthornCells :
                                        cells.A33V3H6.name === "Gooseberry" && cells.A33V3H6.choice === false ? classes.gooseberryCells :
                                        cells.A33V3H6.name === "Strawberries" && cells.A33V3H6.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A33V3H6.name === "Pear" && cells.A33V3H6.choice === true ? classes.pearCellsChoice :
                                        cells.A33V3H6.name === "Plum" && cells.A33V3H6.choice === true ? classes.plumCellsChoice :
                                        cells.A33V3H6.name === "Cranberry" && cells.A33V3H6.choice === true ? classes.cranberryCellsChoice :
                                        cells.A33V3H6.name === "SeaBuckthorn" && cells.A33V3H6.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A33V3H6.name === "Gooseberry" && cells.A33V3H6.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A33V3H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A34V4H6.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A34V4H6.name === "Strawberries" && cells.A34V4H6.choice === false ? classes.strawberriesCells :
                                        cells.A34V4H6.name === "Pear" && cells.A34V4H6.choice === false ? classes.pearCells :
                                        cells.A34V4H6.name === "Plum" && cells.A34V4H6.choice === false ? classes.plumCells :
                                        cells.A34V4H6.name === "Cranberry" && cells.A34V4H6.choice === false ? classes.cranberryCells :
                                        cells.A34V4H6.name === "SeaBuckthorn" && cells.A34V4H6.choice === false ? classes.seaBuckthornCells :
                                        cells.A34V4H6.name === "Gooseberry" && cells.A34V4H6.choice === false ? classes.gooseberryCells :
                                        cells.A34V4H6.name === "Strawberries" && cells.A34V4H6.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A34V4H6.name === "Pear" && cells.A34V4H6.choice === true ? classes.pearCellsChoice :
                                        cells.A34V4H6.name === "Plum" && cells.A34V4H6.choice === true ? classes.plumCellsChoice :
                                        cells.A34V4H6.name === "Cranberry" && cells.A34V4H6.choice === true ? classes.cranberryCellsChoice :
                                        cells.A34V4H6.name === "SeaBuckthorn" && cells.A34V4H6.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A34V4H6.name === "Gooseberry" && cells.A34V4H6.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A34V4H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A36V6H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A35V5H6.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={
                                        cells.A35V5H6.name === "Strawberries" && cells.A35V5H6.choice === false ? classes.strawberriesCells :
                                        cells.A35V5H6.name === "Pear" && cells.A35V5H6.choice === false ? classes.pearCells :
                                        cells.A35V5H6.name === "Plum" && cells.A35V5H6.choice === false ? classes.plumCells :
                                        cells.A35V5H6.name === "Cranberry" && cells.A35V5H6.choice === false ? classes.cranberryCells :
                                        cells.A35V5H6.name === "SeaBuckthorn" && cells.A35V5H6.choice === false ? classes.seaBuckthornCells :
                                        cells.A35V5H6.name === "Gooseberry" && cells.A35V5H6.choice === false ? classes.gooseberryCells :
                                        cells.A35V5H6.name === "Strawberries" && cells.A35V5H6.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A35V5H6.name === "Pear" && cells.A35V5H6.choice === true ? classes.pearCellsChoice :
                                        cells.A35V5H6.name === "Plum" && cells.A35V5H6.choice === true ? classes.plumCellsChoice :
                                        cells.A35V5H6.name === "Cranberry" && cells.A35V5H6.choice === true ? classes.cranberryCellsChoice :
                                        cells.A35V5H6.name === "SeaBuckthorn" && cells.A35V5H6.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A35V5H6.name === "Gooseberry" && cells.A35V5H6.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A35V5H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice
                                    }
                                ></button>
                            </div>}

                            {cells.A36V6H6.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={
                                        cells.A36V6H6.name === "Strawberries" && cells.A36V6H6.choice === false ? classes.strawberriesCells :
                                        cells.A36V6H6.name === "Pear" && cells.A36V6H6.choice === false ? classes.pearCells :
                                        cells.A36V6H6.name === "Plum" && cells.A36V6H6.choice === false ? classes.plumCells :
                                        cells.A36V6H6.name === "Cranberry" && cells.A36V6H6.choice === false ? classes.cranberryCells :
                                        cells.A36V6H6.name === "SeaBuckthorn" && cells.A36V6H6.choice === false ? classes.seaBuckthornCells :
                                        cells.A36V6H6.name === "Gooseberry" && cells.A36V6H6.choice === false ? classes.gooseberryCells :
                                        cells.A36V6H6.name === "Strawberries" && cells.A36V6H6.choice === true ? classes.strawberriesCellsChoice :
                                        cells.A36V6H6.name === "Pear" && cells.A36V6H6.choice === true ? classes.pearCellsChoice :
                                        cells.A36V6H6.name === "Plum" && cells.A36V6H6.choice === true ? classes.plumCellsChoice :
                                        cells.A36V6H6.name === "Cranberry" && cells.A36V6H6.choice === true ? classes.cranberryCellsChoice :
                                        cells.A36V6H6.name === "SeaBuckthorn" && cells.A36V6H6.choice === true ? classes.seaBuckthornCellsChoice :
                                        cells.A36V6H6.name === "Gooseberry" && cells.A36V6H6.choice === true ? classes.gooseberryCellsChoice :
                                        classes.emptyCells
                                    }
                                    onClick={() => handleChoiceCell("A36V6H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice 
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice 
                                    }
                                ></button>
                            </div>}

                        </div>

                </div>

                </div>
                
            </div>
        
        </>
    )
}
