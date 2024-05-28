import '@/assets/styles/globals.css'

export const metadata = {
  title: 'PropertyPulse | Find the Perfect Rental!',
  description: 'Find your dream rental property today!',
  keywords: 'renta, find rentals, find properties'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;