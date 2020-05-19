import { metros } from './metro.class';

export default {
  name: 'metro',
  data() {
    return {
      data: {
        metro: undefined
      },
      metros
    };
  },
  methods: {
    selectBtn(val, store, type, child = false, key = 'name') {
      val.active = true;
      if (child) {
        this.data[type].child = val.name ? val : undefined;
      } else {
        this.data[type] = val.name ? val : undefined;
      }
      store.forEach((item, index) => {
        if (item[key] !== val[key]) {
          store[index].active = false;
        }
      });
      this.getSelected();
    },
    resetBtn(val) {
      this.data[val.name] = undefined;
      const store = this[`${val.name}s`];
      if (store) {
        store[0].active = true;
        const data = store.find(item => item.name === val.value.name);
        data.active = false;
        data.child = undefined;
        data.children.forEach((item, index) => {
          data.children[index].active = false;
        });
      }
      this.getSelected();
    },
    clearBtn() {
      // 地铁
      this.metros[0].active = true;
      this.metros.find((item, index) => index !== 0).active = false;
    },
    clear() {
      for(const key in this.data) {
          this.data[key] = undefined;
      }
      this.clearBtn();
      this.getSelected();
    },
    getSelected() {
      const result = [];
      for (const val in this.data) {
        if (this.data[val]) {
          result.push({ name: val, value: this.data[val] });
        }
      }
      this.$emit('getSelected', result);
    }
  }
};
