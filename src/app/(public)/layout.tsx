import Navbar from '@/components/navbar';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='py-12 sm:py-24 px-6 min-h-dvh max-w-2xl mx-auto'>
      {children}
      <Navbar />
    </div>
  );
}
