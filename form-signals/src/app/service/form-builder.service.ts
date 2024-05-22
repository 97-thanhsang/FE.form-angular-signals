import { Injectable, Signal, signal } from '@angular/core';
import { IQuestionModel } from '../model/IBuilder.model';
import { TypeQuestion } from './constant/enum';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  tempQuest: IQuestionModel[] = [{
    ID: this.generateGUID(),
    Type: TypeQuestion.TEXT,
    Title: 'Please tell us about yourself *',
    Content: [{
      ID: this.generateGUID(),
      Title:'',
      Content: undefined,
      Checked: false
    }],
    IsRequired: false
  },
  {
    ID: this.generateGUID(),
    Type: TypeQuestion.CHECKBOX,
    Title: 'Please select the languages you know *',
    Content : [{
      ID: this.generateGUID(),
      Title:'Typescript',
      Content: undefined,
      Checked: false
    },
    {
      ID: this.generateGUID(),
      Title:'Python',
      Content: undefined,
      Checked: false
    },
    {
      ID: this.generateGUID(),
      Title:'C#',
      Content: undefined,
      Checked: false
    },
    {
      ID: this.generateGUID(),
      Title:'Other',
      Content: undefined,
      Checked: true
    }],
    IsRequired: false
  }];

  questions : IQuestionModel[] = [];

  constructor() { }



  generateGUID(): string {
    function S4(): string {
        return (((1 + Math.random()) * 0x10000) | 0)
            .toString(16)
            .substring(1);
    }
    return (
        S4() +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        S4() +
        S4()
    );
}


GetQuestions() {
  debugger
  return this.questions = [...this.tempQuest,...this.questions];
}



}
