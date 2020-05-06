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
  }
};
