/**
 *
 *
 * @export
 * @param {Array} current
 * @param {Array} next
 * @returns {Boolean}
 */

export default function isValidMove(current, next) {
  // 8 possible moves
  let dx = [2, 2, -2, -2, 1, 1, -1, -1];
  let dy = [1, -1, 1, -1, 2, -2, 2, -2];

  for (let i = 0; i < 8; i++) {
    if (next[0] === current[0] + dx[i] && next[1] === current[1] + dy[i])
      return true;
  }
  return false;
}
