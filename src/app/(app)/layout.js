import "./globals.css";


export const metadata = {
  title: "2D Production",
  description: "Commercials | Influence | Doc-Films | YouTube Shows | Events",
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
