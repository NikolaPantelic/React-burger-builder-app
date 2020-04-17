import React from "react";
import styles from "./Burger.module.css";
import Burgeringredient from "./Burgeringredient/Burgeringredient";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <Burgeringredient type={igKey} key={igKey + i}/>;
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients !!!</p>
    }


    return (
        <div className={styles.Burger}>
            <Burgeringredient type={"bread-top"}/>
            {transformedIngredients}
            <Burgeringredient type={"bread-bottom"}/>
        </div>
    );
};

export default burger;