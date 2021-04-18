import React from 'react'
import { Introduction } from './components/Introduction'
import { Motivation } from './components/Motivation'
import { ProductFacts } from './components/ProductFacts'
import { SubscribeForm } from './components/SubscribeForm'

function App() {
  return (
    <div>
      <Introduction />
      <Motivation />
      <SubscribeForm />
      <ProductFacts />
    </div>
  )
}

export default App
