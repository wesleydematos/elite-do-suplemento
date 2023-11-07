import "@/styles/globals.css"
import { Inter } from "next/font/google"
import AuthProvider from "@/Providers/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Elite Suplementos",
  description: "Encontre aqui os melhores suplementos para melhorar sua saúde e aumentar seu desempenho nos exercícios.",
  icons: {
    icon: "https://i.imgur.com/GByz03d.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
