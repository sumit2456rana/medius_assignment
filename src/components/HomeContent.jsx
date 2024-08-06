import React from "react"
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import starIcon from "../assets/star.svg";
function HomeContent() {
    return (
        <div className="m-auto  max-w-screen-2xl px-6 md:px-10 lg:px-14">
            <h1 className="font-semibold m-0 p-0 w-auto top-32 z-10 pt-12 text-center text-[50px] text-secondaryGreen md:relative md:top-[72px] lg:top-32 md:p-0 lg:text-[118px] leading-[1]">
                Mortgages <br /> made simple
            </h1>
            <div className="relative flex items-center justify-center">
                <div className="w-auto mb-9">
                    <button className="h-16 px-12 py-5 bg-secondaryGreen rounded-full font-semibold hover:bg-transparent duration-300 transition-all ease-in-out hover:text-white">Start my approval</button>
                    <p className="mt-3 flex justify-center text-[#dfe0dc] text-sm items-center font-medium tracking-wide gap-1"><span>
                        <TimerOutlinedIcon />
                    </span> 3 min | No credit impact</p>
                </div>
                <div className="z-1 mt-5 md:mt-0">
                    <img width="510" height="810" src="https://media.better.com/better-com/homepage/hero-variant-c.webp" alt="Hero img" />
                </div>
                <div className="rounded-base absolute bottom-8 px-3 py-2.5 md:relative md:bg-transparent md:mt-lg">
                    <div className="flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_328_5133)"><path d="M23.9998 12.2755C23.9998 11.4598 23.9324 10.6397 23.7884 9.83716H12.2405V14.4581H18.8534C18.579 15.9485 17.6973 17.2669 16.4062 18.1047V21.103H20.3515C22.6683 19.013 23.9998 15.9264 23.9998 12.2755Z" fill="#4285F4"></path><path d="M12.2394 24.0003C15.5414 24.0003 18.326 22.9377 20.3549 21.1034L16.4096 18.1051C15.3119 18.837 13.8949 19.2515 12.2439 19.2515C9.04991 19.2515 6.34175 17.1394 5.37006 14.2998H1.29883V17.3907C3.37718 21.4429 7.61036 24.0003 12.2394 24.0003Z" fill="#34A853"></path><path d="M5.36724 14.299C4.8544 12.8086 4.8544 11.1948 5.36724 9.70447V6.61353H1.30051C-0.435945 10.0043 -0.435945 13.9992 1.30051 17.3899L5.36724 14.299Z" fill="#FBBC04"></path><path d="M12.2394 4.74868C13.9849 4.72223 15.6718 5.36599 16.9359 6.54769L20.4314 3.12164C18.218 1.08453 15.2805 -0.0354426 12.2394 -0.000167897C7.61036 -0.000167897 3.37718 2.55725 1.29883 6.61383L5.36556 9.70477C6.33276 6.86075 9.04541 4.74868 12.2394 4.74868Z" fill="#EA4335"></path></g><defs><clipPath id="clip0_328_5133"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                        <div className="flex items-center">
                            <img src={starIcon} />
                            <img src={starIcon} />
                            <img src={starIcon} />
                            <img src={starIcon} />
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0307 1.75142C12.2762 1.5878 12.5647 1.50049 12.8598 1.50049V3.0078V7.94151V8.82243L12.8595 9.37512V9.75012L12.8598 11.2501L12.8595 13.5001V13.8751V14.6251V15.5626V16.5001V16.8751L12.8532 18.6266L8.072 21.5328C7.81941 21.685 7.52755 21.7594 7.23291 21.7467C6.93827 21.7339 6.65393 21.6346 6.41543 21.4611C6.17693 21.2877 5.99486 21.0477 5.89198 20.7713C5.7891 20.495 5.76998 20.1944 5.837 19.9072L7.1045 14.4191L2.87544 10.7234C2.65176 10.5305 2.49001 10.2758 2.41049 9.99138C2.33096 9.7069 2.3372 9.40528 2.42841 9.12434C2.51962 8.8434 2.69175 8.59564 2.92321 8.41213C3.15467 8.22862 3.43516 8.11754 3.7295 8.0928L9.30387 7.60999L11.4798 2.41999C11.5934 2.14766 11.7851 1.91504 12.0307 1.75142Z" fill="#FFBC14"></path><path d="M13.6873 1.75142C13.4418 1.5878 13.1533 1.50049 12.8582 1.50049V3.0078V7.94151V8.82243L12.8585 9.37512V9.75012L12.8582 11.2501L12.8585 13.5001V13.8751V14.6251V15.5626V16.5001V16.8751L12.8648 18.6266L17.646 21.5328C17.8986 21.685 18.1905 21.7594 18.4851 21.7467C18.7797 21.7339 19.0641 21.6346 19.3026 21.4611C19.5411 21.2877 19.7232 21.0477 19.826 20.7713C19.9289 20.495 19.948 20.1944 19.881 19.9072L18.6135 14.4191L22.8426 10.7234C23.0663 10.5305 23.228 10.2758 23.3075 9.99138C23.3871 9.7069 23.3808 9.40528 23.2896 9.12434C23.1984 8.8434 23.0263 8.59564 22.7948 8.41213C22.5633 8.22862 22.2829 8.11754 21.9885 8.0928L16.4141 7.60999L14.2382 2.41999C14.1246 2.14766 13.9329 1.91504 13.6873 1.75142Z" fill="#E8EAE6"></path></svg>
                        </div>
                    </div>
                    <p className="mt-1 text-xs text-[#dfe0dc] font-medium tracking-wider">
                    4.6 Stars | 3177 Google reviews
                    </p>
                </div>
            </div>
        </div>
    )
};

export default HomeContent;
