//通知方式
export function geuType(type) {
  switch (type) {
    case 1:
      return "优秀";
      break;
    case 2:
      return "良好";
      break;
    default:
      return "";
  }
}
