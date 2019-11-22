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


/**
 * 时间戳的转化
 * @param {date, fmat}
 * @export FormatDateTime
 */
export function FormatDateTime(date, fmat) {
  if (/(y+)/.test(fmat)) {
    fmat = fmat.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmat)) {
      let str = o[k] + '';
      fmat = fmat.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmat;
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
