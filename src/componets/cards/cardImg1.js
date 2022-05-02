import * as React from "react";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import noimg from "../../assets/noimg.png";
import { Button, Typography } from "@mui/material";

const CardImg1 = (props) => {
  return (
    <CardCont {...props}>
      <div style={{ height: "60%" }}>
        <StyledImg alt="imagen" src={props.img} />

        <StyledText>
          <Typography style={{ fontSize: "3.5vh", fontWeight: "bold" }}>
            {props.title}
          </Typography>
          <Typography style={{ fontSize: "2.5vh" }}>
            {props.subtitle}
          </Typography>
        </StyledText>
      </div>
      <Button
        variant="contained"
        //fullWidth
        style={{
          borderRadius: 15,
          marginBottom: 10,
          alignSelf: "center",
          width: "90%",
        }}
      >
        {props.btntxt}
      </Button>
    </CardCont>
  );
};

const CardCont = styled("div")(({ theme }) => ({
  maxWidth: "16vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",

  color: "darkslategray",
  background: theme.palette.primary.darkSoft,
  padding: 8,
  borderRadius: 15,

  fontSize: "2vw",
  transition: "transform 0.3s",
  //overflow: 'hidden',

  /* 	'&:hover': {
		transform: 'scale(0.9)',
		border: '3px solid #fff',
	}, */
}));

const StyledImg = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  borderRadius: 15,
}));

const StyledText = styled("div")(({ theme }) => ({
  marginTop: 10,
  marginBottom: 20,
  marginLeft: 5,
}));

CardImg1.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  btntxt: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
};

CardImg1.defaultProps = {
  title: "este es el titulo",
  subtitle: "este es el subtitulo",
  btntxt: "compartir",
  img: noimg,
};

export default React.memo(CardImg1);
