import React from "react";
import styles from "./Backdrop..module.css";

const backdrop = (props) => (
    props.show ? <div className={styles.Backdrop}/> : null
);

export default backdrop;