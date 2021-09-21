import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";



describe('Test useFetchGifs', () => {
    test('should return initial state', async () => {
        const {result} = renderHook(()=> useFetchGifs('Dragon Ball'));
        const {data, loading} = result.current;
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    
    
})