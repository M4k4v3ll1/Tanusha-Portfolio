import React from 'react';
import {styled} from "styled-components";
import {Icon} from "../icon/Icon";

export const Logo = () => {
    return (
        <StyledLogo>
            <a href='#'>
            <Icon iconId={'insta'}/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
  display: inline-block;
`