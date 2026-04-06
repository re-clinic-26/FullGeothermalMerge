import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckCircle2, HelpCircle, RotateCcw, Trophy, XCircle } from 'lucide-react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizSectionProps {
  quizId: string;
  title: string;
  questions: QuizQuestion[];
}

export function QuizSection({ quizId, title, questions }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question?.correctAnswer;

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    if (answerIndex === question.correctAnswer) {
      setScore((current) => current + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((current) => current + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      return;
    }
    setCompleted(true);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <section id={quizId} className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-8 shadow-lg">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Knowledge Check</p>
          <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-800">
            <HelpCircle className="h-6 w-6 text-blue-600" />
            {title}
          </h3>
        </div>
        {!completed ? (
          <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-600 shadow-sm">
            {currentQuestion + 1} / {questions.length}
          </span>
        ) : null}
      </div>

      {!completed ? (
        <>
          <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
              transition={{ duration: 0.25 }}
            />
          </div>

          <motion.div key={currentQuestion} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <p className="mb-6 text-xl font-semibold leading-relaxed text-slate-800">{question.question}</p>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === question.correctAnswer;

                let className = 'w-full rounded-2xl border px-4 py-4 text-left transition-all duration-200 ';
                if (showResult) {
                  if (isCorrectAnswer) {
                    className += 'border-emerald-300 bg-emerald-50 text-emerald-900';
                  } else if (isSelected) {
                    className += 'border-red-300 bg-red-50 text-red-900';
                  } else {
                    className += 'border-slate-200 bg-white text-slate-500';
                  }
                } else {
                  className += isSelected
                    ? 'border-blue-300 bg-blue-50 text-slate-900'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50/50';
                }

                return (
                  <button key={option} type="button" className={className} onClick={() => handleAnswer(index)}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-medium">{option}</span>
                      {showResult && isCorrectAnswer ? <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" /> : null}
                      {showResult && isSelected && !isCorrectAnswer ? <XCircle className="h-5 w-5 flex-shrink-0 text-red-600" /> : null}
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 rounded-2xl border p-5 ${
                  isCorrect ? 'border-emerald-200 bg-emerald-50' : 'border-amber-200 bg-amber-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  ) : (
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                  )}
                  <div>
                    <p className="font-semibold text-slate-800">{isCorrect ? 'Correct.' : 'Not quite.'}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{question.explanation}</p>
                  </div>
                </div>
              </motion.div>
            ) : null}

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                disabled={!showResult}
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {currentQuestion < questions.length - 1 ? 'Next question' : 'Finish quiz'}
              </button>
            </div>
          </motion.div>
        </>
      ) : (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <Trophy className="h-8 w-8 text-emerald-600" />
            </div>
            <h4 className="mt-5 text-2xl font-bold text-slate-800">Quiz complete</h4>
            <p className="mt-2 text-slate-600">
              You answered {score} out of {questions.length} questions correctly.
            </p>
            <button
              type="button"
              onClick={handleRetry}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" />
              Try again
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
