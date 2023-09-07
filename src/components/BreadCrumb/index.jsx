import { Link } from 'react-router-dom'

import { Wrapper, Content } from './styles'

const BreadCrumb = ({ movieTitle }) => {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    )
}

export default BreadCrumb