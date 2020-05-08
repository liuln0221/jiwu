export default {
  name: 'knowledgebase',
  data() {
    return {
      knowledges: [
        {
          title: '准备',
          values: [
            { name: '1', label: '买房常识' },
            { name: '2', label: '买房流程' },
            { name: '3', label: '楼市走向' },
            { name: '4', label: '楼市拐点' },
            { name: '5', label: '楼市危机' }
          ],
          isExpand: false,
          expand: false
        },
        {
          title: '看房/选房',
          values: [
            { name: '1', label: '小高层几楼最好' },
            { name: '2', label: '高层选房技巧' },
            { name: '3', label: '电梯房楼层选择' },
            { name: '4', label: '购买期房好处' },
            { name: '5', label: '学区房怎么购买' },
            { name: '6', label: '小产权房贷款' },
            { name: '7', label: '学区房怎么购买' },
            { name: '8', label: '小产权房贷款' },
            { name: '9', label: '小高层几楼最好' },
          ],
          isExpand: false,
          expand: false
        }
      ]
    };
  },
  methods: {
    click(knowledge) {
      this.knowledges.forEach((item, index) => {
        if (knowledge.title === item.title) {
          this.knowledges[index].expand = !knowledge.expand;
        } else {
          this.knowledges[index].expand = false;
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.knowledges.forEach((item, index) => {
        console.log(document.getElementsByClassName('knowledgebase__main')[index].offsetHeight);
        this.knowledges[index].isExpand = document.getElementsByClassName('knowledgebase__main')[index].offsetHeight > 130;
      });
      this.$forceUpdate();
    });
  }
};