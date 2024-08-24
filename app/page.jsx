import Image from "next/image";
import Hero from  "./public/images/hero.svg"

export default function Home() {
  return (
    <div className="flex justify-between items-center gap-24">
      <div className="flex flex-col  gap-12">
        <h1 className="text-7xl capitalize bg-gradient-to-b from-lime-500 to-green-50 bg-clip-text text-transparent">your best E-commerce destination</h1>
        <p>descover the world of endless shopping</p>
        <button className="bg-green-700 rounded-md p-5 w-max text-slate-50">shop now</button>
      </div>
      <div>
        <Image
        src={Hero}
        className="w-full object-contain h-96"
       
        />
      </div>
    </div>
  );
}
