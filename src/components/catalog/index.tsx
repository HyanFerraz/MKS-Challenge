'use client'

import { Product } from "@/@types/Product";
import { ProductCard } from "./card";
import { CatalogContainer, FilterContainer, OrderContainer, ProductsContainer, SelectContainer } from "./styles";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { North, South } from "@mui/icons-material";
import { CartContext } from "../providers/cartProvider";
import { Skeleton } from "@nextui-org/skeleton";

export function Catalog() {
  const { cartItems ,addToCart } = useContext(CartContext);

  const [rowsPerPage, setRowsPerPage] = useState(8)
  const [sortBy, setSortBy] = useState('')
  const [orderBy, setOrderBy] = useState('ASC')
  
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=${rowsPerPage}&sortBy=${sortBy == '' ? 'id' : sortBy}&orderBy=${orderBy}`);
      return response.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [rowsPerPage, sortBy, orderBy, refetch])

  const handleOrderClick = () => {
    if(orderBy === "ASC") 
      setOrderBy("DESC")
    else 
      setOrderBy('ASC')
  }

  return (
    <CatalogContainer>
      {isPending ? <p>Loading ...</p>
       :<div>
         <FilterContainer>
          <div>
            <label>Ordenar:</label>
            <SelectContainer id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value='' disabled>Selecione uma opção</option>
              <option value={'id'}>id</option>
              <option value={'price'}>Preço</option>
              <option value={'name'}>Alfabética</option>
            </SelectContainer>
            <OrderContainer onClick={handleOrderClick}>
              {orderBy === 'ASC' ? <North fontSize="small"/> : <South fontSize="small"/>}
            </OrderContainer>
          </div>
          <div>
            <label>Exibir:</label>
            <SelectContainer id="rowsPerPage" value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))}>
              <option value={8}>8 Produtos</option>
              <option value={12}>12 Produtos</option>
              <option value={16}>16 Produtos</option>
              <option value={20}>20 Produtos</option>
            </SelectContainer>
            <p>{data.count} produtos</p>
          </div>
        </FilterContainer>
        <ProductsContainer>
          {data.products.map((product : Product) => (
            <ProductCard key={product.id} product={product} addToCart={() => addToCart(product)}/>
          ))}
        </ProductsContainer>
      </div>
      }
    </CatalogContainer>
  )
}