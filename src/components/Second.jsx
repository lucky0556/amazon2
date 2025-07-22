import styles from './Second.module.css';
import { useNavigate,useLocation  } from 'react-router-dom'
import React, { useContext } from 'react';
import CounterContext from "../context/CounterContext";

function Second()
{
    const navigate =useNavigate();
    const {username} = useContext(CounterContext);

    const handleNavigateToItems = () => {
        navigate('/side');
    };

    return(
        <div className={styles.header1}>
        <div className={styles.header2} onClick={handleNavigateToItems} >
            <div className={styles.all} >
                <p>All</p>
            </div>
            <div className={styles.all}>
                <p>Fresh</p>
            </div>
            <div className={styles.all}>
                <p>MX Player</p>
            </div>
            <div className={styles.all}>
                <p>Sell</p>
            </div>
            <div className={styles.all}>
                <p>BestSeller</p>
            </div>
            <div className={styles.all}>
                <p>Mobiles</p>
            </div>
            <div className={styles.all}>
                <p>Today's Deal</p>
            </div>
            <div className={styles.all}>
                <p>Prime</p>
            </div>
            <div className={styles.all}>
                <p>Fashion</p>
            </div>
            <div className={styles.all}>
                <p>Customer service</p>
            </div>
        </div>
        </div>
    )
}
export default Second;