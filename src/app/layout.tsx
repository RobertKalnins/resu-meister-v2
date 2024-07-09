import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resumeister",
  description: "A website that makes custom resumes using your own words",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
