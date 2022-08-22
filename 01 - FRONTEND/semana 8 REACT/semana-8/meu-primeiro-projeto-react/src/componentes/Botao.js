export default function Botao ({corDeFundo, children}) {
    return (
        <button style= {{backgroundColor: corDeFundo}} > {children} </button>
    );
}