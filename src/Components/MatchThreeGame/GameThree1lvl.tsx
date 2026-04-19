import { useEffect, useState } from "react";
import classes from "../../Styles/MatchThreeGame.module.css";
import { useNavigate } from "react-router-dom";
import DwarfWomen from "../../assets/MatchThreeGameImages/DwarfWomen.png";
import ImageBoxOfStrawberries from "../../assets/MatchThreeGameImages/BoxOfStrawberries.png";
import ImageBoxOfPear from "../../assets/MatchThreeGameImages/BoxOfPear.png";
import ImageBoxOfPlum from "../../assets/MatchThreeGameImages/BoxOfPlum.png";
import ArrowShuffle from "../../assets/MatchThreeGameImages/Arrow.png";

export const GameThree1lvl = () => {
    const [fruit, setFruit] = useState({
        numberOfStrawberries: 0, 
        numberOfPear: 0, 
        numberOfPlum: 0,  
        numberOfCurrant: 0, 
        numberOfSeaBuckthorn: 0, 
        numberOfGooseberry: 0,  
    }); 
    const [states, setStates] = useState({
        blockingDuringRecalculation: false,
        animationInProgress: false,
        counterCellsChoices: 0,
        cellsStrawberries: 0,
        cellsPear: 0,
        cellsPlum: 0,
        cellsCurrant: 0,
        cellsSeaBuckthorn: 0,
        cellsGooseberry: 0,
        cellsStrawberriesName: "Strawberries",
        cellsPearName: "Pear",
        cellsPlumName: "Plum",
        cellsCurrantName: "Currant",
        cellsSeaBuckthornName: "SeaBuckthorn",
        cellsGooseberryName: "Gooseberry",
        stateStart: false,
        showButtonStart: true,
        showButtonsWhenWinning: false,
        showLoseModal: false,
        showModalInfo: true,
        showWinModalRecipe: false,
        showShuffleButton: false,
        plate: true,
        plateEnding: true,
        plateEndingWin: false,
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
    const maxAttempts = 1000; // запас
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
    console.warn("Не удалось сгенерировать доску без линий с 1000 попыток");
    return colorsArray; // или вернуть что-то заведомо без линий, например, идеально упорядоченную доску
    }

    function handleStartGame() {
    if (states.stateStart) return;

    // Исходный набор цветов (6 каждого)
    const rawColors = [
        ...Array(6).fill(states.cellsStrawberriesName),
        ...Array(6).fill(states.cellsPearName),
        ...Array(6).fill(states.cellsPlumName),
        ...Array(6).fill(states.cellsCurrantName),
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

    const willItMatch = (cellsState: any) => {
        const rows = 6;
        const cols = 6;
        const matrix: string[][] = Array(rows).fill(null).map(() => Array(cols).fill(""));

        // 1. Собираем виртуальную матрицу
        for (let h = 0; h < rows; h++) {
            for (let v = 0; v < cols; v++) {
                const cellNumber = h * cols + v + 1;
                const key = `A${cellNumber}V${v + 1}H${h + 1}`;
                matrix[h][v] = cellsState[key]?.name || "";
            }
        }

        // 2. Проверяем горизонтали (есть ли 3 в ряд)
        for (let h = 0; h < rows; h++) {
            for (let v = 0; v < cols - 2; v++) {
                if (matrix[h][v] !== "" && matrix[h][v] === matrix[h][v+1] && matrix[h][v] === matrix[h][v+2]) return true;
            }
        }

        // 3. Проверяем вертикали (есть ли 3 в ряд)
        for (let v = 0; v < cols; v++) {
            for (let h = 0; h < rows - 2; h++) {
                if (matrix[h][v] !== "" && matrix[h][v] === matrix[h+1][v] && matrix[h][v] === matrix[h+2][v]) return true;
            }
        }

        return false; // Если ничего не нашли
    };
    
    function handleChoiceCell(cellKey: string) {
        
    const currentCell = cells[cellKey];

    // Функция для самого процесса обмена (свопа) в стейте
    const performSwap = (key1: string, key2: string) => {
        setCells((prev: any) => ({
            ...prev,
            [key1]: { ...prev[key1], name: prev[key2].name, choice: false, empty: false },
            [key2]: { ...prev[key2], name: prev[key1].name, choice: false, empty: false }
        }));
    };

    // --- ЛОГИКА ВЫБОРА ---
    
    // Если еще ничего не выбрано
    if (states.selectedCell === null) {
        if (!currentCell.empty && !currentCell.choice && states.counterCellsChoices < 1) {
            setCells((prev: any) => ({ ...prev, [cellKey]: { ...prev[cellKey], choice: true } }));
            setStates((prev: any) => ({ ...prev, counterCellsChoices: 1, selectedCell: cellKey }));
        }
    } 
    // Если уже есть выбранная клетка
    else {
        const selectedKey = states.selectedCell;

        // Если кликнули по той же самой — отменяем выбор
        if (selectedKey === cellKey) {
            setCells((prev: any) => ({ ...prev, [cellKey]: { ...prev[cellKey], choice: false } }));
            setStates((prev: any) => ({ ...prev, counterCellsChoices: 0, selectedCell: null }));
            return;
        }

        // Если кликнули по другой непустой клетке — пытаемся сделать ход
        if (!currentCell.empty) {
            setStates((prev: any) => ({...prev, blockingDuringRecalculation: true}))
            // Создаем "черновик" будущего состояния
            const futureCells = {
                ...cells,
                [selectedKey]: { ...cells[selectedKey], name: cells[cellKey].name },
                [cellKey]: { ...cells[cellKey], name: cells[selectedKey].name }
            };

            const matchWillHappen = willItMatch(futureCells);

            if (matchWillHappen) {
                // ВАРИАНТ: ЕСТЬ СОВПАДЕНИЕ
                setTimeout(() => {
                    performSwap(selectedKey, cellKey);
                }, 500);
            } else {
                // ВАРИАНТ: НЕТ СОВПАДЕНИЯ (делаем "туда-обратно")
                setTimeout(() => {
                    performSwap(selectedKey, cellKey); // Своп туда
                    setTimeout(() => {
                        performSwap(selectedKey, cellKey); // Своп обратно
                    }, 500);
                }, 500);
            }

            // Сбрасываем выбор в стейте, чтобы заблокировать клики на время анимации
            setStates((prev: any) => ({ ...prev, counterCellsChoices: 0, selectedCell: null }));
            setTimeout(() => {
                    setStates((prev: any) => ({ ...prev, blockingDuringRecalculation: false }));;
                }, 1000);
        }
    }
    };

    useEffect(() => {
        const rows = 6;
        const cols = 6;

        // Функция для проверки: есть ли вообще хоть один ход на поле?
        const canMoveSomewhere = () => {
            for (let h = 1; h <= rows; h++) {
                for (let v = 1; v <= cols; v++) {
                    // Текущая клетка
                    const cellNumber = (h - 1) * cols + v;
                    const currentKey = `A${cellNumber}V${v}H${h}`;

                    // Проверяем соседа справа и соседа снизу
                    const neighbors = [
                        { v: v + 1, h: h }, // Сосед справа
                        { v: v, h: h + 1 }  // Сосед снизу
                    ];

                    for (const neighbor of neighbors) {
                        if (neighbor.v <= cols && neighbor.h <= rows) {
                            const nNumber = (neighbor.h - 1) * cols + neighbor.v;
                            const neighborKey = `A${nNumber}V${neighbor.v}H${neighbor.h}`;

                            // Симулируем обмен
                            const futureCells = {
                                ...cells,
                                [currentKey]: { ...cells[currentKey], name: cells[neighborKey]?.name },
                                [neighborKey]: { ...cells[neighborKey], name: cells[currentKey]?.name }
                            };

                            // Если этот обмен создаёт ряд — значит ход есть!
                            if (willItMatch(futureCells)) return true;
                        }
                    }
                }
            }
            return false; // Если перебрали всё и ни одного совпадения
        };// Проверка на возможность хода

        // Если ходов нет — показываем кнопку перемешки
        const possible = canMoveSomewhere();
        setStates(prev => ({ ...prev, showShuffleButton: !possible }));

    }, [cells]); // Следим за клетками

    function handleShuffle() {
        setCells((prevCells: any) => {
            // 1. Извлекаем все имена из текущих клеток
            const allNames = Object.values(prevCells).map((cell: any) => cell.name);

            // 2. Перемешиваем массив имён (Fisher-Yates shuffle)
            for (let i = allNames.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [allNames[i], allNames[j]] = [allNames[j], allNames[i]];
            }

            // 3. Создаем новый объект состояния
            const newCells = { ...prevCells };
            const keys = Object.keys(newCells);

            // 4. Раскладываем перемешанные имена обратно по ключам
            keys.forEach((key, index) => {
                newCells[key] = {
                    ...newCells[key],
                    name: allNames[index],
                    choice: false, // На всякий случай сбрасываем выделение
                    empty: allNames[index] === "" // Если были пустые, помечаем их
                };
            });

            return newCells;
        });

        // Скрываем кнопку после перемешки
        setStates((prev: any) => ({ ...prev, showShuffleButton: false }));
    };//Перемешивание клеток в случае если нет ни одного совпадения в поле.

    const navigate = useNavigate();

    function handleTranzitionNextLevel() {
        navigate("/three2");
    };

    function handleRestart() {
        navigate(0);
    };

    //Гравитация

    useEffect(() => {
        const rows = 6;
        const cols = 6;

        // Если анимация уже идёт – не запускаем новую
        if (states.animationInProgress) return;

        // 1. Построим матрицу имён и ключей
        const matrix: string[][] = Array(rows).fill(null).map(() => Array(cols).fill(""));
        const keyMatrix: string[][] = Array(rows).fill(null).map(() => Array(cols).fill(""));

        for (let h = 0; h < rows; h++) {
            for (let v = 0; v < cols; v++) {
            const cellNumber = h * cols + v + 1;
            const key = `A${cellNumber}V${v + 1}H${h + 1}`;
            const cell = cells[key];
            if (cell) {
                matrix[h][v] = cell.name || "";
                keyMatrix[h][v] = key;
            }
            }
        }

        // 2. Поиск линий
        const toClear = new Set<string>();

        // Горизонтали
        for (let h = 0; h < rows; h++) {
            let start = 0;
            while (start < cols) {
            const currentName = matrix[h][start];
            if (currentName === "") {
                start++;
                continue;
            }
            let end = start;
            while (end + 1 < cols && matrix[h][end + 1] === currentName) end++;
            if (end - start + 1 >= 3) {
                for (let v = start; v <= end; v++) toClear.add(keyMatrix[h][v]);
            }
            start = end + 1;
            }
        }

        // Вертикали
        for (let v = 0; v < cols; v++) {
            let start = 0;
            while (start < rows) {
            const currentName = matrix[start][v];
            if (currentName === "") {
                start++;
                continue;
            }
            let end = start;
            while (end + 1 < rows && matrix[end + 1][v] === currentName) end++;
            if (end - start + 1 >= 3) {
                for (let h = start; h <= end; h++) toClear.add(keyMatrix[h][v]);
            }
            start = end + 1;
            }
        }

        if (toClear.size === 0) return;

        // 3. Подсчёт удаляемых фруктов (для setFruit)
        const counts = {
            numberOfStrawberries: 0,
            numberOfPear: 0,
            numberOfPlum: 0,
            numberOfCurrant: 0,
            numberOfSeaBuckthorn: 0,
            numberOfGooseberry: 0,
        };
        for (const key of toClear) {
            const fruitName = cells[key]?.name;
            switch (fruitName) {
            case states.cellsStrawberriesName: counts.numberOfStrawberries++; break;
            case states.cellsPearName: counts.numberOfPear++; break;
            case states.cellsPlumName: counts.numberOfPlum++; break;
            case states.cellsCurrantName: counts.numberOfCurrant++; break;
            case states.cellsSeaBuckthornName: counts.numberOfSeaBuckthorn++; break;
            case states.cellsGooseberryName: counts.numberOfGooseberry++; break;
            }
        }
        setFruit(prev => ({
            numberOfStrawberries: prev.numberOfStrawberries + counts.numberOfStrawberries,
            numberOfPear: prev.numberOfPear + counts.numberOfPear,
            numberOfPlum: prev.numberOfPlum + counts.numberOfPlum,
            numberOfCurrant: prev.numberOfCurrant + counts.numberOfCurrant,
            numberOfSeaBuckthorn: prev.numberOfSeaBuckthorn + counts.numberOfSeaBuckthorn,
            numberOfGooseberry: prev.numberOfGooseberry + counts.numberOfGooseberry,
        }));

        // 4. Помечаем клетки для анимации и блокируем клики
        setCells((prev: any) => {
            const newCells = { ...prev };
            for (const key of toClear) {
            if (newCells[key]) {
                newCells[key] = {
                ...newCells[key],
                willBeCleared: true, // флаг для CSS-класса cellMatching
                };
            }
            }
            return newCells;
        });
        setStates(prev => ({ ...prev, animationInProgress: true, blockingDuringRecalculation: true }));

        // 5. Таймер на длительность анимации (синхронизировать с CSS)
        const ANIMATION_DURATION = 500; // миллисекунд (должно совпадать с animation-duration в .cellMatching)
        setTimeout(() => {
            setCells((prevCells: any) => {
            let newCells = { ...prevCells };
            // 5.1 Очищаем помеченные клетки (удаляем линии)
            for (const key of toClear) {
                if (newCells[key]) {
                newCells[key] = {
                    ...newCells[key],
                    name: "",
                    empty: true,
                    choice: false,
                    willBeCleared: false,
                };
                }
            }

            // 5.2 Гравитация и заполнение
            const getRandomFruit = () => {
                const fruitNames = [
                states.cellsStrawberriesName,
                states.cellsPearName,
                states.cellsPlumName,
                states.cellsCurrantName,
                states.cellsSeaBuckthornName,
                states.cellsGooseberryName,
                ];
                return fruitNames[Math.floor(Math.random() * fruitNames.length)];
            };

            for (let v = 1; v <= cols; v++) {
                const columnNames: string[] = [];
                for (let h = 1; h <= rows; h++) {
                const cellNumber = (h - 1) * cols + v;
                const key = `A${cellNumber}V${v}H${h}`;
                columnNames.push(newCells[key]?.name || "");
                }
                const nonEmpty = columnNames.filter(name => name !== "");
                const emptyCount = rows - nonEmpty.length;
                const newFruits = Array(emptyCount).fill(null).map(() => getRandomFruit());
                const newColumn = [...newFruits, ...nonEmpty];
                for (let h = 1; h <= rows; h++) {
                const cellNumber = (h - 1) * cols + v;
                const key = `A${cellNumber}V${v}H${h}`;
                if (newCells[key]) {
                    newCells[key] = {
                    ...newCells[key],
                    name: newColumn[h - 1],
                    empty: false,
                    choice: false,
                    };
                }
                }
            }

            return newCells;
            });

            // 5.3 Разблокируем интерфейс
            setStates(prev => ({ ...prev, animationInProgress: false, blockingDuringRecalculation: false }));
        }, ANIMATION_DURATION);
    }, [cells, states.animationInProgress]);

    // function handleWin() {
    //     setFruit((prev: any) => ({...prev, numberOfStrawberries: 50, numberOfPear: 50, numberOfPlum: 50, numberOfCurrant: 50, numberOfSeaBuckthorn: 50, numberOfGooseberry: 50}))
    // };

    useEffect(() => {
        if (fruit.numberOfStrawberries >= 20 && fruit.numberOfPear >= 20 && fruit.numberOfPlum >= 20) {
            setStates((prev: any) => ({...prev, showButtonsWhenWinning: true, plateEndingWin: true}));
        }
    }, [fruit]);

    const getCellClass = (cell: any) => {
        // Приоритет: если клетка помечена для анимации удаления
        if (cell.willBeCleared) return classes.cellMatching;
        // Если имя пустое – обычная пустая клетка (без подсветки)
        if (cell.name === "") return classes.emptyCells;
        // Если выбрана (choice: true)
        if (cell.choice) {
            switch (cell.name) {
                case "Strawberries": return classes.strawberriesCellsChoice;
                case "Pear": return classes.pearCellsChoice;
                case "Plum": return classes.plumCellsChoice;
                case "Currant": return classes.currantCellsChoice;
                case "SeaBuckthorn": return classes.seaBuckthornCellsChoice;
                case "Gooseberry": return classes.gooseberryCellsChoice;
            }
        } else {
            // Обычное состояние
            switch (cell.name) {
                case "Strawberries": return classes.strawberriesCells;
                case "Pear": return classes.pearCells;
                case "Plum": return classes.plumCells;
                case "Currant": return classes.currantCells;
                case "SeaBuckthorn": return classes.seaBuckthornCells;
                case "Gooseberry": return classes.gooseberryCells;
            }
        }
        // fallback (не должно срабатывать)
        return classes.emptyCells;
    };
 
    return (
        <>
            <div className={classes.gamePage}>
                {/* <button onClick={handleWin}>WIN</button> */}
                { states.showShuffleButton && states.stateStart && <div className={classes.shuffleButton}>
                    <button onClick={handleShuffle}></button>
                    <p>Перемешать</p>
                    <img src={ArrowShuffle} alt="ArrowShuffle" draggable={false}/>
                </div> }
                <div className={classes.pointers}>
                    <div className={classes.pointerBoxOfStrawberries}>
                        <p>Земляника</p>
                        <img src={ImageBoxOfStrawberries} alt="ImageBoxOfStrawberries" draggable={false}/> 
                        <progress className={classes.scales} max="20" value={fruit.numberOfStrawberries}></progress>
                    </div>

                    <div className={classes.pointerBoxOfPear}>
                        <p>Груша</p>
                        <img src={ImageBoxOfPear} alt="ImageBoxOfPear" draggable={false}/> 
                        <progress className={classes.scales} max="20" value={fruit.numberOfPear}></progress>
                    </div>

                    <div className={classes.pointerBoxOfPlum}>
                        <p>Слива</p> 
                        <img src={ImageBoxOfPlum} alt="ImageBoxOfPlum" draggable={false}/> 
                        <progress className={classes.scales} max="20" value={fruit.numberOfPlum}></progress>
                    </div>

                </div>

                { states.showButtonsWhenWinning && <div className={classes.winAndLoseModal}>  
                    <div className={classes.infoOverlay}>
                        <p className={classes.info}>Молодец! Получилось здорово. Заново или следующий.</p>
                    </div>
                    <h3>Снова или следующий?</h3>
                    <img className={classes.imageInfoEnding} src={DwarfWomen} alt="DwarfWomen" draggable={false}/> 
                    <p className={classes.buttonNextAndHome} onClick={handleTranzitionNextLevel}>Следующий уровень</p>
                    <p className={classes.buttonRestart} onClick={handleRestart}>Ещё раз</p>
                </div>}

                <p className={classes.levelPointer}>Уровень 1</p>

                <div className={classes.gameField}>

                        { states.showButtonStart && <p className={classes.buttonStart} onClick={handleStartGame}>Старт</p>}

                        { states.showModalInfo && <div>
                            <div className={states.stateStart ? classes.infoOverlayOpacity : classes.infoOverlay}> 
                                <p className={classes.info}>Спаси! Нам нужно успеть навести порядок до прихода наставника.</p>
                            </div>
                                <img className={states.stateStart ? classes.imageInfoIntroOpacity : classes.imageInfoIntro} src={DwarfWomen} alt="DwarfWomen" draggable={false}/>
                        </div> }

                        { states.plate && <div className={states.stateStart ? classes.leftPlateEnd : !states.stateStart ? classes.leftPlateStart : classes.plate}></div>}

                        { states.plateEnding && <div className={states.showLoseModal ? classes.rightPlateStart : classes.plate}></div>}

                        { states.plateEndingWin && <div className={states.showButtonsWhenWinning ? classes.rightPlateStart : classes.plate}></div>}

                    <div className={classes.fields}>
                        {/* HORIZONT 1 */}
                        <div className={classes.fieldH1}>

                            {cells.A1V1H1.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={getCellClass(cells.A1V1H1)}
                                    onClick={() => handleChoiceCell("A1V1H1")}
                                    disabled={!states.stateStart || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A2V2H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A2V2H1)}
                                    onClick={() => handleChoiceCell("A2V2H1")}
                                    disabled={!states.stateStart || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A3V3H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A3V3H1)}
                                    onClick={() => handleChoiceCell("A3V3H1")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A4V4H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A4V4H1)}
                                    onClick={() => handleChoiceCell("A4V4H1")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice  || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A5V5H1.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A5V5H1)}
                                    onClick={() => handleChoiceCell("A5V5H1")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice 
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A6V6H1.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={getCellClass(cells.A6V6H1)}
                                    onClick={() => handleChoiceCell("A6V6H1")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice 
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice 
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 2 */}
                        <div className={classes.fieldH2}>

                            {cells.A7V1H2.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={getCellClass(cells.A7V1H2)}
                                    onClick={() => handleChoiceCell("A7V1H2")}
                                    disabled={!states.stateStart  || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A8V2H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A8V2H2)}
                                    onClick={() => handleChoiceCell("A8V2H2")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A9V3H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A9V3H2)}
                                    onClick={() => handleChoiceCell("A9V3H2")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A10V4H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A10V4H2)}
                                    onClick={() => handleChoiceCell("A10V4H2")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A11V5H2.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A11V5H2)}
                                    onClick={() => handleChoiceCell("A11V5H2")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A12V6H2.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={getCellClass(cells.A12V6H2)}
                                    onClick={() => handleChoiceCell("A12V6H2")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice 
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 3 */}
                        <div className={classes.fieldH3}>

                            {cells.A13V1H3.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={getCellClass(cells.A13V1H3)}
                                    onClick={() => handleChoiceCell("A13V1H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A14V2H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A14V2H3)}
                                    onClick={() => handleChoiceCell("A14V2H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice  || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A15V3H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A15V3H3)}
                                    onClick={() => handleChoiceCell("A15V3H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A16V4H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A16V4H3)}
                                    onClick={() => handleChoiceCell("A16V4H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A17V5H3.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A17V5H3)}
                                    onClick={() => handleChoiceCell("A17V5H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A18V6H3.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={getCellClass(cells.A18V6H3)}
                                    onClick={() => handleChoiceCell("A18V6H3")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice 
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 4 */}
                        <div className={classes.fieldH4}>

                            {cells.A19V1H4.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={getCellClass(cells.A19V1H4)}
                                    onClick={() => handleChoiceCell("A19V1H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A20V2H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A20V2H4)}
                                    onClick={() => handleChoiceCell("A20V2H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A21V3H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A21V3H4)}
                                    onClick={() => handleChoiceCell("A21V3H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A22V4H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A22V4H4)}
                                    onClick={() => handleChoiceCell("A22V4H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A23V5H4.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A23V5H4)}
                                    onClick={() => handleChoiceCell("A23V5H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A24V6H4.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={getCellClass(cells.A24V6H4)}
                                    onClick={() => handleChoiceCell("A24V6H4")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice 
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 5 */}
                        <div className={classes.fieldH5}>

                            {cells.A25V1H5.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={getCellClass(cells.A25V1H5)}
                                    onClick={() => handleChoiceCell("A25V1H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A26V2H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A26V2H5)}
                                    onClick={() => handleChoiceCell("A26V2H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A27V3H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A27V3H5)}
                                    onClick={() => handleChoiceCell("A27V3H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A28V4H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A28V4H5)}
                                    onClick={() => handleChoiceCell("A28V4H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A29V5H5.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A29V5H5)}
                                    onClick={() => handleChoiceCell("A29V5H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A30V6H5.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={getCellClass(cells.A30V6H5)}
                                    onClick={() => handleChoiceCell("A30V6H5")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice 
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                        </div>

                        {/* HORIZONT 6 */}
                        <div className={classes.fieldH6}>

                            {cells.A31V1H6.showCell && <div className={classes.cellsLeftSide}>
                                <button
                                    className={getCellClass(cells.A31V1H6)}
                                    onClick={() => handleChoiceCell("A31V1H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A33V3H6.choice || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A32V2H6.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A32V2H6)}
                                    onClick={() => handleChoiceCell("A32V2H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A34V4H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A33V3H6.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A33V3H6)}
                                    onClick={() => handleChoiceCell("A33V3H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A35V5H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A34V4H6.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A34V4H6)}
                                    onClick={() => handleChoiceCell("A34V4H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A29V5H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A36V6H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A35V5H6.showCell && <div className={classes.cellsCenterSide}>
                                <button
                                    className={getCellClass(cells.A35V5H6)}
                                    onClick={() => handleChoiceCell("A35V5H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A30V6H5.choice
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice
                                        || states.blockingDuringRecalculation
                                    }
                                ></button>
                            </div>}

                            {cells.A36V6H6.showCell && <div className={classes.cellsRightSide}>
                                <button
                                    className={getCellClass(cells.A36V6H6)}
                                    onClick={() => handleChoiceCell("A36V6H6")}
                                    disabled={!states.stateStart || cells.A1V1H1.choice || cells.A2V2H1.choice || cells.A3V3H1.choice || cells.A4V4H1.choice || cells.A5V5H1.choice || cells.A6V6H1.choice
                                        || cells.A7V1H2.choice || cells.A8V2H2.choice || cells.A9V3H2.choice || cells.A10V4H2.choice || cells.A11V5H2.choice || cells.A12V6H2.choice
                                        || cells.A13V1H3.choice || cells.A14V2H3.choice || cells.A15V3H3.choice || cells.A16V4H3.choice || cells.A17V5H3.choice || cells.A18V6H3.choice
                                        || cells.A19V1H4.choice || cells.A20V2H4.choice || cells.A21V3H4.choice || cells.A22V4H4.choice || cells.A23V5H4.choice || cells.A24V6H4.choice
                                        || cells.A25V1H5.choice || cells.A26V2H5.choice || cells.A27V3H5.choice || cells.A28V4H5.choice || cells.A29V5H5.choice 
                                        || cells.A31V1H6.choice || cells.A32V2H6.choice || cells.A33V3H6.choice || cells.A34V4H6.choice 
                                        || states.blockingDuringRecalculation
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
