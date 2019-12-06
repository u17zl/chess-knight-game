/**
 * @returns {Array} [startPosition,targetPosition]
 */

export default function generateRandomPosition() {
  while (true) {
    let x_piece = Math.floor(Math.random() * 8);
    let y_piece = Math.floor(Math.random() * 8);
    let x_target = Math.floor(Math.random() * 8);
    let y_target = Math.floor(Math.random() * 8);
    if ([x_piece, y_piece] !== [x_target, y_target]) {
      return [
        [x_piece, y_piece],
        [x_target, y_target]
      ];
    }
  }
}
