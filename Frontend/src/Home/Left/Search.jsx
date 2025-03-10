import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useGetAllUsers from '../../context/useGetAllUsers.jsx';
import useConversation from '../../statemanage/useConversation.js';

const Search = () => {
  const [search,setSearch] = useState("")
  const [allUsers] = useGetAllUsers();
  const {setSelectedConversation} = useConversation()
  return (
    <>
    <div className='h-[10vh]'>
      <div className='px-6 py-1'>
          <form onSubmit={
            (handleSubmit = (e)=>{
            e.preventDefault();
            if(!search) return;
            const conversation = allUsers.find((user) => {
              return user.name.toLowerCase().includes(search.toLowerCase());
            
            if(conversation){
              setSelectedConversation(conversation);
              setSearch(" ");
            }
            else{
              alert("user not found");
            }
          });
          })
          }>
          <div className='flex space-x-3'>
          <label className="border-[1px] border-gray-700 bg-slate-900 rounded-l-lg  flex items-center gap-2 w-[80%] p-2">
              <input type="text" className="grow outline-none bg-transparent" placeholder="Search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              />
          
          </label>
          <button><IoSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300'></IoSearch></button>
          </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default Search
