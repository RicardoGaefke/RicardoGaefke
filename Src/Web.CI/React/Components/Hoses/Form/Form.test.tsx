import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import SuperForm from './Form';
import { MuiPickersUtilsProvider } from '@material-ui/core/pickers';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('Form Tests', () => {
    describe('Smoke Tests', () => {
        it('Should exist SuperForm', () => {
            const wrap = shallow(<SuperForm />);
            expect(wrap).to.exist;
        });
    });
    describe('Tags Existence', () => {
        it('Should exist tag Form equal 1 when SuperForm is called', () => {
            const wrap = shallow(<SuperForm />);
            expect(wrap.find('form')).to.have.lenght(1);
        });
        it('Should exist tag MuiPickersUtilsProvider equal 1 when SuperForm is called', () => {
            const wrap = shallow(<SuperForm />);
            expect(wrap.find(MuiPickersUtilsProvider)).to.have.lenght(1);
        });
    });
});