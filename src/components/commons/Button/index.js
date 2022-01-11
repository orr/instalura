import styled, { css } from "styled-components";
import get from "lodash/get";
import theme from "../../../theme";
import { TextStyleVariantMap } from "../../foundation/Text";

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background: transparent;
`;

const ButtonDefault = css`
    color: white;
    background-color: ${ (props) => {
        //console.log("Button", props.variant, props.theme);
        return get(props.theme, `colors.${props.variant}.color`);
    }};
    color: ${ (props) => get(props.theme, `colors.${props.variant}.contrastText`)};
    
    
    
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;

    ${TextStyleVariantMap.smallestException}

    ${ function(props) {
        if( props.ghost)
            return ButtonGhost;
        return ButtonDefault;
    }}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({theme}) => theme.borderRadius};
    &:hover, &:focus {
        opacity: 0.5;
    }

`;
