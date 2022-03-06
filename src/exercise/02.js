// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

/*******************************************************************************
 * Exercise
 ******************************************************************************/
// function Toggle({children}) {
//   const [on, setOn] = React.useState(false)
//   const toggle = () => setOn(!on)

//   // 🐨 replace this with a call to React.Children.map and map each child in
//   // props.children to a clone of that child with the props they need using
//   // React.cloneElement.
//   // 💰 React.Children.map(props.children, child => {/* return child clone here */})
//   // 📜 https://reactjs.org/docs/react-api.html#reactchildren
//   // 📜 https://reactjs.org/docs/react-api.html#cloneelement
//   // return <Switch on={on} onClick={toggle} />
//   return React.Children.map(children, child => {
//     return React.cloneElement(child, {
//       on,
//       toggle,
//     })
//   })
// }

// // 🐨 Flesh out each of these components

// // Accepts `on` and `children` props and returns `children` if `on` is true
// const ToggleOn = ({on, children}) => (on ? children : null)

// // Accepts `on` and `children` props and returns `children` if `on` is false
// const ToggleOff = ({on, children}) => (on ? null : children)

// // Accepts `on` and `toggle` props and returns the <Switch /> with those props.
// const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

// function App() {
//   return (
//     <div>
//       <Toggle>
//         <ToggleOn>The button is on</ToggleOn>
//         <ToggleOff>The button is off</ToggleOff>
//         <ToggleButton />
//       </Toggle>
//     </div>
//   )
// }

/*******************************************************************************
 * Extra 1. 💯 Support DOM component children
 ******************************************************************************/
function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    if (!supportedComponents.includes(child.type)) {
      // if (typeof child.type === 'string') {
      return child
    }
    return React.cloneElement(child, {
      on,
      toggle,
    })
  })
}

const ToggleOn = ({on, children}) => (on ? children : null)
const ToggleOff = ({on, children}) => (on ? null : children)
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

const supportedComponents = [ToggleOn, ToggleOff, ToggleButton]

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
