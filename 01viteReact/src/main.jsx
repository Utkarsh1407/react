import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>custom app !</h1>
    </div>
  )
}

// const ReactElement= {
//   type: 'a',
//   props: {
//       href: 'https::google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement= (
  <a  href='https:google.com' target='_blank'>Visit Google</a>
)

const anotherUder= "chai aur react"
const ReactElement= React.createElement(
  'a',
  {href: 'https:google.com', target: '_blank'},
  'click me to visit google ',
  anotherUder
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    // <App/>
    ReactElement
    // anotherElement
)
