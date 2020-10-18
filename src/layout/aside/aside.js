export default {
  namee: 'aside',
  data() {
    return {
      asides: [
        { icon: 'aside__menu__icon__phone', content: '400-157-6007'},
        { icon: 'aside__menu__icon__consulte', content: '咨询顾问', routerTo: { name: 'adviser' } },
        { icon: 'aside__menu__icon__house', content: '帮我找房', routerTo: { name: 'help' } },
        { icon: 'aside__menu__icon__util', content: '房贷计算器', routerTo: { name: 'calculator' } },
        // { icon: 'aside__menu__icon__provident-fund', content: '住房公积金查询' }
      ]
    };
  }
}