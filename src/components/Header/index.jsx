import React from "react";

import Moview from '../../images/moview.svg' 
import TMDB from '../../images/tmdb-logo.svg' 

import { Wrapper, Content, LogoImg, TMDBLogo } from "./styles";

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={Moview} alt="moview-logo"/>
            <TMDBLogo src={TMDB} alt="tmdb-logo" />
        </Content>
    </Wrapper>
)

export default Header