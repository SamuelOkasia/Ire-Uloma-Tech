import './globals.css'

import Nav from "../components/nav/Nav";


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className="container">
              <Nav/>
              <div className="container_components">
                  {children}
              </div>
          </div>
      </body>
    </html>
  )
}
