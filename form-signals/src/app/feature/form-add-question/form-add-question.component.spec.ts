/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAddQuestionComponent } from './form-add-question.component';
describe('FormAddQuestionComponent', () => {
  let component: FormAddQuestionComponent;
  let fixture: ComponentFixture<FormAddQuestionComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddQuestionComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
