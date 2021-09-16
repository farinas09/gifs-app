import { shallow } from "enzyme"
import React from "react"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem />', () =>{
    test('should show the component successfully', () => {
        const wrapper = shallow(<GifGridItem/>)
        expect( wrapper ).toMatchSnapshot();
    })
    
})