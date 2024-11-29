import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(){
    const data= useLoaderData()
    
    return(
        <div className="bg-green-100 text-gray-700 max-w-3xl mx-auto rounded-lg shadow-md p-10 flex items-center justify-between m-10">
  
  <div className="flex-shrink-0">
    <img 
      src={data.avatar_url} 
      alt="GitHub Profile" 
      className="rounded-full border border-green-300 w-40 h-40"
    />
  </div>

  
  <div className="ml-6 text-right">
    <h2 className="text-2xl font-semibold">GitHub Followers : </h2>
    <p className="text-4xl font-bold text-green-800">{data.followers}</p>
    
  </div>
</div>

    )
}

export default Github;

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/raj-singh21');
    return response.json();
}