
import React from "react"

import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs")

describe('Pruebas en <GifGrid />', () =>{
    const category = 'category';

    test('should show the component successfully', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        })
        
    const wrapper = shallow(<GifGrid category={category} />)
        expect( wrapper ).toMatchSnapshot();
    })

    test('should show items when usefetch load data', () => {

        const gifs = [{
            id: 'abc',
            url: 'https://xdxd.com/png',
            title: 'text'
        }]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        })
        
    const wrapper = shallow(<GifGrid category={category} />)
        expect( wrapper ).toMatchSnapshot();
        
    })
    
})