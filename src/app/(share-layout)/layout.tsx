import { Suspense } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import MobileNav from '@/components/ui/mobile-nav';

export default function ListingLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <Suspense>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileNav />
    </Suspense>
  );
}
