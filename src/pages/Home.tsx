import { Box } from "@mui/material";
import BAbutton from "../components/BAbutton";
import BAcards from "../components/BAcards";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [catData, setCatData] = useState<any>([]);
  // const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        // console.log([res.data]);
        console.log([...res.data]);

        // setCatData([...res.data]);
        setCatData(res.data);
        // console.log({catData})
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Box
        style={{
          backgroundImage: "url(travel_banner_desktop.webp)",
          backgroundSize: "cover",
          backgroundPosition: "bottom-center",
          height: "600px",
        }}
        className="d-flex justify-content-center align-items-center text-white flex-column"
      >
        <h2 className="">NEW ARRIVALS</h2>
        <div>
          <BAbutton btnValue={"EXPLORE THE COLLECTION"} />
        </div>
      </Box>
      <Box className="container my-5">
        <BAcards cardData = {catData} />
      </Box>
    </>
  );
}

export default Home;
