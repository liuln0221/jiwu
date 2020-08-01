import { types, info } from './prepayment.class';
import { times, rates } from '../components/calculator/calculator.class';

import Calculator from '../components/calculator/calculator.vue';
import Adviser from '../components/adviser/adviser.vue';
import Result from '../components/result/result.vue';
import CustomTable from '@/components/customTable.vue';

export default {
  name: 'prepayment',
  components: { Calculator, Adviser, Result, CustomTable },
  data() {
    return {
      data: {
        type: 'property',
        money: '',
        time: 360,
        rate: 1,
        firstPaymentTime: '',
        prepaymentTime: '',
        prepaymentMode: '',
        treatmentMode: ''
      },
      types,
      times,
      rates,
      info,
      store: {}
    };
  }
};
