import styled from "@emotion/styled";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { IconButton } from "@mui/material";
const SinglePage = () => {
  return (
    <ContentWeb>
      <ContentCard>ff</ContentCard>
      <ContentMenu>
        {[1, 2, 3, 4, 5].map(() => (
          <IconButton
            sx={{ marginBottom: 2 }}
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        ))}
      </ContentMenu>
    </ContentWeb>
  );
};

const ContentWeb = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: "lightblue",
}));

const ContentCard = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "84%",
  width: "76%",
  borderRadius: 15,
  backgroundColor: "rgba(255,255,255,.6)",
  filter: "drop-shadow(3px 3px 3px #000)",
}));

const ContentMenu = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "64%",

  borderRadius: 15,
  marginLeft: 15,
  padding: 10,
  backgroundColor: "rgba(255,255,255,.6)",
  filter: "drop-shadow(3px 3px 3px #000)",
}));

export default SinglePage;
