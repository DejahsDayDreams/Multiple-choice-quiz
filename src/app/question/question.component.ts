import { Component, OnInit } from '@angular/core';
import { QuizQuestions } from '../Quiz.model';
import { QuizService } from '../Quiz.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions!: QuizQuestions[]; 
  currentQuestionIndex: number = 0;
  userAnswers: number [] = [];
  showResult: boolean = false;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.questions = this.quizService.getQuizQuestions();
  }

  selectAnswer(answerIndex: number) {
    this.userAnswers[this.currentQuestionIndex] = answerIndex;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  submitQuiz() {
    this.showResult = true;
  }


  allQuestionsAnswered(): boolean {
    return this.userAnswers.every((answer) => answer !== undefined)
  }

  countCorrectAnswers(): number {
  return this.userAnswers.reduce((correctCount, answer, index) => {
    if (answer == this.questions[index].CorrectAnswer){
      correctCount++;
    }
    return correctCount;
  }, 0);
  }

}