// Source -> https://github.com/vercel/next.js/blob/canary/examples/with-redux/store.js
import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getLocalStorageItem, saveLocalStorageItem } from './localStorage';
import reducer from './reducer';

let store;

const initialState = getLocalStorageItem('db') || {
  initialBalance: 0,
  workingBalance: 0,
  transactions: [],
};

function initStore(preloadedState = initialState) {
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );

  store.subscribe(() => {
    saveLocalStorageItem('db', store.getState());
  });

  return store;
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') {
    return _store;
  }

  if (!store) {
    store = _store;
  }

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(
    () => initializeStore(initialState),
    [initialState]
  );

  return store;
};
