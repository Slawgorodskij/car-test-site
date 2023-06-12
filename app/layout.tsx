import './globals.css'
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

export const metadata = {
    title: 'Car Hub',
    description: 'Бронь и аренда автомобилей',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body className={'relative'}>
            <Navbar/>
            {children}
            <Footer/>
        </body>
        </html>
    )
}
