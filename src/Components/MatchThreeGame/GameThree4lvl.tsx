import { useEffect, useState } from "react";
import classes from "../../Styles/MatchThreeGame.module.css";
import { useNavigate } from "react-router-dom";
import DwarfWomen from "../../assets/MatchThreeGameImages/DwarfWomen.png";
import DwarfWomenLose from "../../assets/MatchThreeGameImages/DwarfWomenLose.png";
import ImageBoxOfStrawberries from "../../assets/MatchThreeGameImages/BoxOfStrawberries.png";
import ImageBoxOfPear from "../../assets/MatchThreeGameImages/BoxOfPear.png";
import ImageBoxOfPlum from "../../assets/MatchThreeGameImages/BoxOfPlum.png";
import ImageBoxOfCurrant from "../../assets/MatchThreeGameImages/BoxOfCurrant.png";
import ImageBoxOfSeaBuckthorn from "../../assets/MatchThreeGameImages/BoxOfSeaBuckthorn.png";
import ImageBoxOfGooseberry from "../../assets/MatchThreeGameImages/BoxOfGooseberry.png";
import ArrowShuffle from "../../assets/MatchThreeGameImages/Arrow.png";

export const GameThree4lvl = () => {
    const [endTime, setEndTime] = useState(null);   
    const [timeLeft, setTimeLeft] = useState("10:00");
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

    const tenMinutesLater: any = Date.now() + 10.01 * 60 * 1000;
    setEndTime(tenMinutesLater);

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
        };

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

    function handleRestart() {
        navigate(0);
    };

    function handleHomePageTranzition() {
        navigate("/");
    };

    function handleOpenWinModalRecipe() {
        setStates((prev: any) => ({...prev, showWinModalRecipe: true}));
    };

    function handleCloseWinModalRecipe() {
        setStates((prev: any) => ({...prev, showWinModalRecipe: false}));
    };

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

    const toClear = new Set<string>();

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

    // 4. Если есть что очищать – обновляем состояние и считаем фрукты
    if (toClear.size > 0) {
        // Подсчитываем, какие фрукты и сколько удаляем
        const counts = {
        numberOfStrawberries: 0,
        numberOfPear: 0,
        numberOfPlum: 0,
        numberOfCurrant: 0,
        numberOfSeaBuckthorn: 0,
        numberOfGooseberry: 0,
        };

        // Проходим по всем ключам в toClear и определяем имя фрукта из текущего состояния cells
        for (const key of toClear) {
        const fruitName = cells[key]?.name;
        switch (fruitName) {
            case states.cellsStrawberriesName:
            counts.numberOfStrawberries++;
            break;
            case states.cellsPearName:
            counts.numberOfPear++;
            break;
            case states.cellsPlumName:
            counts.numberOfPlum++;
            break;
            case states.cellsCurrantName:
            counts.numberOfCurrant++;
            break;
            case states.cellsSeaBuckthornName:
            counts.numberOfSeaBuckthorn++;
            break;
            case states.cellsGooseberryName:
            counts.numberOfGooseberry++;
            break;
            default:
            break;
        }
        }

        // Обновляем счётчик фруктов (прибавляем к текущим значениям)
        setFruit(prev => ({
        numberOfStrawberries: prev.numberOfStrawberries + counts.numberOfStrawberries,
        numberOfPear: prev.numberOfPear + counts.numberOfPear,
        numberOfPlum: prev.numberOfPlum + counts.numberOfPlum,
        numberOfCurrant: prev.numberOfCurrant + counts.numberOfCurrant,
        numberOfSeaBuckthorn: prev.numberOfSeaBuckthorn + counts.numberOfSeaBuckthorn,
        numberOfGooseberry: prev.numberOfGooseberry + counts.numberOfGooseberry,
        }));

        // Очищаем клетки (устанавливаем name: "", empty: true)
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
    }, [cells]); // Зависимость – меняется при любом обновлении клеток

    //Гравитация

    const getRandomFruitName = () => {
        const fruitNames = Object.entries(states)
            .filter(([key]) => key.endsWith('Name')) // только ключи с "...Name"
            .map(([, value]) => value);              // берём только значения
        const randomIndex = Math.floor(Math.random() * fruitNames.length);
        return fruitNames[randomIndex];
    };

    //V1
    useEffect(() => {
        setTimeout(() => {
            if (states.stateStart && cells.A1V1H1.empty && cells.A7V1H2.empty && cells.A13V1H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A1V1H1.empty && cells.A7V1H2.empty && cells.A13V1H3.empty && cells.A19V1H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A19V1H4: {
                    ...prev.A19V1H4,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A1V1H1.empty && cells.A7V1H2.empty && cells.A13V1H3.empty && cells.A19V1H4.empty && cells.A25V1H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A19V1H4: {
                    ...prev.A19V1H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A25V1H5: {
                    ...prev.A25V1H5,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A7V1H2.empty && cells.A13V1H3.empty && cells.A19V1H4.empty && cells.A25V1H5.empty && cells.A31V1H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A19V1H4: {
                    ...prev.A19V1H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A25V1H5: {
                    ...prev.A25V1H5,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A31V1H6: {
                    ...prev.A31V1H6,
                    name: cells.A1V1H1.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A7V1H2.empty && cells.A13V1H3.empty && cells.A19V1H4.empty && cells.A25V1H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A19V1H4: {
                    ...prev.A19V1H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A25V1H5: {
                    ...prev.A25V1H5,
                    name: cells.A1V1H1.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A7V1H2.empty && cells.A13V1H3.empty && cells.A19V1H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A19V1H4: {
                    ...prev.A19V1H4,
                    name: cells.A1V1H1.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A13V1H3.empty && cells.A19V1H4.empty && cells.A25V1H5.empty && cells.A31V1H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A19V1H4: {
                    ...prev.A19V1H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A25V1H5: {
                    ...prev.A25V1H5,
                    name: cells.A1V1H1.name,
                    empty: false,    
            },
                A31V1H6: {
                    ...prev.A31V1H6,
                    name: cells.A7V1H2.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A13V1H3.empty && cells.A19V1H4.empty && cells.A25V1H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A19V1H4: {
                    ...prev.A19V1H4,
                    name: cells.A1V1H1.name,
                    empty: false,    
            },
                A25V1H5: {
                    ...prev.A25V1H5,
                    name: cells.A7V1H2.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A19V1H4.empty && cells.A25V1H5.empty && cells.A31V1H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                
                A19V1H4: {
                    ...prev.A19V1H4,
                    name: cells.A1V1H1.name,
                    empty: false,    
            },
                A25V1H5: {
                    ...prev.A25V1H5,
                    name: cells.A7V1H2.name,
                    empty: false,    
            },
                A31V1H6: {
                    ...prev.A31V1H6,
                    name: cells.A13V1H3.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A1V1H1.empty) {
            setCells((prev: any) => ({
                ...prev,
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A7V1H2.empty) {
            setCells((prev: any) => ({
                ...prev,
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: cells.A1V1H1.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A13V1H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: cells.A7V1H2.name,
                    empty: false,    
            },
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: cells.A1V1H1.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A19V1H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A19V1H4: {
                    ...prev.A19V1H4,
                    name: cells.A13V1H3.name,
                    empty: false,    
            },
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: cells.A7V1H2.name,
                    empty: false,    
            },
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: cells.A1V1H1.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A25V1H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A25V1H5: {
                    ...prev.A25V1H5,
                    name: cells.A19V1H4.name,
                    empty: false,    
            },
                A19V1H4: {
                    ...prev.A19V1H4,
                    name: cells.A13V1H3.name,
                    empty: false,    
            },
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: cells.A7V1H2.name,
                    empty: false,    
            },
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: cells.A1V1H1.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A31V1H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A31V1H6: {
                    ...prev.A31V1H6,
                    name: cells.A25V1H5.name,
                    empty: false,    
            },
                A25V1H5: {
                    ...prev.A25V1H5,
                    name: cells.A19V1H4.name,
                    empty: false,    
            },
                A19V1H4: {
                    ...prev.A19V1H4,
                    name: cells.A13V1H3.name,
                    empty: false,    
            },
                A13V1H3: {
                    ...prev.A13V1H3,
                    name: cells.A7V1H2.name,
                    empty: false,    
            },
                A7V1H2: {
                    ...prev.A7V1H2,
                    name: cells.A1V1H1.name,
                    empty: false,    
            },
                A1V1H1: {
                    ...prev.A1V1H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        }, 1000);
    }, [cells]);

    //V2
    useEffect(() => {
        setTimeout(() => {
                    if (states.stateStart && cells.A2V2H1.empty && cells.A8V2H2.empty && cells.A14V2H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A2V2H1.empty && cells.A8V2H2.empty && cells.A14V2H3.empty && cells.A20V2H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A20V2H4: {
                    ...prev.A20V2H4,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A2V2H1.empty && cells.A8V2H2.empty && cells.A14V2H3.empty && cells.A20V2H4.empty && cells.A26V2H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A20V2H4: {
                    ...prev.A20V2H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A26V2H5: {
                    ...prev.A26V2H5,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A8V2H2.empty && cells.A14V2H3.empty && cells.A20V2H4.empty && cells.A26V2H5.empty && cells.A32V2H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A20V2H4: {
                    ...prev.A20V2H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A26V2H5: {
                    ...prev.A26V2H5,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A32V2H6: {
                    ...prev.A32V2H6,
                    name: cells.A2V2H1.name,
                    empty: false,    
            },
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A8V2H2.empty && cells.A14V2H3.empty && cells.A20V2H4.empty && cells.A26V2H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A20V2H4: {
                    ...prev.A20V2H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A26V2H5: {
                    ...prev.A26V2H5,
                    name: cells.A2V2H1.name,
                    empty: false,    
            },
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A8V2H2.empty && cells.A14V2H3.empty && cells.A20V2H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A20V2H4: {
                    ...prev.A20V2H4,
                    name: cells.A2V2H1.name,
                    empty: false,    
            },
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A14V2H3.empty && cells.A20V2H4.empty && cells.A26V2H5.empty && cells.A32V2H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A20V2H4: {
                    ...prev.A20V2H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A26V2H5: {
                    ...prev.A26V2H5,
                    name: cells.A2V2H1.name,
                    empty: false,    
            },
                A32V2H6: {
                    ...prev.A32V2H6,
                    name: cells.A8V2H2.name,
                    empty: false,    
            },
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A14V2H3.empty && cells.A20V2H4.empty && cells.A26V2H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A20V2H4: {
                    ...prev.A20V2H4,
                    name: cells.A2V2H1.name,
                    empty: false,    
            },
                A26V2H5: {
                    ...prev.A26V2H5,
                    name: cells.A8V2H2.name,
                    empty: false,    
            },
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A20V2H4.empty && cells.A26V2H5.empty && cells.A32V2H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                
                A20V2H4: {
                    ...prev.A20V2H4,
                    name: cells.A2V2H1.name,
                    empty: false,    
            },
                A26V2H5: {
                    ...prev.A26V2H5,
                    name: cells.A8V2H2.name,
                    empty: false,    
            },
                A32V2H6: {
                    ...prev.A32V2H6,
                    name: cells.A14V2H3.name,
                    empty: false,    
            },
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A2V2H1.empty) {
            setCells((prev: any) => ({
                ...prev,
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A8V2H2.empty) {
            setCells((prev: any) => ({
                ...prev,
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: cells.A2V2H1.name,
                    empty: false,    
            },
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A14V2H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: cells.A8V2H2.name,
                    empty: false,    
            },
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: cells.A2V2H1.name,
                    empty: false,    
            },
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A20V2H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A20V2H4: {
                    ...prev.A20V2H4,
                    name: cells.A14V2H3.name,
                    empty: false,    
            },
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: cells.A8V2H2.name,
                    empty: false,    
            },
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: cells.A2V2H1.name,
                    empty: false,    
            },
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A26V2H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A26V2H5: {
                    ...prev.A26V2H5,
                    name: cells.A20V2H4.name,
                    empty: false,    
            },
                A20V2H4: {
                    ...prev.A20V2H4,
                    name: cells.A14V2H3.name,
                    empty: false,    
            },
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: cells.A8V2H2.name,
                    empty: false,    
            },
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: cells.A2V2H1.name,
                    empty: false,    
            },
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A32V2H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A32V2H6: {
                    ...prev.A32V2H6,
                    name: cells.A26V2H5.name,
                    empty: false,    
            },
                A26V2H5: {
                    ...prev.A26V2H5,
                    name: cells.A20V2H4.name,
                    empty: false,    
            },
                A20V2H4: {
                    ...prev.A20V2H4,
                    name: cells.A14V2H3.name,
                    empty: false,    
            },
                A14V2H3: {
                    ...prev.A14V2H3,
                    name: cells.A8V2H2.name,
                    empty: false,    
            },
                A8V2H2: {
                    ...prev.A8V2H2,
                    name: cells.A2V2H1.name,
                    empty: false,    
            },
                A2V2H1: {
                    ...prev.A2V2H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        }, 1000);
    }, [cells]);

    //V3
    useEffect(() => {
        setTimeout(() => {
            if (states.stateStart && cells.A3V3H1.empty && cells.A9V3H2.empty && cells.A15V3H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A3V3H1.empty && cells.A9V3H2.empty && cells.A15V3H3.empty && cells.A21V3H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A21V3H4: {
                    ...prev.A21V3H4,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A3V3H1.empty && cells.A9V3H2.empty && cells.A15V3H3.empty && cells.A21V3H4.empty && cells.A27V3H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A21V3H4: {
                    ...prev.A21V3H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A27V3H5: {
                    ...prev.A27V3H5,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A9V3H2.empty && cells.A15V3H3.empty && cells.A21V3H4.empty && cells.A27V3H5.empty && cells.A33V3H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A21V3H4: {
                    ...prev.A21V3H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A27V3H5: {
                    ...prev.A27V3H5,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A33V3H6: {
                    ...prev.A33V3H6,
                    name: cells.A3V3H1.name,
                    empty: false,    
            },
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A9V3H2.empty && cells.A15V3H3.empty && cells.A21V3H4.empty && cells.A27V3H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A21V3H4: {
                    ...prev.A21V3H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A27V3H5: {
                    ...prev.A27V3H5,
                    name: cells.A3V3H1.name,
                    empty: false,    
            },
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A9V3H2.empty && cells.A15V3H3.empty && cells.A21V3H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A21V3H4: {
                    ...prev.A21V3H4,
                    name: cells.A3V3H1.name,
                    empty: false,    
            },
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A15V3H3.empty && cells.A21V3H4.empty && cells.A27V3H5.empty && cells.A33V3H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A21V3H4: {
                    ...prev.A21V3H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A27V3H5: {
                    ...prev.A27V3H5,
                    name: cells.A3V3H1.name,
                    empty: false,    
            },
                A33V3H6: {
                    ...prev.A33V3H6,
                    name: cells.A9V3H2.name,
                    empty: false,    
            },
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A15V3H3.empty && cells.A21V3H4.empty && cells.A27V3H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A21V3H4: {
                    ...prev.A21V3H4,
                    name: cells.A3V3H1.name,
                    empty: false,    
            },
                A27V3H5: {
                    ...prev.A27V3H5,
                    name: cells.A9V3H2.name,
                    empty: false,    
            },
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A21V3H4.empty && cells.A27V3H5.empty && cells.A33V3H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                
                A21V3H4: {
                    ...prev.A21V3H4,
                    name: cells.A3V3H1.name,
                    empty: false,    
            },
                A27V3H5: {
                    ...prev.A27V3H5,
                    name: cells.A9V3H2.name,
                    empty: false,    
            },
                A33V3H6: {
                    ...prev.A33V3H6,
                    name: cells.A15V3H3.name,
                    empty: false,    
            },
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A3V3H1.empty) {
            setCells((prev: any) => ({
                ...prev,
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A9V3H2.empty) {
            setCells((prev: any) => ({
                ...prev,
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: cells.A3V3H1.name,
                    empty: false,    
            },
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A15V3H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: cells.A9V3H2.name,
                    empty: false,    
            },
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: cells.A3V3H1.name,
                    empty: false,    
            },
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A21V3H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A21V3H4: {
                    ...prev.A21V3H4,
                    name: cells.A15V3H3.name,
                    empty: false,    
            },
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: cells.A9V3H2.name,
                    empty: false,    
            },
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: cells.A3V3H1.name,
                    empty: false,    
            },
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A27V3H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A27V3H5: {
                    ...prev.A27V3H5,
                    name: cells.A21V3H4.name,
                    empty: false,    
            },
                A21V3H4: {
                    ...prev.A21V3H4,
                    name: cells.A15V3H3.name,
                    empty: false,    
            },
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: cells.A9V3H2.name,
                    empty: false,    
            },
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: cells.A3V3H1.name,
                    empty: false,    
            },
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A33V3H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A33V3H6: {
                    ...prev.A33V3H6,
                    name: cells.A27V3H5.name,
                    empty: false,    
            },
                A27V3H5: {
                    ...prev.A27V3H5,
                    name: cells.A21V3H4.name,
                    empty: false,    
            },
                A21V3H4: {
                    ...prev.A21V3H4,
                    name: cells.A15V3H3.name,
                    empty: false,    
            },
                A15V3H3: {
                    ...prev.A15V3H3,
                    name: cells.A9V3H2.name,
                    empty: false,    
            },
                A9V3H2: {
                    ...prev.A9V3H2,
                    name: cells.A3V3H1.name,
                    empty: false,    
            },
                A3V3H1: {
                    ...prev.A3V3H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        } 
        }, 1000);
    }, [cells]);

    //V4
    useEffect(() => {
        setTimeout(() => {
            if (states.stateStart && cells.A4V4H1.empty && cells.A10V4H2.empty && cells.A16V4H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A4V4H1.empty && cells.A10V4H2.empty && cells.A16V4H3.empty && cells.A22V4H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A22V4H4: {
                    ...prev.A22V4H4,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A4V4H1.empty && cells.A10V4H2.empty && cells.A16V4H3.empty && cells.A22V4H4.empty && cells.A28V4H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A22V4H4: {
                    ...prev.A22V4H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A28V4H5: {
                    ...prev.A28V4H5,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A10V4H2.empty && cells.A16V4H3.empty && cells.A22V4H4.empty && cells.A28V4H5.empty && cells.A34V4H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A22V4H4: {
                    ...prev.A22V4H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A28V4H5: {
                    ...prev.A28V4H5,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A34V4H6: {
                    ...prev.A34V4H6,
                    name: cells.A4V4H1.name,
                    empty: false,    
            },
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A10V4H2.empty && cells.A16V4H3.empty && cells.A22V4H4.empty && cells.A28V4H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A22V4H4: {
                    ...prev.A22V4H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A28V4H5: {
                    ...prev.A28V4H5,
                    name: cells.A4V4H1.name,
                    empty: false,    
            },
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A10V4H2.empty && cells.A16V4H3.empty && cells.A22V4H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A22V4H4: {
                    ...prev.A22V4H4,
                    name: cells.A4V4H1.name,
                    empty: false,    
            },
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A16V4H3.empty && cells.A22V4H4.empty && cells.A28V4H5.empty && cells.A34V4H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A22V4H4: {
                    ...prev.A22V4H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A28V4H5: {
                    ...prev.A28V4H5,
                    name: cells.A4V4H1.name,
                    empty: false,    
            },
                A34V4H6: {
                    ...prev.A34V4H6,
                    name: cells.A10V4H2.name,
                    empty: false,    
            },
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A16V4H3.empty && cells.A22V4H4.empty && cells.A28V4H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A22V4H4: {
                    ...prev.A22V4H4,
                    name: cells.A4V4H1.name,
                    empty: false,    
            },
                A28V4H5: {
                    ...prev.A28V4H5,
                    name: cells.A10V4H2.name,
                    empty: false,    
            },
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A22V4H4.empty && cells.A28V4H5.empty && cells.A34V4H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                
                A22V4H4: {
                    ...prev.A22V4H4,
                    name: cells.A4V4H1.name,
                    empty: false,    
            },
                A28V4H5: {
                    ...prev.A28V4H5,
                    name: cells.A10V4H2.name,
                    empty: false,    
            },
                A34V4H6: {
                    ...prev.A34V4H6,
                    name: cells.A16V4H3.name,
                    empty: false,    
            },
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A4V4H1.empty) {
            setCells((prev: any) => ({
                ...prev,
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A10V4H2.empty) {
            setCells((prev: any) => ({
                ...prev,
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: cells.A4V4H1.name,
                    empty: false,    
            },
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A16V4H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: cells.A10V4H2.name,
                    empty: false,    
            },
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: cells.A4V4H1.name,
                    empty: false,    
            },
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A22V4H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A22V4H4: {
                    ...prev.A22V4H4,
                    name: cells.A16V4H3.name,
                    empty: false,    
            },
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: cells.A10V4H2.name,
                    empty: false,    
            },
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: cells.A4V4H1.name,
                    empty: false,    
            },
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A28V4H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A28V4H5: {
                    ...prev.A28V4H5,
                    name: cells.A22V4H4.name,
                    empty: false,    
            },
                A22V4H4: {
                    ...prev.A22V4H4,
                    name: cells.A16V4H3.name,
                    empty: false,    
            },
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: cells.A10V4H2.name,
                    empty: false,    
            },
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: cells.A4V4H1.name,
                    empty: false,    
            },
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A34V4H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A34V4H6: {
                    ...prev.A34V4H6,
                    name: cells.A28V4H5.name,
                    empty: false,    
            },
                A28V4H5: {
                    ...prev.A28V4H5,
                    name: cells.A22V4H4.name,
                    empty: false,    
            },
                A22V4H4: {
                    ...prev.A22V4H4,
                    name: cells.A16V4H3.name,
                    empty: false,    
            },
                A16V4H3: {
                    ...prev.A16V4H3,
                    name: cells.A10V4H2.name,
                    empty: false,    
            },
                A10V4H2: {
                    ...prev.A10V4H2,
                    name: cells.A4V4H1.name,
                    empty: false,    
            },
                A4V4H1: {
                    ...prev.A4V4H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        }, 1000);
    }, [cells]);

    //V5
    useEffect(() => {
        setTimeout(() => {
            if (states.stateStart && cells.A5V5H1.empty && cells.A11V5H2.empty && cells.A17V5H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A5V5H1.empty && cells.A11V5H2.empty && cells.A17V5H3.empty && cells.A23V5H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A23V5H4: {
                    ...prev.A23V5H4,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A5V5H1.empty && cells.A11V5H2.empty && cells.A17V5H3.empty && cells.A23V5H4.empty && cells.A29V5H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A23V5H4: {
                    ...prev.A23V5H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A29V5H5: {
                    ...prev.A29V5H5,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A11V5H2.empty && cells.A17V5H3.empty && cells.A23V5H4.empty && cells.A29V5H5.empty && cells.A35V5H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A23V5H4: {
                    ...prev.A23V5H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A29V5H5: {
                    ...prev.A29V5H5,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A35V5H6: {
                    ...prev.A35V5H6,
                    name: cells.A5V5H1.name,
                    empty: false,    
            },
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A11V5H2.empty && cells.A17V5H3.empty && cells.A23V5H4.empty && cells.A29V5H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A23V5H4: {
                    ...prev.A23V5H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A29V5H5: {
                    ...prev.A29V5H5,
                    name: cells.A5V5H1.name,
                    empty: false,    
            },
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A11V5H2.empty && cells.A17V5H3.empty && cells.A23V5H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A23V5H4: {
                    ...prev.A23V5H4,
                    name: cells.A5V5H1.name,
                    empty: false,    
            },
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A17V5H3.empty && cells.A23V5H4.empty && cells.A29V5H5.empty && cells.A35V5H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A23V5H4: {
                    ...prev.A23V5H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A29V5H5: {
                    ...prev.A29V5H5,
                    name: cells.A5V5H1.name,
                    empty: false,    
            },
                A35V5H6: {
                    ...prev.A35V5H6,
                    name: cells.A11V5H2.name,
                    empty: false,    
            },
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A17V5H3.empty && cells.A23V5H4.empty && cells.A29V5H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A23V5H4: {
                    ...prev.A23V5H4,
                    name: cells.A5V5H1.name,
                    empty: false,    
            },
                A29V5H5: {
                    ...prev.A29V5H5,
                    name: cells.A11V5H2.name,
                    empty: false,    
            },
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A23V5H4.empty && cells.A29V5H5.empty && cells.A35V5H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                
                A23V5H4: {
                    ...prev.A23V5H4,
                    name: cells.A5V5H1.name,
                    empty: false,    
            },
                A29V5H5: {
                    ...prev.A29V5H5,
                    name: cells.A11V5H2.name,
                    empty: false,    
            },
                A35V5H6: {
                    ...prev.A35V5H6,
                    name: cells.A17V5H3.name,
                    empty: false,    
            },
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A5V5H1.empty) {
            setCells((prev: any) => ({
                ...prev,
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A11V5H2.empty) {
            setCells((prev: any) => ({
                ...prev,
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: cells.A5V5H1.name,
                    empty: false,    
            },
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A17V5H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: cells.A11V5H2.name,
                    empty: false,    
            },
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: cells.A5V5H1.name,
                    empty: false,    
            },
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A23V5H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A23V5H4: {
                    ...prev.A23V5H4,
                    name: cells.A17V5H3.name,
                    empty: false,    
            },
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: cells.A11V5H2.name,
                    empty: false,    
            },
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: cells.A5V5H1.name,
                    empty: false,    
            },
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A29V5H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A29V5H5: {
                    ...prev.A29V5H5,
                    name: cells.A23V5H4.name,
                    empty: false,    
            },
                A23V5H4: {
                    ...prev.A23V5H4,
                    name: cells.A17V5H3.name,
                    empty: false,    
            },
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: cells.A11V5H2.name,
                    empty: false,    
            },
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: cells.A5V5H1.name,
                    empty: false,    
            },
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A35V5H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A35V5H6: {
                    ...prev.A35V5H6,
                    name: cells.A29V5H5.name,
                    empty: false,    
            },
                A29V5H5: {
                    ...prev.A29V5H5,
                    name: cells.A23V5H4.name,
                    empty: false,    
            },
                A23V5H4: {
                    ...prev.A23V5H4,
                    name: cells.A17V5H3.name,
                    empty: false,    
            },
                A17V5H3: {
                    ...prev.A17V5H3,
                    name: cells.A11V5H2.name,
                    empty: false,    
            },
                A11V5H2: {
                    ...prev.A11V5H2,
                    name: cells.A5V5H1.name,
                    empty: false,    
            },
                A5V5H1: {
                    ...prev.A5V5H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        }, 1000);
    }, [cells]);

    //V6
    useEffect(() => {
        setTimeout(() => {
            if (states.stateStart && cells.A6V6H1.empty && cells.A12V6H2.empty && cells.A18V6H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A6V6H1.empty && cells.A12V6H2.empty && cells.A18V6H3.empty && cells.A24V6H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A24V6H4: {
                    ...prev.A24V6H4,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A6V6H1.empty && cells.A12V6H2.empty && cells.A18V6H3.empty && cells.A24V6H4.empty && cells.A30V6H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A24V6H4: {
                    ...prev.A24V6H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A30V6H5: {
                    ...prev.A30V6H5,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A12V6H2.empty && cells.A18V6H3.empty && cells.A24V6H4.empty && cells.A30V6H5.empty && cells.A36V6H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A24V6H4: {
                    ...prev.A24V6H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A30V6H5: {
                    ...prev.A30V6H5,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A36V6H6: {
                    ...prev.A36V6H6,
                    name: cells.A6V6H1.name,
                    empty: false,    
            },
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A12V6H2.empty && cells.A18V6H3.empty && cells.A24V6H4.empty && cells.A30V6H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A24V6H4: {
                    ...prev.A24V6H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A30V6H5: {
                    ...prev.A30V6H5,
                    name: cells.A6V6H1.name,
                    empty: false,    
            },
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A12V6H2.empty && cells.A18V6H3.empty && cells.A24V6H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A24V6H4: {
                    ...prev.A24V6H4,
                    name: cells.A6V6H1.name,
                    empty: false,    
            },
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A18V6H3.empty && cells.A24V6H4.empty && cells.A30V6H5.empty && cells.A36V6H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A24V6H4: {
                    ...prev.A24V6H4,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A30V6H5: {
                    ...prev.A30V6H5,
                    name: cells.A6V6H1.name,
                    empty: false,    
            },
                A36V6H6: {
                    ...prev.A36V6H6,
                    name: cells.A12V6H2.name,
                    empty: false,    
            },
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A18V6H3.empty && cells.A24V6H4.empty && cells.A30V6H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A24V6H4: {
                    ...prev.A24V6H4,
                    name: cells.A6V6H1.name,
                    empty: false,    
            },
                A30V6H5: {
                    ...prev.A30V6H5,
                    name: cells.A12V6H2.name,
                    empty: false,    
            },
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A24V6H4.empty && cells.A30V6H5.empty && cells.A36V6H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                
                A24V6H4: {
                    ...prev.A24V6H4,
                    name: cells.A6V6H1.name,
                    empty: false,    
            },
                A30V6H5: {
                    ...prev.A30V6H5,
                    name: cells.A12V6H2.name,
                    empty: false,    
            },
                A36V6H6: {
                    ...prev.A36V6H6,
                    name: cells.A18V6H3.name,
                    empty: false,    
            },
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: getRandomFruitName(),
                    empty: false,    
            },
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A6V6H1.empty) {
            setCells((prev: any) => ({
                ...prev,
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A12V6H2.empty) {
            setCells((prev: any) => ({
                ...prev,
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: cells.A6V6H1.name,
                    empty: false,    
            },
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            },
            }));
        }
        else if (states.stateStart && cells.A18V6H3.empty) {
            setCells((prev: any) => ({
                ...prev,
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: cells.A12V6H2.name,
                    empty: false,    
            },
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: cells.A6V6H1.name,
                    empty: false,    
            },
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A24V6H4.empty) {
            setCells((prev: any) => ({
                ...prev,
                A24V6H4: {
                    ...prev.A24V6H4,
                    name: cells.A18V6H3.name,
                    empty: false,    
            },
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: cells.A12V6H2.name,
                    empty: false,    
            },
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: cells.A6V6H1.name,
                    empty: false,    
            },
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A30V6H5.empty) {
            setCells((prev: any) => ({
                ...prev,
                A30V6H5: {
                    ...prev.A30V6H5,
                    name: cells.A24V6H4.name,
                    empty: false,    
            },
                A24V6H4: {
                    ...prev.A24V6H4,
                    name: cells.A18V6H3.name,
                    empty: false,    
            },
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: cells.A12V6H2.name,
                    empty: false,    
            },
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: cells.A6V6H1.name,
                    empty: false,    
            },
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        }
        else if (states.stateStart && cells.A36V6H6.empty) {
            setCells((prev: any) => ({
                ...prev,
                A36V6H6: {
                    ...prev.A36V6H6,
                    name: cells.A30V6H5.name,
                    empty: false,    
            },
                A30V6H5: {
                    ...prev.A30V6H5,
                    name: cells.A24V6H4.name,
                    empty: false,    
            },
                A24V6H4: {
                    ...prev.A24V6H4,
                    name: cells.A18V6H3.name,
                    empty: false,    
            },
                A18V6H3: {
                    ...prev.A18V6H3,
                    name: cells.A12V6H2.name,
                    empty: false,    
            },
                A12V6H2: {
                    ...prev.A12V6H2,
                    name: cells.A6V6H1.name,
                    empty: false,    
            },
                A6V6H1: {
                    ...prev.A6V6H1,
                    name: getRandomFruitName(),
                    empty: false,    
            }
            }));
        } 
        }, 1000);
    }, [cells]);

    function handleWin() {
        setFruit((prev: any) => ({...prev, numberOfStrawberries: 50, numberOfPear: 50, numberOfPlum: 50, numberOfCurrant: 50, numberOfSeaBuckthorn: 50, numberOfGooseberry: 50}))
    };

    useEffect(() => {
        if (fruit.numberOfCurrant >= 50 && fruit.numberOfGooseberry >= 50 && fruit.numberOfPear >= 50
            && fruit.numberOfPlum >= 50 && fruit.numberOfSeaBuckthorn >= 50 && fruit.numberOfStrawberries >= 50) {
            setStates((prev: any) => ({...prev, showButtonsWhenWinning: true, plateEndingWin: true}));
        }
    }, [fruit]);
 
    return (
        <>
            <div className={classes.gamePage}>
                <button onClick={handleWin}>WIN</button>
                { states.showShuffleButton && states.stateStart && <div className={classes.shuffleButton}>
                    <button onClick={handleShuffle}></button>
                    <p>Перемешать</p>
                    <img src={ArrowShuffle} alt="ArrowShuffle" draggable={false}/>
                </div> }
                <div className={classes.pointers}>
                    <div className={classes.pointerBoxOfStrawberries}>
                        <p>Земляника: {fruit.numberOfStrawberries}</p>
                        <img src={ImageBoxOfStrawberries} alt="ImageBoxOfStrawberries" draggable={false}/> 
                        <progress className={classes.scales} max="50" value={fruit.numberOfStrawberries}></progress>
                    </div>

                    <div className={classes.pointerBoxOfPear}>
                        <p>Груша: {fruit.numberOfPear}</p>
                        <img src={ImageBoxOfPear} alt="ImageBoxOfPear" draggable={false}/> 
                        <progress className={classes.scales} max="50" value={fruit.numberOfPear}></progress>
                    </div>

                    <div className={classes.pointerBoxOfPlum}>
                        <p>Слива: {fruit.numberOfPlum}</p> 
                        <img src={ImageBoxOfPlum} alt="ImageBoxOfPlum" draggable={false}/> 
                        <progress className={classes.scales} max="50" value={fruit.numberOfPlum}></progress>
                    </div>

                    <div className={classes.pointerBoxOfCurrant}>
                        <p>Смородина: {fruit.numberOfCurrant}</p> 
                        <img src={ImageBoxOfCurrant} alt="ImageBoxOfCurrant" draggable={false}/> 
                        <progress className={classes.scales} max="50" value={fruit.numberOfCurrant}></progress>
                    </div>

                    <div className={classes.pointerBoxOfSeaBuckthorn}>
                        <p>Облепиха: {fruit.numberOfSeaBuckthorn}</p>
                        <img src={ImageBoxOfSeaBuckthorn} alt="ImageBoxOfSeaBuckthorn" draggable={false}/> 
                        <progress className={classes.scales} max="50" value={fruit.numberOfSeaBuckthorn}></progress>
                    </div>

                    <div className={classes.pointerBoxOfGooseberry}>
                        <p>Крыжовник: {fruit.numberOfGooseberry}</p> 
                        <img src={ImageBoxOfGooseberry} alt="ImageBoxOfGooseberry" draggable={false}/> 
                        <progress className={classes.scales} max="50" value={fruit.numberOfGooseberry}></progress>
                    </div>
                </div>
                
                <div className={classes.timer}>
                    <p>
                        Возвращение наставника:
                    </p>
                    {timeLeft}
                </div>

                { states.showWinModalRecipe && <div className={classes.recipeModal}>
        
                    <img src={ImageBoxOfStrawberries} alt="ImageBoxOfStrawberries" draggable={false}/>
    
                    <h1>Чернолесский плов</h1>
    
                    <div>
    
                        <ol>
    
                            <li>Полба — 300 г</li>
                            <li>Квашеная капуста с морковью — 400 г</li>
                            <li>1 рубленая курица без грудки</li> 
                            <li>Шампиньоны свежие — 200 г</li>
                            <li>Лук — 1 большая луковица</li>   
                            <li>Масло сливочное — кусочек для обжарки</li>
                            <li>Чеснок — 3 зубчика</li>
                            <li>Барбарис сушёный — две столовые ложки</li>
                            <li>Имбирь молотый — полчайной ложки</li>
                            <li>Зира — полчайной ложки</li>
                            <li>Два лавровых листочка</li>
                            <li>Чёрный молотый перец — щепоть</li>
                            <li>Соль — по вкусу</li>
    
                            
                        </ol>
    
                        <span>
                            Разделите курицу (без грудки) на части: окорочка и крылья разрежьте по суставам, остальное порубите на средние куски. 
                            В разогретом казане растопите сливочное масло и обжарьте мясо с добавлением чеснока до золотистой корочки.
                            Залейте курицу водой и тушите 5 минут. Затем всыпьте полбу и добавьте воды так, чтобы её уровень был на два пальца выше крупы. 
                            Накройте крышкой и томите на слабом огне. Через 5 минут перемешайте, добавьте барбарис, имбирь, зиру, лавровый лист, перец и соль по вкусу. 
                            Снова накройте и оставьте ещё на 10 минут.
                            Параллельно обжарьте на сковороде нарезанные лук с шампиньонами на сливочном масле до легкого румянца. 
                            Добавьте зажарку и квашеную капусту в казан к полбе, перемешайте (если нужно, подлейте немного воды) и отправьте в духовку на полчаса при 150 градусах.
                            Готовый казан достаньте из духовки и, не открывая крышки, укутайте в теплое одеяло на 30 минут — так блюдо окончательно «дойдёт» и станет максимально ароматным.
                        </span>
                        
                    </div>
                        <p className={classes.buttonCloseRecipe} onClick={handleCloseWinModalRecipe}>Закрыть</p>
                </div>}

                { states.showButtonsWhenWinning && <div className={classes.winAndLoseModal}>  
                    <div className={classes.infoOverlay}>
                        <p className={classes.info}>Вот это сноровка! Вот тебе секретный рецепт наставника в награду.</p>
                    </div>
                    <img className={classes.imageInfoEnding} src={DwarfWomen} alt="DwarfWomen" draggable={false}/> 
                    <p className={classes.buttonRecipe} onClick={handleOpenWinModalRecipe}>Секретный рецепт</p>
                    <p className={classes.buttonRestart} onClick={handleRestart}>Ещё раз</p>
                    <p className={classes.buttonNextAndHome} onClick={handleHomePageTranzition}>На главную</p>
                </div>}

                <p className={classes.levelPointer}>Уровень 4</p>

                { states.showLoseModal && <div className={classes.winAndLoseModal}>
                    <div className={classes.infoOverlay}>
                        <p className={classes.info}>(Шаги у дверей) О нет! Это наставник. Ну и влетит же мне.</p>
                    </div>
                    <img className={classes.imageInfoEnding} src={DwarfWomenLose} alt="DwarfWomenLose" draggable={false}/> 
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

                        { states.plate && <div className={states.stateStart ? classes.leftPlateEnd : !states.stateStart ? classes.leftPlateStart : classes.plate}></div>}

                        { states.plateEnding && <div className={states.showLoseModal ? classes.rightPlateStart : classes.plate}></div>}

                        { states.plateEndingWin && <div className={states.showButtonsWhenWinning ? classes.rightPlateStart : classes.plate}></div>}

                    <div className={classes.fields}>
                            {/* HORIZONT 1 */}
                            <div className={classes.fieldH1}>
    
                                {cells.A1V1H1.showCell && <div className={classes.cellsLeftSide}>
                                    <button
                                        className={
                                            cells.A1V1H1.name === "Strawberries" && cells.A1V1H1.choice === false ? classes.strawberriesCells :
                                            cells.A1V1H1.name === "Pear" && cells.A1V1H1.choice === false ? classes.pearCells :
                                            cells.A1V1H1.name === "Plum" && cells.A1V1H1.choice === false ? classes.plumCells :
                                            cells.A1V1H1.name === "Currant" && cells.A1V1H1.choice === false ? classes.currantCells :
                                            cells.A1V1H1.name === "SeaBuckthorn" && cells.A1V1H1.choice === false ? classes.seaBuckthornCells :
                                            cells.A1V1H1.name === "Gooseberry" && cells.A1V1H1.choice === false ? classes.gooseberryCells :
                                            cells.A1V1H1.name === "Strawberries" && cells.A1V1H1.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A1V1H1.name === "Pear" && cells.A1V1H1.choice === true ? classes.pearCellsChoice :
                                            cells.A1V1H1.name === "Plum" && cells.A1V1H1.choice === true ? classes.plumCellsChoice :
                                            cells.A1V1H1.name === "Currant" && cells.A1V1H1.choice === true ? classes.currantCellsChoice :
                                            cells.A1V1H1.name === "SeaBuckthorn" && cells.A1V1H1.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A1V1H1.name === "Gooseberry" && cells.A1V1H1.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A1V1H1.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A2V2H1.name === "Strawberries" && cells.A2V2H1.choice === false ? classes.strawberriesCells :
                                            cells.A2V2H1.name === "Pear" && cells.A2V2H1.choice === false ? classes.pearCells :
                                            cells.A2V2H1.name === "Plum" && cells.A2V2H1.choice === false ? classes.plumCells :
                                            cells.A2V2H1.name === "Currant" && cells.A2V2H1.choice === false ? classes.currantCells :
                                            cells.A2V2H1.name === "SeaBuckthorn" && cells.A2V2H1.choice === false ? classes.seaBuckthornCells :
                                            cells.A2V2H1.name === "Gooseberry" && cells.A2V2H1.choice === false ? classes.gooseberryCells :
                                            cells.A2V2H1.name === "Strawberries" && cells.A2V2H1.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A2V2H1.name === "Pear" && cells.A2V2H1.choice === true ? classes.pearCellsChoice :
                                            cells.A2V2H1.name === "Plum" && cells.A2V2H1.choice === true ? classes.plumCellsChoice :
                                            cells.A2V2H1.name === "Currant" && cells.A2V2H1.choice === true ? classes.currantCellsChoice :
                                            cells.A2V2H1.name === "SeaBuckthorn" && cells.A2V2H1.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A2V2H1.name === "Gooseberry" && cells.A2V2H1.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A2V2H1.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A3V3H1.name === "Strawberries" && cells.A3V3H1.choice === false ? classes.strawberriesCells :
                                            cells.A3V3H1.name === "Pear" && cells.A3V3H1.choice === false ? classes.pearCells :
                                            cells.A3V3H1.name === "Plum" && cells.A3V3H1.choice === false ? classes.plumCells :
                                            cells.A3V3H1.name === "Currant" && cells.A3V3H1.choice === false ? classes.currantCells :
                                            cells.A3V3H1.name === "SeaBuckthorn" && cells.A3V3H1.choice === false ? classes.seaBuckthornCells :
                                            cells.A3V3H1.name === "Gooseberry" && cells.A3V3H1.choice === false ? classes.gooseberryCells :
                                            cells.A3V3H1.name === "Strawberries" && cells.A3V3H1.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A3V3H1.name === "Pear" && cells.A3V3H1.choice === true ? classes.pearCellsChoice :
                                            cells.A3V3H1.name === "Plum" && cells.A3V3H1.choice === true ? classes.plumCellsChoice :
                                            cells.A3V3H1.name === "Currant" && cells.A3V3H1.choice === true ? classes.currantCellsChoice :
                                            cells.A3V3H1.name === "SeaBuckthorn" && cells.A3V3H1.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A3V3H1.name === "Gooseberry" && cells.A3V3H1.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A3V3H1.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A4V4H1.name === "Strawberries" && cells.A4V4H1.choice === false ? classes.strawberriesCells :
                                            cells.A4V4H1.name === "Pear" && cells.A4V4H1.choice === false ? classes.pearCells :
                                            cells.A4V4H1.name === "Plum" && cells.A4V4H1.choice === false ? classes.plumCells :
                                            cells.A4V4H1.name === "Currant" && cells.A4V4H1.choice === false ? classes.currantCells :
                                            cells.A4V4H1.name === "SeaBuckthorn" && cells.A4V4H1.choice === false ? classes.seaBuckthornCells :
                                            cells.A4V4H1.name === "Gooseberry" && cells.A4V4H1.choice === false ? classes.gooseberryCells :
                                            cells.A4V4H1.name === "Strawberries" && cells.A4V4H1.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A4V4H1.name === "Pear" && cells.A4V4H1.choice === true ? classes.pearCellsChoice :
                                            cells.A4V4H1.name === "Plum" && cells.A4V4H1.choice === true ? classes.plumCellsChoice :
                                            cells.A4V4H1.name === "Currant" && cells.A4V4H1.choice === true ? classes.currantCellsChoice :
                                            cells.A4V4H1.name === "SeaBuckthorn" && cells.A4V4H1.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A4V4H1.name === "Gooseberry" && cells.A4V4H1.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A4V4H1.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A5V5H1.name === "Strawberries" && cells.A5V5H1.choice === false ? classes.strawberriesCells :
                                            cells.A5V5H1.name === "Pear" && cells.A5V5H1.choice === false ? classes.pearCells :
                                            cells.A5V5H1.name === "Plum" && cells.A5V5H1.choice === false ? classes.plumCells :
                                            cells.A5V5H1.name === "Currant" && cells.A5V5H1.choice === false ? classes.currantCells :
                                            cells.A5V5H1.name === "SeaBuckthorn" && cells.A5V5H1.choice === false ? classes.seaBuckthornCells :
                                            cells.A5V5H1.name === "Gooseberry" && cells.A5V5H1.choice === false ? classes.gooseberryCells :
                                            cells.A5V5H1.name === "Strawberries" && cells.A5V5H1.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A5V5H1.name === "Pear" && cells.A5V5H1.choice === true ? classes.pearCellsChoice :
                                            cells.A5V5H1.name === "Plum" && cells.A5V5H1.choice === true ? classes.plumCellsChoice :
                                            cells.A5V5H1.name === "Currant" && cells.A5V5H1.choice === true ? classes.currantCellsChoice :
                                            cells.A5V5H1.name === "SeaBuckthorn" && cells.A5V5H1.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A5V5H1.name === "Gooseberry" && cells.A5V5H1.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A5V5H1.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A6V6H1.name === "Strawberries" && cells.A6V6H1.choice === false ? classes.strawberriesCells :
                                            cells.A6V6H1.name === "Pear" && cells.A6V6H1.choice === false ? classes.pearCells :
                                            cells.A6V6H1.name === "Plum" && cells.A6V6H1.choice === false ? classes.plumCells :
                                            cells.A6V6H1.name === "Currant" && cells.A6V6H1.choice === false ? classes.currantCells :
                                            cells.A6V6H1.name === "SeaBuckthorn" && cells.A6V6H1.choice === false ? classes.seaBuckthornCells :
                                            cells.A6V6H1.name === "Gooseberry" && cells.A6V6H1.choice === false ? classes.gooseberryCells :
                                            cells.A6V6H1.name === "Strawberries" && cells.A6V6H1.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A6V6H1.name === "Pear" && cells.A6V6H1.choice === true ? classes.pearCellsChoice :
                                            cells.A6V6H1.name === "Plum" && cells.A6V6H1.choice === true ? classes.plumCellsChoice :
                                            cells.A6V6H1.name === "Currant" && cells.A6V6H1.choice === true ? classes.currantCellsChoice :
                                            cells.A6V6H1.name === "SeaBuckthorn" && cells.A6V6H1.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A6V6H1.name === "Gooseberry" && cells.A6V6H1.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A6V6H1.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A7V1H2.name === "Strawberries" && cells.A7V1H2.choice === false ? classes.strawberriesCells :
                                            cells.A7V1H2.name === "Pear" && cells.A7V1H2.choice === false ? classes.pearCells :
                                            cells.A7V1H2.name === "Plum" && cells.A7V1H2.choice === false ? classes.plumCells :
                                            cells.A7V1H2.name === "Currant" && cells.A7V1H2.choice === false ? classes.currantCells :
                                            cells.A7V1H2.name === "SeaBuckthorn" && cells.A7V1H2.choice === false ? classes.seaBuckthornCells :
                                            cells.A7V1H2.name === "Gooseberry" && cells.A7V1H2.choice === false ? classes.gooseberryCells :
                                            cells.A7V1H2.name === "Strawberries" && cells.A7V1H2.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A7V1H2.name === "Pear" && cells.A7V1H2.choice === true ? classes.pearCellsChoice :
                                            cells.A7V1H2.name === "Plum" && cells.A7V1H2.choice === true ? classes.plumCellsChoice :
                                            cells.A7V1H2.name === "Currant" && cells.A7V1H2.choice === true ? classes.currantCellsChoice :
                                            cells.A7V1H2.name === "SeaBuckthorn" && cells.A7V1H2.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A7V1H2.name === "Gooseberry" && cells.A7V1H2.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A7V1H2.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A8V2H2.name === "Strawberries" && cells.A8V2H2.choice === false ? classes.strawberriesCells :
                                            cells.A8V2H2.name === "Pear" && cells.A8V2H2.choice === false ? classes.pearCells :
                                            cells.A8V2H2.name === "Plum" && cells.A8V2H2.choice === false ? classes.plumCells :
                                            cells.A8V2H2.name === "Currant" && cells.A8V2H2.choice === false ? classes.currantCells :
                                            cells.A8V2H2.name === "SeaBuckthorn" && cells.A8V2H2.choice === false ? classes.seaBuckthornCells :
                                            cells.A8V2H2.name === "Gooseberry" && cells.A8V2H2.choice === false ? classes.gooseberryCells :
                                            cells.A8V2H2.name === "Strawberries" && cells.A8V2H2.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A8V2H2.name === "Pear" && cells.A8V2H2.choice === true ? classes.pearCellsChoice :
                                            cells.A8V2H2.name === "Plum" && cells.A8V2H2.choice === true ? classes.plumCellsChoice :
                                            cells.A8V2H2.name === "Currant" && cells.A8V2H2.choice === true ? classes.currantCellsChoice :
                                            cells.A8V2H2.name === "SeaBuckthorn" && cells.A8V2H2.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A8V2H2.name === "Gooseberry" && cells.A8V2H2.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A8V2H2.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A9V3H2.name === "Strawberries" && cells.A9V3H2.choice === false ? classes.strawberriesCells :
                                            cells.A9V3H2.name === "Pear" && cells.A9V3H2.choice === false ? classes.pearCells :
                                            cells.A9V3H2.name === "Plum" && cells.A9V3H2.choice === false ? classes.plumCells :
                                            cells.A9V3H2.name === "Currant" && cells.A9V3H2.choice === false ? classes.currantCells :
                                            cells.A9V3H2.name === "SeaBuckthorn" && cells.A9V3H2.choice === false ? classes.seaBuckthornCells :
                                            cells.A9V3H2.name === "Gooseberry" && cells.A9V3H2.choice === false ? classes.gooseberryCells :
                                            cells.A9V3H2.name === "Strawberries" && cells.A9V3H2.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A9V3H2.name === "Pear" && cells.A9V3H2.choice === true ? classes.pearCellsChoice :
                                            cells.A9V3H2.name === "Plum" && cells.A9V3H2.choice === true ? classes.plumCellsChoice :
                                            cells.A9V3H2.name === "Currant" && cells.A9V3H2.choice === true ? classes.currantCellsChoice :
                                            cells.A9V3H2.name === "SeaBuckthorn" && cells.A9V3H2.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A9V3H2.name === "Gooseberry" && cells.A9V3H2.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A9V3H2.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A10V4H2.name === "Strawberries" && cells.A10V4H2.choice === false ? classes.strawberriesCells :
                                            cells.A10V4H2.name === "Pear" && cells.A10V4H2.choice === false ? classes.pearCells :
                                            cells.A10V4H2.name === "Plum" && cells.A10V4H2.choice === false ? classes.plumCells :
                                            cells.A10V4H2.name === "Currant" && cells.A10V4H2.choice === false ? classes.currantCells :
                                            cells.A10V4H2.name === "SeaBuckthorn" && cells.A10V4H2.choice === false ? classes.seaBuckthornCells :
                                            cells.A10V4H2.name === "Gooseberry" && cells.A10V4H2.choice === false ? classes.gooseberryCells :
                                            cells.A10V4H2.name === "Strawberries" && cells.A10V4H2.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A10V4H2.name === "Pear" && cells.A10V4H2.choice === true ? classes.pearCellsChoice :
                                            cells.A10V4H2.name === "Plum" && cells.A10V4H2.choice === true ? classes.plumCellsChoice :
                                            cells.A10V4H2.name === "Currant" && cells.A10V4H2.choice === true ? classes.currantCellsChoice :
                                            cells.A10V4H2.name === "SeaBuckthorn" && cells.A10V4H2.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A10V4H2.name === "Gooseberry" && cells.A10V4H2.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A10V4H2.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A11V5H2.name === "Strawberries" && cells.A11V5H2.choice === false ? classes.strawberriesCells :
                                            cells.A11V5H2.name === "Pear" && cells.A11V5H2.choice === false ? classes.pearCells :
                                            cells.A11V5H2.name === "Plum" && cells.A11V5H2.choice === false ? classes.plumCells :
                                            cells.A11V5H2.name === "Currant" && cells.A11V5H2.choice === false ? classes.currantCells :
                                            cells.A11V5H2.name === "SeaBuckthorn" && cells.A11V5H2.choice === false ? classes.seaBuckthornCells :
                                            cells.A11V5H2.name === "Gooseberry" && cells.A11V5H2.choice === false ? classes.gooseberryCells :
                                            cells.A11V5H2.name === "Strawberries" && cells.A11V5H2.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A11V5H2.name === "Pear" && cells.A11V5H2.choice === true ? classes.pearCellsChoice :
                                            cells.A11V5H2.name === "Plum" && cells.A11V5H2.choice === true ? classes.plumCellsChoice :
                                            cells.A11V5H2.name === "Currant" && cells.A11V5H2.choice === true ? classes.currantCellsChoice :
                                            cells.A11V5H2.name === "SeaBuckthorn" && cells.A11V5H2.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A11V5H2.name === "Gooseberry" && cells.A11V5H2.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A11V5H2.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A12V6H2.name === "Strawberries" && cells.A12V6H2.choice === false ? classes.strawberriesCells :
                                            cells.A12V6H2.name === "Pear" && cells.A12V6H2.choice === false ? classes.pearCells :
                                            cells.A12V6H2.name === "Plum" && cells.A12V6H2.choice === false ? classes.plumCells :
                                            cells.A12V6H2.name === "Currant" && cells.A12V6H2.choice === false ? classes.currantCells :
                                            cells.A12V6H2.name === "SeaBuckthorn" && cells.A12V6H2.choice === false ? classes.seaBuckthornCells :
                                            cells.A12V6H2.name === "Gooseberry" && cells.A12V6H2.choice === false ? classes.gooseberryCells :
                                            cells.A12V6H2.name === "Strawberries" && cells.A12V6H2.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A12V6H2.name === "Pear" && cells.A12V6H2.choice === true ? classes.pearCellsChoice :
                                            cells.A12V6H2.name === "Plum" && cells.A12V6H2.choice === true ? classes.plumCellsChoice :
                                            cells.A12V6H2.name === "Currant" && cells.A12V6H2.choice === true ? classes.currantCellsChoice :
                                            cells.A12V6H2.name === "SeaBuckthorn" && cells.A12V6H2.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A12V6H2.name === "Gooseberry" && cells.A12V6H2.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A12V6H2.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A13V1H3.name === "Strawberries" && cells.A13V1H3.choice === false ? classes.strawberriesCells :
                                            cells.A13V1H3.name === "Pear" && cells.A13V1H3.choice === false ? classes.pearCells :
                                            cells.A13V1H3.name === "Plum" && cells.A13V1H3.choice === false ? classes.plumCells :
                                            cells.A13V1H3.name === "Currant" && cells.A13V1H3.choice === false ? classes.currantCells :
                                            cells.A13V1H3.name === "SeaBuckthorn" && cells.A13V1H3.choice === false ? classes.seaBuckthornCells :
                                            cells.A13V1H3.name === "Gooseberry" && cells.A13V1H3.choice === false ? classes.gooseberryCells :
                                            cells.A13V1H3.name === "Strawberries" && cells.A13V1H3.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A13V1H3.name === "Pear" && cells.A13V1H3.choice === true ? classes.pearCellsChoice :
                                            cells.A13V1H3.name === "Plum" && cells.A13V1H3.choice === true ? classes.plumCellsChoice :
                                            cells.A13V1H3.name === "Currant" && cells.A13V1H3.choice === true ? classes.currantCellsChoice :
                                            cells.A13V1H3.name === "SeaBuckthorn" && cells.A13V1H3.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A13V1H3.name === "Gooseberry" && cells.A13V1H3.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A13V1H3.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A14V2H3.name === "Strawberries" && cells.A14V2H3.choice === false ? classes.strawberriesCells :
                                            cells.A14V2H3.name === "Pear" && cells.A14V2H3.choice === false ? classes.pearCells :
                                            cells.A14V2H3.name === "Plum" && cells.A14V2H3.choice === false ? classes.plumCells :
                                            cells.A14V2H3.name === "Currant" && cells.A14V2H3.choice === false ? classes.currantCells :
                                            cells.A14V2H3.name === "SeaBuckthorn" && cells.A14V2H3.choice === false ? classes.seaBuckthornCells :
                                            cells.A14V2H3.name === "Gooseberry" && cells.A14V2H3.choice === false ? classes.gooseberryCells :
                                            cells.A14V2H3.name === "Strawberries" && cells.A14V2H3.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A14V2H3.name === "Pear" && cells.A14V2H3.choice === true ? classes.pearCellsChoice :
                                            cells.A14V2H3.name === "Plum" && cells.A14V2H3.choice === true ? classes.plumCellsChoice :
                                            cells.A14V2H3.name === "Currant" && cells.A14V2H3.choice === true ? classes.currantCellsChoice :
                                            cells.A14V2H3.name === "SeaBuckthorn" && cells.A14V2H3.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A14V2H3.name === "Gooseberry" && cells.A14V2H3.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A14V2H3.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A15V3H3.name === "Strawberries" && cells.A15V3H3.choice === false ? classes.strawberriesCells :
                                            cells.A15V3H3.name === "Pear" && cells.A15V3H3.choice === false ? classes.pearCells :
                                            cells.A15V3H3.name === "Plum" && cells.A15V3H3.choice === false ? classes.plumCells :
                                            cells.A15V3H3.name === "Currant" && cells.A15V3H3.choice === false ? classes.currantCells :
                                            cells.A15V3H3.name === "SeaBuckthorn" && cells.A15V3H3.choice === false ? classes.seaBuckthornCells :
                                            cells.A15V3H3.name === "Gooseberry" && cells.A15V3H3.choice === false ? classes.gooseberryCells :
                                            cells.A15V3H3.name === "Strawberries" && cells.A15V3H3.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A15V3H3.name === "Pear" && cells.A15V3H3.choice === true ? classes.pearCellsChoice :
                                            cells.A15V3H3.name === "Plum" && cells.A15V3H3.choice === true ? classes.plumCellsChoice :
                                            cells.A15V3H3.name === "Currant" && cells.A15V3H3.choice === true ? classes.currantCellsChoice :
                                            cells.A15V3H3.name === "SeaBuckthorn" && cells.A15V3H3.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A15V3H3.name === "Gooseberry" && cells.A15V3H3.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A15V3H3.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A16V4H3.name === "Strawberries" && cells.A16V4H3.choice === false ? classes.strawberriesCells :
                                            cells.A16V4H3.name === "Pear" && cells.A16V4H3.choice === false ? classes.pearCells :
                                            cells.A16V4H3.name === "Plum" && cells.A16V4H3.choice === false ? classes.plumCells :
                                            cells.A16V4H3.name === "Currant" && cells.A16V4H3.choice === false ? classes.currantCells :
                                            cells.A16V4H3.name === "SeaBuckthorn" && cells.A16V4H3.choice === false ? classes.seaBuckthornCells :
                                            cells.A16V4H3.name === "Gooseberry" && cells.A16V4H3.choice === false ? classes.gooseberryCells :
                                            cells.A16V4H3.name === "Strawberries" && cells.A16V4H3.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A16V4H3.name === "Pear" && cells.A16V4H3.choice === true ? classes.pearCellsChoice :
                                            cells.A16V4H3.name === "Plum" && cells.A16V4H3.choice === true ? classes.plumCellsChoice :
                                            cells.A16V4H3.name === "Currant" && cells.A16V4H3.choice === true ? classes.currantCellsChoice :
                                            cells.A16V4H3.name === "SeaBuckthorn" && cells.A16V4H3.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A16V4H3.name === "Gooseberry" && cells.A16V4H3.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A16V4H3.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A17V5H3.name === "Strawberries" && cells.A17V5H3.choice === false ? classes.strawberriesCells :
                                            cells.A17V5H3.name === "Pear" && cells.A17V5H3.choice === false ? classes.pearCells :
                                            cells.A17V5H3.name === "Plum" && cells.A17V5H3.choice === false ? classes.plumCells :
                                            cells.A17V5H3.name === "Currant" && cells.A17V5H3.choice === false ? classes.currantCells :
                                            cells.A17V5H3.name === "SeaBuckthorn" && cells.A17V5H3.choice === false ? classes.seaBuckthornCells :
                                            cells.A17V5H3.name === "Gooseberry" && cells.A17V5H3.choice === false ? classes.gooseberryCells :
                                            cells.A17V5H3.name === "Strawberries" && cells.A17V5H3.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A17V5H3.name === "Pear" && cells.A17V5H3.choice === true ? classes.pearCellsChoice :
                                            cells.A17V5H3.name === "Plum" && cells.A17V5H3.choice === true ? classes.plumCellsChoice :
                                            cells.A17V5H3.name === "Currant" && cells.A17V5H3.choice === true ? classes.currantCellsChoice :
                                            cells.A17V5H3.name === "SeaBuckthorn" && cells.A17V5H3.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A17V5H3.name === "Gooseberry" && cells.A17V5H3.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A17V5H3.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A18V6H3.name === "Strawberries" && cells.A18V6H3.choice === false ? classes.strawberriesCells :
                                            cells.A18V6H3.name === "Pear" && cells.A18V6H3.choice === false ? classes.pearCells :
                                            cells.A18V6H3.name === "Plum" && cells.A18V6H3.choice === false ? classes.plumCells :
                                            cells.A18V6H3.name === "Currant" && cells.A18V6H3.choice === false ? classes.currantCells :
                                            cells.A18V6H3.name === "SeaBuckthorn" && cells.A18V6H3.choice === false ? classes.seaBuckthornCells :
                                            cells.A18V6H3.name === "Gooseberry" && cells.A18V6H3.choice === false ? classes.gooseberryCells :
                                            cells.A18V6H3.name === "Strawberries" && cells.A18V6H3.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A18V6H3.name === "Pear" && cells.A18V6H3.choice === true ? classes.pearCellsChoice :
                                            cells.A18V6H3.name === "Plum" && cells.A18V6H3.choice === true ? classes.plumCellsChoice :
                                            cells.A18V6H3.name === "Currant" && cells.A18V6H3.choice === true ? classes.currantCellsChoice :
                                            cells.A18V6H3.name === "SeaBuckthorn" && cells.A18V6H3.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A18V6H3.name === "Gooseberry" && cells.A18V6H3.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A18V6H3.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A19V1H4.name === "Strawberries" && cells.A19V1H4.choice === false ? classes.strawberriesCells :
                                            cells.A19V1H4.name === "Pear" && cells.A19V1H4.choice === false ? classes.pearCells :
                                            cells.A19V1H4.name === "Plum" && cells.A19V1H4.choice === false ? classes.plumCells :
                                            cells.A19V1H4.name === "Currant" && cells.A19V1H4.choice === false ? classes.currantCells :
                                            cells.A19V1H4.name === "SeaBuckthorn" && cells.A19V1H4.choice === false ? classes.seaBuckthornCells :
                                            cells.A19V1H4.name === "Gooseberry" && cells.A19V1H4.choice === false ? classes.gooseberryCells :
                                            cells.A19V1H4.name === "Strawberries" && cells.A19V1H4.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A19V1H4.name === "Pear" && cells.A19V1H4.choice === true ? classes.pearCellsChoice :
                                            cells.A19V1H4.name === "Plum" && cells.A19V1H4.choice === true ? classes.plumCellsChoice :
                                            cells.A19V1H4.name === "Currant" && cells.A19V1H4.choice === true ? classes.currantCellsChoice :
                                            cells.A19V1H4.name === "SeaBuckthorn" && cells.A19V1H4.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A19V1H4.name === "Gooseberry" && cells.A19V1H4.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A19V1H4.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A20V2H4.name === "Strawberries" && cells.A20V2H4.choice === false ? classes.strawberriesCells :
                                            cells.A20V2H4.name === "Pear" && cells.A20V2H4.choice === false ? classes.pearCells :
                                            cells.A20V2H4.name === "Plum" && cells.A20V2H4.choice === false ? classes.plumCells :
                                            cells.A20V2H4.name === "Currant" && cells.A20V2H4.choice === false ? classes.currantCells :
                                            cells.A20V2H4.name === "SeaBuckthorn" && cells.A20V2H4.choice === false ? classes.seaBuckthornCells :
                                            cells.A20V2H4.name === "Gooseberry" && cells.A20V2H4.choice === false ? classes.gooseberryCells :
                                            cells.A20V2H4.name === "Strawberries" && cells.A20V2H4.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A20V2H4.name === "Pear" && cells.A20V2H4.choice === true ? classes.pearCellsChoice :
                                            cells.A20V2H4.name === "Plum" && cells.A20V2H4.choice === true ? classes.plumCellsChoice :
                                            cells.A20V2H4.name === "Currant" && cells.A20V2H4.choice === true ? classes.currantCellsChoice :
                                            cells.A20V2H4.name === "SeaBuckthorn" && cells.A20V2H4.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A20V2H4.name === "Gooseberry" && cells.A20V2H4.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A20V2H4.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A21V3H4.name === "Strawberries" && cells.A21V3H4.choice === false ? classes.strawberriesCells :
                                            cells.A21V3H4.name === "Pear" && cells.A21V3H4.choice === false ? classes.pearCells :
                                            cells.A21V3H4.name === "Plum" && cells.A21V3H4.choice === false ? classes.plumCells :
                                            cells.A21V3H4.name === "Currant" && cells.A21V3H4.choice === false ? classes.currantCells :
                                            cells.A21V3H4.name === "SeaBuckthorn" && cells.A21V3H4.choice === false ? classes.seaBuckthornCells :
                                            cells.A21V3H4.name === "Gooseberry" && cells.A21V3H4.choice === false ? classes.gooseberryCells :
                                            cells.A21V3H4.name === "Strawberries" && cells.A21V3H4.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A21V3H4.name === "Pear" && cells.A21V3H4.choice === true ? classes.pearCellsChoice :
                                            cells.A21V3H4.name === "Plum" && cells.A21V3H4.choice === true ? classes.plumCellsChoice :
                                            cells.A21V3H4.name === "Currant" && cells.A21V3H4.choice === true ? classes.currantCellsChoice :
                                            cells.A21V3H4.name === "SeaBuckthorn" && cells.A21V3H4.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A21V3H4.name === "Gooseberry" && cells.A21V3H4.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A21V3H4.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A22V4H4.name === "Strawberries" && cells.A22V4H4.choice === false ? classes.strawberriesCells :
                                            cells.A22V4H4.name === "Pear" && cells.A22V4H4.choice === false ? classes.pearCells :
                                            cells.A22V4H4.name === "Plum" && cells.A22V4H4.choice === false ? classes.plumCells :
                                            cells.A22V4H4.name === "Currant" && cells.A22V4H4.choice === false ? classes.currantCells :
                                            cells.A22V4H4.name === "SeaBuckthorn" && cells.A22V4H4.choice === false ? classes.seaBuckthornCells :
                                            cells.A22V4H4.name === "Gooseberry" && cells.A22V4H4.choice === false ? classes.gooseberryCells :
                                            cells.A22V4H4.name === "Strawberries" && cells.A22V4H4.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A22V4H4.name === "Pear" && cells.A22V4H4.choice === true ? classes.pearCellsChoice :
                                            cells.A22V4H4.name === "Plum" && cells.A22V4H4.choice === true ? classes.plumCellsChoice :
                                            cells.A22V4H4.name === "Currant" && cells.A22V4H4.choice === true ? classes.currantCellsChoice :
                                            cells.A22V4H4.name === "SeaBuckthorn" && cells.A22V4H4.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A22V4H4.name === "Gooseberry" && cells.A22V4H4.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A22V4H4.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A23V5H4.name === "Strawberries" && cells.A23V5H4.choice === false ? classes.strawberriesCells :
                                            cells.A23V5H4.name === "Pear" && cells.A23V5H4.choice === false ? classes.pearCells :
                                            cells.A23V5H4.name === "Plum" && cells.A23V5H4.choice === false ? classes.plumCells :
                                            cells.A23V5H4.name === "Currant" && cells.A23V5H4.choice === false ? classes.currantCells :
                                            cells.A23V5H4.name === "SeaBuckthorn" && cells.A23V5H4.choice === false ? classes.seaBuckthornCells :
                                            cells.A23V5H4.name === "Gooseberry" && cells.A23V5H4.choice === false ? classes.gooseberryCells :
                                            cells.A23V5H4.name === "Strawberries" && cells.A23V5H4.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A23V5H4.name === "Pear" && cells.A23V5H4.choice === true ? classes.pearCellsChoice :
                                            cells.A23V5H4.name === "Plum" && cells.A23V5H4.choice === true ? classes.plumCellsChoice :
                                            cells.A23V5H4.name === "Currant" && cells.A23V5H4.choice === true ? classes.currantCellsChoice :
                                            cells.A23V5H4.name === "SeaBuckthorn" && cells.A23V5H4.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A23V5H4.name === "Gooseberry" && cells.A23V5H4.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A23V5H4.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A24V6H4.name === "Strawberries" && cells.A24V6H4.choice === false ? classes.strawberriesCells :
                                            cells.A24V6H4.name === "Pear" && cells.A24V6H4.choice === false ? classes.pearCells :
                                            cells.A24V6H4.name === "Plum" && cells.A24V6H4.choice === false ? classes.plumCells :
                                            cells.A24V6H4.name === "Currant" && cells.A24V6H4.choice === false ? classes.currantCells :
                                            cells.A24V6H4.name === "SeaBuckthorn" && cells.A24V6H4.choice === false ? classes.seaBuckthornCells :
                                            cells.A24V6H4.name === "Gooseberry" && cells.A24V6H4.choice === false ? classes.gooseberryCells :
                                            cells.A24V6H4.name === "Strawberries" && cells.A24V6H4.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A24V6H4.name === "Pear" && cells.A24V6H4.choice === true ? classes.pearCellsChoice :
                                            cells.A24V6H4.name === "Plum" && cells.A24V6H4.choice === true ? classes.plumCellsChoice :
                                            cells.A24V6H4.name === "Currant" && cells.A24V6H4.choice === true ? classes.currantCellsChoice :
                                            cells.A24V6H4.name === "SeaBuckthorn" && cells.A24V6H4.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A24V6H4.name === "Gooseberry" && cells.A24V6H4.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A24V6H4.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A25V1H5.name === "Strawberries" && cells.A25V1H5.choice === false ? classes.strawberriesCells :
                                            cells.A25V1H5.name === "Pear" && cells.A25V1H5.choice === false ? classes.pearCells :
                                            cells.A25V1H5.name === "Plum" && cells.A25V1H5.choice === false ? classes.plumCells :
                                            cells.A25V1H5.name === "Currant" && cells.A25V1H5.choice === false ? classes.currantCells :
                                            cells.A25V1H5.name === "SeaBuckthorn" && cells.A25V1H5.choice === false ? classes.seaBuckthornCells :
                                            cells.A25V1H5.name === "Gooseberry" && cells.A25V1H5.choice === false ? classes.gooseberryCells :
                                            cells.A25V1H5.name === "Strawberries" && cells.A25V1H5.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A25V1H5.name === "Pear" && cells.A25V1H5.choice === true ? classes.pearCellsChoice :
                                            cells.A25V1H5.name === "Plum" && cells.A25V1H5.choice === true ? classes.plumCellsChoice :
                                            cells.A25V1H5.name === "Currant" && cells.A25V1H5.choice === true ? classes.currantCellsChoice :
                                            cells.A25V1H5.name === "SeaBuckthorn" && cells.A25V1H5.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A25V1H5.name === "Gooseberry" && cells.A25V1H5.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A25V1H5.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A26V2H5.name === "Strawberries" && cells.A26V2H5.choice === false ? classes.strawberriesCells :
                                            cells.A26V2H5.name === "Pear" && cells.A26V2H5.choice === false ? classes.pearCells :
                                            cells.A26V2H5.name === "Plum" && cells.A26V2H5.choice === false ? classes.plumCells :
                                            cells.A26V2H5.name === "Currant" && cells.A26V2H5.choice === false ? classes.currantCells :
                                            cells.A26V2H5.name === "SeaBuckthorn" && cells.A26V2H5.choice === false ? classes.seaBuckthornCells :
                                            cells.A26V2H5.name === "Gooseberry" && cells.A26V2H5.choice === false ? classes.gooseberryCells :
                                            cells.A26V2H5.name === "Strawberries" && cells.A26V2H5.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A26V2H5.name === "Pear" && cells.A26V2H5.choice === true ? classes.pearCellsChoice :
                                            cells.A26V2H5.name === "Plum" && cells.A26V2H5.choice === true ? classes.plumCellsChoice :
                                            cells.A26V2H5.name === "Currant" && cells.A26V2H5.choice === true ? classes.currantCellsChoice :
                                            cells.A26V2H5.name === "SeaBuckthorn" && cells.A26V2H5.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A26V2H5.name === "Gooseberry" && cells.A26V2H5.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A26V2H5.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A27V3H5.name === "Strawberries" && cells.A27V3H5.choice === false ? classes.strawberriesCells :
                                            cells.A27V3H5.name === "Pear" && cells.A27V3H5.choice === false ? classes.pearCells :
                                            cells.A27V3H5.name === "Plum" && cells.A27V3H5.choice === false ? classes.plumCells :
                                            cells.A27V3H5.name === "Currant" && cells.A27V3H5.choice === false ? classes.currantCells :
                                            cells.A27V3H5.name === "SeaBuckthorn" && cells.A27V3H5.choice === false ? classes.seaBuckthornCells :
                                            cells.A27V3H5.name === "Gooseberry" && cells.A27V3H5.choice === false ? classes.gooseberryCells :
                                            cells.A27V3H5.name === "Strawberries" && cells.A27V3H5.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A27V3H5.name === "Pear" && cells.A27V3H5.choice === true ? classes.pearCellsChoice :
                                            cells.A27V3H5.name === "Plum" && cells.A27V3H5.choice === true ? classes.plumCellsChoice :
                                            cells.A27V3H5.name === "Currant" && cells.A27V3H5.choice === true ? classes.currantCellsChoice :
                                            cells.A27V3H5.name === "SeaBuckthorn" && cells.A27V3H5.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A27V3H5.name === "Gooseberry" && cells.A27V3H5.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A27V3H5.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A28V4H5.name === "Strawberries" && cells.A28V4H5.choice === false ? classes.strawberriesCells :
                                            cells.A28V4H5.name === "Pear" && cells.A28V4H5.choice === false ? classes.pearCells :
                                            cells.A28V4H5.name === "Plum" && cells.A28V4H5.choice === false ? classes.plumCells :
                                            cells.A28V4H5.name === "Currant" && cells.A28V4H5.choice === false ? classes.currantCells :
                                            cells.A28V4H5.name === "SeaBuckthorn" && cells.A28V4H5.choice === false ? classes.seaBuckthornCells :
                                            cells.A28V4H5.name === "Gooseberry" && cells.A28V4H5.choice === false ? classes.gooseberryCells :
                                            cells.A28V4H5.name === "Strawberries" && cells.A28V4H5.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A28V4H5.name === "Pear" && cells.A28V4H5.choice === true ? classes.pearCellsChoice :
                                            cells.A28V4H5.name === "Plum" && cells.A28V4H5.choice === true ? classes.plumCellsChoice :
                                            cells.A28V4H5.name === "Currant" && cells.A28V4H5.choice === true ? classes.currantCellsChoice :
                                            cells.A28V4H5.name === "SeaBuckthorn" && cells.A28V4H5.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A28V4H5.name === "Gooseberry" && cells.A28V4H5.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A28V4H5.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A29V5H5.name === "Strawberries" && cells.A29V5H5.choice === false ? classes.strawberriesCells :
                                            cells.A29V5H5.name === "Pear" && cells.A29V5H5.choice === false ? classes.pearCells :
                                            cells.A29V5H5.name === "Plum" && cells.A29V5H5.choice === false ? classes.plumCells :
                                            cells.A29V5H5.name === "Currant" && cells.A29V5H5.choice === false ? classes.currantCells :
                                            cells.A29V5H5.name === "SeaBuckthorn" && cells.A29V5H5.choice === false ? classes.seaBuckthornCells :
                                            cells.A29V5H5.name === "Gooseberry" && cells.A29V5H5.choice === false ? classes.gooseberryCells :
                                            cells.A29V5H5.name === "Strawberries" && cells.A29V5H5.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A29V5H5.name === "Pear" && cells.A29V5H5.choice === true ? classes.pearCellsChoice :
                                            cells.A29V5H5.name === "Plum" && cells.A29V5H5.choice === true ? classes.plumCellsChoice :
                                            cells.A29V5H5.name === "Currant" && cells.A29V5H5.choice === true ? classes.currantCellsChoice :
                                            cells.A29V5H5.name === "SeaBuckthorn" && cells.A29V5H5.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A29V5H5.name === "Gooseberry" && cells.A29V5H5.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A29V5H5.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A30V6H5.name === "Strawberries" && cells.A30V6H5.choice === false ? classes.strawberriesCells :
                                            cells.A30V6H5.name === "Pear" && cells.A30V6H5.choice === false ? classes.pearCells :
                                            cells.A30V6H5.name === "Plum" && cells.A30V6H5.choice === false ? classes.plumCells :
                                            cells.A30V6H5.name === "Currant" && cells.A30V6H5.choice === false ? classes.currantCells :
                                            cells.A30V6H5.name === "SeaBuckthorn" && cells.A30V6H5.choice === false ? classes.seaBuckthornCells :
                                            cells.A30V6H5.name === "Gooseberry" && cells.A30V6H5.choice === false ? classes.gooseberryCells :
                                            cells.A30V6H5.name === "Strawberries" && cells.A30V6H5.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A30V6H5.name === "Pear" && cells.A30V6H5.choice === true ? classes.pearCellsChoice :
                                            cells.A30V6H5.name === "Plum" && cells.A30V6H5.choice === true ? classes.plumCellsChoice :
                                            cells.A30V6H5.name === "Currant" && cells.A30V6H5.choice === true ? classes.currantCellsChoice :
                                            cells.A30V6H5.name === "SeaBuckthorn" && cells.A30V6H5.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A30V6H5.name === "Gooseberry" && cells.A30V6H5.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A30V6H5.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A31V1H6.name === "Strawberries" && cells.A31V1H6.choice === false ? classes.strawberriesCells :
                                            cells.A31V1H6.name === "Pear" && cells.A31V1H6.choice === false ? classes.pearCells :
                                            cells.A31V1H6.name === "Plum" && cells.A31V1H6.choice === false ? classes.plumCells :
                                            cells.A31V1H6.name === "Currant" && cells.A31V1H6.choice === false ? classes.currantCells :
                                            cells.A31V1H6.name === "SeaBuckthorn" && cells.A31V1H6.choice === false ? classes.seaBuckthornCells :
                                            cells.A31V1H6.name === "Gooseberry" && cells.A31V1H6.choice === false ? classes.gooseberryCells :
                                            cells.A31V1H6.name === "Strawberries" && cells.A31V1H6.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A31V1H6.name === "Pear" && cells.A31V1H6.choice === true ? classes.pearCellsChoice :
                                            cells.A31V1H6.name === "Plum" && cells.A31V1H6.choice === true ? classes.plumCellsChoice :
                                            cells.A31V1H6.name === "Currant" && cells.A31V1H6.choice === true ? classes.currantCellsChoice :
                                            cells.A31V1H6.name === "SeaBuckthorn" && cells.A31V1H6.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A31V1H6.name === "Gooseberry" && cells.A31V1H6.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A31V1H6.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A32V2H6.name === "Strawberries" && cells.A32V2H6.choice === false ? classes.strawberriesCells :
                                            cells.A32V2H6.name === "Pear" && cells.A32V2H6.choice === false ? classes.pearCells :
                                            cells.A32V2H6.name === "Plum" && cells.A32V2H6.choice === false ? classes.plumCells :
                                            cells.A32V2H6.name === "Currant" && cells.A32V2H6.choice === false ? classes.currantCells :
                                            cells.A32V2H6.name === "SeaBuckthorn" && cells.A32V2H6.choice === false ? classes.seaBuckthornCells :
                                            cells.A32V2H6.name === "Gooseberry" && cells.A32V2H6.choice === false ? classes.gooseberryCells :
                                            cells.A32V2H6.name === "Strawberries" && cells.A32V2H6.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A32V2H6.name === "Pear" && cells.A32V2H6.choice === true ? classes.pearCellsChoice :
                                            cells.A32V2H6.name === "Plum" && cells.A32V2H6.choice === true ? classes.plumCellsChoice :
                                            cells.A32V2H6.name === "Currant" && cells.A32V2H6.choice === true ? classes.currantCellsChoice :
                                            cells.A32V2H6.name === "SeaBuckthorn" && cells.A32V2H6.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A32V2H6.name === "Gooseberry" && cells.A32V2H6.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A32V2H6.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A33V3H6.name === "Strawberries" && cells.A33V3H6.choice === false ? classes.strawberriesCells :
                                            cells.A33V3H6.name === "Pear" && cells.A33V3H6.choice === false ? classes.pearCells :
                                            cells.A33V3H6.name === "Plum" && cells.A33V3H6.choice === false ? classes.plumCells :
                                            cells.A33V3H6.name === "Currant" && cells.A33V3H6.choice === false ? classes.currantCells :
                                            cells.A33V3H6.name === "SeaBuckthorn" && cells.A33V3H6.choice === false ? classes.seaBuckthornCells :
                                            cells.A33V3H6.name === "Gooseberry" && cells.A33V3H6.choice === false ? classes.gooseberryCells :
                                            cells.A33V3H6.name === "Strawberries" && cells.A33V3H6.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A33V3H6.name === "Pear" && cells.A33V3H6.choice === true ? classes.pearCellsChoice :
                                            cells.A33V3H6.name === "Plum" && cells.A33V3H6.choice === true ? classes.plumCellsChoice :
                                            cells.A33V3H6.name === "Currant" && cells.A33V3H6.choice === true ? classes.currantCellsChoice :
                                            cells.A33V3H6.name === "SeaBuckthorn" && cells.A33V3H6.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A33V3H6.name === "Gooseberry" && cells.A33V3H6.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A33V3H6.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A34V4H6.name === "Strawberries" && cells.A34V4H6.choice === false ? classes.strawberriesCells :
                                            cells.A34V4H6.name === "Pear" && cells.A34V4H6.choice === false ? classes.pearCells :
                                            cells.A34V4H6.name === "Plum" && cells.A34V4H6.choice === false ? classes.plumCells :
                                            cells.A34V4H6.name === "Currant" && cells.A34V4H6.choice === false ? classes.currantCells :
                                            cells.A34V4H6.name === "SeaBuckthorn" && cells.A34V4H6.choice === false ? classes.seaBuckthornCells :
                                            cells.A34V4H6.name === "Gooseberry" && cells.A34V4H6.choice === false ? classes.gooseberryCells :
                                            cells.A34V4H6.name === "Strawberries" && cells.A34V4H6.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A34V4H6.name === "Pear" && cells.A34V4H6.choice === true ? classes.pearCellsChoice :
                                            cells.A34V4H6.name === "Plum" && cells.A34V4H6.choice === true ? classes.plumCellsChoice :
                                            cells.A34V4H6.name === "Currant" && cells.A34V4H6.choice === true ? classes.currantCellsChoice :
                                            cells.A34V4H6.name === "SeaBuckthorn" && cells.A34V4H6.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A34V4H6.name === "Gooseberry" && cells.A34V4H6.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A34V4H6.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A35V5H6.name === "Strawberries" && cells.A35V5H6.choice === false ? classes.strawberriesCells :
                                            cells.A35V5H6.name === "Pear" && cells.A35V5H6.choice === false ? classes.pearCells :
                                            cells.A35V5H6.name === "Plum" && cells.A35V5H6.choice === false ? classes.plumCells :
                                            cells.A35V5H6.name === "Currant" && cells.A35V5H6.choice === false ? classes.currantCells :
                                            cells.A35V5H6.name === "SeaBuckthorn" && cells.A35V5H6.choice === false ? classes.seaBuckthornCells :
                                            cells.A35V5H6.name === "Gooseberry" && cells.A35V5H6.choice === false ? classes.gooseberryCells :
                                            cells.A35V5H6.name === "Strawberries" && cells.A35V5H6.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A35V5H6.name === "Pear" && cells.A35V5H6.choice === true ? classes.pearCellsChoice :
                                            cells.A35V5H6.name === "Plum" && cells.A35V5H6.choice === true ? classes.plumCellsChoice :
                                            cells.A35V5H6.name === "Currant" && cells.A35V5H6.choice === true ? classes.currantCellsChoice :
                                            cells.A35V5H6.name === "SeaBuckthorn" && cells.A35V5H6.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A35V5H6.name === "Gooseberry" && cells.A35V5H6.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A35V5H6.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
                                        className={
                                            cells.A36V6H6.name === "Strawberries" && cells.A36V6H6.choice === false ? classes.strawberriesCells :
                                            cells.A36V6H6.name === "Pear" && cells.A36V6H6.choice === false ? classes.pearCells :
                                            cells.A36V6H6.name === "Plum" && cells.A36V6H6.choice === false ? classes.plumCells :
                                            cells.A36V6H6.name === "Currant" && cells.A36V6H6.choice === false ? classes.currantCells :
                                            cells.A36V6H6.name === "SeaBuckthorn" && cells.A36V6H6.choice === false ? classes.seaBuckthornCells :
                                            cells.A36V6H6.name === "Gooseberry" && cells.A36V6H6.choice === false ? classes.gooseberryCells :
                                            cells.A36V6H6.name === "Strawberries" && cells.A36V6H6.choice === true ? classes.strawberriesCellsChoice :
                                            cells.A36V6H6.name === "Pear" && cells.A36V6H6.choice === true ? classes.pearCellsChoice :
                                            cells.A36V6H6.name === "Plum" && cells.A36V6H6.choice === true ? classes.plumCellsChoice :
                                            cells.A36V6H6.name === "Currant" && cells.A36V6H6.choice === true ? classes.currantCellsChoice :
                                            cells.A36V6H6.name === "SeaBuckthorn" && cells.A36V6H6.choice === true ? classes.seaBuckthornCellsChoice :
                                            cells.A36V6H6.name === "Gooseberry" && cells.A36V6H6.choice === true ? classes.gooseberryCellsChoice :
                                            cells.A36V6H6.name === "" ? classes.cellMatching :
                                            classes.emptyCells
                                        }
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
