import styled from "styled-components";
import { PageNation } from "./styledComponent";

export const LogoImage = styled.img`
  width: 107px;
  height: 83px;
  position: relative;
  top: 33px;
  left: 100px;
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
export const FirstDiv = styled.div`
  position: relative;
  background-color: #fff;
  @media screen and (max-width: 375px) {
    order: 1;
  }
`;
export const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
export const InsideSone = styled.div`
  position: relative;
  left: 122px;
  top: 75px;
  @media screen and (max-width: 375px) {
    position: relative;
    left: 0px;
    top: 0px;
    margin-bottom: 15px;
  }
`;
export const HeadLine = styled.h1`
  font-family: Source Sans Pro;
  color: rgba(14, 35, 104, 1);
  width: 340px;
  font-size: 62px;
  font-weight: 700;
  line-height: 69px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 375px) {
    width: 240px;
    height: 130px;
    font-size: 38px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
export const Best = styled.span`
  color: rgba(226, 55, 68, 1);
`;
export const Paragraph = styled.p`
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  width: 280px;
  color: rgba(68, 73, 87, 1);
  @media screen and (max-width: 375px) {
    width: 249px;
    height: 36px;

    font-size: 11px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
export const ButtonExplore = styled.button`
  background-color: rgba(226, 55, 68, 1);
  border: none;
  outline: none;
  color: #fff;
  width: 190px;
  height: 63px;
  padding: 14px, 34px, 14px, 34px;
  border-radius: 34px;
  gap: 7px;
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.01em;
  text-align: center;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    width: 120px;
    height: 40px;
    margin-left: 50px;
    padding: 12px, 30px, 12px, 30px;
    border-radius: 30px;
    gap: 6px;
    font-size: 12px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.01em;
    text-align: center;
  }
`;
export const ImageDiv = styled.div`
  display: flex;
  background-color: #e23744;
  border-radius: 41% 0% 0% 83% / 0% 25% 52% 89%;
  flex-direction: row;
  padding-top: 20px;
`;
export const Image = styled.img`
  width: 735px;
  height: 804px;
  border-radius: 250px 600px 400px 198.9px;
  @media screen and (max-width: 375px) {
    width: 378.21px;
    height: 413.72px;
    border-radius: 180px 606px 400px 198.9px;
  }
`;
export const GetouchBtn = styled.button`
  width: 122px;
  height: 42px;
  position: relative;
  top: 50px;
  right: 150px;
  padding: 3px, 26px, 3px, 26px;
  border-radius: 21px;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  gap: 10px;
  z-index: 1000;
  cursor: pointer;
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.03em;
  text-align: center;

  @media screen and (max-width: 375px) {
    width: 87.89px;
    height: 31px;
    right: 50px;
    padding: 4px, 33px, 4px, 33px;
    border-radius: 27px;
    border: 1px;
    gap: 13px;
    font-family: Source Sans Pro;
    font-size: 11px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0.03em;
    text-align: center;
    border-radius: 27px;
    border: 2px solid #fff;
    background: transparent;
    color: #fff;
  }
`;

export const SectionTwo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(
    to right,
    rgba(30, 42, 93, 0.04),
    rgba(48, 62, 130, 0.04),
    rgba(60, 80, 157, 0.04)
  );
  margin-top: 100px;
  @media screen and (max-width: 375px) {
    text-align: center;
    width: 462px;
    padding-bottom: 20px;
  }
`;
export const AboutImage = styled.img`
  width: 384px;
  height: 468px;
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
export const AboutHead = styled.h2`
  font-family: Poppins;
  font-size: 45px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(14, 35, 104, 1);
  @media screen and (max-width: 375px) {
    font-size: 26px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
export const AboutParagraph = styled.p`
  width: 447px;
  height: 138px;
  font-family: Open Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 375px) {
    width: 275px;
    height: 138px;
    font-size: 11px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
export const ReadMoreBtn = styled.button`
  background-color: rgba(226, 55, 68, 1);
  font-family: Source Sans Pro;
  color: #fff;
  width: 132px;
  height: 42px;
  padding: 3px, 26px, 3px, 26px;
  border-radius: 21px;
  gap: 10px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    width: 96px;
    padding: 4px, 33px, 4px, 33px;
    border-radius: 27px;
    gap: 13px;
    font-family: Source Sans Pro;
    font-size: 11px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0.03em;
    text-align: center;
  }
`;
export const PageNationCard = styled.div`
  padding: 100px 10px 100px 50px;
