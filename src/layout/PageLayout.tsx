import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default PageLayout;