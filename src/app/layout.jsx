import AuthProvider from "@/Providers/AuthProvider"
import {ToastContainer} from "react-toastify"
import {Inter} from "next/font/google"
import "react-toastify/dist/ReactToastify.min.css"
import "@/styles/globals.css"

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
          <ToastContainer autoClose={2000} theme="dark" />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
