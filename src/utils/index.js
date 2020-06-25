export function buildGrid() {
  return new Array(25).fill(null).map(() => new Array(25).fill(0));
}

export function randomGrid() {
  return new Array(25)
    .fill(null)
    .map(() =>
      new Array(25).fill(null).map(() => Math.floor(Math.random() * 2))
    );
}

export function neighbors(matrix, y, x) {
  let count = 0;
  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      if (i === y && j === x) {
        continue;
      }
      if (i >= 0 && i < 25 && j >= 0 && j < 25) {
        count += matrix[i][j];
      }
    }
  }

  return count;
}
