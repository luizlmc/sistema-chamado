import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import Header from './../../components/Header';
import Title from './../../components/Title';
import './styles.css';

function Customers() {

    const[nomeFantasia, setNomeFantasia] = useState('');
    const[cnpj, setCnpj] = useState('');
    const[endereco, setEndereco] = useState('');

    function handleAddCustomer(){
        alert('Cliente cadastrado com sucesso!!');
    }

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Meu perfil">
                    <FiUser size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile customer" onSubmit={handleAddCustomer}>
                        <label>Nome fantasia</label>
                        <input type="text" placeholder="Nome da sua empresa" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} />

                        <label>CNPJ</label>
                        <input type="text" placeholder="CNPJ" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

                        <label>Endereço</label>
                        <input type="text" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />

                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>

            
        </div>
    )
}

export default Customers;