import React, { useState } from "react";
import { Button, ExternalLinkButton, ContactButton, InputButton, CloseButton } from "../ButtonElement";
import { FaTimesCircle } from "react-icons/fa";
import Image from "next/image";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  BtnWrap,
} from "./InfoElements";
import ContactForm from "../ContactForm/index";
import Overlay from "../Overlay";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  buttonTo,
  href,
  resume,
  contactForm,
  noButton,
}) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  let buttonComponent;

  if (resume) {
    buttonComponent = (
      <ExternalLinkButton
        href={href}
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        primary={primary ? 1 : 0}
        dark={dark ? 1 : 0}
        dark2={dark2 ? 1 : 0}
        target="_blank"
      >
        {buttonLabel}
      </ExternalLinkButton>
    );
  } else if (contactForm) {
    buttonComponent = (
      <ContactButton
        onClick={() => setIsOverlayOpen(true)}
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        primary={primary ? 1 : 0}
        dark={dark ? 1 : 0}
        dark2={dark2 ? 1 : 0}
      >
        {buttonLabel}
      </ContactButton>
    );

  } else if (noButton) {
    buttonComponent = null;
  } else {
    buttonComponent = (
      <Button
        to={buttonTo}
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        primary={primary ? 1 : 0}
        dark={dark ? 1 : 0}
        dark2={dark2 ? 1 : 0}
      >
        {buttonLabel}
      </Button>
    );
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {buttonComponent}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Image src={img} alt={alt} width={400} height={400} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      {isOverlayOpen && (
        <Overlay>
          <CloseButton onClick={() => setIsOverlayOpen(false)}><FaTimesCircle /></CloseButton>
          <ContactForm />
        </Overlay>
      )}
    </>
  );
};

export default InfoSection;
