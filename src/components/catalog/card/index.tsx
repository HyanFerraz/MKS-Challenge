'use client'

import Image from "next/image";
import { BuyButton, CardContainer, PriceTag, ProductSection } from "./styles";
import { Product } from "@/@types/Product";
import { ShoppingBagOutlined } from "@mui/icons-material";

interface ProductCardProps {
  product : Product,
  addToCart: () => void
}

export function ProductCard({product, addToCart} : ProductCardProps) {

  const {
    id,
	  name,
	  brand,
	  description,
	  photo,
	  price,
  } = product

  return (
    <CardContainer >
      <div>
        <Image src={photo} alt={`Imagem de um ${name}`} width={218} height={140} style={{objectFit: "contain"}}/>
        <ProductSection>
          <h1>
            {name}
          </h1>
          <PriceTag>
            <p>
              R${price}
            </p>
          </PriceTag>
        </ProductSection>
        <h2>
          {description}
        </h2>
      </div>
      <BuyButton onClick={addToCart}>
        <ShoppingBagOutlined />
        Comprar
      </BuyButton>
    </CardContainer>
  )
}