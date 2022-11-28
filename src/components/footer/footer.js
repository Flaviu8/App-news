import { FooterComponent, FooterEl, FooterInput, FooterInputEl, 
  FooterLink, 
  FooterTitle,
   Icons, FootercomponentEl, FooterCopyright } from "./footer.style"
import facebook from "../../icons/facebook.png"
import instagram from "../../icons/instagram.png"
import twitter from "../../icons/twitter.png"

const Footer = () => {
  return (
    <FooterComponent>
      <FooterEl>
        <FooterTitle>Bring global news straight to your inbox. Sign up for our weekly newsletter.</FooterTitle>
      </FooterEl>
          <FootercomponentEl>
          <p>Email *</p>
            <FooterInputEl>
              <FooterInput type="text"></FooterInput>
              <FooterLink href="/">Get Subscribers</FooterLink>
            </FooterInputEl>
                <div>
                    <Icons src={instagram}></Icons>
                    <Icons src={facebook}></Icons>
                    <Icons src={twitter}></Icons>
                </div>
                    <FooterCopyright>
                      © 2035 by The Global Morning. Powered and secured by Wix.com  
                    </FooterCopyright>
          </FootercomponentEl>
          
    </FooterComponent>
  );
};

export default Footer;
