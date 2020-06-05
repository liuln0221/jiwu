import { dateStrToFormat } from '@/filters';

export default {
  name: 'baseinfo',
  props: [ 'data' ],
  data() {
    return {
      activeIndex: 1
    };
  },
  computed: {
    store() {
      return [
        { label: '均价', value: this.data.unitPrice ? `${this.data.unitPrice}元/平米` : '' },
        { label: '楼层', value: this.data.floor },
        { label: '年代', value: this.data.years },
        { label: '朝向', value: this.data.orientation },
        { label: '装修', value: this.data.renovation },
        { label: '更新时间', value: dateStrToFormat(this.data.updateTime, 'YYYY-MM-DD') }
      ];
    }
  },
  methods: {
    leftClick() {
      console.log(this.$refs.ul.style);
    },
    rightClick() {
      // this.$refs.carousel.next();
    }
  }
}