import { createStore } from 'redux';

const defaultState = {
  tab: 0
};

const tabReducer = (tab, action) => {
  switch(action.type){
    case 'SET_TAB':
      return action.tab;
    default:
      return tab;
  }
};

const rootReducer = (state = defaultState, action) => {
  const tab = tabReducer(state.tab, action);
  return {
    tab
  };
};

const store = createStore(rootReducer);

export default store;