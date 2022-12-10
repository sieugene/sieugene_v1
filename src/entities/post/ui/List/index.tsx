import styled from '@emotion/styled'
import React from 'react'

const List = ({ children }: { children: React.ReactNode }) => {
    return <List.Root>{children}</List.Root>
}
List.Root = styled.ul`
    margin-left: 33px;
    li {
        margin-bottom: 8px;
    }
`
export default List
