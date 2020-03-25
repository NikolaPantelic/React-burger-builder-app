import React from "react";
import styles from "./Burger.module.css";
import Burgeringredient from "./Burgeringredient/Burgeringredient";

const burger = (props) => {


    return (
        <div className={styles.Burger}>
           <Burgeringredient type={"bread-top"}/>
           <Burgeringredient type={"cheese"}/>
           <Burgeringredient type={"meat"}/>
           <Burgeringredient type={"bread-bottom"}/>
        </div>
    );
};

export default burger;