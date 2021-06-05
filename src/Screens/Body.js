import bodyimg from "../Assets/bodyimg.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  splitScreen: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f2f3f4",
    paddingBottom: 60,
  },
  topPane: {
    width: "45%",
    paddingLeft: 130,
    paddingTop: 60,
    paddingRight: 100,
  },
  bottomPane: {
    width: "45%",
  },
  img: {
    paddingLeft: 0,
    paddingTop: 90,
  },
}));

export default function Body() {
  const styles = useStyles();
  return (
    <div className={styles.splitScreen}>
      <div className={styles.topPane}>
        <span style={{ color: "#808080" }}>&#8592;</span>{" "}
        <text style={{ color: "#808080" }}>Back to all courses</text>
        <h1 style={{ fontSize: "400%", marginBottom: "4%", marginTop: "6%" }}>
          Logic
        </h1>
        <div style={{ fontSize: "150%" }}>
          Stretch your analytic muscles with knights, knaves, logic gates, and
          more!
        </div>
        <br />
        <br />
        <br />
        <div style={{ fontSize: "120%", color: "#808080" }}>
          The beginning of our introductory math journey is Logic. Through these
          challenging problem solving exercises, you'll construct the critical
          thinking skills that are the basis for mathematical reasoning.
        </div>
        <br />
        <br />
        <br />
        <div style={{ fontSize: "120%", color: "#808080" }}>
          You'll use limited information to make predictions – eliminating the
          impossible to uncover the truth. This course builds up to some truly
          mind-bending challenges!Read more
        </div>
        <br />
        <br />
        <br />
        <u style={{ fontSize: "100%", color: "#808080" }}>
          View prerequisites and next steps
        </u>
        <br />
        <br />
        <br />
      </div>
      <div className={styles.bottomPane}>
        <img height="520" className={styles.img} src={bodyimg} alt="" />
      </div>
    </div>
  );
}
