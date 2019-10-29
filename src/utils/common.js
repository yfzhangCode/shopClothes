/**
 * 防抖函数
 * 重复加载次数过多
 */
export function debounce(func, delay) {
  let timer = null;
  return (...args) => {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}