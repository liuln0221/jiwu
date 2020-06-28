import { Project } from "@/api";

export default {
  name: 'sellwell',
  data() {
    return {
      // data: []
      data: [
        {
          name: '雅居乐京华雅郡',
          site: '大兴区荣华南路荣华鑫泰大厦4号楼南侧1-2层',
          price: 51000,
          src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
        },
        {
          name: '天瑞宸章',
          site: '大兴区荣华南路荣华鑫泰大厦4号楼南侧1-2层',
          price: 51000,
          src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          name: '合景领汇长安',
          price: 46000,
          src: 'http://img-other.jiwu.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
        },
        {
          name: '中铁诺德逸府',
          price: 67702,
          src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
        },
        {
          name: '西山锦绣府',
          price: 58622,
          src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        }
      ]
    };
  },
  methods: {
    getHot() {
      const param = {
        pageIndex: 1,
        pageSize: 5
      };
      Project.getHot(param).then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.getHot();
  }
};
