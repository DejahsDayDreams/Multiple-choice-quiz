import { Injectable } from "@angular/core";
import {quizData, QuizQuestions} from './Quiz.model';


@Injectable({
    providedIn: 'root',
})
export class QuizService{
    getQuizQuestions(): QuizQuestions[]{
        return quizData;
    }
}