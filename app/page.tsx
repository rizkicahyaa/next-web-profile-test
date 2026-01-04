import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Image className="rounded-full" src="/Villhaze.jpg" alt="logo" width={100} height={20} priority />
                <div className="flex flex-col items-center gap-6 py-5 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Rizki Cahya Ramdani</h1>
                    <span className="">Software Engineering | Web Developer</span>
                    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 text-justify">Computer Science student at Universitas Amikom Yogyakarta. Passionate about building web applications, teaching programming, and exploring machine learning in real-world projects.</p>
                </div>
                <div className="flex flex-col w-full gap-6 text-base font-medium sm:flex-row">
                    <a className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]" href="https://rizkicahyaa.vercel.app" target="_blank" rel="noopener noreferrer">
                        My Profile
                    </a>
                    <a className="flex h-12 w-full items-center justify-center rounded-full border border-gray-300 border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]" href="https://github.com/rizkicahyaa?tab=repositories" target="_blank" rel="noopener noreferrer">
                        More Project
                    </a>
                </div>

                <div className="mx-auto">
                    <div className="mx-auto w-36 h-0.5 bg-gray-200 mt-12"></div>
                </div>

                <div className="flex flex-col flex-grow w-full gap-6 mt-10">
                    <h1 className="font-bold text-2xl">My Project</h1>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="border-gray-300 border-1 shadow-sm rounded-2xl p-6 sm:w-full">
                            <h1 className="font-bold text-2xl mb-3">MiraiNime</h1>
                            <p className="text-justify mb-6 leading-8">MiraiNime is a simple website that utilizes the Jikan API to display anime information from MyAnimeList.</p>

                            <div className="flex flex-col w-full gap-3 text-base text-center font-medium sm:flex-row">
                                <a href="https://github.com/rizkicahyaa/mirai-nime.git" target="_blank" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] dark:hover:bg-[#ccc]">
                                    View Project
                                </a>
                                <a href="https://mirainime.vercel.app" target="_blank" className="bg-white text-sm text-black border-1 border-gray-300 px-5 py-2.5 rounded-3xl transition hover:bg-[#00000021]">
                                    Demo
                                </a>
                            </div>
                        </div>

                        <div className="border-gray-300 border-1 shadow-sm rounded-2xl p-6 sm:w-full">
                            <h1 className="font-bold text-2xl mb-3">Focsy</h1>
                            <p className="text-justify mb-6 leading-8">A productivity timer web application that helps you stay focused, manage your time, and get more done (pomodoro).</p>
                            <div className="flex flex-col w-full gap-3 text-base text-center font-medium sm:flex-row">
                                <a href="https://github.com/rizkicahyaa/mirai-nime.git" target="_blank" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] dark:hover:bg-[#ccc]">
                                    View Project
                                </a>
                                <a href="https://mirainime.vercel.app" target="_blank" className="bg-white text-sm text-black border-1 border-gray-300 px-5 py-2.5 rounded-3xl transition hover:bg-[#00000021]">
                                    Demo
                                </a>
                            </div>
                        </div>

                        <div className="border-gray-300 border-1 shadow-sm rounded-2xl p-6 sm:w-full">
                            <h1 className="font-bold text-2xl mb-3">Jogja Culinary</h1>
                            <p className="text-justify mb-6 leading-8">A culinary website in Yogyakarta with a responsive layout using React, Tailwind CSS, and MySQL</p>
                            <div className="flex flex-col w-full gap-3 text-base text-center font-medium sm:flex-row">
                                <a href="https://github.com/rizkicahyaa/mirai-nime.git" target="_blank" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] dark:hover:bg-[#ccc]">
                                    View Project
                                </a>
                                <a href="https://mirainime.vercel.app" target="_blank" className="bg-white text-sm text-black border-1 border-gray-300 px-5 py-2.5 rounded-3xl transition hover:bg-[#00000021]">
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="border-gray-300 border-1 shadow-sm rounded-2xl p-6 sm:w-full">
                        <h1 className="font-bold text-2xl mb-3">MiraiNime</h1>
                        <p className="text-justify mb-6 leading-8">MiraiNime is a simple website that utilizes the Jikan API to display anime information from MyAnimeList.</p>

                        <div className="flex flex-col w-full gap-3 text-base text-center font-medium sm:flex-row">
                            <a href="https://github.com/rizkicahyaa/mirai-nime.git" target="_blank" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] ">
                                View Project
                            </a>
                            <a href="https://mirainime.vercel.app" target="_blank" className="bg-white text-sm text-black border-1 border-gray-300 px-5 py-2.5 rounded-3xl transition hover:bg-[#00000021]">
                                Demo
                            </a>
                        </div>
                    </div>

                    <div className="border-gray-300 border-1 shadow-sm rounded-2xl p-6 sm:w-full">
                        <h1 className="font-bold text-2xl mb-3">Focsy</h1>
                        <p className="text-justify mb-6 leading-8">A productivity timer web application that helps you stay focused, manage your time, and get more done (pomodoro).</p>
                        <div className="flex flex-col w-full gap-3 text-base text-center font-medium sm:flex-row">
                            <a href="https://github.com/rizkicahyaa/mirai-nime.git" target="_blank" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] ">
                                View Project
                            </a>
                            <a href="https://mirainime.vercel.app" target="_blank" className="bg-white text-sm text-black border-1 border-gray-300 px-5 py-2.5 rounded-3xl transition hover:bg-[#00000021]">
                                Demo
                            </a>
                        </div>
                    </div>

                    <div className="border-gray-300 border-1 shadow-sm rounded-2xl p-6 sm:w-full">
                        <h1 className="font-bold text-2xl mb-3">Jogja Culinary</h1>
                        <p className="text-justify mb-6 leading-8">A culinary website in Yogyakarta with a responsive layout using React, Tailwind CSS, and MySQL</p>
                        <div className="flex flex-col w-full gap-3 text-base text-center font-medium sm:flex-row">
                            <a href="https://github.com/rizkicahyaa/mirai-nime.git" target="_blank" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] ">
                                View Project
                            </a>
                            <a href="https://mirainime.vercel.app" target="_blank" className="bg-white text-sm text-black border-1 border-gray-300 px-5 py-2.5 rounded-3xl transition hover:bg-[#00000021]">
                                Demo
                            </a>
                        </div>
                    </div> */}
                </div>

                <div className="mx-auto">
                    <div className="mx-auto w-36 h-0.5 bg-gray-200 mt-12"></div>
                </div>

                <footer className="text-center mx-auto mt-20">
                    <p className="">&copy; 2026 Rizki Cahya. All rights reserved.</p>
                </footer>
            </main>
        </div>
    );
}
