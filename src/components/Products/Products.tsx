import * as React from 'react'
import { ProductCard } from '../ProductCard'

export function Products(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row p-2 md:p-6 max-w mx-2 md:mx-20 my-2 md:my-20 rounded-xl shadow-md items-center bg-fawn space-x-0 md:space-x-5 space-y-2 md:space-y-0">
      <ProductCard
        title="How-To Motivationsschreiben Guide"
        content="Kaufe den How-To Motivationsschreiben Guide mit 8 Schritten in 4 Stunden zu deinem
        perfektem Motivationsschreiben."
        price={30}
      />
      <ProductCard
        title="Got your back service"
        content="Kaufe ein Paket mit den How-To Motivationsschreiben Guide mit 1 Stunden persönliche
Beratung zu deinem Motivationsschreiben."
        price={120}
      />
      <ProductCard
        title="Hold your hand service"
        content="Kaufe ein Paket mit dem How-To Guide mit 2 x 1 Stunde persönliche Beratung für dein
Motivationsschreiben. Eine Stunde persönliche Beratung vor der Erstellung deines
Motivationsschreiben (z.B. gemeinsame Beantwortung des Fragebogens aus dem How-To
Guide, Erstellung erstes Konzept des Motivationsschreibens…). Eine Stunde persönliche
Beratung nachdem du einen ersten Entwurf des Motivationsschreibens nach basierend auf
dem Input unseres ersten Meetings erstellt hast."
        price={200}
      />
    </div>
  )
}
