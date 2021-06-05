import Box from "../Helpers/box";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  splitScreen: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 140,
    paddingTop: 80,
  },
  topPane: {
    width: "3%",
  },
  bottomPane: {
    paddingTop: 0,
    width: "95%",
  },
  span: {
    backgroundColor: "#E6E6FA",
    borderRadius: "100%",
    fontSize: 15,
    padding: 13,
  },
  text: {
    fontSize: 30,
  },
  text2: {
    color: "#808080",
  },
  box: { paddingTop: 60 },
}));

export default function Slide(props) {
  const styles = useStyles();
  return (
    <div className={styles.splitScreen}>
      <div className={styles.topPane}>
        <text className={styles.span}>{props.count}</text>
      </div>
      <div className={styles.bottomPane}>
        <text className={styles.text}>{props.name}</text>
        <br />
        <text className={styles.text2}>{props.line}</text>
        <div className={styles.box}>
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </div>
  );
}
