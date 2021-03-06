import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";
import styles from "./list.module.css";
import { destroy } from "../../service/operationsService";
import { arsPaymentFormat } from "../../utils/functions/formatNumber";

function OperationsList({ title, operations, setOperations }) {
  const handleDelete = (id) => {
    setOperations(operations.filter((operation) => operation.id !== id));
    destroy(id);
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.headerContainer}>
        <div className={styles.header}>Concepto</div>
        <div className={styles.header}>Monto</div>
        <div className={styles.header}>Categoria</div>
        <div className={styles.header}>Fecha</div>
        <div className={styles.header} />
      </div>
      <div className={styles.containerBody}>
        {operations.length === 0 ? (
          <div className={styles.message}>No hay movimientos disponibles</div>
        ) : (
          operations.map((operation) => (
            <Fragment key={operation.id}>
              <div className={styles.body}>{operation.concept}</div>
              <div className={styles.body}>
                {arsPaymentFormat(operation.amount)}
              </div>
              <div className={styles.body}>{operation.category.name}</div>
              <div className={styles.body}>{operation.date}</div>
              <div className={styles.body}>
                <Link to={`/operation/${operation.id}`}>
                  <button type="button" className={styles.buttonUpdate}>
                    <Edit />
                  </button>
                </Link>
                <button
                  type="button"
                  className={styles.buttonDelete}
                  onClick={() => handleDelete(operation.id)}>
                  <Delete />
                </button>
              </div>
            </Fragment>
          ))
        )}
      </div>
    </div>
  );
}

export default OperationsList;
