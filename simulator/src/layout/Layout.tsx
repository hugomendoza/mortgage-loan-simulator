interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <div className='container'>
        <header>Marca del banco</header>
        <main className='grid md:grid-cols-2 gap-4'>{children}</main>
      </div>
    </>
  );
}
