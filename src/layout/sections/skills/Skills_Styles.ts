import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Skills = styled.section`
  ${FlexWrapper}{
    gap: 40px
  }
`

const Skill = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  position: relative;
`
const SkillNumber = styled.span`
  font-family: 'Epilogue',sans-serif;
  font-size: 70px;
  margin-right:35px;

 `
const SkillTitle = styled.h2`
  font-family: 'Epilogue',sans-serif;
  font-size: 30px;
`
const SkillDescription = styled.span`
  font-family: 'Epilogue',sans-serif;
  font-size: 18px;
  letter-spacing: 0.06em;
  text-transform: lowercase;
  font-style:italic;
`
const TextContainer = styled.div``

export const S={
    Skills,
    Skill,
    SkillNumber,
    SkillTitle,
    SkillDescription,
    TextContainer
}