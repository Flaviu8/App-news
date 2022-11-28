import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
  FilledInput
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FormContainer } from "./Search.style";

const Search = () => {
  return (
    <FormContainer>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={"text"}
          // value={}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                // onClick={handleSearch}
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </FormContainer>
  );
};

export default Search;
