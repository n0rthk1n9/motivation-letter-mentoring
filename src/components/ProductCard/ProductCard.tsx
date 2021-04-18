import * as React from 'react'

interface ProductCardProps {
  title: string
  content: string
  price: number
}

export function ProductCard(props: ProductCardProps): JSX.Element {
  const { title, content, price } = props

  return (
    <div className="bg-peach-crayola rounded-lg shadow-md items-center p-2 md:p-6">
      <h1>{title}</h1>
      <div>{content}</div>
      <div>{price} €</div>
    </div>
  )
}
