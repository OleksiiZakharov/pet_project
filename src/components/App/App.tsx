import { ReactQueryDevtools } from 'react-query/devtools';
import { Head } from '../Head';
import { Navigation } from '../Navigation';
import { PageRoutes } from '../../routing/PageRoutes';
import { AlertMessages } from '../AlertMessages';

function App() {
  return (
    <>
      <Head />
      <Navigation />
      <PageRoutes />
      <ReactQueryDevtools />
      <AlertMessages />
    </>
  );
}

export default App;
