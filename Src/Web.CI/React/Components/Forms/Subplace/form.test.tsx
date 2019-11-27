import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import MySubPlace from '../Subplace/form';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('SubPlace.Form', () => {
    describe('Smoke Tests', () => {
        it('Should exist MySubPlace', () => {
            const wrapper = shallow(<MySubPlace />);
            expect(wrapper).to.exist;
        });
    });
});