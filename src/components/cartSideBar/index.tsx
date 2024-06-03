import { AnimatePresence } from "framer-motion";
import {
  CartHeader,
  CartItemsContainer,
  CheckoutButton, 
  CloseButton,
  SidebarContainer, 
  TotalContainer 
} from "./styles";
import { CartItem } from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../providers/cartProvider";
import { CartItems } from "@/@types/CartItems";

interface CartSideBarProps {
  isOpen: boolean,
  onClose: () => void
} 

export function CartSideBar ({isOpen, onClose} : CartSideBarProps) {
  const {cartItems} = useContext(CartContext)

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.product.price * item.quantity;
    });
    return total;
  };

  return (
    <AnimatePresence>
    {isOpen && (
      <SidebarContainer
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween' }}
      >
        <CartHeader>
          <h2><span>Carrinho</span> de compras</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </CartHeader>
        <CartItemsContainer>
          {
            cartItems.map((cartItems: CartItems) => (
              <CartItem key={cartItems.product.id} cartItems={cartItems}></CartItem>
            ))
          }
        </CartItemsContainer>
        <TotalContainer>
          <div>Total:</div>
          <p>{`R$ ${calculateTotal().toFixed(2)}`}</p>
        </TotalContainer>
        <CheckoutButton>Finalizar Compra</CheckoutButton>
      </SidebarContainer>
    )}
  </AnimatePresence>
  )
}