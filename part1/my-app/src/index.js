import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
      {props.name}
    </h1>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.ex1 + props.ex2 + props.ex3}
    </p>
  )
}

// // For ex.1.1 (Commented out section)
// const Content = (props) => {
//   return (
//     <p>
//         {props.part} {props.ex}
//     </p>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header name={course}/>
//       <Content part={part1} ex={exercises1}/>
//       <Content part={part2} ex={exercises2}/>
//       <Content part={part3} ex={exercises3}/>
//       <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
//     </div>
//   )
// }

// For ex.1.2
const Part = (props) => {
  return (
    <p>
      {props.part} {props.ex}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.pt1} ex={props.ex1}/>
      <Part part={props.pt2} ex={props.ex2}/>
      <Part part={props.pt3} ex={props.ex3}/>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content pt1={part1} ex1={exercises1} pt2={part2} ex2={exercises2} pt3={part3} ex3={exercises3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
