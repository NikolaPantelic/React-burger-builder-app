import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./Burgeringredient.module.css";

class Burgeringredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ("bread-bottom"):
                ingredient = <div className={styles.BreadBottom}/>;
                break;
            case ("bread-top"):
                ingredient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1}/>
                        <div className={styles.Seeds2}/>
                    </div>
                );
                break;
            case ("meat"):
                ingredient = <div className={styles.Meat}/>;
                break;
            case ("bacon"):
                ingredient = <div className={styles.Bacon}/>;
                break;
            case ("salad"):
                ingredient = <div className={styles.Salad}/>;
                break;
            case ("cheese"):
                ingredient = <div className={styles.Cheese}/>;
                break;
            default:
                ingredient = null;

        }
        return ingredient;
    }
}

Burgeringredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default Burgeringredient;