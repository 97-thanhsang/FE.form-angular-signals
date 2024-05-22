import { Component, OnInit, signal } from '@angular/core';
import { FormBuilderService } from '../../service/form-builder.service';
import { Router } from '@angular/router';
import { IQuestionModel } from '../../model/IBuilder.model';
import { TypeQuestion } from '../../service/constant/enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-answer.component.html',
  styleUrls: ['./form-answer.component.scss']
})
export class FormAnswerComponent implements OnInit {

  typeQuestion = TypeQuestion;
  questions = signal<IQuestionModel[]>([]);
  constructor(
    private formBuilderService : FormBuilderService,
    private router: Router
  ){

  }
  ngOnInit() {
    debugger
    this.questions.set(this.formBuilderService.GetQuestions());

  }
  backQuest() {
    this.router.navigate(['/form/builder']);
  }
}
