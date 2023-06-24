import styled from "styled-components";
import {font} from "../styles/Common";

export const SectionTitle=styled.h2`
  ${font({
    family:"'Nunito', sans-serif",
    weight: 700,
    Fmax: 48,
    Fmin: 38
  })}
  text-align: center;
  font-style: normal;
  position: relative;
  margin-bottom: 30px;
`