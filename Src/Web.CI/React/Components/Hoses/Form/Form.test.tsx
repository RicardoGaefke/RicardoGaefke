import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import SuperForm from './Form';
import MyHoseAdd from '../Add/MyHoseAdd';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Full Tests', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist SuperForm', (): void => {
      const wrapper = shallow(<SuperForm />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.be.exist;
    });
    it('Should exist MyHoseAdd', (): void => {
      const wrapper = shallow(<MyHoseAdd />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.be.exist;
    });
  });
});
