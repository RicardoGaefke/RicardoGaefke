import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import SuperForm from './Form';
import AppTest from './AppTest';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Form Tests', () => {
    describe('Smoke Tests', () => {
        it('Should return true', () => {
            const wrap = true;
            expect(wrap).to.equal(true);
        });
        it('Should exist AppTest', () => {
            const wrap = shallow(<AppTest />);
            expect(wrap).to.exist;
        });
    });
    
    /*describe('Tags Existence', () => {
        it('Should exist tag Form equal 1 when is called', () => {
            const wrap = shallow(<SuperForm />);
            expect(wrap.find('form')).to.have.length(1);
        });
        it('Should exist tag MuiPickersUtilsProvider equal 1 when is called', () => {
            const wrap = shallow(<SuperForm />);
            expect(wrap.find(MuiPickersUtilsProvider)).to.have.length(1);
        });
    });*/
});
