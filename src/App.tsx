import React from 'react'
import { Introduction } from './components/Introduction'
import { Motivation } from './components/Motivation'
import { ProductFacts } from './components/ProductFacts'
import { ProductPreview } from './components/ProductPreview'
import { SubscribeForm } from './components/SubscribeForm'

function App() {
  return (
    <div>
      <Introduction />
      <Motivation />
      <SubscribeForm />
      <ProductFacts />
      <ProductPreview />
    </div>
  )
}

export default App
