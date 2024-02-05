"use client";
import plumber from "@/public/assets/plumber.jpg";
import Image from "next/image";
import { useState } from "react";
const Page = () => {
  const [showMore, setShowMore] = useState(false);
  const loremText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eveniet in eos quos ab, necessitatibus, voluptatem aliquam dicta quidem consequatur obcaecati officia molestias cumque tempora repellendus deleniti quas explicabo. Veniam explicabo blanditiis aspernatur animi mollitia suscipit corporis consequuntur, ab quibusdam quae sapiente! Eveniet nesciunt atque labore pariatur vel obcaecati optio ipsa, porro, accusamus eaque earum natus perferendis sit blanditiis debitis similique reiciendis enim numquam tenetur, nobis laboriosam! Possimus error molestias quia dolorem beatae culpa earum veniam corrupti alias aliquid id ipsum quod, eos esse aperiam aspernatur, voluptatibus et amet quis at fugit animi corporis placeat exercitationem. Distinctio qui reprehenderit architecto sunt itaque saepe, officiis explicabo dolores enim vero autem at odio impedit expedita. Sit voluptatem voluptatum ex, ab sapiente nisi praesentium qui ducimus sunt, facere neque architecto illo exercitationem, suscipit esse consectetur odit similique dolorum! Distinctio ex impedit adipisci voluptatum ducimus explicabo minus. Labore ut odio excepturi assumenda aliquam, nulla mollitia nemo. Incidunt dolorum harum commodi tempore et ad, saepe tenetur illo non quaerat provident dignissimos dolorem voluptates deleniti qui corrupti quam corporis consectetur dolor molestias dicta officia voluptatum quod blanditiis? Sit consectetur saepe cupiditate consequatur autem culpa velit ad itaque odio tenetur. Reiciendis fugiat rem a tempore ipsa officiis!`;
  const truncatedText = showMore ? loremText : `${loremText.slice(0, 150)}...`;
  return (
    <div>
      <video
        src="https://www.youtube.com/watch?v=tGxIylKKkJI&list=RDtGxIylKKkJI&start_radio=1&ab_channel=MUSICBRANCH"
        controls={true}
        autoPlay={true}
        download={false}
        className="w-[80%] h-[600px] mx-auto"
      />
      <div className="max-w-[80%] mx-auto">
        <div>
          <div className="flex items-center gap-6">
            <Image
              className="rounded-full w-24 h-24 object-cover"
              src={plumber}
              alt=""
            />
            <div>
              <h2 className="text-xl text-[#0558CA]">Title</h2>
              <button className="text-lg text-[#FF3988] border-2 px-3 py-1 border-[#FF3988] rounded-full font-bold">
                Contact Us
              </button>
            </div>
          </div>
          <h1 className="text-3xl font-semibold my-6 text-white/80">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
            minima!
          </h1>
          <p className="text-white/80">
            {truncatedText}
            {loremText.length >= 150 && (
              <button
                className="text-semibold text-white block"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? " See less" : " See more"}
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
