import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import Counter from '../components/counter/Counter'

describe('Counter component', () => {
    let wrapper;
    test('should render', () => {
        wrapper = shallow(<Counter params={{
            match: 
            {isExact: true,
            params: {
                email: "jax@jax.com"
            },
                path: "/counter/:email",
                url: "/counter/jax@jax.com"}
            }} />);
        expect(wrapper).toMatchSnapshot()
    })
    test('should render h1 with Welcome message', () => {
        wrapper = shallow(<Counter params={{
            match: 
            {isExact: true,
            params: {
                email: "jax@jax.com"
            },
                path: "/counter/:email",
                url: "/counter/jax@jax.com"}
            }} />);
        expect(wrapper.containsMatchingElement(<h1>Welcome!</h1>)).toBeTruthy()
        expect(wrapper.find('.counter_container').exists()).toBe(true)
    })
})
