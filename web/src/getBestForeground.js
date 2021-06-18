import Color from 'color';

export default (option1, option2, background) => {
  const op1 = Color(option1);
  const op2 = Color(option2);
  const bg = Color(background);
  if (op1.contrast(bg) > op2.contrast(bg)) {
    return op1.hex();
  } else {
    return op2.hex();
  }
};
