import { info } from './house.class';
import { times, rates } from '../components/calculator/calculator.class';

import Calculator from '../components/calculator/calculator.vue';
import Adviser from '../components/adviser/adviser.vue';
import Result from '../components/result/result.vue';
import CustomTable from '@/components/customTable.vue';

export default {
  name: 'house',
  components: { Calculator, Adviser, Result, CustomTable },
  data() {
    return {
      data: {
        fund: '',
        monthlyHouseholdIncome: '',
        monthlyPurchaseExpenses: '',
        time: 360,
        area: ''
      },
      times,
      rates,
      info,
      store: {}
    };
  }
};
