import "./globals.css";


export const metadata = {
  title: "2d",
  description: "production",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
