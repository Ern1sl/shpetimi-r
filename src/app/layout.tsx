import { font1, font2, font3, font4 } from "./[locale]/fonts";
import "./[locale]/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font1.variable} ${font2.variable} ${font3.variable} ${font4.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[rgb(54,68,79)]">{children}</body>
    </html>
  );
}
