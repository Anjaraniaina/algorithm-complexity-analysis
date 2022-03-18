/*
 * Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.
 * [[1, 2], [2,2], [1, 1], [1, 2], [2,2]]
 */
const differentSquares = (matrix) => {
  let s = new Set(); //1
  for (let i = 0; i < matrix.length - 1; i++) { //6
    for (let j = 0; j < matrix[0].length; j++) { //6
      if ( //20
        matrix[i][j] && 
        matrix[i][j + 1] &&
        matrix[i + 1][j] &&
        matrix[i + 1][j + 1]
      ) {
        s.add(`${matrix[i][j]}${matrix[i][j + 1]}${matrix[i + 1][j + 1]}`); //17
      }
    }
  }
  return s.size; // n + 1
};

// T(n) = 1 + 6i6j(37) + n + 1
//      = 1 + n**2 + 
