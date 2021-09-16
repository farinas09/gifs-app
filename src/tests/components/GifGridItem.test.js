import { shallow } from "enzyme"
import React from "react"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem />', () =>{
    const title = 'title';
    const url = 'https://localhost/test.jpg';
    const id = '123';
    const wrapper = shallow(<GifGridItem title={title} url={url} id={id} />)

    test('should show the component successfully', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should show the title paragraph', () => {
        const paragraph = wrapper.find('p');
        expect( paragraph.text().trim() ).toBe( title );
    })

    test('should have the image equal to the url and alt of the props', () => {
        const img = wrapper.find('img');
        
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })

    test('should have animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).toBe( true );
    })
    
})