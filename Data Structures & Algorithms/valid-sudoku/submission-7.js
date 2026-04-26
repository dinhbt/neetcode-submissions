class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let valid = true;
        const mapRow = new Map();
        const mapCol = new Map();
        const mapSubBox = new Map();

        for (let i = 0; i < board.length; i++) {
            const row = board[i];

            if (i % 3 === 0) {
                mapSubBox.clear();
            }

            for (let j = 0; j < row.length; j++) {
                if  (row[j] !== '.') {
                    // 1. Each row must contain the digits 1-9 without duplicates.
                    const rowIndex = mapRow.get(i);
                    if (rowIndex) {
                        const valRow = rowIndex.get(row[j]);

                        if (valRow) {
                            valid = false;
                        } else {
                            rowIndex.set(row[j], row[j]);
                        }
                    } else {
                        const map = new Map()
                        mapRow.set(i, map.set(row[j], row[j]));
                    }

                    // 2. Each column must contain the digits 1-9 without duplicates.
                    const colIndex = mapCol.get(j);

                    if (colIndex) {
                        const valCol = colIndex.get(row[j]);

                        if (valCol) {
                            valid = false;
                        } else {
                            colIndex.set(row[j], row[j]);
                        }
                    } else {
                        const mapColIndex = new Map();
                        mapCol.set(j, mapColIndex.set(row[j], row[j]));
                    }

                    // 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
                    const subboxIndex = Math.floor(j / 3); // 0,1,2
                    const subboxValueIndex = mapSubBox.get(subboxIndex); // {0: Map()}

                    if (subboxValueIndex) {
                        if (subboxValueIndex.has(row[j])) {
                              console.log('a3',mapSubBox);
                            valid = false;
                        } else {
                            subboxValueIndex.set(row[j], row[j]);
                        }
                    } else {
                        const mapsub = new Map();
                        mapSubBox.set(subboxIndex, mapsub.set(row[j], row[j]));
                    }
                }
            }
        }

        return valid;
    }
}
