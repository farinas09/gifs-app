import { getGifs } from "../../helpers/getGifs"


describe('getGifs fetch test', () => {
    test('should get 10 elements', async () => {
        const gifs = await getGifs('One punch'); 
        expect(gifs.length).toBe(10);
    })

    test('should get 0 elements if category is empty', async () => {
        const gifs = await getGifs(''); 
        expect(gifs.length).toBe(0);
    })
    
})
