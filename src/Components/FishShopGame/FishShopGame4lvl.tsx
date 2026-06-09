import { useEffect, useState } from "react";
import classes from "../../Styles/FishShopGame.module.css";
import { useNavigate } from "react-router-dom";
import InmarWoman from "../../assets/FishShopGameImages/InmarWoman.png";
import InmarWomanLose from "../../assets/FishShopGameImages/InmarWomanLose.png";
// import ArrowShuffle from "../../assets/MatchThreeGameImages/Arrow.png";
import ImageCake from "../../assets/MatchThreeGameImages/ImageCake.jpg";

export const GameFishShop4lvl = () => {
    const [endTime, setEndTime] = useState(null);   
    const [timeLeft, setTimeLeft] = useState("10:00");
    const [fruit, setFruit] = useState({
        numberOfAnchovy: 0, 
        numberOfSeaSalad: 0, 
        numberOfShrimp: 0,  
        numberOfSeaScallop: 0, 
        numberOfRainbowWrasse: 0, 
        numberOfOctopus: 0,  
    }); 
    const [states, setStates] = useState({
        blockingDuringRecalculation: false,
        animationInProgress: false,
        counterCellsChoices: 0,
        cellsAnchovy: 0,
        cellsSeaSalad: 0,
        cellsShrimp: 0,
        cellsSeaScallop: 0,
        cellsRainbowWrasse: 0,
        cellsOctopus: 0,
        cellsAnchovyName: "Anchovy",
        cellsSeaSaladName: "SeaSalad",
        cellsShrimpName: "Shrimp",
        cellsSeaScallopName: "SeaScallop",
        cellsRainbowWrasseName: "RainbowWrasse",
        cellsOctopusName: "Octopus",
        stateStart: false,
        showButtonStart: true,
        showButtonsWhenWinning: false,
        showLoseModal: false,
        showModalInfo: true,
        showWinModalRecipe: false,
        showShuffleButton: false,
        screensaver: true,
        screensaverEnding: true,
        screensaverEndingWin: false,
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
        ...Array(6).fill(states.cellsAnchovyName),
        ...Array(6).fill(states.cellsSeaSaladName),
        ...Array(6).fill(states.cellsShrimpName),
        ...Array(6).fill(states.cellsSeaScallopName),
        ...Array(6).fill(states.cellsRainbowWrasseName),
        ...Array(6).fill(states.cellsOctopusName)
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
    setTimeout(() => setStates((prev:any) => ({...prev, screensaver: false})), 2000);
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

    // function handleShuffle() {
    //     setCells((prevCells: any) => {
    //         // 1. Извлекаем все имена из текущих клеток
    //         const allNames = Object.values(prevCells).map((cell: any) => cell.name);

    //         // 2. Перемешиваем массив имён (Fisher-Yates shuffle)
    //         for (let i = allNames.length - 1; i > 0; i--) {
    //             const j = Math.floor(Math.random() * (i + 1));
    //             [allNames[i], allNames[j]] = [allNames[j], allNames[i]];
    //         }

    //         // 3. Создаем новый объект состояния
    //         const newCells = { ...prevCells };
    //         const keys = Object.keys(newCells);

    //         // 4. Раскладываем перемешанные имена обратно по ключам
    //         keys.forEach((key, index) => {
    //             newCells[key] = {
    //                 ...newCells[key],
    //                 name: allNames[index],
    //                 choice: false, // На всякий случай сбрасываем выделение
    //                 empty: allNames[index] === "" // Если были пустые, помечаем их
    //             };
    //         });

    //         return newCells;
    //     });

    //     // Скрываем кнопку после перемешки
    //     setStates((prev: any) => ({ ...prev, showShuffleButton: false }));
    // };//Перемешивание клеток в случае если нет ни одного совпадения в поле.

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
                setStates(prev => ({ ...prev, showLoseModal: true, screensaverEnding: true })); 
                return;
            }
    
            // Форматируем остаток
            const mins = Math.floor(diff / 1000 / 60);
            const secs = Math.floor((diff / 1000) % 60);
            setTimeLeft(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
        }, 1000);
    
        return () => clearInterval(interval); // Чистим, если ушли со страницы
    }, [endTime, states.showButtonsWhenWinning]);

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
            numberOfAnchovy: 0,
            numberOfSeaSalad: 0,
            numberOfShrimp: 0,
            numberOfSeaScallop: 0,
            numberOfRainbowWrasse: 0,
            numberOfOctopus: 0,
        };
        for (const key of toClear) {
            const fruitName = cells[key]?.name;
            switch (fruitName) {
            case states.cellsAnchovyName: counts.numberOfAnchovy++; break;
            case states.cellsSeaSaladName: counts.numberOfSeaSalad++; break;
            case states.cellsShrimpName: counts.numberOfShrimp++; break;
            case states.cellsSeaScallopName: counts.numberOfSeaScallop++; break;
            case states.cellsRainbowWrasseName: counts.numberOfRainbowWrasse++; break;
            case states.cellsOctopusName: counts.numberOfOctopus++; break;
            }
        }
        setFruit(prev => ({
            numberOfAnchovy: prev.numberOfAnchovy + counts.numberOfAnchovy,
            numberOfSeaSalad: prev.numberOfSeaSalad + counts.numberOfSeaSalad,
            numberOfShrimp: prev.numberOfShrimp + counts.numberOfShrimp,
            numberOfSeaScallop: prev.numberOfSeaScallop + counts.numberOfSeaScallop,
            numberOfRainbowWrasse: prev.numberOfRainbowWrasse + counts.numberOfRainbowWrasse,
            numberOfOctopus: prev.numberOfOctopus + counts.numberOfOctopus,
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
                states.cellsAnchovyName,
                states.cellsSeaSaladName,
                states.cellsShrimpName,
                states.cellsSeaScallopName,
                states.cellsRainbowWrasseName,
                states.cellsOctopusName,
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

    function handleWin() {
        setFruit((prev: any) => ({...prev, numberOfAnchovy: 50, numberOfSeaSalad: 50, numberOfShrimp: 50, numberOfSeaScallop: 50, numberOfRainbowWrasse: 50, numberOfOctopus: 50}))
    };

    useEffect(() => {
        if (fruit.numberOfSeaScallop >= 50 && fruit.numberOfOctopus >= 50 && fruit.numberOfSeaSalad >= 50
            && fruit.numberOfShrimp >= 50 && fruit.numberOfRainbowWrasse >= 50 && fruit.numberOfAnchovy >= 50) {
            setStates((prev: any) => ({...prev, showButtonsWhenWinning: true, screensaverEndingWin: true}));
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
                case "Anchovy": return classes.anchovyCellsChoice;
                case "SeaSalad": return classes.seaSaladCellsChoice;
                case "Shrimp": return classes.shrimpCellsChoice;
                case "SeaScallop": return classes.seaScallopCellsChoice;
                case "RainbowWrasse": return classes.rainbowWrasseCellsChoice;
                case "Octopus": return classes.octopusCellsChoice;
            }
        } else {
            // Обычное состояние
            switch (cell.name) {
                case "Anchovy": return classes.anchovyCells;
                case "SeaSalad": return classes.seaSaladCells;
                case "Shrimp": return classes.shrimpCells;
                case "SeaScallop": return classes.seaScallopCells;
                case "RainbowWrasse": return classes.rainbowWrasseCells;
                case "Octopus": return classes.octopusCells;
            }
        }
        // fallback (не должно срабатывать)
        return classes.emptyCells;
    };
 
    return (
        <>
            <div className={classes.gamePage}>
                <button onClick={handleWin}>WIN</button>
                {/* { states.showShuffleButton && states.stateStart && <div className={classes.shuffleButton}>
                    <button onClick={handleShuffle}></button>
                    <p>Перемешать</p>
                    <img src={ArrowShuffle} alt="ArrowShuffle" draggable={false}/>
                </div> } */}
                
                <div className={classes.timer}>
                    <p>
                        До начала ярмарки:
                    </p>
                    {timeLeft}
                </div>

                { states.showWinModalRecipe && <div className={classes.recipeModal}>
        
                    <img src={ImageCake} alt="ImageCake" draggable={false}/>
    
                    <h1>Торт «Заначка гнома»</h1>
    
                    <div>
    
                        <ol>
    
                            <li>Сушки — 500 г</li>
                            <li>Масло сливочное — 250 г</li>
                            <li>Яйцо куриное — 1 шт.</li> 
                            <li>Сливки 20% — 50 мл</li>
                            <li>Мёд — 3 ст. л.</li>   
                            <li>Творожная масса — 500 г</li>
                            <li>Сахар демерара — 150г</li>
                            <li>Голубика — 100г</li>
                            <li>Клубника — 150г</li>
                            <li>Два банана</li>
                            <li>Какао-порошок — 20 г</li>
                            <li>Шоколад горький 99% — 1 плитка</li>
                            <li>Молоко — 100 мл</li>
                            
                        </ol>
    
                        <span>
                            Сушки хорошо размять или прокрутить в мясорубке. В получившуюся крошку влить 150 г растопленного сливочного масла, вбить яйцо, добавить сливки и мёд. Всё тщательно перемешать до однородности. 
                            Выложить массу в глубокую металлическую форму, застеленную пергаментом, и распределить пальцами или ложкой, формируя основу с бортиками (как корзинку). Поставить в разогретую духовку на 20 минут при температуре 150 °C.
                            Пока корж запекается, в творожную массу добавить 100 г мягкого сливочного масла, сахар и тщательно перемешать. 
                            Разделить массу на две равные порции, в одну из них добавить какао и еще раз перемешать.
                            Готовый корж достать из духовки и дать ему остыть, не вынимая из формы. Затем на дно коржа выложить нарезанные бананы и ягоды. 
                            Сверху распределить слой творога без какао, а следом — слой творожной массы с какао.
                            На водяной бане растопить шоколад в молоке до состояния однородной глазури, постоянно помешивая. 
                            Аккуратно покрыть торт глазурью. Убрать десерт в форме в холодильник на 1 час. 
                            После этого аккуратно извлечь из формы — и можно подавать к столу. 
                        </span>
                        
                    </div>
                        <p className={classes.buttonCloseRecipe} onClick={handleCloseWinModalRecipe}>Закрыть</p>
                </div>}

                { states.showButtonsWhenWinning && <div className={classes.winAndLoseModal}>  
                    <div className={classes.infoOverlay}>
                        <p className={classes.infoText}>Если бы не ты, я потеряла бы огромную прибыль. Вот любимый рецепт моего мужа.</p>
                    </div>
                    <img className={classes.imageInfoEnding} src={InmarWoman} alt="InmarWoman" draggable={false}/> 
                    <p className={classes.buttonRecipe} onClick={handleOpenWinModalRecipe}>Секретный рецепт</p>
                    <p className={classes.buttonRestart} onClick={handleRestart}>Ещё раз</p>
                    <p className={classes.buttonNextAndHome} onClick={handleHomePageTranzition}>На главную</p>
                </div>}

                { states.showLoseModal && <div className={classes.winAndLoseModal}>
                    <div className={classes.infoOverlay}>
                        <p className={classes.infoText}>(Звон колокола на площади) Эх, жалко мы не успели, ярмарка уже началась.</p>
                    </div>
                    <img className={classes.imageInfoEnding} src={InmarWomanLose} alt="InmarWomanLose" draggable={false}/> 
                    <h3>Вы не успели, попробуете ещё раз?</h3>
                    <p className={classes.buttonRestart} onClick={handleRestart}>Ещё раз</p>
                </div> }

                <div className={classes.gameField}>

                    <p className={classes.levelPointer}>Уровень 4</p>

                        <div className={classes.pointers}>

                            <div className={classes.pointerAnchovy}>
                            </div>

                            <div className={classes.pointerSeaSalad}>
                            </div>

                            <div className={classes.pointerShrimp}>
                            </div>

                            <div className={classes.pointerSeaScallop}>
                            </div>

                            <div className={classes.pointerRainbowWrasse}>
                            </div>

                            <div className={classes.pointerOctopus}>
                            </div>

                        </div>

                        { states.showButtonStart && <p className={classes.buttonStart} onClick={handleStartGame}>Старт</p>}

                        { states.showModalInfo && <div>
                            <div className={states.stateStart ? classes.infoOverlayOpacity : classes.infoOverlay}> 
                                <p className={classes.infoText}>Выручай! Скоро на площади начнётся ярмарка, а мне нечего выложить на прилавок.</p>
                            </div>
                                <img className={states.stateStart ? classes.imageInfoIntroOpacity : classes.imageInfoIntro} src={InmarWoman} alt="Merchant" draggable={false}/>
                        </div> }

                        { states.screensaver && <div className={states.stateStart ? classes.screensaverEnd : !states.stateStart ? classes.screensaverStart : classes.screensaver}></div>}

                        { states.screensaverEnding && <div className={states.showLoseModal ? classes.screensaverStart : classes.screensaver}></div>}

                        { states.screensaverEndingWin && <div className={states.showButtonsWhenWinning ? classes.screensaverStart : classes.screensaver}></div>}

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
