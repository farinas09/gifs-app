import React from "react"

import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import { GifApp } from "../../GifApp";

describe('Pruebas en <GifApp />', () =>{

    test('should show the app component successfully', () => {
        
        
    const wrapper = shallow(<GifApp />)
        expect( wrapper ).toMatchSnapshot();
    })

    test('should show a list of categories', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifApp defaultCategories = {categories} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
        
    })
    
})