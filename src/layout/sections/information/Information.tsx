import React from 'react';
import {styled} from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Information = () => {
    return (
        <FlexWrapper direction={'column'} align={'center'}>
            <StyledTitle>About me</StyledTitle>
            <p>Hi, I'm Denis – UX/UI designer from Minsk.<br/>I'm interested in design and everything connected with it.</p>
            <p>I'm studying at courses "Web and mobile design<br/>interfaces" in IT-Academy.</p>
            <p>Ready to implement excellent projects<br/>with wonderful people.</p>
        </FlexWrapper>
    );
};

export const StyledTitle = styled.h2`

`