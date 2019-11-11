import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

//import { sum } from '../../../../../../Src/Web.CI/React/Components/Hoses/Form/Sum';

const sub = (a: number, b: number): number => a - b;
 
import { Dividindo } from '../Form/Div';

describe('Full Tests', () => {
    it('Should return true', () => {
        const wrap = true;
        expect(wrap).be.equal(true);
    });
    it('Should return sum', () => {
        const wrap = sub(10, 20);
        expect(wrap).equal(-10);
    });
    it('Should return Div', () => {
        const wrap = Dividindo(10, 2);
        expect(wrap).equal(5);
    });
});