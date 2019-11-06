import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Form Tests', () => {
    describe('Smoke Tests', () => {
        it('Should return false', () => {
            const wrap = false;
            expect(wrap).to.equal(false);
        });
    });
});