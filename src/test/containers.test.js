/*
  a pesar que parece que no se usa, se importa y luego jest hace el trabajo
*/ 
import React from 'react';

import Enzyme, {shallow, render, mount} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Card from '../containers/card/Card';
import MovieMoreView from '../containers/home/components/movieMoreView/MovieMoreView';

// test dos
import { Provider } from 'react-redux';
import store from '../core/index';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

// crea un adaptador nuevo
Enzyme.configure({ adapter: new Adapter() });


/*
  RENDER:
    no solo testea el return si no que ademas testea el ciclo de vida
    del componente.
*/ 
it('Test <Card />', () =>{
  // debugger
  const wrapper = render(
    <Router history={customHistory}>
    <Provider store={store}>
      <Card />
    </Provider>
    </Router>
  )
  .find(Card)
  expect(wrapper.prop("element"))
  expect(wrapper.find(".a"))
  
})

it('Test ', () => {
  const wrapper = render(
    <Router history={customHistory}>
    <Provider store={store}>
    <MovieMoreView />
    </Provider>
    </Router>
  )
  console.log(wrapper);
  
})