/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { useForm } from "react-hook-form";
import styles from "../form.module.css";

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label} htmlFor="email">
          Correo Electronico
        </label>
        <input
          className={styles.input}
          id="email"
          type="email"
          name="email"
          {...register("email")}
        />
        <label className={styles.label} htmlFor="password">
          Contraseña
        </label>
        <input
          className={styles.input}
          id="paswword"
          type="password"
          name="password"
          {...register("password")}
        />
        <button className={styles.button} type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Login;
