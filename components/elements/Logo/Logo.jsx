import Link from "next/link"
import { Lobster,Roboto } from "next/font/google";


const lobster = Lobster({ subsets: ["latin"],
    weight:["400"]
   });
   const roboto = Roboto({ subsets: ["latin"],
    weight:["700","900"]
   });

export default function Logo() {
  return (
    
    <Link href="/" className= {`${lobster.className} ${"text-4xl text-green-300 tracking-wider	"}`} > <span className= {`${roboto.className} ${"text-4xl"}`} >GAMA</span>  PHARMA</Link>
    
  )
}