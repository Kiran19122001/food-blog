import React, { useState } from 'react';
import topDesk from "./internet/top-desk.png";
import Logo from "./internet/logo.png";
import Picture from "./internet/Picture.png";
import one from "./internet/one.png";
import two from "./internet/two.png";
import three from "./internet/three.png";
import four from "./internet/four.png";
import five from "./internet/five.png";
import six from "./internet/six.png";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaGreaterThan,FaLessThan } from "react-icons/fa6";
import {
  Image, FirstDiv, LogoImage, SectionOne, InsideSone, HeadLine,
  Best, Paragraph, ButtonExplore, ImageDiv, GetouchBtn, AboutImage,
  SectionTwo, AboutHead, AboutParagraph, ReadMoreBtn,PageNationCard, ListHead, List, ListImage,
    ListTitle, ListPara, ListButton, UlistContainer, PageBtnContainer, PageButtonsg,
    PageButtonsl, PageNumber, Footer, FotLogo, ContactUsField, ContactPara, ContactMail, ContactNumber,
  More,MoreFields,AddressBar,Social,SocialMedia,SocialDiv
} from "./styledComponent"

const listData = [
  { image: one, title: "Grilled Tomatoes at Home", id: 1 },
  { image: two, title: "Snacks for Travel", id: 2 },
  { image: three, title: "Post-workout Recipes", id: 3 },
  { image: four, title: "How To Grill Corn", id: 4 },
  { image: five, title: "Crunchwrap Supreme", id: 5 },
  { image: six, title: "Broccoli Cheese Soup", id: 6 },
];

function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(listData.length / itemsPerPage);
  const paginate = (pageNumber) => {
    if (pageNumber < 1) {
      setCurrentPage(1);
    } else if (pageNumber > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <SectionOne>
      <FirstDiv>
              <LogoImage src={Logo} alt="cross"  />
                  <InsideSone>
                      <HeadLine>Discover the <Best>Best</Best> Food and Drinks</HeadLine>
              <Paragraph>Naturally made Healthcare Products for the better care & support of your body.</Paragraph>
              <ButtonExplore>Explore Now!</ButtonExplore>
              </InsideSone>
          </FirstDiv>
              <ImageDiv>
                    <Image src={topDesk} alt="cross" />
          <GetouchBtn type="button">Get in touch</GetouchBtn>
            
          </ImageDiv>
      </SectionOne>
      <SectionTwo>
        <AboutImage src={Picture} alt="cross" />
              <>
                  <AboutHead>About us</AboutHead>
                  <AboutParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</AboutParagraph>
                  <ReadMoreBtn type="button">Read More</ReadMoreBtn>
              </>
      </SectionTwo>
      <PageNationCard>
        <ListHead>Latest Articles</ListHead>
        <UlistContainer>
          {currentItems.map(item => (
            <List key={item.id}>
              <ListImage src={item.image} alt="item name" />
              <ListTitle>{item.title}</ListTitle>
              <ListPara>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</ListPara>
              <ListButton type="button">Read More</ListButton>
            </List>
          ))}
        </UlistContainer>
        <PageBtnContainer>
          <PageButtonsl type="button" onClick={() => paginate(currentPage - 1)}><FaLessThan/></PageButtonsl>
          <PageNumber>{currentPage}/{Math.ceil(listData.length / itemsPerPage)}</PageNumber>
          <PageButtonsg type="button" onClick={() => paginate(currentPage + 1)}><FaGreaterThan/></PageButtonsg>
        </PageBtnContainer>
      </PageNationCard>
      <Footer>
      <FotLogo src={Logo} alt="Logo" />
              <>
                  <ContactUsField>Contact Us</ContactUsField>
                  <ContactPara>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</ContactPara>
                  <ContactMail>example2020@gmail.com</ContactMail>
                  <ContactNumber>(904) 443-0343</ContactNumber>
              </>
              <>
                  <More>More</More>
                  <MoreFields>About Us</MoreFields>
                  <MoreFields>Products</MoreFields>
                  <MoreFields>Career</MoreFields>
                  <MoreFields>Contact Us</MoreFields>
              </>
              <SocialDiv>
                  <Social>Social Links</Social>
                  <SocialMedia>
                      <p><FaInstagram/></p>
                      <p><FaTwitter/></p>
                      <p><FaFacebookF/></p>
                  </SocialMedia>
                  <AddressBar>© 2022 Food Truck Example</AddressBar>
              </SocialDiv>
      </Footer>
    </div>
  )
}

export default Main;
