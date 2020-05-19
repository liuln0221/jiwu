export const Common = {
  /**
   * @function merge 深度合并(且去重)
   * @param a 被合并对象
   * @param b 合并对象
   */
  merge: (a, b) => {
    if (a === undefined || b === undefined) {
      return;
    } else {
      for (const key of Object.keys(b)) {
        a[key] =
          a[key] && a[key].toString().indexOf('[object Object]') === 0
            ? Common.merge(a[key], b[key])
            : (a[key] = b[key]);
      }
      return a;
    }
  },
  /**
   * @function arrTwoDimensional 将数组分割为二维数组
   */
  arrTwoDimensional: (store = [], num = 1) => {
    let arr = [];
      const result = [];
      store.forEach((item, index) => {
        const i = index + 1;
        if ((i % num !== 0 || i === 1) && i !== store.length) {
          arr.push(item);
        } else {
          arr.push(item);
          result.push(arr);
          arr = [];
        }
      });
      console.log(result);
      return result;
  }
};
