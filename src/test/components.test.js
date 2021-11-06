
import React from 'react';
import Enzyme, {shallow, render} from 'enzyme';
import Footer from '../components/footer/Footer';
import NavBar from '../components/navBar/NavBar';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import store from '../core/index';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

Enzyme.configure({ adapter: new Adapter() });
const customHistory = createBrowserHistory();

//muestra en consola el html
it('Test <footer />', () => {
  const wrapper = shallow(<Footer />);
  //console.log(wrapper.debug());
});

/*
  Para este test lo que se debe de hacer 
  es "wrapper the component", ya que de otra forma
  te dara un error, el test SHALLOW unicamente verifican el return(), osea solo el "html" 
*/ 
it('Test <NavBar />', () =>{
  shallow(
    <Router history={customHistory}>
    <Provider store={store}>
      <NavBar />
    </Provider>
    </Router>
  
  );
})