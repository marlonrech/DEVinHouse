import {useState} from 'react'

export default function Case1(){

    const [count, setCount] = useState(0)

    return(
        <div>
            <span>Voce clicou {count} vezes.</span>
            <button onClick={e => setCount(prev => prev + 1)}>Clique para contar</button>
        </div>
    )
}