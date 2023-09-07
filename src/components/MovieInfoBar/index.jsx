import React from 'react'

import { Wrapper, Content } from './styles'

import { calcTime, convertMoney } from '../../helper.js'

const MovieInfoBar = ({ runtime, budget, revenue }) => {
    return (
        <Wrapper>
            <Content>
                <p><b>Duração: </b>{calcTime(runtime)}</p>
                <p><b>Orçamento: </b>{convertMoney(budget)}</p>
                <p><b>Bilheteria: </b>{convertMoney(revenue)}</p>
            </Content>
        </Wrapper>
    )
}

export default MovieInfoBar