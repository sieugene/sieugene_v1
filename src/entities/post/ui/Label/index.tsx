import styled from '@emotion/styled'
import { FC } from 'react'

type Props = {
    as?: 'link'
}

const Label: FC<Props> = ({ children, as }) => {
    const Component = as === 'link' ? Link : H2
    return <Component>{children}</Component>
}

const H2 = styled.h2`
    font-weight: ${(props) => props.theme.typography.fontWeightBold};
    font-size: ${(props) => props.theme.fontSize.medium};
    margin-top: ${(props) => props.theme.spaces.big};
    border-bottom: 1px solid ${(props) => props.theme.borders.grayBorder};
    padding-bottom: ${(props) => props.theme.spaces.medium};
`

const Link = styled(H2)`
    color: ${({ theme }) => theme.colors.blue};
    margin-left: 4px;
    margin-right: 4px;
    &:hover {
        text-decoration: underline;
    }
`

export default Label
