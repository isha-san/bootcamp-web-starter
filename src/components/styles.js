import styled from 'styled-components'
import 'fontsource-roboto'
import { NavLink } from 'react-router-dom'

export const FancyNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.primary.text};
    font-family: ${({ theme }) => theme.fonts};
    text-decoration: none;
`
