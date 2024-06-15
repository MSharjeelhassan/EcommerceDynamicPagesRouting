import { Box } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

function Footer1() {
  return (
    <>
      <Box className="py-5 border-top border-bottom">
        <Box className="container d-flex justify-content-around ">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className=" d-flex justify-content-center align-items-center border border-1"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            >
              <LocationOnOutlinedIcon />
            </div>
            <div>Find the Store</div>
          </div>
          <Box className="d-flex flex-column justify-content-center align-items-center">
            <Box
              className=" d-flex justify-content-center align-items-center border border-1"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            >
              <LocalShippingIcon />
            </Box>
            <Box>Ship your Product Everywhere</Box>
          </Box>
          <Box className="d-flex flex-column justify-content-center align-items-center">
            <Box
              className="d-flex justify-content-center align-items-center border border-1 "
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            >
              <CurrencyExchangeOutlinedIcon />
            </Box>
            <Box>Exchange Offer</Box>
          </Box>
        </Box>
      </Box>

      <Box className="container mt-5">
        <Box className="row justify-content-around gy-3 ">
          <Box className="col-12 col-md-5 col-lg-4  ">
            <Box className="text-start">
              <h2 className="d-none d-lg-block">VICTORIA AND WOODS</h2>
              <h2 className="d-lg-none d-block">NEWS LETTERS</h2>
              <p>
                Subscribe to the VIKTORIA & WOODS newsletter to stay in touch
                with news and new arrivals
              </p>
              <div className="d-flex gap-4">
                <input
                  className="form-control  rounded-0"
                  placeholder="Enter Email Address"
                  type="text"
                />{" "}
                <button className="btn btn-outline btn-secondary">
                  Subscribe
                </button>
              </div>
            </Box>
            <Box className="mt-5">
              <Box className="d-none d-lg-flex gap-3">
                <FacebookOutlinedIcon /> <FacebookOutlinedIcon />{" "}
                <FacebookOutlinedIcon />
              </Box>
            </Box>
          </Box>
          <Box className="col-12 col-md-3 col-lg-4  gx-1">
            <Box className="d-flex ">
              <ul className="">
                <Box className="pb-3 box">ABOUT</Box>
                <li>Stores</li>
                <li>About us</li>
                <li>Responsible Journal</li>
                <li>Business</li>
                <li>Career</li>
                <li>See More</li>
              </ul>

              <ul className="">
                <Box className="pb-3 box">CUSTOMER CARE</Box>
                <li className="">Contact us</li>
                <li>Submit a Return</li>
                <li>Shipping and Returns</li>
                <li>Size Guides</li>
                <li>FAQs</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </Box>
          </Box>
          <Box className="col-12 col-lg-2 ">
            <Box className='w-100'>
              <h6 className="mb-3 d-none d-lg-block">CURRENCY</h6>
              <Box className="d-flex d-lg-none gap-3 mb-5">
                <FacebookOutlinedIcon /> <FacebookOutlinedIcon />{" "}
                <FacebookOutlinedIcon />
              </Box> 
              <select className="form-select rounded-0" name="" id="">
                <option className="" value=""><span style={{fontSize:'5 !important',color:'primary'}}> AU</span> AUD</option>
              </select>
            </Box>
          </Box>
        </Box>


        <Box>
        <Box className = 'row my-5 justify-content-center'>
          <Box className='col-12 col-lg-5'>
          <h6 className="text-start text-lg-center">We acknowledge the Traditional Owners of the land on which we work and gather, at our Head Office in Naarm and our boutiques across this Nation, and pay our respects to Elders past, present and emerging. We celebrate the rich and diverse stories, cultures and traditions of all Aboriginal and Torres Strait Islander peoples who live and work on this land.</h6>
          <br />
          <h6 className="text-center">Copyright © 2024 Viktoria & Woods</h6>
          </Box>
        </Box>


        </Box>
      </Box>
    </>
  );
}

export default Footer1;
