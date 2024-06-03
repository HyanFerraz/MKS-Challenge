import { CartItems } from '@/@types/CartItems';
import { Product } from '@/@types/Product';
import React, { createContext, useState } from 'react';

interface CartContextType {
    cartItems: CartItems[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
}

const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    decreaseQuantity: () => {},
});

function CartProvider({ children }: { children: React.ReactNode; }) {
    const [cartItems, setCartItems] = useState<CartItems[]>([]);

    const addToCart = (product: Product) => {
        const existingItem = cartItems.find(item => item.product.id === product.id);

        if (existingItem) {
            const updatedCartItems = cartItems.map(item => {
                if (item.product.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId: number) => {
        const updatedCartItems = cartItems.filter(item => item.product.id !== productId);
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (productId: number) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.product.id === productId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };