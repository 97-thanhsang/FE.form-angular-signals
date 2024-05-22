import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TypeQuestion } from '../../service/constant/enum';
import { IQuestionModel } from '../../model/IBuilder.model';
import { FormBuilderService } from '../../service/form-builder.service';

@Component({
  selector: 'app-form-add-question',
  standalone: true,
  imports: [CommonModule,BrowserModule,ReactiveFormsModule],
  templateUrl: './form-add-question.component.html',
  styleUrls: ['./form-add-question.component.scss']
})
export class FormAddQuestionComponent implements OnInit {
  typeQuestion = TypeQuestion;
  form: FormGroup;
  formValueSignal = signal<IQuestionModel>({
    ID: undefined,
    Type: undefined,
    Title: '',
    Content: [],
    IsRequired: false
  });

  constructor(private fb: FormBuilder,private formBuilderService : FormBuilderService) {
    this.form = this.fb.group({
      ID : formBuilderService.generateGUID,
      Type: ['', Validators.required],
      Title: ['', [Validators.required, Validators.email]],
      Content: this.fb.array([this.createItem(), this.createItem()]),
      IsRequired: [false],
    });

    // Update the signal whenever the form value changes
    this.form.valueChanges.subscribe(value => this.formValueSignal.set(value));

    // Effect to log the signal value whenever it changes
    effect(() => {
      // console.log('Form Value:', this.formValueSignal.value);
    });
   }

   get items(): FormArray {
    return this.form.get('items') as FormArray;
  }


  createItem(): FormGroup {
    return this.fb.group({
      ID: this.formBuilderService.generateGUID,
      Title : ['Add Answer Option'],
      Content : ['',Validators.required],
      Checked : [false]
    });
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

   onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      // Optionally, reset the form
      this.form.reset();
      this.formValueSignal.set({ name: '', email: '' });
    }

    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      // Optionally, reset the form
      this.form.reset();
      this.formValueSignal.set({
        name: '',
        email: '',
        gender: '',
        acceptTerms: false,
        items: []
      });
    }
  }

  ngOnInit() {
  }

}
