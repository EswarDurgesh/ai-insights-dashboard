
import { createStore } from 'redux';
import aiDataReducer from './reducers/AIDataReducer';

const store = createStore(aiDataReducer);

export default store;
