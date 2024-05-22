import { Component, OnInit, Signal, signal } from '@angular/core';
import { IQuestionModel } from '../../model/IBuilder.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormBuilderService } from '../../service/form-builder.service';
import { TypeQuestion } from '../../service/constant/enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent implements OnInit {


  typeQuestion = TypeQuestion;

   questions = signal<IQuestionModel[]>([]);



  constructor(
    private formBuilderService : FormBuilderService,
    private router: Router
  ){

  }

  // constructor() {
  //   this.questionsSignal = createSignal([
  //     { question: 'What is Angular?', answer: 'A web application framework.' },
  //     { question: 'What is a component?', answer: 'A building block of Angular applications.' }
  //   ]);
  // }
  // public questions : IQuestionModel[] = [];
  ngOnInit(): void {
    debugger
    this.questions.set(this.formBuilderService.GetQuestions());
  }
  addQuest() {

  }
  viewAnswer() {
    this.router.navigate(['/form/answer']);
  }
}
