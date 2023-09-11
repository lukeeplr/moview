import React from "react";
import { Link } from "react-router-dom";

import Moview from '../../images/moview-logo.svg' 
import TMDB from '../../images/tmdb-logo.svg' 

import { Wrapper, Content, LogoImg, TMDBLogo } from "./styles";

const Header: React.FC = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
            <LogoImg src={Moview} alt="moview-logo"/>
            </Link>
            <TMDBLogo src={TMDB} alt="tmdb-logo" />
        </Content>
    </Wrapper>
)

export default Header