import React from 'react';
import { useStateContext } from '../context';

function Logout() {
    const { metamaskLogout, metamaskLoading } = useStateContext();

    return (
      <div>
        <button onClick={() => metamaskLogout()}>
          {metamaskLoading ? "Logging out..." : "Logout"}
        </button>
      </div>
    );
  }
export default Logout;
