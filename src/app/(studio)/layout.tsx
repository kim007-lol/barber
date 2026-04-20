export const metadata = {
  title: 'Sanity Studio',
  description: 'Manage contents for Gentlemens Cut',
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
