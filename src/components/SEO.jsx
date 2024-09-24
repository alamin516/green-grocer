import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ siteTitle = "Green Grocer", title = "", description = "", keywords ="", image = "", url = "" }) => {
  return (
    <Helmet>
      {/* Standard SEO Tags */}
      <title>{title} - {siteTitle} </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Open Graph Tags for social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "Default Title",
  description: "Default description",
  keywords: ["default", "keywords"],
  image: "default-image.jpg",
  url: "https://www.example.com",
};

export default SEO;
