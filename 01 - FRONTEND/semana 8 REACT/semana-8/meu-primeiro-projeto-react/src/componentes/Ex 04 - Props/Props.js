export default function BemVindo(props) {
    // var {nome, idade} = props
    // return <h1>Bem vindo, {nome}. Voce tem {idade} anos.</h1>;
    return <h1>Bem vindo, {props.nome}. Voce tem {props.idade} anos.</h1>;
}