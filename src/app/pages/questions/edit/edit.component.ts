import { Component, OnInit } from '@angular/core';
import { QuestionResp, QuestionsService } from '../../../openapi/questions';

@Component({
  selector: 'efn-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  questions: QuestionResp[] = [];

  constructor(private questionsService:QuestionsService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {

  }
}
