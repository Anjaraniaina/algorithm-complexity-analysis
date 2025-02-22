/*
 * Find the leftmost digit that occurs in a given string.
 *
 * Example
 *
 * For inputString = "var_1__Int", the output should be solution(inputString) = '1';
 *
 * For inputString = "q2q-q", the output should be
 * solution(inputString) = '2';
 *
 * For inputString = "0ss", the output should be
 * solution(inputString) = '0'.
 */
const firstDigit = (inputString) => inputString.match(/\d/)[0];

/**
 * 14 => 4
 * T07 = 4
 * O(n) = 1  
 */