import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComponentComponent } from './my-first-component.component';

/**
 * This is the component .spec.ts file, which is the component testing file, where test cases can be written for a
 * component. Don't worry about this file yet.
 */
describe('MyFirstComponentComponent', () => {
  let component: MyFirstComponentComponent;
  let fixture: ComponentFixture<MyFirstComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
