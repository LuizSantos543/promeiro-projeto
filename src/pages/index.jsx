import { useState, useEffect } from 'react'

const Teste = () => {

    const [name, setName] = useState('Luiz');

    const handleChangeName = () => {
        setName(prev => prev === 'Luiz' ? 'José' : 'Luiz')
    }

    useEffect(()=>{
        alert('renderizei')
    },[name]);
    return (
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>
    )
}

export { Teste }
