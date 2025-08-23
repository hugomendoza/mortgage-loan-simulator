import { Suspense, lazy } from 'react';
import { Toaster } from 'sonner';
import { Loader } from './components';

const Layout = lazy(() => import('./layout/Layout'));
const Form = lazy(() => import('./components/form/Form'));
const Credits = lazy(() => import('./components/credits/Credits'));

function App() {
  return (
    <>
      <Toaster position='top-right' />
      <Suspense
        fallback={
          <div className='container py-4 min-h-dvh grid place-content-center'>
            <Loader />
          </div>
        }>
        <Layout>
          <Form />
          <Credits />
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
