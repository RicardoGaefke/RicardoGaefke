import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import MySubMachine from './form';
import initialValues from './form.initialValues';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('SubMachine.Form', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist MySubMachine', (): void => {
      const wrapper = shallow(<MySubMachine />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('InitialValues', (): void => {
    const wrapper = initialValues;

    it('Should return Id equal 0', (): void => {
      expect(wrapper.Id).equal(0);
    });
    it('Should return Name equal empty field, without values', (): void => {
      expect(wrapper.Name).equal('');
    });
    it('Should return Info equal empty field, without values', (): void => {
      expect(wrapper.Info).equal('');
    });
    it('Should return Active equal true', (): void => {
      expect(wrapper.Active).equal(true);
    });
  });
});
