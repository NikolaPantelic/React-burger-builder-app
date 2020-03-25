import React,{Component} from "react";
import PropTypes from "prop-types";
import styles from "./Burgeringredient.module.css";

class Burgeringredient extends Component {
    render() {
        let ingridient = null;

        switch (this.props.type) {
            case ("bread-bottom"):
                ingridient = <div className={styles.BreadBottom}/>;
                break;
            case ("bread-top"):
                ingridient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1}/>
                        <div className={styles.Seeds2}/>
                    </div>
                );
                break;
            case ("meat"):
                ingridient = <div className={styles.Meat}/>;
                break;
            case ("bacon"):
                ingridient = <div className={styles.Bacon}/>;
                break;
            case ("salad"):
                ingridient = <div className={styles.Salad}/>;
                break;
            case ("cheese"):
                ingridient = <div className={styles.Cheese}/>;
                break;
            default:
                ingridient = null;

        }
        return ingridient;
    }
}

Burgeringredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default Burgeringredient;