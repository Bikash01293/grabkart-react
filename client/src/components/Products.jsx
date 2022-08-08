import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let tokst = localStorage.getItem("token");
    if (tokst !== "undefined") {
      var token = JSON.parse(localStorage.getItem("token"));
    }
    const getProducts = async() => {
      console.log("categories of the product: ",cat)
      try{
        const res = await axios.get(
       
        "http://localhost:3001/product", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
        )
        if(((res.data.data).length) === 0){
            return 

          } else {
            // console.log(res.data.data);
            setProducts(res.data.data);
          }
      } catch(err){
        console.log(err)
      }
    }
    getProducts();

  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  return (
    <Container>
        {products.map(item => (
            <Product key={item.id} item={item} />
         ))}
    </Container>
  )
}

export default Products
