import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

function Dashboard() {

  const { signOut } = useContext(AuthContext);

    return (
      <div className="App">
        <h2>TELA DASHBOARD</h2>
        <button onClick={ () => signOut() }>Fazer logout</button>
      </div>
    );
  }
  
export default Dashboard;