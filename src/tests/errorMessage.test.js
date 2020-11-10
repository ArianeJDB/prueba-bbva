import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import ErrorMessage from '../components/errorMessage/ErrorMessage'

describe('ErrorMessage component with a div with error className', () => {
    let wrapper;
    test('should render correctly', () => {
        wrapper = shallow(<ErrorMessage />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.error').exists()).toBe(true)
    })

    test('should render correctly with errorMsg as prop', () => {
        const errorMsg = 'Email is required'
        wrapper = shallow(<ErrorMessage errorMsg={errorMsg} />);
        
        expect(wrapper).toMatchSnapshot();
    })
})