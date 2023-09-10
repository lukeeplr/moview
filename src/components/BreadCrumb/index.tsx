import { Link } from 'react-router-dom'

import { Wrapper, Content } from './styles'

type Props = {
    movieTitle: string;
}

const BreadCrumb: React.FC<Props> = ({ movieTitle }) => {
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