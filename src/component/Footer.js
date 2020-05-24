import DesignElements from "../images/design-elements.png";
import React from "react";
import { Social } from "./Social.js";
import Tooltip from "@material-ui/core/Tooltip";
import styled from "styled-components";

export function RenderFooter() {
  const Sociallist = [
    {
      link: Social.email,
      img: "Email",
      content: "mvtnhan@gmail.com",
    },
    {
      link: Social.skype,
      img: "Skype",
      content: "Skype",
    },
    {
      link: Social.twitter,
      img: "Twitter",
      content: "Twitter",
    },
    {
      link: Social.Linkedin,
      img: "Linkedin",
      content: "Linkedin",
    },
  ];
  return (
    <Footer>
      <Container>
        <p>Copyright © 2020 Web mvtnhan. Contact Preferred Via:</p>
        <div className="IconFooter">
          {Sociallist.map((social) => (
            <a href={social.link} key={social.content}>
              <Tooltip title={social.content} placement="top">
                <img className={social.img} alt="" />
              </Tooltip>
            </a>
          ))}
        </div>
      </Container>
    </Footer>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 984px;
  margin: 0 auto;
  clear: both;

  p {
    width: 375px;
    margin-top: 7px;
  }

  .IconFooter {
    display: flex;
    .Email {
      background: url(${DesignElements}) no-repeat -191px -430px;
      &:hover {
        background: url(${DesignElements}) no-repeat -191px -462px;
      }
    }

    .Skype {
      background: url(${DesignElements}) no-repeat -223px -430px;
      &:hover {
        background: url(${DesignElements}) no-repeat -223px -462px;
      }
    }

    .Twitter {
      background: url(${DesignElements}) no-repeat -255px -430px;
      &:hover {
        background: url(${DesignElements}) no-repeat -255px -462px;
      }
    }

    .Linkedin {
      background: url(${DesignElements}) no-repeat -287px -430px;
      &:hover {
        background: url(${DesignElements}) no-repeat -287px -462px;
      }
    }
    a {
      margin-right: 5px;
      text-indent: -9999px;
    }

    img {
      display: block;
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;

  @media (max-width: 540px) {
    p {
      display: none;
    }
  }
`;
