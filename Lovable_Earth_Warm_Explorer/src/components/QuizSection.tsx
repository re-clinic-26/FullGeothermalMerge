import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw, Trophy } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizSectionProps {
  quizId: string;
  title: string;
  questions: QuizQuestion[];
  onComplete: () => void;
}

export const chapter1Quiz: QuizQuestion[] = [
  {
    question: "What is the primary source of geothermal energy?",
    options: [
      "Solar radiation absorbed by the Earth",
      "Heat from the Earth's interior",
      "Wind patterns underground",
      "Ocean currents"
    ],
    correctAnswer: 1,
    explanation: "Geothermal energy comes from heat stored inside the Earth, originating from radioactive decay and residual heat from planetary formation."
  },
  {
    question: "What is the approximate temperature increase per kilometer of depth?",
    options: [
      "5-10°C",
      "25-30°C",
      "50-60°C",
      "100°C"
    ],
    correctAnswer: 1,
    explanation: "The geothermal gradient averages about 25-30°C per kilometer, though this varies by location."
  },
  {
    question: "What advantage does geothermal have over solar and wind?",
    options: [
      "Lower installation cost",
      "No land use required",
      "24/7 baseload availability",
      "Higher maximum output"
    ],
    correctAnswer: 2,
    explanation: "Unlike solar and wind which are intermittent, geothermal provides constant 24/7 baseload power with capacity factors exceeding 90%."
  },
  {
    question: "How do ground-source heat pumps work in winter?",
    options: [
      "They burn fuel to generate heat",
      "They pull heat from the ground into buildings",
      "They use solar panels for heating",
      "They compress outdoor air"
    ],
    correctAnswer: 1,
    explanation: "In winter, ground-source heat pumps extract thermal energy from the relatively warm ground and transfer it into buildings for heating."
  },
  {
    question: "What is a key benefit of district heating systems?",
    options: [
      "Each building operates independently",
      "Shared infrastructure improves efficiency",
      "They only work in warm climates",
      "They require no maintenance"
    ],
    correctAnswer: 1,
    explanation: "District heating systems share infrastructure across multiple buildings, improving overall efficiency and reducing per-building costs."
  }
];

export const chapter2Quiz: QuizQuestion[] = [
  {
    question: "Who should be included in a geothermal project coalition?",
    options: [
      "Only engineers and contractors",
      "Just local government officials",
      "Multiple stakeholders including residents, government, and utilities",
      "Only property owners"
    ],
    correctAnswer: 2,
    explanation: "Successful projects require broad coalitions including residents, local government, utilities, engineers, and community organizations."
  },
  {
    question: "What does a feasibility study analyze?",
    options: [
      "Only construction costs",
      "Geology, energy demand, infrastructure, and costs",
      "Just environmental impact",
      "Marketing strategies"
    ],
    correctAnswer: 1,
    explanation: "Feasibility studies comprehensively analyze geology, energy demand, existing infrastructure, and cost estimates to determine project viability."
  },
  {
    question: "Which is NOT a common financing model for geothermal projects?",
    options: [
      "Utility-owned",
      "Public-private partnership",
      "Individual crowdfunding only",
      "Community ownership"
    ],
    correctAnswer: 2,
    explanation: "Common models include utility ownership, government funding, public-private partnerships, and community ownership—not solely individual crowdfunding."
  },
  {
    question: "What is the 'Ladder of Engagement' used for?",
    options: [
      "Measuring building heights",
      "Calculating energy savings",
      "Guiding supporters from passive interest to active leadership",
      "Determining drilling depth"
    ],
    correctAnswer: 2,
    explanation: "The Ladder of Engagement is a framework for gradually moving community members from initial awareness to active project leadership."
  }
];

export const chapter3Quiz: QuizQuestion[] = [
  {
    question: "What is the purpose of well casing in geothermal drilling?",
    options: [
      "Decoration",
      "Protecting groundwater and lining the wellbore",
      "Increasing temperature",
      "Reducing costs"
    ],
    correctAnswer: 1,
    explanation: "Well casing protects groundwater supplies and provides structural support for the wellbore during drilling and production."
  },
  {
    question: "What is the Coefficient of Performance (COP) for heat pumps?",
    options: [
      "The ratio of heat output to electricity input",
      "The depth of drilling required",
      "The cost per kilowatt",
      "The number of buildings served"
    ],
    correctAnswer: 0,
    explanation: "COP measures efficiency—for every 1 unit of electricity, heat pumps typically deliver 3-5 units of heat energy."
  },
  {
    question: "When is water in a geothermal well likely to be steam?",
    options: [
      "At surface level",
      "Below 100°C",
      "Above 100°C",
      "Only in winter"
    ],
    correctAnswer: 2,
    explanation: "Water converts to steam at 100°C at sea level. Deep geothermal wells often exceed this temperature, producing steam for power generation."
  }
];

export function QuizSection({ quizId, title, questions, onComplete }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
      onComplete();
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question?.correctAnswer;

  return (
    <motion.div 
      id={quizId}
      className="content-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-serif font-semibold flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-primary" />
          {title}
        </h3>
        <span className="text-sm text-muted-foreground">
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-muted rounded-full mb-6 overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {!completed ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg font-medium mb-6">{question.question}</p>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === question.correctAnswer;
                
                let buttonClass = "w-full text-left p-4 rounded-lg border transition-all ";
                
                if (showResult) {
                  if (isCorrectAnswer) {
                    buttonClass += "bg-success/10 border-success text-success-foreground";
                  } else if (isSelected && !isCorrectAnswer) {
                    buttonClass += "bg-destructive/10 border-destructive text-destructive";
                  } else {
                    buttonClass += "bg-muted/50 border-border opacity-50";
                  }
                } else {
                  buttonClass += isSelected 
                    ? "bg-primary/10 border-primary" 
                    : "bg-card border-border hover:border-primary hover:bg-primary/5";
                }

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={buttonClass}
                    whileHover={!showResult ? { scale: 1.02 } : {}}
                    whileTap={!showResult ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {showResult && isCorrectAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      )}
                      {showResult && isSelected && !isCorrectAnswer && (
                        <XCircle className="w-5 h-5 text-destructive" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <div className={`p-4 rounded-lg ${isCorrect ? 'bg-success/10 border border-success/30' : 'bg-primary/10 border border-primary/30'}`}>
                    <p className="text-sm font-medium mb-1">
                      {isCorrect ? "✓ Correct!" : "✗ Not quite right"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {question.explanation}
                    </p>
                  </div>

                  <motion.button
                    onClick={handleNext}
                    className="mt-4 flex items-center gap-2 text-primary font-medium hover:underline"
                    whileHover={{ x: 5 }}
                  >
                    {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Trophy className="w-16 h-16 mx-auto text-primary mb-4" />
            </motion.div>
            
            <h4 className="text-2xl font-semibold mb-2">Quiz Complete!</h4>
            
            <motion.p 
              className="text-4xl font-bold text-primary mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {score} / {questions.length}
            </motion.p>
            
            <p className="text-muted-foreground mb-6">
              {score === questions.length 
                ? "Perfect score! You've mastered this chapter." 
                : score >= questions.length * 0.7 
                  ? "Great job! You have a solid understanding."
                  : "Keep learning! Review the chapter and try again."}
            </p>

            <motion.button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default QuizSection;
