import { Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialIcons = () => {
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
    </div>
  );
};

export default SocialIcons;
