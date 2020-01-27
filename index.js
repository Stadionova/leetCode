var matrix = [
    ['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']
];

function findWord(matrix, word) {
    var string = '';
    var verticalString = '';
    for (var j = 0; j < matrix.length; j++) {
        for (var i = 0; i < matrix.length; i++) {
            verticalString += matrix[i][j];
            matrix[i].forEach(character => {
                string += character;
            });
            if (string == word || verticalString == word) {
                return true;
            }
            string = '';
        }
        verticalString = '';
    }
    if (string !== word) {
        return false;
    }
}

findWord(matrix, 'FACI');
findWord(matrix, 'OBQP');
findWord(matrix, 'OOOO');
findWord(matrix, 'IPBS');