// 公积金贷款利率
const fundRate = (rate, time) => {
  if (time <= 60) { // 五年以下（含五年） 2.75
    return rate * 2.75 / 100;
  } else if (time > 60) { // 五年以上  3.25
    return rate * 3.25 / 100
  }
};

// 商业贷款利率
const propertyRate = (rate, time) => {
  if (time <= 6) { // 六个月以内（含6个月） 4.35
    return rate * 4.35 / 100;
  } else if (time > 6 && time <= 12) { // 六个月至一年（含1年） 4.35
    return rate * 4.35 / 100;
  } else if (time > 12 && time <= 36) { // 一至三年（含3年） 4.75
    return rate * 4.75 / 100;
  } else if (time > 36 && time <= 60) { // 三至五年（含5年） 4.75
    return rate * 4.75 / 100;
  } else if (time > 60) { // 五年以上  4.9
    return rate * 4.9 / 100
  }
};

export {
  fundRate,
  propertyRate
}
