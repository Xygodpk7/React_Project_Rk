// Import necessary modules and components
import { Poppins } from 'next/font/google';
import './globals.css';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import CartProvider from '@/providers/CartProvider';
import { Toaster } from 'react-hot-toast';

// Define the Poppins font
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

// Define metadata
export const metadata = {
  title: 'AL FAZAL',
  description: 'Jewellery App',
};

// Define the RootLayout component and explicitly type the children prop
interface RootLayoutProps {
  children: React.ReactNode;
}

// RootLayout component definition
export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} text-slate-700`}>

        {/* Toast notifications setup */}
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51, 65, 85)",
              color: "#fff",
            }
          }}
        />

        {/* CartProvider for managing shopping cart state */}
        <CartProvider>
          <div className='flex flex-col min-h-screen'>
            {/* Navigation bar component */}
            <NavBar />

            {/* Main content area */}
            <main className='flex-grow'>
              {children}
            </main>

            {/* Footer component */}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
};
