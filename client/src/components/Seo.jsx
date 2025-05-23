import { Helmet } from 'react-helmet-async';
export const Seo = ({ title, description }) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};
