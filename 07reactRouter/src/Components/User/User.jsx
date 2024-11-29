import React from 'react';
import { useParams } from 'react-router-dom';

function User(){

    const {userid} = useParams();
    return(
        <div className="bg-orange-700 text-white max-w-md mx-auto rounded-lg shadow-lg py-6 px-6 m-10">
  <h1 className="text-2xl font-bold mb-4">Welcome to Orange Bliss</h1>
  <p className="text-sm mb-6">
    Discover a delightful space of creativity, where simplicity meets beauty. Orange vibes and white elegance, curated for you!
  </p>
  <button className="bg-white text-orange-900 hover:bg-orange-100 font-semibold px-4 py-2 rounded-lg shadow-md transition-all">
    User : {userid}
  </button>
</div>
    )
}

export default User;