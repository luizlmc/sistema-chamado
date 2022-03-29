import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

import {AuthContext} from '../../contexts/auth';
import avatar from '../../assets/avatar.png';

import './styles.css';

function Header() {

    const { user } = useContext(AuthContext);

    return(
        <div className="sidebar">
            <div>
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="Foto avatar" />
            </div>

            <Link to="/dashboard">
                <FiHome color="#FFF" size={24} />
                Camados
            </Link>
            <Link to="/">
                <FiUser color="#FFF" size={24} />
                Clientes
            </Link>
            <Link to="/">
                <FiSettings color="#FFF" size={24} />
                Configurações
            </Link>
        </div>
    )
}

export default Header;