import * as React from 'react';
import { createContext, useReducer } from 'react';

import Reducer from './reducer'

const initialState = {
  image_banner_context: {
    posts: [],
    error: null
  },
  rotating_image_banner_context: {
    posts: [],
    error: null
  },
  product_slider_context: {
    posts: [],
    error: null
  },
  product_slider_form_context: {
    posts: [],
    error: null
  },
  product_grid_context: {
    posts: [],
    error: null
  },
  product_grid_form_context: {
    posts: [],
    error: null
  },
  collection_slider_context: {
    posts: [],
    error: null
  },
  announcement_bar_context: {
    posts: [],
    error: null
  },
  navigation_list_home_context: {
    posts: [],
    error: null
  },
  navigation_list_home_logo_context: {
    posts: [],
    error: null
  },
  load:{
    isLoad:true
    
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};

export const Context = createContext(initialState);
export default Store;

