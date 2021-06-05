import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FFFFFF",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
    color: "black",
  },
  menuIcon: {
    backgroundColor: "black",
  },
  title1: {
    flexGrow: 1,
    color: "black",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}></Typography>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
        >
          <img
            alt=""
            height="40"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Brilliant_Logo.svg/1024px-Brilliant_Logo.svg.png"
          />
        </IconButton>

        <Typography variant="h5" className={classes.title}>
          BRILLIANT
        </Typography>
        <Typography
          style={{ fontSize: "90%", color: "#808080" }}
          className={classes.title1}
        >
          TODAY
        </Typography>
        <Typography style={{ fontSize: "90%" }} className={classes.title1}>
          COURSES
        </Typography>
        <Typography
          style={{ fontSize: "90%", color: "#808080" }}
          className={classes.title1}
        >
          PRACTICE
        </Typography>
        <Typography variant="h5" className={classes.title}></Typography>
        <Typography variant="h5" className={classes.title}></Typography>
        <Typography variant="h5" className={classes.title}></Typography>
        <Button variant="outlined" color="primary" className={classes.title1}>
          Log in
        </Button>
        <Typography variant="h6" className={classes.title1}></Typography>
        <Button variant="contained" color="primary" className={classes.title1}>
          Sign up
        </Button>
        <Typography variant="h5" className={classes.title}></Typography>
      </Toolbar>
    </AppBar>
  );
}
