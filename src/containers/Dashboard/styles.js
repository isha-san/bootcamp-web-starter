import styled from 'styled-components'
import { Container} from '@material-ui/core'

export const FancyContainer = styled(Container)`
    font-family: ${({ theme }) => theme.fonts};
`
export const HeaderStyle = styled(Container)`
    font-family: ${({ theme }) => theme.fonts};
    color: 'black';
`

