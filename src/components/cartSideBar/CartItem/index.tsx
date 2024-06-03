import { CartItems } from "@/@types/CartItems"
import Image from "next/image"
import { CardFooter, CartItemCard, PriceTag, QuantityButton, RemoveButton } from "./styles"
import { useContext } from "react"
import { CartContext } from "@/components/providers/cartProvider"

interface CartItemsProps {
  cartItems : CartItems
}

export function CartItem({cartItems} : CartItemsProps) {
  const {addToCart, decreaseQuantity, removeFromCart} = useContext(CartContext)

  const {
    product,
    quantity
  } = cartItems

  return (
    <CartItemCard>
      <RemoveButton onClick={() => removeFromCart(product.id)}>X</RemoveButton>
      <Image src={product.photo} alt={`Imagem de um ${product.name}`} width={218} height={140} style={{objectFit: "contain"}}/>  
      <span>{product.name}</span>
      <CardFooter>
        <QuantityButton>
          <button onClick={() => decreaseQuantity(product.id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </QuantityButton>
        <PriceTag>
          R${product.price}
        </PriceTag>
      </CardFooter>
    </CartItemCard>
  )
}