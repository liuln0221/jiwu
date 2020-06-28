import { menus } from './navbar.class';

export default {
  name: 'navbar',
  props: [ 'height' ],
  data() {
    return {
      activeIndex: menus[0].name,
      menus
    };
  },
  methods: {
    /**
     * 使用document.querySelector实现锚点的效果
     */
    changeHash(id) {
      document.querySelector(`#${id}`).scrollIntoView();
    }
  },
  mounted() {
    const oDiv = document.getElementById("navbar");
    let H = 0, Y = oDiv;    
    while (Y) {
      H += Y.offsetTop; 
      Y = Y.offsetParent;
    }

    window.onscroll = () => {
      const s = document.body.scrollTop || document.documentElement.scrollTop;
      const navbarH = 350;
      if(s > H && this.height >= s + navbarH) {
        oDiv.style = "position:fixed;top:0;";
      } else if (this.height < s + navbarH) {
        const result = this.height - (s + navbarH);
        oDiv.style = `position:fixed;top: ${result + 100 > 0 ? 0 : result + 100}px;`;
      } else {
        oDiv.style = "";
      }
    };
  }
};
