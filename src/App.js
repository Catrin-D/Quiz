import "./App.css";
import React from "react";


const questions = [
  {
    title: "Кто из животных не относится к семейству кошачьих?",
    variants: ["пуми", "ягуарунди", "маргай"],
    correct: 0,
    image: "/cat.jpg",
    alt: "cat",
  },
  {
    title: "Кто из животных не относится к семейству куньих?",
    variants: ["медоед", "сурок", "горностай"],
    correct: 1,
    image: "/ferret.jpg",
    alt: "ferret",    
  },
  {
    title: "Кто из этих животных не является рептилией?",
    variants: ["логгерхед" , "туатара" , "слепой труженик"],
    correct: 2,
    image: "/turtle.jpg",
    alt: "turtle",  
  },
  {
    title: "Кто из животных не относится к семейству собачьих?",
    variants: ["рэгдолл", "салюки", "ксолоитцкуинтли"],
    correct: 0,
    image: "/dog.jpg",
    alt: "dog",     
  },
  {
    title: "Кто из этих животных не является грызуном?",
    variants: ["сурикат", "капибара", "агути"],
    correct: 0,
    image: "/squirell.jpg",
    alt: "squirell",
  },
  {
    title: "Какой из этих грибов несъедобен (ядовит)?",
    variants: ["гиропорус синеющий", "навозник белый", "боровик прекрасный"],
    correct: 2,
    image: "/mashroom.jpg",
    alt: "mashroom",
  },
  {
    title: "Кто из животных не является рыбой?",
    variants: ["сериола", "нарвал", "лаврак"],
    correct: 1,
    image: "/fish.jpg",
    alt: "fish",
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="/applause.gif" alt="applause"  />
      <h2>
          Поздравляем! Вы правильно ответили на {correct} вопрос(ов) из {questions.length}
      </h2>
        <a href="/">
          <button>Попробуйте еще раз</button>
        </a>
    </div>
  );
}

function Game({currentQuestion , onClickVariant , step}) {

  const percent = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <div className="result">
          <img src={currentQuestion.image} alt={currentQuestion.alt} />
      </div>

      <h1>{currentQuestion.title}</h1>
      <ul>
        {
          currentQuestion.variants.map((el , index) => {
            return (
            <li onClick={() => onClickVariant(index)} key={index}>
              {el}
            </li>
          )
          })
        }
      </ul>
    </>
  );
}

function App() {

  const [step , setStep] = React.useState(0); 
  const [correct , setCorrect] = React.useState(0);
  const currentQuestion = questions[step];

  const onClickVariant = (index) => {

    if(index === currentQuestion.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);

  }
 
  return (
    <div className="App">
      {
        step < questions.length ? 
       (<Game currentQuestion={currentQuestion} onClickVariant={onClickVariant} step={step}/>) :
       (<Result correct={correct}/>)
      }
    </div>
  );
}

export default App;
