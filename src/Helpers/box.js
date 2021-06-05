import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import lizliz from "../Assets/slideimg.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    float: "left",
    paddingRight: 20,
  },
  media: {
    height: 110,
    padding: 10,
  },
});

export default function Box() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={lizliz}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
