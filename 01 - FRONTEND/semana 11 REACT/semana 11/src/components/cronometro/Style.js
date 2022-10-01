import styled from "styled-components"

export const PersonalizaNumero = styled.h2`
    color: ${props => props.number%2 === 0 ? 'black' : 'red'}
`