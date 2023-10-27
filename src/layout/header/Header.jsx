import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import vivo from './logo.png';

const sair = 0;


const Header = () => {

  
  return (

    <header class="fixed">
     
                
      <nav class="navbar fixed-top color-nav">
        
        <div class="container-fluid">
        
          <span className="button-style">
            
            <Link class="nav-link active" to="/">

            </Link>
          </span>
          <span style={{textAlign: 'center', color: 'white', fontSize: '25px'}}>TEMPLATE LAYOUT</span>
          
          <div class="dropstart">
            
            <button class="btn btn-outline-light btn " style={{border: 'none'}}type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-circle " style={{fontSize: '20px'}}></i>
            </button>
            <ul class="dropdown-menu">
               {/* colocar o nome do usuario e email e a função logout */}
              <span class="dropdown-item" disabled>Eliseu</span>
              <span class="dropdown-item font-size" disabled>eliseu...@...</span>
              <span class="dropdown-item font-size" disabled>Perfil: Desenvolvedor</span>
              <hr class="dropdown-divider"/>
              <li><a class="dropdown-item" onClick={sair}><i class="bi bi-box-arrow-right"></i> Sair</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header