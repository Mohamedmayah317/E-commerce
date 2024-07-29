import Link from "next/link";
import Image from "next/image";


async function getData() {
  const res = await fetch('https://dummyjson.com/users')
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 


export  default async function Blog() {

  const data = await getData()
  const user = data.users
  




  return (

     user.map((user)=>
      <div key={user.id}>
      <Link href={`/blog/${user.id}`}>
         <div className="flex">
          <Image
            src={user.image}
            width={350}
            height={2500}
            alt="post img"
          />
          <div>
            <h1>{user.id}</h1>
            <h1>{user.firstName}</h1>
            <p>{user.lastName}  </p>
          </div>
        </div>
        </Link>
        </div>
      )
   
  );
}