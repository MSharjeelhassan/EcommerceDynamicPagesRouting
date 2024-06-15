import { Button } from "@mui/material"

function BAbutton(props:any) {

    const {btnValue} = props;
  return (
    <>
      <Button variant="outlined" color="primary" >{btnValue} </Button>
    </>
  )
}

export default BAbutton
