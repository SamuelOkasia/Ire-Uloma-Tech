import Image from 'next/image'
import styles from './page.module.css'

import Header from "@/components/header/Header";
import Services from "@/components/services/Services";
import Work from "@/components/work/Work";
import Identity from "@/components/identity/identity";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
        <Header/>
        <Services/>
        <Work/>
        <Identity/>
        <Footer/>
    </div>
  )
}
