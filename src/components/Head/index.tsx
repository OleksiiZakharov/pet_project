import { Helmet } from 'react-helmet';

export const Head = () => {
  return (
    <Helmet>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <title>React App</title>
    </Helmet>
  );
};
