import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";
import { Skill } from "./skill/Skill";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <Container>
      <SkillsStyled>
        <SectionTitle>My skills</SectionTitle>
        <FlexWrapper justify="space-between" align="center" wrap="wrap">
          <Skill iconId="html" title="HTML" />
          <Skill iconId="css" title="CSS" />
          <Skill iconId="javaScript" title="JS" />
          <Skill iconId="typeScript" title="TS" />
          <Skill iconId="react" title="React" />
          <Skill iconId="git" title="Git" />
        </FlexWrapper>
      </SkillsStyled>
    </Container>
  );
};

const SkillsStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 120px 14px 0;
  outline: 1px solid ${myTheme.colors.accentB};

  ${SectionTitle} {
    position: relative;
    width: fit-content;

    ::before {
      content: "";
      border-bottom: 1px solid ${myTheme.colors.accentA};
      position: absolute;
      height: 2px;
      width: 70%;
      top: -10px;
    }
  }

  @media ${myTheme.media.tablet} {
    padding-top: 40px;

    ${SectionTitle} {
      margin-bottom: 20px;
    }

    ${FlexWrapper} {
      justify-content: space-evenly;
    }

    ${SectionTitle} {
      @media ${myTheme.media.tablet} {
        &::before {
          content: "";
          top: -4px;
        }
      }
    }
  }
`;
