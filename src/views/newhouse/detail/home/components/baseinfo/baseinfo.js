export default {
  name: 'baseinfo',
  props: [ 'data' ],
  data() {
    return {
      activeIndex: 1
    };
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