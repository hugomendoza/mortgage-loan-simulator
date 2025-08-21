import { Header } from '../components';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <div className='container py-4'>
        <Header />
        <main className='grid md:grid-cols-2 gap-4'>{children}</main>
      </div>
    </>
  );
}
