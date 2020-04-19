import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// // Exercise 1.6 - 1.7: unicafe step1 + step2-------------------------------------------------------------------------
// const Display = props => <h1>{props.title}</h1>

// const Button = ({onClick, text}) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const Info = ({type, state, symbol}) => (
//   <p>
//     {type} {state} {symbol}
//   </p>
// )

// const App = () => {
//   // save clicks of each button to own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <Display title='give feedback'/>
//       <Button onClick={() => setGood(good + 1)} text='good' />
//       <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
//       <Button onClick={() => setBad(bad + 1)} text='bad' />
//       <Display title='statistics'/>
//       <Info type='good' state={good} />
//       <Info type='neutral' state={neutral} />
//       <Info type='bad' state={bad} />
//       <Info type='all' state={good + neutral + bad} />
//       <Info type='average' state={(1*good + 0*neutral + (-1)*bad)/(good + neutral + bad)} />
//       <Info type='positive' state={(good/(good + neutral + bad))*100} symbol=' %' />
//     </div>
//   )
// }
// ReactDOM.render(<App />, 
//   document.getElementById('root')
// )

// // Exercise 1.8 - 1.11: unicafe step3 + step4 + step5 + step6 ---------------------------------------------------------
// const Display = props => <h1>{props.title}</h1>

// const Button = ({onClick, text}) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const Statistic = ({text, value, symbol}) => (
//   <tr>
//     <td>{text}</td> 
//     <td>{value} {symbol}</td>
//   </tr>
// )

// const Statistics = (props) => {
//   if (props.good + props.neutral + props.bad === 0){
//     return(
//       <div><Statistic text='No feedback given' /></div>      
//     )
//   }else{
//     return(
//       <table>
//         <Statistic text="good" value ={props.good} />
//         <Statistic text="neutral" value ={props.neutral} />
//         <Statistic text="bad" value ={props.bad} />
//         <Statistic text='all' value={props.good + props.neutral + props.bad} />
//         <Statistic text='average' value={(1*props.good + 0*props.neutral + (-1)*props.bad)/(props.good + props.neutral + props.bad)} />
//         <Statistic text='positive' value={(props.good/(props.good + props.neutral + props.bad))*100} symbol=' %' />
//       </table>
//     )
//   }
// }

// const App = () => {
//   // save clicks of each button to own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <Display title='give feedback'/>
//       <Button onClick={() => setGood(good + 1)} text='good' />
//       <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
//       <Button onClick={() => setBad(bad + 1)} text='bad' />
//       <Display title='statistics'/>
//       <Statistics good={good} neutral={neutral} bad={bad} />      
//     </div>
//   )
// }
// ReactDOM.render(<App />, 
//   document.getElementById('root')
// )

// Exercise 1.12 - 1.14: anecdotes step1 + step2 + step3
const Display = ({text}) => (
  <h1>{text}</h1>
)

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
      {text}
    </button>  
)

const refresh = () => {
  ReactDOM.render(
    <App anecdotes={anecdotes} copy={copy}/>,
    document.getElementById('root')
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 

  const indexOfMaxValue = props.copy.indexOf(Math.max(...props.copy))

  const handleVote = () => {
    props.copy[selected] += 1
    refresh()
  }

  return (
    <div>
      <Display text='Anecdote of the Day' />
      {props.anecdotes[selected]}
      <div>has {props.copy[selected]} votes</div>
      <div>
        <Button onClick={handleVote} text='vote'/>
        <Button onClick={() => setSelected(getRandomInt(0,5))} text='next anecdote'/>      
      </div>
      <Display text='Anecdote with most votes' />
      {props.anecdotes[indexOfMaxValue]}
      <div>has {props.copy[indexOfMaxValue]} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = [0, 0, 0, 0, 0, 0]

const copy = [...points]  

refresh()
