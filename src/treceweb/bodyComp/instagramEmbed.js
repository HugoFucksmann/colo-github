import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const igAccountID = 1595820179;
const appID = 399999218676793


const Card = styled.img`
  justify-self: center;
  width: 300px;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const url =
  'https://www.instagram.com/graphql/query/?query_hash=399999218676793&variables={"id":1595820179,"first":6}';
const Insta = () => {
  const [insta, setInsta] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log("data ", data);
        const photosArray = data.data.user.edge_owner_to_timeline_media.edges;
        setInsta(photosArray);
      });
  }, []);
  return (
    <Grid>
      {insta.map((photo) => (
        <Card src={photo.node.display_url} key={photo.node.id} />
      ))}
    </Grid>
  );
};
export default Insta;


https://api.instagram.com/oauth/authorize
  ?client_id={"1595820179"}
  &redirect_uri={"https://domomicaela.herokuapp.com/"}
  &scope={scope}
  &response_type=code
  &state={state} 