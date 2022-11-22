import { useEffect, useState } from "react";
import styled from "styled-components";
import Cart from "./components/Cart";
import Products from "./components/Products";
/* Função para chamar API
* @param {string} url caminho da função
*@param {string} method m
*@returns objeto de resposta
*/
async function api(url, method, body = undefined) {
  return await fetch(`http://localhost:4000$ {url}`, {
    body: body !== undefined ? JSON.stringify(body) : body,
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

/**
 * 
 * @returns 
 */

async function apiGetProducts() {
  const data = await api("/products", "GET");
  return data.products;
}

/**
 * Salva o carrinho de compras na API
 * @param {Object[]} products lista de produtos
 *  */

async function apiSubmitCart(products) {
}
await api("/purchases", "POST", { products });




function App() {
  const [productsLoading, setProductsLoading] = useState(false); // Status do loading de produtos
  const [products, setProducts] = useState([]); // Lista de produtos
  const [cart, setCart] = useState([]); // Lista de produtos no carrinho
  const [cartLoading, setCartLoading] = useState(false); // Status do loading do carrinho
  /**
  * Busca os produtos
  */
  async function getProducts() {

    setProductsLoading(true); // Ativa loading de produtos
    setProducts(await apiGetProducts()); // Salva lista de produtos na variavel global 
    setProductsLoading(false); // Desativa loading de produtos
  }
  /**
  XX
  */
  //Salva o carrinho
  async function submitCart() {
    setCartLoading(true); // Ativa loading do carrinho
    await apiSubmitCart(cart); // Salva o carrinho setCart([]); // Limpa o carrinho
    setCartLoading(false); // Desativa loading do carrinho
    getProducts(); // Busca os produtos novamente
  }


  /*
  Altera unidades do produto
  */

  function setProduct(product, change) {
    const products = cart.filter(({ _id }) => {
      return id !== product.id;
    });

    product.units += change;
    if (product.units > 0) {
      setCart(() => [...products, product]);
    } else {
      setCart(() => [...products]);
      setProducts((LastProducts) => [...LastProducts, product]);
    }
  }

  /* 
  Adiciona produto no carrinho
  */

  function addProduct(product) {
    product.units = 1;
    setCart(() => [...cart, product]);

    setProducts(() =>
      products.filter(({ id }) => {
        return id !== product.id;
      })
    );
  }
  useEffect(() => {
    getProducts(); // Busca os produtos ao carregar a pagina
  }, []);
  return;
}
export default App;
