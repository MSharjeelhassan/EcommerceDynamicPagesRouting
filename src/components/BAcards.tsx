import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from "@mui/material";
function BAcards(props: any) {
  const { cardData } = props;
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {cardData.map((v: any, i: any) => {
            return (
              <>
                <div key={i} className="col-10 col-sm-8 col-md-6 col-lg-3">
                  <div className="card border-0">
                    <div className="bg-secondary" >
                        <Box className ='text-end pe-1 pt-1'>{<FavoriteBorderIcon/>}</Box>
                      <img
                      // borderRadius: "50%"
                        src={v.image}
                        style={{ height: "200px",  }}
                        className="px-2 my-5 card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                     <Link to={`/product/${v.id}`}> <h6 className="card-title">{v.title.slice(0, 20)}</h6></Link>
                      
                      <Link
                        to={`/product/${v.id}`}
                        className="btn btn-outline-primary d-block"
                      >
                        $ {v.price}
                      </Link>
                    </div>
                  </div>
                </div>{" "}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BAcards;
