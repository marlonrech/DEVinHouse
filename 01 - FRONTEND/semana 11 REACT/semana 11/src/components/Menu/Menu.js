import { useState } from 'react'
import { MenuItem } from './Style'
import { useTheme } from '../contexts/theme-context'

export default function Menu(){

    const {setTheme} = useTheme()

    const [item, setItem] = useState('')

    function Clicar(pagina){
        console.log(pagina)
        setItem(pagina)
    }

    return (
        <div>
            <nav>
                <ul>
                    <MenuItem active={item === 'home' && 1} onClick={(e) => Clicar('home')}>Home</MenuItem>
                    <MenuItem active={item === 'produtos' && 1} onClick={(e) => Clicar('produtos')}>Produtos</MenuItem>
                    <MenuItem active={item === 'carrinho' && 1} onClick={(e) => Clicar('carrinho')}>Carrinho</MenuItem>
                    <MenuItem active={item === 'minha-conta' && 1} onClick={(e) => Clicar('minha-conta')}>Minha Conta</MenuItem>

                    <button onClick={e => setTheme('dark-mode')} >Dark Mode</button>
                    <button onClick={e => setTheme('light-mode')} >Light Mode</button>
                </ul>
            </nav>
        </div>
    )
}