import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Form Tests', () => {
    describe('Smoke Tests', () => {
        it('Should return true', () => {
            const wrap = true;
            expect(wrap).to.equal(true);
        });
        it('Should exist Somando', () => {
            const wrapper = shallow(<h1>Hello</h1>);
            expect(wrapper.find('h1').props().children).equal('Hello');
        });
    });
});
