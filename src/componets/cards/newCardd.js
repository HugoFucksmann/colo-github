import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import noimg from "../../assets/noimg.png";

const CardNoticia = () => {
  const [shadow, setShadow] = useState(1);
  const classes = useStyles();

  return (
    <Card
      elevation={shadow}
      className={classes.cardd}
      onMouseEnter={() => setShadow(5)}
      onMouseLeave={() => setShadow(1)}
    >
      <CardActionArea>
        <CardMedia image={noimg} className={classes.mediaimg} />
        <CardContent className={classes.cardCont}>
          <Typography className={classes.letraTitle}>
            Este es el titulo
          </Typography>
          <Typography className={classes.letratxt}>
            Aca otro text corto
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          paddingRight: 20,
          backgroundColor: "rgba(255,255,255,.3)",
        }}
      >
        <Typography> este es el texto</Typography>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  cardCont: { minHeight: 120, padding: 25 },
  letraTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  letratxt: {
    fontSize: 15,
  },
  cardd: {
    maxHeight: 300,
    maxWidth: 260,
    borderRadius: 5,
    margin: "auto",
    cursor: "pointer",
    overflow: "auto",
  },
  mediaimg: {
    height: 220,
  },
}));

export default CardNoticia;
