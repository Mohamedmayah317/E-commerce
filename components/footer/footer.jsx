"use client"

import Image from "next/image";
import {social} from "./social"

export default function Footer(){
    return(
        <div className="flex justify-between h-8 items-center bg-green-200">
            <div className="flex gap-1 ml-6">
                <Image
                src={"/social-media-icons/copyright-symbol.png"}
                width={"7"}
                height={"7"}

                />
                copyrights
            </div>
            <div className="flex gap-1" >

                {social.map((e)=>{
                    
                    return  <Image key={e.id}
                    src = {e.src}
                    width={"20"}
                    height={"20"}
                    className="bg-slate-700 h-5"
                    alt={e.alt}
    
                    
                    />
                }
                
                )}
               
                
            </div>
        </div>
    
    )
}