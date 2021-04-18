import React from 'react'
import { CustomerFeedback } from './components/CustomerFeedback'
import { Introduction } from './components/Introduction'
import { Motivation } from './components/Motivation'
import { ProductFacts } from './components/ProductFacts'
import { ProductPreview } from './components/ProductPreview'
import { Products } from './components/Products'
import { SubscribeForm } from './components/SubscribeForm'

function App() {
  return (
    <div>
      <Introduction />
      <Motivation />
      <SubscribeForm />
      <ProductFacts />
      <SubscribeForm />
      <ProductPreview />
      <Products />
      <SubscribeForm />
      <CustomerFeedback />
    </div>
  )
}

export default App
