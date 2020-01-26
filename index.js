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
            var arrEach = matrix[i];
            var firstCharacter = matrix[i][j];
            verticalString += firstCharacter;
            arrEach.forEach(character => {
                string += character;
            });
            if (string == word || verticalString == word) {
                return true;
            }
            string = '';
        }
        verticalString = '';
    }
    string = '';
    verticalString = '';
    if (string !== word) {
        return false;
    }
}

findWord(matrix, 'FACI');
findWord(matrix, 'OBQP');
findWord(matrix, 'OOOO');
findWord(matrix, 'IPBS');