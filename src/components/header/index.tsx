'use client'

import { ShoppingCart } from "@mui/icons-material";
import { CartContainer, HeaderContainer, LogoContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../providers/cartProvider";

interface HeaderProps {
  onOpenSidebar: () => void
}

export default function Header({onOpenSidebar} : HeaderProps) {
  const { cartItems } = useContext(CartContext)

 const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <HeaderContainer>
      <section>
        <LogoContainer>
          <span>MKS</span>Sistemas
        </LogoContainer>
        <CartContainer onClick={onOpenSidebar}>
          <ShoppingCart fontSize="small"/>
          <p>
            {totalItems}
          </p>
        </CartContainer>
      </section>
    </HeaderContainer>
  );
}
