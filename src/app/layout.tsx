import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Cinema Website',
	description: 'Watch the latest movies and TV shows online. Stream movies and TV shows in HD quality.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<Toaster richColors />
				<SessionProvider>{children}</SessionProvider>
			</body>
		</html>
	)
}
