import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('Form Tests', () => {
    //
});