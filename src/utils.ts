/* eslint-disable no-plusplus */

export function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export function getTotalItems(totalElements: number, itemsPerPage: number) {
  const groups = Math.ceil(totalElements / itemsPerPage);
  const result = [];

  for (let i = 1; i <= groups; i++) {
    result.push(i);
  }

  return result;
}
