import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import MySubPlace from '../Subplace/form';
import initialValues from './form.initialValues';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('SubPlace.Form', () => {
    describe('Smoke Tests', () => {
        it('Should exist MySubPlace', () => {
            const wrapper = shallow(<MySubPlace />);
            expect(wrapper).to.exist;
        });
    });
    describe('InitialValues', () => {
        const wrapper = initialValues;

        it('Should return Active equal true', () => {
            expect(wrapper.Active).equal(true);
        });
        it('Should return Id equal 0', () => {
            expect(wrapper.Id).equal(0);
        });
        it('Should return Info equal empty field, without values', () => {
            expect(wrapper.Info).equal('');
        });
        it('Should return Name equal empty field, without values', () => {
            expect(wrapper.Name).equal('');
        });
        it('Should return Position equal 1', () => {
            expect(wrapper.Position).equal(1);
        });
    });
});