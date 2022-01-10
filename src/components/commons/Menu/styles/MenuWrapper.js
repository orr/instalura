import styled from 'styled-components'

export  const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  margin-left: 28px;
  margin-right: 28px;
`;

MenuWrapper.LeftSide = styled.div`
    padding: 0;
    margin: 0 ;
    order: 1;
`;

MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #88989E;
  padding: 12px;
  
  /* ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })} */
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
    /* ${breakpointsMedia({
    xs: css`
        ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })} */
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
      
    }
  }
`;

MenuWrapper.RightSide = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex: 1;
    order: 2;
    justify-content: flex-end;
`;