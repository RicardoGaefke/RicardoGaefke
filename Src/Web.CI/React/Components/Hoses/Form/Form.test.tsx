import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import SuperForm from './Form';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Full Tests', () => {
    describe('Smoke Tests', () => {
        it('Should exist SuperForm', () => {
            const wrapper = shallow(<SuperForm />);
            //eslint-disable-next-line no-undef
            expect(wrapper).to.be.exist;
        });
    });
});