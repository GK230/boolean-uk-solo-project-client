import React from "react"
import "../styles/signup.css"
import "../styles/swap.css"
import { Redirect } from "react-router"
import { SyntheticEvent } from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

export type UserCreds = {
  id: any;
  username: string;
  password: string;
};

type HeaderProps = {
  loggedUser: UserCreds | null;
  clearUserState: (data: null) => void;
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

function Swap({ loggedUser, clearUserState }: HeaderProps) {

    const baseUrl = process.env.REACT_APP_API_URL 

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [personName, setPersonName] = React.useState<string[]>([]);
    const [brand, setBrand] = React.useState('');

    const handleChangeItemTypes = (event: SelectChangeEvent<typeof itemType>) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

   

    function submitForm(event: SyntheticEvent) {
      const targetEvent = event.target as HTMLFormElement;
      event.preventDefault();
      const userId = loggedUser?.id
      const formData = new FormData();
      const images = targetEvent.files.files;
      for(let i = 0; i < images.length; i++) {
              formData.append("files", images[i]);

      }
      formData.append("title", title)
      formData.append("description", description)
      const names = personName
      for(let i = 0; i < names.length; i++) {
        formData.append("items", names[i]);
      }
      formData.append("brand", brand)
      formData.append("userId", userId)
      // const user = loggedUser.username

      // formData.append("user", user)

      fetch(`${baseUrl}/upload_files`, {
          method: 'post',
          body: formData
      })
          .then((res) => {
            if (res.ok) {
              return res.json()
             }
          });
          <Redirect to="/sucess"/>
        }

    const theme = useTheme();
    
    const handleChangeBrand = (event: SelectChangeEvent) => {
        setBrand(event.target.value as string);
      };


    return (
        <main className="signup-page swap-page">
            <h2 className="signup-title swap-title">Swap</h2>
            <form className="signup-form" action="/profile-upload-multiple" encType="multipart/form-data" onSubmit={submitForm}>
                <label className="itemPhotoFile">
                    Item photos:
                </label>
                <input className="files" type="file" multiple  name="files" placeholder="Item images" required/>
                    
                <input type="text" name="title" placeholder="Title" accept="image/*"  required onChange={(e) => setTitle(e.target.value)}/>
                <textarea name="description" placeholder="Description" required onChange={(e) => setDescription(e.target.value)}/>
                <div>
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Item type</InputLabel>
                    <Select
                      name="theItems"
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={personName}
                      onChange={handleChangeItemTypes}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                      required
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
                <Box sx={{ width: 300 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                    <Select                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={brand}
                      label="Brand"
                      onChange={handleChangeBrand}
                      name="brand"
                      required
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