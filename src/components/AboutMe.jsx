export  const AboutMe = () => {
    return (
        <main className="flex justify-center w-full bg-[#F9FAFB] dark:bg-[#111827]" id="aboutMe">
            <div className="container flex flex-col py-[96px] px-[80px] px">
                <div className="flex flex-col gap-12">
                <div className="w-[105px] h-[28px] rounded-xl py-[4px] px[20px] bg-gray-200 flex justify-center items-center text-[14px] font-medium m-auto dark:bg-[#374151] dark:text-[#D1D5DB]">About me</div>
                <div className=" flex flex-col items-center justify-center  w-full md:hidden">
              <img
                src="./Mobile-profile.png"
                alt=""
              />
            </div>
                <div className="flex gap-12 justify-between">
                <div className="md:flex hidden ">
                    <img
              src="./Big-profile.png"
              alt=""
            />
                   
                </div>
                <div className="max-w-[584px] flex-col gap-4">
                    <p className="text-[30px] font-semibold dark:text-[#F9FAFB]">
                    Curious about me? Here you have it:
                    </p>
                    <div className="text-[16px] font-normal text-gray-600 flex flex-col gap-[16px] dark:text-[#D1D5DB]">
                    <p>
                    I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.
                    </p>
                    <p>
                    Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.  
                    </p>
                    <p>
                    With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.
                    </p>
                    <p>
                    Finally, some quick bits about me.
                    </p>
                    <div className="flex gap-[-2.5px]">
                    <ul className="list-disc list-inside flex flex-col ml-[12px]">
                        <li>B.E. in Computer Engineering</li>
                        <li>Full time freelancer</li>
                    </ul>
                    <ul className="list-disc list-inside ml-[12px]">
                    <li>Avid learner</li>
                    </ul>
                    </div>
                    <p>
                    One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
                    </p>
                </div>
                </div>
  
                
                </div>
                </div>
            </div>
        </main>
    );
  }