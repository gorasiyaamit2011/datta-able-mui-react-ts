// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// project import
import auth from './auth';

// ------------------------| STORE - REDUCER  |------------------------ //

const reducer = combineReducers({
  auth: persistReducer(
    {
      key: 'auth',
      storage,
      keyPrefix: 'datta-able-mui-ts-',
    },
    auth
  ),
});

export default reducer;
