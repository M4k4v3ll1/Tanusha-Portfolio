import React from 'react';
import {styled} from "styled-components";
import mainPhoto from '../../../assets/images/mainPhoto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                <div>
                    <Name>Tatyana Trandina</Name>
                    <MainTitle>UX | UI designer 24 years old, Minsk</MainTitle>
                    <button>ru</button>
                    <button>eng</button>
                </div>
                <div>
                    <Photo src={mainPhoto} alt={'Мое фото'}/>
                </div>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100%;
  background-color: #c4f19b;
`

const Photo = styled.img`
  width: 944px;
  height: 388px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`