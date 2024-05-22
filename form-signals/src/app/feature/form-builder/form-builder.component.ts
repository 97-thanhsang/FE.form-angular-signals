import { Component, OnInit, Signal, signal } from '@angular/core';
import { IQuestionModel } from '../../model/IBuilder.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormBuilderService } from '../../service/form-builder.service';
import { TypeQuestion } from '../../service/constant/enum';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent implements OnInit {

  typeQuestion = TypeQuestion;

  tempQuest: IQuestionModel[] = [{
    ID: this.formBuilderService.generateGUID(),
    Type: TypeQuestion.TEXT,
    Title: 'Please tell us about yourself *',
    Content: [{
      ID: this.formBuilderService.generateGUID(),
      Title:'',
      Content: undefined,
      Checked: false
    }],
    IsRequired: false
  },
  {
    ID: this.formBuilderService.generateGUID(),
    Type: TypeQuestion.CHECKBOX,
    Title: 'Please select the languages you know *',
    Content : [{
      ID: this.formBuilderService.generateGUID(),
      Title:'Typescript',
      Content: undefined,
      Checked: false
    },
    {
      ID: this.formBuilderService.generateGUID(),
      Title:'Python',
      Content: undefined,
      Checked: false
    },
    {
      ID: this.formBuilderService.generateGUID(),
      Title:'C#',
      Content: undefined,
      Checked: false
    },
    {
      ID: this.formBuilderService.generateGUID(),
      Title:'Other',
      Content: undefined,
      Checked: true
    }],
    IsRequired: false
  }];

  questions = signal<IQuestionModel[]>([]);

  constructor(private formBuilderService : FormBuilderService){

  }

  // constructor() {
  //   this.questionsSignal = createSignal([
  //     { question: 'What is Angular?', answer: 'A web application framework.' },
  //     { question: 'What is a component?', answer: 'A building block of Angular applications.' }
  //   ]);
  // }
  // public questions : IQuestionModel[] = [];
  ngOnInit(): void {
    this.questions.set(this.tempQuest);
  }
  addQuest() {

  }
}
