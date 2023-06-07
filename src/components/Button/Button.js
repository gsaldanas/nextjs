import React from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

const Button = ({ children, active = false, disabled = false, secondary = false }) => {
  return (
    <button
      className={clsx(styles.btn, {
        [styles.active]: active,
        [styles.disabled]: disabled,
        [styles.secondary]: secondary,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
