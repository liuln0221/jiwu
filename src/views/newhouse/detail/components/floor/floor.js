import ProjectParams from './components/projectparams/projectparams.vue';
import ProjectIntroduction from './components/projectintroduction/projectintroduction.vue';
import PeripheralPark from './components/peripheralpark/peripheralpark.vue';
import Disclaimer from '@/views/newhouse/detail/common/disclaimer/disclaimer.vue';
import Expand from '@/views/newhouse/detail/common/expand/expand.vue';

export default {
  name: 'floor',
  props: [ 'data' ],
  components: { ProjectParams, ProjectIntroduction, PeripheralPark, Disclaimer, Expand }
};
