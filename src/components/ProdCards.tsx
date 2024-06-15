import { Box } from "@mui/material";


const ProdCards = (props: any) => {
  const { data } = props;



  return (
    <>
      {data.map((v: any, i: any) => {
        return (
          <>
          <Box key={i} className ='col-12 col-sm-6 col-lg-4'>
            <div className="card">
              <div>
                <img className="w-100" src={v.image} alt="" />
              </div>
              <div className="px-2">
                <h6>{v.category}</h6>
                <h4>{v.title}</h4>
                <h6>{v.description}</h6>
                <div>stars</div>
                <p> $ {v.price}</p>
              </div>
            </div>
            </Box>
          </>
        );
      })}
    </>
  );
};

export default ProdCards;
