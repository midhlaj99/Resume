import React from 'react';
import styles from './navbar.module.css'; 
import { NavLink } from 'react-router-dom'

function Navbar(){
    return(
        <>
            <div className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink to="/" exact
                        activeClassName='myactive' activeStyle={{color:'#333'}}
                        >
                         Resume Lists
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/createresume"
                            activeClassName='myactive' activeStyle={{color:'#333'}}
                        >
                        Create Resume
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Navbar