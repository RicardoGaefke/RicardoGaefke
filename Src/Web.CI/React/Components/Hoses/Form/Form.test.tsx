import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

// Calling with: JSX
import { Dividindo, BasicComponent } from '../Form/Div';

// Calling with: TSX
import { Sum } from '../Form/Sum';

import SuperForm from '../Form/Form';

describe('Full Tests', () => {
    context('Basic tests running', () => {
        it('Should return true', () => {
            const wrap = true;
            expect(wrap).be.equal(true);
        });
    });
    context('Testing using JSX', () => {
        it('Should return div', () => {
            const wrap = Dividindo(10, 2);
            expect(wrap).equal(5);
        });
    });
    context('Trying a simple component', () => {
        it('Should return a basic component', () => {
            const wrap = shallow(<BasicComponent />);
            expect(wrap).to.exist;
        });
        it('Should return a basic component with a children', () => {
            const wrap = shallow(<BasicComponent />);
            expect(wrap.find('h1').props().children).equal('My Test Component');
        });
    });
    context('Testing using TSX', () => {
        it('Should return sum', () => {
            const wrap = Sum(10, 20);
            expect(wrap).equal(30);
        });
        context('[TSX] - Form', () => {
            it('Should exist SuperForm', () => {
                const wrap = shallow(<SuperForm />);
                expect(wrap).to.exist;
            });
        });
    });
});