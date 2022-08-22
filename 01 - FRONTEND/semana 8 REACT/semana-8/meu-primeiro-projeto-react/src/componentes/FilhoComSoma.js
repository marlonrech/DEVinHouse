export default function FilhoComSoma ({ children, num1, num2 }) {
    let somaFinal;
    somaFinal = num1 + num2;
    return (
    <div>
        <p>A soma dos números é: {somaFinal}</p>
        {children}
    </div>
    )
  }