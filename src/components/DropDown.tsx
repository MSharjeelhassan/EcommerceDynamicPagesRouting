// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { useState } from 'react';

// export default function DropDown(props:any) {
// const{data}=props;
// const [cat, setCat] = useState<any>('')

//   const handleChange = (event: SelectChangeEvent) => {
//     setCat(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel id="demo-simple-select-helper-label">Catergory</InputLabel>
//         <Select
//           labelId="demo-simple-select-helper-label"
//           id="demo-simple-select-helper"
//           value={cat}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value="">
//             {/* <em>All Products</em> */}
//           </MenuItem>
//           <MenuItem value={11}>All Products</MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//         <FormHelperText>Select category according to your prefrences</FormHelperText>
//       </FormControl>
      
//     </div>
//   );
// }
