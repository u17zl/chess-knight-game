export default function generateRandomPosition() {
  let x_piece = Math.floor(Math.random() * 10);
  let y_piece = Math.floor(Math.random() * 10);
  let x_target = Math.floor(Math.random() * 10);
  let y_target = Math.floor(Math.random() * 10);
  if ([x_target, y_target] === [x, y]) {
  }
}

function generateDiffPosition(list) {
  let x_target = Math.floor(Math.random() * 10);
  let y_target = Math.floor(Math.random() * 10);
  if (list[0] === x_target && list[1] === y_target) {
    return generateDiffPosition(list);
  } else {
    return [x_target, y_target];
  }
}
