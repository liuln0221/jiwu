const getTime = () =>{
  const result = [];
  for(let i = 1; i <= 30; i++) {
    result.push({
      label: `${i}年(${i * 12})期`,
      value: i * 12
    });
  }
  return result;
}

const times = getTime();
const rates = [
  { label: '最新利率7折', value: 0.7 },
  { label: '最新利率7.5折', value: 0.75 },
  { label: '最新利率8折', value: 0.8 },
  { label: '最新利率8.5折', value: 0.85 },
  { label: '最新利率9折', value: 0.9 },
  { label: '最新利率9.5折', value: 0.95 },
  { label: '最新基准利率', value: 1},
  { label: '最新利率1.05倍', value: 1.05 },
  { label: '最新利率1.1倍', value: 1.1 },
  { label: '最新利率1.15倍', value: 1.15 },
  { label: '最新利率1.2倍', value: 1.2 },
  { label: '最新利率1.3倍', value: 1.3 },
];

export {
  times,
  rates
};
