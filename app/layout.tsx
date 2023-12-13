import 'tailwindcss/tailwind.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SpeedInsights />
    <html lang="en">
      <body>{children}</body>
    </html>
    </>
  )
}
