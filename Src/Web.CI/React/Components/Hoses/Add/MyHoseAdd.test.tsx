import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import MyHoseAdd from './MyHoseAdd';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('MyHoseAdd Tests', () : void => {
  describe('Smoke Tests', () : void => {
    it('Should exist MyHoseAdd component', () : void => {
      const wrapper = shallow(<MyHoseAdd />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.be.exist;
    });
  });
});
