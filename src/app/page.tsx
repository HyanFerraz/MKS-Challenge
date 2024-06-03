'use client'

import { CartSideBar } from "@/components/cartSideBar";
import { Catalog } from "@/components/catalog";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeProviderWrapper from "@/components/providers/themeProvider";
import { CartProvider } from "@/components/providers/cartProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({subsets: ['latin'], weight:"400"})

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const queryClient = new QueryClient

  return (
    <ThemeProviderWrapper>
      <QueryClientProvider client={queryClient}>
        <body className={montserrat.className}>    
          <main>
            <CartProvider>
              <Header onOpenSidebar={() => setIsSidebarOpen(true)}/>
              <CartSideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
              <Catalog />
            </CartProvider>
            <Footer />
          </main>
        </body>
      </QueryClientProvider>
    </ThemeProviderWrapper>
  );
}
