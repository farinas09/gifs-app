import React from "react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () =>{
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories} />)
    })

    test('should show the component successfully', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should change input text', () => {
        const input = wrapper.find('input');
        const value = 'Hello World'
        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value)

        
    })

    test('should not send the information on submit without inputValue', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled()
        
    })

    test('should call setCategories and clean input', () => {
        const input = wrapper.find('input');
        const value = 'Hello World';
        input.simulate('change', {target: {value}});
        console.log(input.props())
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        
        expect(input.text()).toBe('');
        
    })
    
    
})