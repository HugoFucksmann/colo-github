import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

//gradiant azul
// background: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",

const DivQuienes = (props) => {
  return (
    <ContainerDiv>
      <Title>{props.title}</Title>

      <Typography variant="h4">{props.subtitle}</Typography>
      <br />
      <Button
        size="large"
        variant="contained"
        onClick={() => props.func()}
        style={{
          alignSelf: "center",
          width: 200,
          borderRadius: 25,
          background: "linear-gradient(to right bottom, #244c83, #6ec4b0)",
          //filter: "drop-shadow(3px 3px 5px #000)",
        }}
      >
        {props.btnText}
      </Button>
    </ContainerDiv>
  );
};

const Title = (props) => {
  return (
    <>
      <Typography {...props} variant="h2">
        {props.children}
      </Typography>
      <div
        style={{
          borderTop: "4px solid #6ec4b0",
          width: 36,
          marginTop: -5,
          borderRadius: 15,
          alignSelf: "center",
        }}
      />
      <br />
    </>
  );
};

const ContainerDiv = styled("div")(({ theme }) => ({
  height: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",

  marginRight: "22%",
  marginLeft: "22%",
  paddingTop: 100,
}));

DivQuienes.defaultProps = {
  title: "quiens somos",
  btnText: "CONOCENOS",
  subtitle: `Somos una empresa dedicada a la confección de bolsas de polietileno
  especializada en bolsas de residuo y consorcio, tanto domiciliarias como
  patológicas, así como también en bolsas de polietileno destinadas a
  aplicaciones industriales especiales.`,
};

export default DivQuienes;
