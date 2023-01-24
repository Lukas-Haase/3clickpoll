import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CreateLivepollComponent } from './create-livepoll.component'

describe( 'CreateLivepollComponent', () => {
  let component: CreateLivepollComponent
  let fixture: ComponentFixture<CreateLivepollComponent>

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ CreateLivepollComponent ]
    } )
      .compileComponents()

    fixture = TestBed.createComponent( CreateLivepollComponent )
    component = fixture.componentInstance
    fixture.detectChanges()
  } )

  it( 'should create', () => {
    expect( component ).toBeTruthy()
  } )
} )
