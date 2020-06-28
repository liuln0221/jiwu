import Navbar from './navbar/navbar.vue';
import Content from './content/content.vue';
import SurroundCity from './surroundcity/surroundcity.vue';
import Adviser from './adviser/adviser.vue';
import HotProject from '@/views/components/hotproject/hotproject.vue';

export default {
  name: 'guide',
  components: { Navbar, eContent: Content, SurroundCity, Adviser, HotProject },
  data() {
    return {
      height: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.height = this.$refs.content && this.$refs.content.$refs.content.offsetHeight;
    });
  }
};
