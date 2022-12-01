import { useState } from 'react';
import { Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchComponent from '../searchButton/SearchComponent';

const SocialIcons = () => {
  const [show, setShow] = useState(false)
  const handleOnClick = () => {
    setShow(!show);
  }
  return (
    <div>
      <Link>
        <FacebookIcon />
      </Link>
      <Link>
        <InstagramIcon />
      </Link>
      <Link>
        <TwitterIcon />
      </Link>
      <button onClick={handleOnClick}>Click</button>
      {show ? <SearchComponent /> : ''}
    </div>
  );
};

export default SocialIcons;
