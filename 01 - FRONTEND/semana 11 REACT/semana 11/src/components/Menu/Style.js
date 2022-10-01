import styled from "styled-components";

export const MenuItem = styled.li`
    line-height: 32px;
    width: 50px;
    list-style: none;
    &:hover{background-color:${props => props.active === 1 ? 'grey' : '#7fffd4'}; cursor: pointer}
    color:${props => props.active === 1 ? 'white' : 'black'};
    background-color:${props => props.active === 1 ? 'grey' : 'white'}
`