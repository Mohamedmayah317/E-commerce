import Image from "next/image"

async function getData(id) {
    const res = await fetch(`https://dummyjson.com/users/${id}`)
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


export default async function Posts({params}) {

    const users = await getData(params.id)
    // console.log(users);
    
    console.log(params.id);
  return (
    <div>
        <header>

            <div>{users.id}</div>
            <div>{users.firstName}</div>
        </header>
        <Image
            src={users.image}
            width={350}
            height={2500}
            alt="post img"
          />
        <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit temporibus quis esse mollitia cupiditate quo maiores soluta, provident minima ullam commodi deleniti rem tempore quos labore veniam quibusdam error quisquam magni laudantium sequi illum exercitationem! Ut commod
            i totam odit accusantium sit? Accusamus facilis architecto perspiciatis dolorum hic, voluptatem ratione eaque.</p></div>
    </div>
  );
}