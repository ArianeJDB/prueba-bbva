import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import Login from '../components/login/Login'
import ErrorMessage from '../components/errorMessage/ErrorMessage'

describe('Login component should', () => {
    let wrapper;
    test('should render correctly', () => {
        wrapper = shallow(<Login />)

        expect(wrapper).toMatchSnapshot()
    })

    test('should render ErrorMsg with errorMsg as a prop', () => {
        const errorMsg = 'Email is required'
        wrapper = shallow(<ErrorMessage errorMsg={errorMsg} />)

        expect(wrapper).toMatchSnapshot()
    })

})
