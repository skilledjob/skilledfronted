import Image from "next/image";
import logo from "@/public/assets/e1.png";
import Link from "next/link";
import { approvedResume } from "@/app/lib/jobSeeker";

export default function Card({jobSeeker}) {
 
 //todo fif desinf and refetcj
    const ApproveApplicantProfile=async(id)=>{
     
try{
  if(id){
    let data
    const result=await approvedResume(id,data)
    console.log(result)
  }
  

}
    catch(error){
      console.log(error)

    }
  }
    
  return (
   
    <div className="border border-white/70 p-5 rounded-md">
    <Link href={`/discription/${
      jobSeeker?.slug
      }`} >
      <div className="flex items-start gap-4 justify-between">
        <div className="min-w-16 min-h-16">
          <Image
            src={logo}
            alt="logo"
            height={64}
            width={64}
            className="h-16 w-16 rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">
            Senior Full Stack Engineer, Creator Success
          </h3>
          <p className="text-sm">
            <span className="text-white/70">Start: </span>1 days ago
          </p>
        </div>
      </div>
      </Link>

      <video
        src=""
        controls
        autoPlay
        poster="../../../../../public/assets/banner-detail.jpg"
      ></video>

      <div className="space-x-2 flex justify-center">
       
      <button onClick={() => ApproveApplicantProfile(jobSeeker?.id)} className="bg-btnColor text-primary inline-block px-6 py-1 rounded-md mt-2 items-center">
  Approved
</button>

      </div>
    </div>
    
   
  );
}
