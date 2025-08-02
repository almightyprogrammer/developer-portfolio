import Image from 'next/image';


const ExperienceSection = () => {

    return (
        <section className="relative flex flex-col items-center justify-center my-auto w-screen p-4 sm:p-2 md:p-2 lg:p-3 gap-8">
            <div className="flex flex-col gap-8">
                <h2 className="text-center font-bold text-5xl">My Experience</h2>
                <div className="flex flex-col items-start gap-[40px] streth justify-center max-w-7xl">
                    <div className="relative flex flex-row items-start gap-8">
                        <div className="flex-row relative min-w-[100px] sm:min-w-[150px] h-auto flex items-start justify-center aspect-6/4">
                            <div className="relative w-full h-full scale-90 flex justify-center">
                                <Image 
                                    src="/images/omj-logo.svg"
                                    fill
                                    alt=""
                                    
                                />
                            </div>
                        </div>
                        <div className="flex flex-col flex-start items-start gap-4">
                            <div className="gap-3">
                                <h3 className="text-2xl/6 font-semibold">
                                    Oh My Jobs
                                </h3>
                                <h3 className="text-xl">
                                    Frontend Developer
                                </h3>
                                <h3>
                                    <em>May 2025 - Present</em>
                                </h3>
                            </div>
                            <div>
                                <ul className="list-inside list-disc">
                                    <li>Independently developed the <a href="https://ohmyjobs.com/earn" target="_blank" rel="noopener noreferrer" className="text-[#663399]">customer-facing website</a> based on design specifications from Figma, using vanila HTML, CSS, and Javascript.</li>
                                    <li>Created an internal analytics dashboard using Google Analytics and SQL queries to BigQuery to optimise user journey process for the marketing department.</li>
                                    <li>Design the pipeline and built analysis tool for MQL and SQL for the marketing department helping lead generation and verification.</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-start gap-8">
                        <div className="relative min-w-[100px] sm:min-w-[150px] h-auto flex items-start aspect-1/1">
                            <div className="relative w-full h-full scale-90">
                                <Image 
                                    src="/images/postcss-removebg-preview.png"
                                    fill
                                    alt=""
                                    
                                />
                            </div>
                        </div>
                        <div className="flex flex-col flex-start items-start gap-4">
                            <div className="gap-3">
                                <h3 className="text-2xl/6 font-semibold">
                                    Engineering for Sustainable Development (UoA Club)
                                </h3>
                                <h3 className="text-xl">
                                    Lead Backend Developer
                                </h3>
                                <h3>
                                    <em>May 2025 - Present</em>
                                </h3>
                            </div>
                            <div>
                                <ul className="list-disc">
                                    <li>Lead the backend development team to create an equipment sharing platform for the faculty and clubs of the Engineering department.</li>
                                    <li>Designed and implemented the backend using Django, PostgreSQL, deployed on Render (Server, DB) and used R2 for object storage for the MVP.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-start gap-8">
                        <div className="relative min-w-[100px] sm:min-w-[150px] h-auto flex items-start aspect-3995/1877">
                            <Image 
                                src="/images/uoa-logo.png"
                                fill
                                alt=""
                                
                            />
                        </div>
                        <div className="flex flex-col flex-start items-start gap-4">
                            <div className="gap-3">
                                <h3 className="text-2xl/6 font-semibold">
                                    The University of Auckland
                                </h3>
                                <h3 className="text-xl">
                                    Scholarship Summer Researcher
                                </h3>
                                <h3>
                                    <em>Dec 2023 - Mar 2024</em>
                                </h3>
                            </div>
                            <div>
                                <ul className="list-disc">
                                    <li>Research in topics of statistical mechanics and active fluid mechanics</li>
                                    <li>Developed simulation program to model the behaviour and trajectory dynamics of fish in oceanic environments, incorporating diverse parameters to analyse and predict collective movement patterns.</li>
                                    <li>Designed and imeplemented a computational model to simulate particle behaviour within potential barriers, using the model to mathematically disprove a hypothesis concerning particle escape.</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-row items-start gap-8">
                        <div className="relative min-w-[100px] sm:min-w-[150px] h-auto flex items-start aspect-3995/1877">
                            <Image 
                                src="/images/uoa-logo.png"
                                fill
                                alt=""
                                className=""
                            />
                        </div>
                        <div className="flex flex-col flex-start items-start gap-4">
                            <div className="gap-3">
                                <h3 className="text-2xl/6 font-semibold">
                                    The University of Auckland
                                </h3>
                                <h3 className="text-xl">
                                    Teaching Assistant
                                </h3>
                                <h3>
                                    <em>February 2025 - Present</em>
                                </h3>
                            </div>
                            <div>
                                <ul className="list-disc">
                                    <li>Working as a data structure and algorithms TA helping students with assignment queries and feedback</li>
                                    <li>Marked students' assignments fairly and swiftly providing detailed comments on their solutions.</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    

                    <div className="flex flex-row items-start gap-8">
                        <div className="relative min-w-[100px] sm:min-w-[150px] h-auto flex items-start aspect-6/4">
                            <Image 
                                src="/images/CityfitnessLogo-01.png"
                                fill
                                alt="" 
                            />
                        </div>
                        <div className="flex flex-col flex-start items-start gap-4">
                            <div className="gap-3">
                                <h3 className="text-2xl/6 font-semibold">
                                    CityFitness
                                </h3>
                                <h3 className="text-xl">
                                    Receptionist
                                </h3>
                                <h3>
                                    <em>October 2022 - Present</em>
                                </h3>
                            </div>
                            <div>
                                <ul className="list-disc">
                                    <li>Managed busy reception desk, greeting members and guests warmly, providing positive first impressions.</li>
                                    <li>Processed new membership sign-ups, renewals, and cancellations accurately and efficiently.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
};


export default ExperienceSection;
