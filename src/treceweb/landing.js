import { Fade, styled, Typography } from "@mui/material";
const LandingTrece = (props) => {
  const str = props.data.txtT;

  const coloredStr = str.match("derrames");
  const [before, after] = str.split("derrames");
  console.log(before, " > ", after, " > ", coloredStr);
  return (
    <LayoutLanding {...props}>
      <TitleTextDiv>
        <Fade in={true} timeout={700}>
          <Typography variant="h1">
            {/* <div
							dangerouslySetInnerHTML={{
								__html: props.data.txtT,
							}}
						/> */}
            {before}
            {coloredStr && coloredStr[0] && (
              <SpanColor>{coloredStr[0]}</SpanColor>
            )}
            {after}
          </Typography>
        </Fade>

        <Fade in={true} timeout={1400}>
          <Typography variant="h5">{props.data.txt1.toUpperCase()}</Typography>
        </Fade>
      </TitleTextDiv>
    </LayoutLanding>
  );
};

const LayoutLanding = styled("div")(({ theme, data }) => ({
  height: "100%",
  width: "100%",
  //paddingTop: "9vh",
  background: `url(${data.img}) no-repeat center`,
  backgroundSize: "cover",
}));

const TitleTextDiv = styled("div")(({ theme, data }) => ({
  height: "100%",
  width: "35%",
  paddingLeft: "5%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "left",
}));

const SpanColor = styled("span")(({ theme, data }) => ({
  color: theme.palette.primary.second,
}));

LandingTrece.defaultProps = {
  data: {
    txtT: "No mas derrames o bolsas rotas",

    txt1: "eleginos y logra el mejor resultado en las tareas de todos los dias",
    img: "",
  },
};

export default LandingTrece;
