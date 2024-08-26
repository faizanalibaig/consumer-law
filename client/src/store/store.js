import { configureStore } from '@reduxjs/toolkit';
import affidivatslice from '../slice/affidivatslice';
import identitytheftslice from '../slice/identitytheftslice';
import personalinfoslice from '../slice/personalinfoslice';
import collectionslice from '../slice/collectionslice';
import inquiryslice from '../slice/inquiryslice';
import bankruptcyslice from '../slice/bankruptcyslice';
import allpurposecreditslice from '../slice/allpurposecreditslice';
import accountsslice from '../slice/accountsslice';

const store = configureStore({
  reducer: {
    affidivatslice: affidivatslice,
    identitytheftslice: identitytheftslice,
    personalinfoslice: personalinfoslice,
    collectionslice: collectionslice,
    inquiryslice: inquiryslice,
    bankruptcyslice:bankruptcyslice,
    allpurposecreditslice: allpurposecreditslice,
    accountsslice: accountsslice
  },
});

export default store;