`;
export const ListHead = styled.h2`
  font-family: Source Sans Pro;
  font-size: 56px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0.04em;
  text-align: left;
  color: rgba(14, 35, 104, 1);
  @media screen and (max-width: 375px) {
    width: 216px;
    height: 54px;
    font-family: Poppins;
    font-size: 28px;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 0.04em;
    text-align: left;
  }
`;
export const UlistContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const List = styled.li`
  list-style: none;
  background: rgba(255, 255, 255, 1);
  width: 381px;
  height: 554px;
  border-radius: 20.94px;
  border: 1.37px solid rgba(147, 162, 211, 0.38);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 375px) {
    width: 271px;
    height: 484px;

    border-radius: 26.77px;
    border: 0.88px solid rgba(147, 162, 211, 0.38);
    margin-bottom: 10px;
  }
`;
export const ListImage = styled.img`
  width: 326px;
  height: 257px;
  border-radius: 21px;
  @media screen and (max-width: 375px) {
    width: 204px;
    height: 166px;

    border-radius: 27px;
  }
`;
export const ListTitle = styled.h3`
  font-family: Poppins;
  font-size: 21px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(14, 35, 104, 1);
  @media screen and (max-width: 375px) {
    width: 236px;
    height: 35px;

    font-size: 16px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0.05em;
    text-align: left;
  }
`;
export const ListPara = styled.p`
  width: 295px;
  height: 81px;
  font-family: Open Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -0.02em;
  text-align: left;
  @media screen and (max-width: 375px) {
    width: 213px;
    height: 106px;
    font-family: Source Sans Pro;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-align: left;
  }
`;
export const ListButton = styled.button`
  width: 131px;
  height: 42px;
  padding: 3px, 26px, 3px, 26px;
  border-radius: 21px;
  border: 1px solid rgba(66, 73, 97, 1);
  color: rgba(66, 73, 97, 1);
  gap: 10px;
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.03em;
  text-align: center;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    width: 118px;
    height: 35px;
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    padding: 4px, 33px, 4px, 33px;
    border-radius: 27px;
    border: 2px solid rgba(66, 73, 97, 1);
    gap: 13px;
  }
`;
export const PageBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PageButtonsg = styled.button`
  color: rgba(66, 73, 97, 1);
  width: 28px;
  height: 29px;
  border-radius: 5px;
  font-weight: bold;
  border: 2px solid rgba(66, 73, 97, 1);
  angle: -0 deg;
  cursor: pointer;
  margin-left: 10px;
`;
export const PageButtonsl = styled.button`
  color: rgba(175, 175, 175, 1);
  width: 28px;
  height: 29px;
  border-radius: 5px;
  font-weight: bold;
  border: 2px solid rgba(175, 175, 175, 1);
  angle: -0 deg;
  cursor: pointer;
  margin-right: 10px;
`;
export const PageNumber = styled.p`
  font-family: Source Sans Pro;
  font-size: 22px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;
export const Footer = styled.footer`
  background-color: rgba(248, 248, 248, 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 375px) {
    display: block;
    padding-left: 30px;
    padding-top: 50px;
    width: 430px;
  }
`;
export const FotLogo = styled.img`
  width: 161px;
  height: 125px;
  @media screen and (max-width: 375px) {
    width: 75px;
    height: 58px;
    align-self: center;
    margin-left: 100px;
  }
`;
export const ContactUsField = styled.h3`
  font-family: Source Sans Pro;
  font-size: 19px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.03em;
  text-align: left;
  color: rgba(14, 35, 104, 1);
  @media screen and (max-width: 375px) {
  }
`;
export const ContactPara = styled.p`
  width: 217px;
  height: 69px;
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(100, 104, 116, 1);
`;
export const ContactMail = styled.p`
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(100, 104, 116, 1);
`;
export const ContactNumber = styled.p`
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(100, 104, 116, 1);
`;
export const More = styled.h3`
  font-family: Source Sans Pro;
  font-size: 19px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.03em;
  text-align: left;
  color: rgba(14, 35, 104, 1);
`;
export const MoreFields = styled.p`
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(14, 35, 104, 1);
`;
export const Social = styled.h3`
  font-family: Source Sans Pro;
  font-size: 19px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.03em;
  text-align: left;
  color: rgba(14, 35, 104, 1);
  @media screen and (max-width: 375px) {
    display: none;
    justify-content: center;
  }
`;
export const AddressBar = styled.p`
  font-family: Source Sans Pro;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(100, 104, 116, 1);
  @media screen and (max-width: 375px) {
    order: 1;
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;
export const SocialDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
`;
