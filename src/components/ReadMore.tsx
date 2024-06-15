import { Box } from "@mui/material";
import { useState } from "react";

function ReadMore() {
  const [readmore, setReadmore] = useState<any>(false);
  

const Read =()=>{
  setReadmore(!readmore);
}

  return (
    <Box className="border border-primary border-top-1">
      <Box className="mt-5 container row justify-content-center">
        <Box className="col-12 col-lg-8">
          <Box>
            <h4>Shop Viktoria & Woods Collection</h4>
            <p className=''>
              Proudly, the majority of our collections are made locally in
              Australia. While the brand first started with a focus on Merino
              wool basics, designed to layer, the fashion collection has evolved
              into a complete ready to wear range of designer womenswear. Our
              enduring designs are made to last for years to come and be
              wardrobe staples that you will turn to time and again. Viktoria &
              Woods winter and summer collections include tailored suiting,
              blazers, denim, loungewear, knitwear, dresses, tops, and modern
              event wear. The range also includes footwear, jewellery and
              additions to complete your outfit styling. <br />
              Effortless Tailoring
            </p>
        
            
           {readmore ? <p>
              Enhance your wardrobe staples with exclusive new arrivals from the
              ready-to-wear collection online and in-store at our designer
              Viktoria & Woods boutiques. Where understated forms transcend
              feminine silhouettes and sophisticated detailing, welcome a
              versatile range of new wardrobe essentials to your collection.
              Whether cut from our signature bamboo blend, made from a
              lightweight linen or constructed from our certified silk
              fabrication, browse through an assembly of tops, dresses, pants,
              outerwear and more. From tailored jumpsuits perfect for special
              events to elevated loungewear and our signature denim for off-duty
              days, discover the latest instalment of ready to wear pieces and
              new season accessories online at Viktoria & Woods.
              <br />
              Combining sophistication, versatility and luxurious detail,
              explore a selection of transcending styles, designed for every
              occasion in the calendar. Whether you’re updating your winter
              trench coat or want a new summer dress for a sun soaked vacation,
              our commitment to modern aesthetics can be found in unexpected
              detailing and the latest separates. Designed with considered
              simplicity, our signature merino wool is transformed from season
              to season in updated colour palettes with modern accents and
              silhouettes. Breathable bamboo and luxurious linen take centre
              stage, reinventing layers in various tones and shapes for every
              Viktoria & Woods woman. Join us online today and browse through
              our premium collections or visit us in one of our boutiques for
              the in store Viktoria & Woods experience.
            </p> : ''}  
            
            {/* <button className="mb-5 border border-bottom-1" onClick={()=>setReadmore(!readmore)}>{readmore? "Showless": "Read More"}</button> */}
            <button className="mb-5 border border-bottom-1" onClick={Read}>{readmore? "Showless": "Read More"}</button>
       
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ReadMore;
