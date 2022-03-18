/*
 * You found two items in a treasure chest !
 * The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2.
 * What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW
 * and you can't come back for the items later ?
 * Note that there are only two items and you can't bring more than one item of each type,
 * i.e. you can't take two first items or two second items.
 */
const knapsackLight = (value1, weight1, value2, weight2, maxW) =>
  Math.max(
    maxW >= weight1 && value1,
    maxW >= weight2 && value2,
    maxW >= weight1 + weight2 && value1
  );
  /**
   * 10 => 1
   * 11 => 5
   * 12 => 5
   * 13 => 7
   * T08 = 1 + 5 + 5 + 7 = 18
   * O(n) = 1
   */
