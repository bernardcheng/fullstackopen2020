import React from 'react'
import ReactDOM from 'react-dom'

// // For ex.1.1: course information step1 ------------------------------------------------------------------------
// const Header = (props) => {
//   return (
//     <h1>
//       {props.name}
//     </h1>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>
//       Number of exercises {props.ex1 + props.ex2 + props.ex3}
//     </p>
//   )
// }

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

// For ex.1.2: course information step2 ------------------------------------------------------------------------
// const Header = (props) => {
//   return (
//     <h1>
//       {props.name}
//     </h1>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>
//       Number of exercises {props.ex1 + props.ex2 + props.ex3}
//     </p>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>
//       {props.part} {props.ex}
//     </p>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.pt1} ex={props.ex1}/>
//       <Part part={props.pt2} ex={props.ex2}/>
//       <Part part={props.pt3} ex={props.ex3}/>
//     </div>
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
//       <Content pt1={part1} ex1={exercises1} pt2={part2} ex2={exercises2} pt3={part3} ex3={exercises3}/>
//       <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
//     </div>
//   )
// }

// For ex.1.3: course information step3 ------------------------------------------------------------------------
// const Header = (props) => {
//   return (
//     <h1>
//       {props.name}
//     </h1>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>
//       Number of exercises {props.ex1 + props.ex2 + props.ex3}
//     </p>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>
//       {props.part} {props.ex}
//     </p>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.pt1} ex={props.ex1}/>
//       <Part part={props.pt2} ex={props.ex2}/>
//       <Part part={props.pt3} ex={props.ex3}/>
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Header name={course}/>
//       <Content pt1={part1.name} ex1={part1.exercises} pt2={part2.name} ex2={part2.exercises} pt3={part3.name} ex3={part3.exercises}/>
//       <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>
//     </div>
//   )
// }


// // For ex.1.4: course information step4 ------------------------------------------------------------------------
// const Header = (props) => {
//   return (
//     <h1>
//       {props.course}
//     </h1>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>
//       Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
//     </p>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>
//       {props.name} {props.exercises}
//     </p>
//   )
// }

// const Content = (props) => {
//   const section0 = props.parts[0]
//   const section1 = props.parts[1]
//   const section2 = props.parts[2]
//   return (
//     <div>
//       <Part name={section0.name} exercises={section0.exercises}/>
//       <Part name={section1.name} exercises={section1.exercises} />
//       <Part name={section2.name} exercises={section2.exercises} />
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   )
// }

// For ex.1.5: course information step5 ------------------------------------------------------------------------
const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const Total = (props) => {
  const section = props.parts.parts
  return (
    <p>
      Number of exercises {section[0].exercises + section[1].exercises + section[2].exercises}
    </p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const section = props.parts.parts
  return (
    <div>
      <Part name={section[0].name} exercises={section[0].exercises}/>
      <Part name={section[1].name} exercises={section[1].exercises} />
      <Part name={section[2].name} exercises={section[2].exercises} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
