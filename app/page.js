import Image from 'next/image'
import styles from './page.module.css'

import Header from "@/components/header/header";
import Services from "@/components/services/services";
import Work from "@/components/work/work";
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
