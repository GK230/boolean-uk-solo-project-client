import React from "react";
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import "../styles/products.css"

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  const itemTypes = [
    
        "fashion",
          "home",
        "mens",
         "womens",
        "shoes",
       "tops",
         "bottoms",
         "dresses",
         "coats",
         "jackets",
         "boots",
         "sandals",
         "trainers",
       "shirts",
       "t-shirts",
       "leggings",
       "jeans",
       "bedroom",
       "kitchen",
       "living-room",
      
  ];

  const brands = [
    
     "Adidas",
         "Levi's",
         "North Face",
         "Clarks",
         "Nike",
         "Converse",
       "Next",
         "Primark",
         "Rayban",
         "H&M",
         "Matalan",
        "PUMA",
         "Tu Clothing",
        "George",
         "Timberland",
         "Selfridges",
         "River Island",
         "Reebok",
  
];
  
  const marks = [
    {
      value: 0,
      label: '1',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: 10000,
      label: '10,000',
    },
  ];
  
  function valuetext(value: number) {
    return `${value}`;
  }

function Products() {
    const [personName, setPersonName] = React.useState<string[]>([]);

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
      });

      const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

      const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
    <main className="products-page">
        <header>
            <button className="products-button filter" onClick={handleOpen}>Filter</button>
        </header>
        <section className="filters"></section>
        <section className="container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </section>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          
            <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Item</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {itemTypes.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Size</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleCheckBoxChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleCheckBoxChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleCheckBoxChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
      </FormControl>
      </Box>
      
    </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Max Credits

              </Typography>
              <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
            
          </Box>
          
        </Fade>

      </Modal>
    </main>

    )
}

export default Products