import styled, { css } from "styled-components";
import get from "lodash/get";
import { TextStyleVariants } from "../../foundation/Text";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background: transparent;
`;


const ButtonDefault = css`
    background-color: ${ (props) => {
        return get(props.theme, `colors.${props.variant}.color`);
    }};
    color: ${ ({theme,variant}) => get(theme, `colors.${variant}.contrastText`)};
    
    
    
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({theme}) => theme.borderRadius};
    
    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
    `,
  })}





    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  
    &:hover, &:focus {
        opacity: 0.5;
    }

`;
