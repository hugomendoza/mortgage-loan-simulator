import { Toaster } from 'sonner';
import { Alert, Credits, Form, Loader } from './components';
import { Layout } from './layout/Layout';
import { useFetch } from './hooks';

function App() {
  const { loading, error } = useFetch();

  if (loading)
    return (
      <div className='container py-4 min-h-dvh grid place-content-center'>
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className='container py-4 min-h-dvh grid place-content-center'>
        <Alert message='We have a problem. Try again' />
      </div>
    );

  return (
    <>
      <Toaster position='top-right' />
      <Layout>
        <Form />
        <Credits />
      </Layout>
    </>
  );
}

export default App;
