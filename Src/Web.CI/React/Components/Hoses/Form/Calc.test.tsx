// eslint-disable no-undef
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Calling with: JSX
import { Dividindo, BasicComponent } from './Div';

// Calling with: TSX
import Sum from './Sum';

import SuperForm from './Form';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('Full Tests', (): void => {
  context('Basic tests running', (): void => {
    it('Should return true', (): void => {
      const wrap = true;
      expect(wrap).be.equal(true);
    });
  });
  context('Testing using JSX', (): void => {
    it('Should return div', (): void => {
      const wrap = Dividindo(10, 2);
      expect(wrap).equal(5);
    });
  });
  context('Trying a simple component', (): void => {
    it('Should return a basic component', (): void => {
      const wrap = shallow(<BasicComponent />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrap).to.be.exist;
    });
    it('Should return a basic component with a children', (): void => {
      const wrap = shallow(<BasicComponent />);
      expect(wrap.find('h1').props().children).equal('My Test Component');
    });
  });
  context('Testing using TSX', (): void => {
    it('Should return sum', (): void => {
      const wrap = Sum(10, 20);
      expect(wrap).equal(30);
    });
    context('[TSX] - Form', (): void => {
      it('Should exist SuperForm', (): void => {
        const wrap = shallow(<SuperForm />);
        // eslint-disable-next-line no-unused-expressions
        expect(wrap).to.be.exist;
      });
    });
  });
});
