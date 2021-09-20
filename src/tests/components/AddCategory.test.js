import { shallow } from 'enzyme';
import React from "react"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory />', () =>{
    const setCategories = () => {

    }
    const wrapper = shallow(<AddCategory setCategories = {setCategories} />)

    test('should show the component successfully', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
})