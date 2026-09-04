import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"EasyDoctors+ | Saúde completa, sem complicação",description:"Consultas presenciais, telemedicina, check-up anual com exames incluídos e benefícios claros por US$ 69,90 por pessoa/mês.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
