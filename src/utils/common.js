import store from '@/store/index';

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
      if (i % num !== 0 && i !== store.length) {
        arr.push(item);
      } else {
        arr.push(item);
        result.push(arr);
        arr = [];
      }
    });
    console.log(result);
    return result;
  },
  /**
   * @function mergeTwoDimensional 将二维数据合并为一维数组
   */
  mergeTwoDimensional: (store = []) => {
    let result = [];
    store.forEach((item) => {
      result = result.concat(item);
    });
    return result;
  },
  /**
   * @function randomArray 随机取出一组不重复的数据
   */
  randomArray: (arr, num) => {
    const result = [];
    const hash = {};
    while(num > 0) {
      const ran = arr[Math.floor(Math.random() * arr.length)];
      if (!hash[ran.id]) {
        hash[ran.id] = 1;
        result.push(ran);
        num--;
      }
    }
    return result;
  },
  /**
   * 设置浏览器title
   */
  setTitle: (self) => {
    const location = store.getters.location;
    const labels = [];
    self.$route.matched.forEach(item => {
      if (item.meta.label) {
        labels.push(item.meta.label);
      }
    });
    document.title = `${location.name}${labels.join(' - ')}`;
  }
}
