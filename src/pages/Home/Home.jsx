import React from 'react';

function Home() {
  return (
    <div>
      <div className="mt-[158px]  px-[87px] w-full   flex items-center justify-center">
        <div className=" max-w-[1047px] flex items-center justify-center flex-col">
          <span className="font-['Figtree'] font-[600] leading-[100%] text-[64px]  text-center">
            Own a piece of Main Street: Join the SMB revolution!
          </span>
          <div className="mt-[40px] max-w-[809px] text-center">
            <span className="font-['Figtree'] font-[400] leading-[140%] text-[20px] text-center text-[#747474]">
              Diversify your portfolio – unlock the attractive returns of Small
              - Medium Businesses without any of the operational burden.
            </span>
          </div>
        </div>
      </div>
      {/* Image Area */}

      <div className=" flex items-end  gap-[50px] relative mt-[40px]">
        <img src="./1.svg" alt="" className="w-[260px]" />
        <img src="./2.svg" alt="" className="w-[220px]" />
        <img src="./3.svg" alt="" className="w-[220px]" />
        <img src="./4.svg" alt="" className="w-[220px]" />
        <img src="./5.svg" alt="" className="w-[260px]" />
        <div className="absolute top-5 translate-x-[-50%] translate-y-[-50%] left-[50%] cursor-pointer  ">
          <span className="w-[260px] h-[63px] rounded-[100px] bg-[#000000] text-white text-nowrap py-[15px] px-[30px] ">
            Join the Waitlist
          </span>
        </div>
      </div>

      <div className="mt-[140px] flex justify-around bg-[#F5F5F7] rounded-[10px]  px-[20px] py-[30px]">
        <div className="flex items-center flex-col gap-[10px] w-[139px]">
          <div className="flex items-start justify-start text-start gap-1">
            <img src="./Group.svg" alt="error" />
            <span className="font-['Figtree] text-[16px] font-[400] leading-[140%] tracking-[0%] text-[#747474]">
              FranShares Waitlist counter
            </span>
          </div>
          <span className='font-["Figtree"] font-[600] text-[24px] leading-[140%] tracking-[0%] text-[#006CFF]'>
            41,974
          </span>
        </div>
        <div className="flex items-center flex-col gap-[10px] w-[239px]">
          <div className="flex items-start justify-start text-start gap-1">
            <img src="./Group.svg" alt="error" />
            <span className="font-['Figtree] text-[16px] font-[400] leading-[140%] tracking-[0%] text-[#747474]">
              An investor from Connecticut intends to invest
            </span>
          </div>
          <span className='font-["Figtree"] font-[600] text-[24px] leading-[140%] tracking-[0%] text-[#006CFF]'>
            $2,000
          </span>
        </div>
        <div className="flex items-center flex-col gap-[10px] w-[204px]">
          <div className="flex items-start justify-start text-start gap-1">
            <img src="./Group.svg" alt="error" />
            <span className="font-['Figtree] text-[16px] font-[400] leading-[140%] tracking-[0%] text-[#747474]">
              An investor from Oregon intends to invest
            </span>
          </div>
          <span className='font-["Figtree"] font-[600] text-[24px] leading-[140%] tracking-[0%] text-[#006CFF]'>
            $20,000
          </span>
        </div>
        <div className="flex items-center flex-col gap-[10px] w-[238px]">
          <div className="flex items-start justify-start text-start gap-1">
            <img src="./Group.svg" alt="error" />
            <span className="font-['Figtree] text-[16px] font-[400] leading-[140%] tracking-[0%] text-[#747474]">
              An investor from New Jersey intends to invest
            </span>
          </div>
          <span className='font-["Figtree"] font-[600] text-[24px] leading-[140%] tracking-[0%] text-[#006CFF]'>
            $20 ,000
          </span>
        </div>
      </div>
      <div className="mt-[140px] mb-[140px]  text-center">
        <span>Featured In</span>
      </div>
    </div>
  );
}

export default Home;
