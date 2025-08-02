import Image from "next/image";

const AboutMe = () => {


    return (
        <>
        <section className="relative flex flex-col items-center justify-center gap-8 my-auto w-screen p-3 sm:p-3 md:p-4 lg:p-5">
            <div>
                <h2 className="text-center font-bold text-5xl">Who I am and What I do</h2>
            </div>
            <div className="relative flex w-full gap-8 flex-col md:flex-row items-start max-w-7xl">

                <div className="flex p-6 flex-col flex-1 w-full md:w-[50%] items-start gap-5 bg-[#191970] text-white rounded-4xl shadow-2xl">
                    <div className="flex flex-row w-full gap-6">
                        <div className="relative w-[128px] h-[128px] rounded-full overflow-hidden flex-shrink-0 justify-center">
                            <Image 
                                src="/images/profile_image.png"
                                fill
                                alt=""
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <div className="flex flex-col md:flex-row justify-between w-full">
                                <h2 className="flex text-4xl font-semibold justify-middle items-start">
                                    Juwon Han
                                </h2>
                                <h2 className="flex text-lg justify-middle items-start">
                                    📍Auckland, NZ
                                </h2>
                            
                            </div>
                            
                            <h2 className="text-white">
                                Incoming graduate in BSc majoring in Mathematics and Computer Science
                            </h2>
                        </div> 
                    </div>

                    <h2 className="text-lg">
                        I create anything from robust backend systems to interactive frontend experiences, and if I don't know how, I learn.
                    </h2>

                    <h2 className="text-lg">
                        And when I'm not working or studying, I play football and poker for physical/mental stimulation.
                    </h2>

                    <h2 className="text-lg">
                        I am always on the look out to expand my knowledge, sharpen my skills, and help communities out in a meaningful way. Please feel free to send me an 
                        <a href="mailto:lehman0308@gmail.com?subject=Inquiry from your website" className="text-[#8BC34A]"> email<sup>↗</sup> </a>
                         if you think I will be a good fit.
                    </h2>
                    
                </div>

                <div className="flex p-6 flex-col flex-1 w-full md:w-[50%] items-start gap-5 bg-[#191970] text-white rounded-4xl shadow-2xl">
                    <div className="relative w-full h-auto overflow-hidden aspect-3360/1876 rounded-2xl">
                        <Image
                            src="/images/esd-clubcycle-image.png"
                            fill
                            alt="" />
                    </div>
                    <div className="flex">
                        <a
                            href="https://esd-clubcycle.netlify.app/Home"
                            className="hover:underline duration-300 [&>h2>sup]:no-underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2 className="text-4xl font-semibold tr">
                                ClubCycle by ESD<sup>↗</sup>
                            </h2>
                        </a>
                    </div>
                    <div>
                        <p className="text-lg">
                        Our team at Engineering for Sustainable Development created ClubCycle, a platform enabling engineering clubs and the department at UoA to rent and borrow items. This initiative aims to enhance the overall sustainability and resource efficiency within the university.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg">
                            The MVP is out now. We hope to expand upon the platform and to the wider community in the future.
                        </p>
                    </div>
                </div>

            </div>
        </section>
        
        </>
    )


}

export default AboutMe;