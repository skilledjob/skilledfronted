"use client"

import Image from "next/image";
import { Avatar } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";


import { useState, useEffect } from "react";
import { getCurrentUser } from "@/app/lib/user";


const UserProfileCard=({data})=>{
  const [user, setUser] = useState(null);
  console.log(data,"user")
  const getCurrentUserDetails = async () => {
    const user = await getCurrentUser();
    setUser(user);
  };
  useEffect(() => {
    getCurrentUserDetails();
  }, []);

// update resume sutus
const ApproveApplicantProfile=()=>{


}

    return(
<div className="w-full lg:w-1/4">
<div className="bg-secondary flex flex-col items-center justify-center py-10 px-5 rounded-2xl">
  <Avatar
    image={
      data?.profilePicture ? data?.profilePicture : null
    }
    size="large"
  />
  <h1 className="text-xl mt-3 font-semibold text-white">
    {data?.firstName + " " + data?.lastName}
  </h1>
  <div className="border-t border-t-white/30 w-full mt-5 pt-3">
    <span className="text-white/60 font-extralight">Age:</span>
    <p className="font-semibold text-white">28</p>
  </div>
  <Button onClick={ApproveApplicantProfile}>
{user?.role === "admin" ? "Approved" : user?.role === "hirer" ? "hirer" : ""}

</Button>

  
 
</div>
</div>
    )
}
export default  UserProfileCard

