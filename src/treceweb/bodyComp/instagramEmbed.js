import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const token =
  "EAAFrzBNW9DkBAO0F4ou4ER3SCspDNjoUIq2MueFn7pxBFsIBQl902i4aC9T7qAQNpZC8vGqSjAqZBnLno2NFWpuFswnfi3jZC38ZCYB7ZBgwc9q9sZALPAte38e981cK66NwcU7uzBHMC6Eg530NuD5Re7ZCZCJA32bzYG8Orjv2Q7nZC34ZC5n5jqjpkoZC6KbH0H7o5wcL2di5YqIiKt1aGxhLGA1hyjWjft4F8O8tcIly0nwKdBnlvsfJvaqZCcUMSv4ZD";

const IgFeed = () => {
  return <InstagramFeed token={token} counter="6" />;
};

export default IgFeed;
