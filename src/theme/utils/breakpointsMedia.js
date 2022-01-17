import { breakpoints } from '../index';
import {css} from  'styled-components'

export function breakpointsMedia(cssByBreakpoints) {
    const breakpointsNames = Object.keys(cssByBreakpoints);
   return breakpointsNames.map( (breakpointName) => {
       //console.log("breakpoins ", breakpointName);
       return css`
           @media screen and (min-width: ${breakpoints[breakpointName]}px) {
               ${cssByBreakpoints[breakpointName]}
           }
       `
   })
   
/*
   return breakpointsNames.map( (breakpointName) => {
    return css`
        @media screen and (min-width: ${theme.breakpoints[breakpointName]} px) {
            ${cssByBreakpoints[breakpointName]}
        }
    `
}).join()
*/
} 
