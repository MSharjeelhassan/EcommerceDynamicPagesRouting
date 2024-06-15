import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ProdCards from "../components/ProdCards";
// import DropDown from "../components/DropDown";

const Product = () => {

// const [category, setCategory]= useState<any>([]);
const [products, setProducts] = useState<any>([]);





  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products?authuser=0")
  //     .then((res) => {
  //       setProducts([...res.data]);
  //      setCategory(Array.from(new Set([...res.data].map((v:any,i:any)=>v.category))))
  //       console.log(category);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?authuser=0")
      .then((res) => {
        setProducts([...res.data]);
        console.log({products})
        console.log(products)
       
      })
      .catch((error) => {
        alert(error);
      });
  }, []);






  return (
    <>
<Box className='container'>
  <Box className = 'row'>
<Box className = 'col-10 col-lg-4'>
<Box>
{/* <DropDown data={products}/> */}
</Box>
</Box>
  </Box>

</Box>


      <Box className="container rounded my-5 " style={{backgroundColor:'var(--colorbg)'}}> 
        <Box className="row justify-content-center align-items-center">
          
            <ProdCards data={products} />
      
        </Box>
      </Box>
    </>
  );
};

export default Product;
