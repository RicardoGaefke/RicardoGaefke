import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import MyPlants from './form';
import initialValues from './form.initialValues';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Plants.Form', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist MyPlants', (): void => {
      const wrapper = shallow(<MyPlants />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('InitialValues', (): void => {
    const wrapper = initialValues;

    it('Should return Active equal true', (): void => {
      expect(wrapper.Active).equal(true);
    });
    it('Should return Country equal 1', (): void => {
      expect(wrapper.Country).equal(1);
    });
    it('Should return Email equal empty field, without values', (): void => {
      expect(wrapper.Email).equal('');
    });
    it('Should return Id equal 0', (): void => {
      expect(wrapper.Id).equal(0);
    });
    it('Should return Info equal empty field, without values', (): void => {
      expect(wrapper.Info).equal('Here comes additional info');
    });
    it('Should return Name equal empty field, without values', (): void => {
      expect(wrapper.Name).equal('');
    });
    it('Should return OfficialName equal empty field, without values', (): void => {
      expect(wrapper.OfficialName).equal('');
    });
    it('Should return Phone equal 0', (): void => {
      expect(wrapper.Phone).equal(0);
    });
    it('Should return Registry equal 0', (): void => {
      expect(wrapper.Registry).equal(0);
    });
    it('Should return Technician equal empty field, without values', (): void => {
      expect(wrapper.Technician).equal('');
    });
  });
});
