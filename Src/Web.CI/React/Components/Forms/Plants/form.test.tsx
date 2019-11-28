import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import MyPlants from '../Plants/form';
import initialValues from './form.initialValues';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Plants.Form', () => {
    describe('Smoke Tests', () => {
        it('Should exist MyPlants', () => {
            const wrapper = shallow(<MyPlants />);
            expect(wrapper).to.exist;
        });
    });
    describe('InitialValues', () => {
        const wrapper = initialValues;

        it('Should return Active equal true', () => {
            expect(wrapper.Active).equal(true);
        });
        it('Should return Country equal 1', () => {
            expect(wrapper.Country).equal(1);
        });
        it('Should return Email equal empty field, without values', () => {
            expect(wrapper.Email).equal('');
        });
        it('Should return Id equal 0', () => {
            expect(wrapper.Id).equal(0);
        });
        it('Should return Info equal empty field, without values', () => {
            expect(wrapper.Info).equal('Here comes additional info');
        });
        it('Should return Name equal empty field, without values', () => {
            expect(wrapper.Name).equal('');
        });
        it('Should return OfficialName equal empty field, without values', () => {
            expect(wrapper.OfficialName).equal('');
        });
        it('Should return Phone equal 0', () => {
            expect(wrapper.Phone).equal(0);
        });
        it('Should return Registry equal 0', () => {
            expect(wrapper.Registry).equal(0);
        });
        it('Should return Technician equal empty field, without values', () => {
            expect(wrapper.Technician).equal('');
        });
    });
});