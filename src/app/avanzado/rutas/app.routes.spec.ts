import { MedicoComponent } from 'src/app/intermedio2/medico/medico.component'
import {ROUTES} from './app.routes'

describe('Rutas principales', () => {
    it('debe existir la ruta medico/:id', () => {
        expect(ROUTES).toContain({path:'medico/:id',component:MedicoComponent})
    })
    
})
