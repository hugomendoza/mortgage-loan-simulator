import { Alert, Header, Loader } from '../components';
import { useFetch } from '../hooks';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
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
      <div className='container py-4'>
        <Header />
        <main className='grid md:grid-cols-2 gap-4'>{children}</main>
      </div>
    </>
  );
}
