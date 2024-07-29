import Link from "next/link"
import {nav} from "../nav/nav.js"
import Button from "../elements/button.jsx"
import Logo from "../elements/Logo/Logo.jsx"
// import DarkModeToggle from "../darkModeToggle/DarkModeTogle.jsx"

export default function Navbar(){

    
    return(
        <div className="flex justify-between m-10 align-middle">
           
            <div><Logo/></div>
            

            <div>
                <nav className="flex list-none gap-3 text-3xl capitalize ">
                    {/* <DarkModeToggle/> */}

                    {nav.map((e)=>
{                        return (<li key={e.id}> <Link href={e.url}>{e.title}</Link> </li>)
}                    )}
                  <Button/>
                </nav>
                
            </div>
            
        </div>
    )
}