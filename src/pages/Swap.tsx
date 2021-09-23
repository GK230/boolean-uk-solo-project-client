import React from "react"
import "../styles/signup.css"
import "../styles/swap.css"
import useStore from "../store"
import { useHistory } from "react-router"
import { SyntheticEvent, useState } from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

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

function getStyles(name: string, personName: string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const itemType = [
    
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

function Swap() {

    const loggedUser = useStore(state => state.loggedUser)
    
    const userId = loggedUser.id

    // const [itemImages, setItemImages] = React.useState<string[]>([]);
    const [itemImages, setItemImages] = React.useState('');

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [personName, setPersonName] = React.useState<string[]>([]);
    const [brand, setBrand] = React.useState('');
    // const [newItem, setNewItem] = useState(initialItemData)


    const newItem = {
      userId: userId,
      itemImages: itemImages,
      title: title,
      description: description,
      itemType: personName,
      brand: brand,
    };
  
    // const currentUser = useStore(state => state.loggedUser)
    const theme = useTheme();
    
    
    const addItem = useStore(state => state.addItem)

    

    

    const history = useHistory()

    // function handleChange(event: any) {
    //     const { name, value } = event.target as HTMLInputElement;

    //     setNewItem({ ...newItem, [name]: value });

        
    //   }

      const handleChangeItemTypes = (event: SelectChangeEvent<typeof itemType>) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    
      const handleChangeBrand = (event: SelectChangeEvent) => {
        setBrand(event.target.value as string);
      };
    
 
    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        addItem(newItem)
        console.log(newItem)
    }

    return (
        <main className="signup-page swap-page">
            <h2 className="signup-title swap-title">Swap</h2>
            <form className="signup-form" onSubmit={handleSubmit} action="/profile-upload-multiple" encType="multipart/form-data">
                <label>
                    Item photos:
                    <input multiple className="itemPhotoFile" type="file"  name="itemImages" placeholder="Item images" onChange={(e) => setItemImages(e.target.value)}/>
                </label>
                <input type="text" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                <textarea name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                <div>
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Item type</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={personName}
                      onChange={handleChangeItemTypes}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                    >
                      {itemType.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>        
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={brand}
                      label="Brand"
                      onChange={handleChangeBrand}
                      name="brand"
                    >
                      <MenuItem value={"Adidas"}>Adidas</MenuItem>
                      <MenuItem value={"Levi's"}>Levi's</MenuItem>
                      <MenuItem value={"North Face"}>North Face</MenuItem>
                      <MenuItem value={"Clarks"}>Clarks</MenuItem>
                      <MenuItem value={"Nike"}>Nike</MenuItem>
                      <MenuItem value={"Converse"}>Converse</MenuItem>
                      <MenuItem value={"Next"}>Next</MenuItem>
                      <MenuItem value={"Primark"}>Primark</MenuItem>
                      <MenuItem value={"Rayban"}>Rayban</MenuItem>
                      <MenuItem value={"H&M"}>H&amp;M</MenuItem>
                      <MenuItem value={"Matalan"}>Matalan</MenuItem>
                      <MenuItem value={"PUMA"}>PUMA</MenuItem>
                      <MenuItem value={"Tu Clothing"}>Tu Clothing</MenuItem>
                      <MenuItem value={"George"}>George</MenuItem>
                      <MenuItem value={"Timberland"}>Timberland</MenuItem>
                      <MenuItem value={"Selfridges"}>Selfridges</MenuItem>
                      <MenuItem value={"River Island"}>River Island</MenuItem>
                      <MenuItem value={"Reebok"}>Reebok</MenuItem>
                    </Select>
                  </FormControl>
                </Box>                
                <button className="signup-submit" type="submit" value="submit">Submit</button>
            </form>
        </main>
    )
}

export default Swap