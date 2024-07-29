"use client"

export default function Button() {
  return (
    <div>
        <button onClick={()=>console.log("logout")} className="bg-green-700 text-base rounded-md">Log Out</button>
    </div>
  );
}