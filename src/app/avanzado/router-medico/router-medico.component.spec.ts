import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { empty, from, Observable, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

// esta clase simulara a la clase Router
// debemos impelemtar los metodos que usamos
class fakeRouter{
  navigate(params){ /* asi de simple por que es solo simulacion */}
}

class fakeActivatedRoute{
  params:Observable<any> = from([{id:ID_PARAM}])
}

const ID_PARAM = '123'

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  // otra forma de pasar parametros: esta comentada el final
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers:[ 
        {provide:Router, useClass:fakeRouter},
        {provide:ActivatedRoute, useClass:fakeActivatedRoute},
      ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  // test para verificar si los servicios fueron llamados
  // es importante simular los servicios, ya que estos an sido testeados
  it('should redirtect to /medic/123 when saveMedic', () => {
    const router = TestBed.inject(Router)
    const spy = spyOn(router,'navigate')
    
    component.guardarMedico()
    
    expect(spy).toHaveBeenCalledWith(['medico','123'])
    
  })
  
  it('should set id=123', () => {
    
    expect(component.id).toBe(ID_PARAM)
  })
  
  
  
});




// se puede pasar parametros al ActivatedRoute tambien de la sgt forma:
    // useValue:{
    //     params: from([{id:ID_PARAM}])
    //   }