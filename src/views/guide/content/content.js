import {
  housingLoans,
  housingTaxCertificates,
  housingProvidentFunds,
  oldHouses,
  housingSecuritys,
  others
} from './content.class';

import { Common } from '@/utils/common';

export default {
  name: 'content',
  data() {
    return {
      data: [
        {
          name: 'housingLoan',
          label: '住房贷款',
          contents: Common.arrTwoDimensional(housingLoans, 2)
        },
        {
          name: 'housingTaxCertificate',
          label: '住房税证',
          contents: Common.arrTwoDimensional(housingTaxCertificates, 2) 
        },
        {
          name: 'housingProvidentFund',
          label: '住房公积金',
          contents: Common.arrTwoDimensional(housingProvidentFunds, 2)
        },
        {
          name: 'oldHouse',
          label: '二手房',
          contents: Common.arrTwoDimensional(oldHouses, 2)
        },
        {
          name: 'housingSecurity',
          label: '住房保障',
          contents: Common.arrTwoDimensional(housingSecuritys, 2)
        },
        {
          name: 'other',
          label: '其他',
          contents: Common.arrTwoDimensional(others, 2)
        }
      ]
    };
  }
};
