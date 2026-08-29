import type { Metadata } from 'next';
import { DM_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
const spaceGrotesk = Space_Grotesk({ variable: '--font-display', subsets: ['latin'] });
const dmMono = DM_Mono({ variable: '--font-mono', weight: ['400', '500'], subsets: ['latin'] });
export const metadata: Metadata = { title: 'Abhinandan Kumar — Data Engineer & Software Builder', description: 'Portfolio of Abhinandan Kumar: data engineering, cloud data platforms, and backend software systems.', openGraph: { title: 'Abhinandan Kumar — Data Engineer & Software Builder', description: 'Turning data systems into clear, useful paths.', images: ['/og.png'] }, twitter: { card: 'summary_large_image', title: 'Abhinandan Kumar — Data Engineer & Software Builder', description: 'Turning data systems into clear, useful paths.', images: ['/og.png'] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${spaceGrotesk.variable} ${dmMono.variable}`}>{children}</body></html>; }
