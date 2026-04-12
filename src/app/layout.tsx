import { font1, font2, font3, font4 } from "./[locale]/fonts";
import "./[locale]/globals.css";

export default function RootLayout({
  // rootlyout is a special nextjs layout comopnent
  children, // children is all the page content inside this layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${font1.variable} ${font2.variable} ${font3.variable} ${font4.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[rgb(54,68,79)]">
        {children}
      </body>
    </html> // antialiesed makes font feel smoother
  );
}

// RootLayout wraps every page in your Next.js app, sets global fonts, background, and layout, and ensures consistent styling across all pages
