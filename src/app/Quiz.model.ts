export interface QuizQuestions{
    
    question: string;
    options:string[];
    CorrectAnswer: number;
}

export const quizData: QuizQuestions[]=[
    {
        question:"Who is designed by PHP ?",
        options: ['leroy merlin', 'Rasmus Lerdorf', 'Severus Snape', 'Ryan Renolds'],
        CorrectAnswer: 1
    },
    {
        question:"PHP initial release date ?",
        options: ['1993', '1994', '1995', '1996'],
        CorrectAnswer: 2
    },
    {
        question:"PHP files have a default file extension of",
        options: ['.js', 'php', '.txt', '.php'],
        CorrectAnswer: 3
    },
    {
        question:"Which of the following correct PHP syntax?",
        options: ['<?php...?>', '/* */', '<html>', '<php>'],
        CorrectAnswer: 0
    },
    {
        question:"In PHP, instructions are terminated by using what?",
        options: ['@', '*', ';', '#'],
        CorrectAnswer: 2
    },
    {
        question:"PHP Variable start with which symbol?",
        options: ['$', '&', '@', '!'],
        CorrectAnswer: 0
    },
    {
        question:"The PHP syntax is most similar to:",
        options: ['Javascript', 'HTML', 'Java', 'Perl and C'],
        CorrectAnswer: 3
    },
    {
        question:"How do you write Hello World in PHP",
        options: ['"Hello World";', 'echo "Hello World";', 'echo " "', 'print this for me pls'],
        CorrectAnswer: 1
    },
    







]