import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const tokenu =
  "EAAFrzBNW9DkBADycKZB7RpRKLt7NvMII3Iv96fDZCc2l5xF699gX8lG6uO1Pk5qZCNnck5195UOsManuIlicT2GBT2StwI6qRDbXiIpq3jzmNxKBQIavx5MM6UAPwa5pSZAz3MlMIX4q1WACwZBM5PN545Bu9OOWQkTglKd3L8Hh6PnT9sY6qnZB2AF9GVP5xuKMFLmdaXywCdIfth8TuZChWeoE8E3g55c3Cm4L3KMQvmpOuhHLF4BQ4PYo1ib9toZD";

const tokenapp =
  "EAAFrzBNW9DkBAPd8cx1Uzc2KWDTpzIWhWn1ZBHcRlQiBQLBiE819v1YaEHGsBcb0uEPdzmq6o06s0u16CBS7vDSZAFfxEMJe9RS3PvToXHaEYWsaIFslyUgQwUZB9gWRXWs67h1lXtQEEyhiFJZCoB7GwWBi9KZAdSki9flOUZB19WjA3c01ZBNFB4KZCND305cf8ytSbEHw5qgDZBCciukIrK06J8UPYGZCEZD";

const IgFeed = () => {
  return <InstagramFeed token={tokenapp} counter="6" />;
};

export default IgFeed;
