import { obtenerRobots } from "./arreglos";

describe('obtener robots', () => {
    it('minimo 3 robots', () => {
        const resp = obtenerRobots()
        expect(resp.length).toBeGreaterThanOrEqual(3)
    });
    it('should have robocop and ultron', () => {
        const resp = obtenerRobots()
        expect(resp).toContain('robocop')
        expect(resp).toContain('ultron')
    })
    
    
})
