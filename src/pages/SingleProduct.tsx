import { Box, Button, ButtonGroup } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [count, setCount] = useState(0);
const [singleData, setSingleData] = useState<any>({});
  const params = useParams();
console.log(params);


  const add = () => {
    // count<0 ? return:setCount(count+1)
    // if(count>)
    setCount(count + 1);
  };

  const minus = () => {
    // if (count < 0) {
    // }
    // setCount(count - 1);
  };

console.log(params.id)

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res:any)=>{
      console.log('success');
      console.log(res.data)
      setSingleData({...res.data});

    }).catch((error:any)=>{
      alert(error)
      console.log(error)
    })
  },[])

  return (
    <>
      <Box className="container bg-white">
        <Box className="row">
          <Box className="col-12 col-lg-6">
            <Box className="">
              <img src={singleData.image} className="img-fluid" alt="image here" />
            </Box>
          </Box>

          <Box
            className="col-12 col-lg-6"
            style={{ backgroundColor: "var(--colorbg)" }}
          >
            <Box className="px-3">
              <Box className="">
                <p>{singleData.title}</p>
                <p> $ {singleData.price}</p>
                <p>{singleData.description}</p>
                <Box className="d-flex justify-content-between border-bottom border-danger border-2">
                  <Box className="">
                    <ButtonGroup
                      variant="contained"
                      aria-label="Basic button group"
                    >
                      <Button onClick={add}>+</Button>
                      <Button>{count}</Button>
                      <Button onClick={minus}>-</Button>
                    </ButtonGroup>
                  </Box>
                  <Box className="mb-3 ">
                    <Button variant="contained" color="secondary">
                      ADD TO CART
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="px-3 pt-2">Category: Mens</Box>
          </Box>
        </Box>
        <Box className='display-5 text-center my-3'>Related Products</Box>
        <Box className='row'>

            <Box className='col-10 col-lg-3'>

            </Box>

        </Box>
      </Box>
    </>
  );
};

export default SingleProduct;
