import { StrictMode  } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

const anotherElement = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to open google',
  anotherElement
)

createRoot(document.getElementById('root')).render(
  <>
  {reactElement}
    <Chai/>
    <App />
  </>
   
)
