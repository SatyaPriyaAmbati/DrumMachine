import styles from "./App.module.css";
function Display({displayValue})
{
  return(
    <div >
    <b><input className={styles.display}  value={displayValue}  readOnly type="text"/></b>
    </div>
  );
}
export default Display;