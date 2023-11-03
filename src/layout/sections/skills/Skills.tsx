import React from 'react';
import {StyledTitle} from "../information/Information";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {styled} from "styled-components";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper>
                <StyledTitle>
                    <Skill/>
                </StyledTitle>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`