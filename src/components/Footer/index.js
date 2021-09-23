import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkR,
  FooterLinkS,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Support Me</FooterLinkTitle>
              <FooterLinkR to='/'>Github</FooterLinkR>
              <FooterLinkR to='/'>Twitter</FooterLinkR>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Don't Click These Please</FooterLinkTitle>
              <FooterLinkR to='/'>They Are Just</FooterLinkR>
              <FooterLinkR to='/'>For Display</FooterLinkR>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Danger Zone</FooterLinkTitle>
              <FooterLinkR to='/'>These Also Make</FooterLinkR>
              <FooterLinkR to='/'>Everything Look Professional</FooterLinkR>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Site Map</FooterLinkTitle>
              <FooterLinkS to='about'>About Me</FooterLinkS>
              <FooterLinkS to='skills'>Skills</FooterLinkS>
              <FooterLinkS to='work'>My Work</FooterLinkS>
              <FooterLinkS to='resume'>Resume</FooterLinkS>
              <FooterLinkS to='contact'>Contact</FooterLinkS>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              adan moses
            </SocialLogo>
            <WebsiteRights>
              adan moses © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://twitter.com/adanequis" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="GitHub">
                <FaGitHub />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedIn />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>

        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
