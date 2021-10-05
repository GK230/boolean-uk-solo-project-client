import React, { useEffect } from "react";
import useStore from "../store";
import { Item } from "../store";
import bag1 from "../assets/IMG_0082.jpg"
import bag2 from "../assets/IMG_0084.jpg"



// import ProductCard from "../components/ProductCard"
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
      value: 10,
      label: '10',
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
      value: 40,
      label: '40',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 60,
      label: '60',
    },
    {
      value: 70,
      label: '70',
    },
    {
      value: 80,
      label: '80',
    },
    {
      value: 90,
      label: '90',
    },
    {
      value: 100,
      label: '100',
    },
  ];
  
  function valuetext(value: number) {
    return `${value}`;
  }

  type ProductPageProps = {
    item: Item;
  };

function Products({ item }: ProductPageProps) {


    const [itemType, setItemType] = React.useState<string[]>([]);
    const [brand, setBrand] = React.useState<string[]>([]);
    const [val, setVal] = React.useState(0);
    const items = useStore(state => state.items)
    const getAllItems = useStore(state => state.getAllItems)

    const handleChange = (event: any, newValue: number | number[]) => {
      setVal(newValue as number);
    };    


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeItemTypes = (event: SelectChangeEvent<typeof itemType>) => {
      const {
        target: { value },
      } = event;
      setItemType(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    const handleChangeBrands = (event: SelectChangeEvent<typeof brand>) => {
        const {
          target: { value },
        } = event;
        setBrand(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

      useEffect(() => {
        getAllItems();
      }, [getAllItems]);

      if (!items) {
        return <h2>loading...</h2>;
      }

    return (
    <main className="products-page">
        <header>
            <button className="products-button filter" onClick={handleOpen}>Filter</button>
        </header>
        <section className="filters"></section>
        <section className="container">
        <article className="product-card">
            <img className="product-card-image" src={bag1} alt={item.title}/>
            <h3 className="product-card-title">Leopard print oversized bag</h3>
            <h4 className="product-card-credits">Credits: 50</h4>
        </article>
          <article className="product-card">
            <img className="product-card-image" src={bag2} alt={item.title}/>
            <h3 className="product-card-title">Floral waterproof backpack</h3>
            <h4 className="product-card-credits">Credits 35</h4>
        </article>

        

          {/* {items.map((item) =>(
            <ProductCard 
            key={item.id}
						item={item as Item}
            />
            ))} */}

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
                <InputLabel id="demo-multiple-checkbox-label">Type</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={itemType}
                  onChange={handleChangeItemTypes}
                  input={<OutlinedInput label="Type" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {itemTypes.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={itemType.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Brand</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={brand}
              onChange={handleChangeBrands}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {brands.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={brand.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            value={val}
            onChange={handleChange}
          />
        </Box>
        </Box>
        </Fade>
      </Modal>
    </main>
    )
}

export default Products