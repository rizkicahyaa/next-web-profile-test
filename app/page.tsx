import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Header />
                {/* projects */}
                <div className="flex flex-col flex-grow w-full gap-6 mt-10">
                    <h1 className="font-bold text-2xl">My Project</h1>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="border-gray-300 border-1 shadow-sm rounded-2xl overflow-hidden sm:w-full">
                            <Image className="w-full h-40 object-cover" src="/images/mirainime.png" alt="mirainime" width={500} height={20} priority />
                            <div className="p-6">
                                <h1 className="font-bold text-lg mb-3">MiraiNime</h1>
                                <p className="text-justify mb-6 leading-8 text-zinc-600 dark:text-gray-200">MiraiNime is a simple website that utilizes the Jikan API to display anime information from MyAnimeList.</p>

                                <div className="flex flex-col w-full gap-3 text-base text-center font-medium sm:flex-row">
                                    <a href="https://github.com/rizkicahyaa/mirai-nime.git" target="_blank" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] dark:hover:bg-[#ccc] dark:text-black">
                                        View Project
                                    </a>
                                    <a href="https://mirainime.vercel.app" target="_blank" className="bg-white text-sm text-black border-1 border-gray-300 px-5 py-2.5 rounded-3xl transition hover:bg-[#00000021]">
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="border-gray-300 border-1 shadow-sm rounded-2xl overflow-hidden sm:w-full">
                            <Image className="w-full h-40 object-cover" src="/images/focsy-2.png" alt="focsy" width={500} height={20} priority />
                            <div className="p-6">
                                <h1 className="font-bold text-lg mb-3">Focsy</h1>
                                <p className="text-justify mb-6 leading-8 text-zinc-600 dark:text-gray-200">A productivity timer web application that helps you stay focused, manage your time, and get more done (pomodoro).</p>
                                <div className="flex flex-col w-full gap-3 text-base text-center font-medium sm:flex-row">
                                    <a href="https://github.com/rizkicahyaa/focsy.git" target="_blank" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] dark:hover:bg-[#ccc] dark:text-black">
                                        View Project
                                    </a>
                                    <a href="https://focsy.vercel.app" target="_blank" className="bg-white text-sm text-black border-1 border-gray-300 px-5 py-2.5 rounded-3xl transition hover:bg-[#00000021]">
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="border-gray-300 border-1 shadow-sm rounded-2xl overflow-hidden sm:w-full">
                            <Image className="w-full h-40 object-cover" src="/images/jogja-culinary.png" alt="jogja-culinary" width={500} height={20} priority />
                            <div className="p-6">
                                <h1 className="font-bold text-lg mb-3">Jogja Culinary</h1>
                                <p className="text-justify mb-6 leading-8 text-zinc-600 dark:text-gray-200">A culinary website in Yogyakarta with a responsive layout using React, Tailwind CSS, and MySQL</p>
                                <div className="flex flex-col w-full gap-3 text-base text-center font-medium sm:flex-row">
                                    <a href="https://github.com/rizkicahyaa/jogja-culinary.git" target="_blank" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] dark:hover:bg-[#ccc] dark:text-black">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="border-gray-300 border-1 shadow-sm rounded-2xl overflow-hidden sm:w-full">
                            <Image className="w-full h-40 object-cover" src="/images/roomoria.png" alt="roomoria" width={500} height={20} priority />
                            <div className="p-6">
                                <h1 className="font-bold text-lg mb-3">Roomoria</h1>
                                <p className="text-justify mb-6 leading-8 text-zinc-600 dark:text-gray-200">Modern hotel booking website built using React, TypeScript, and Tailwind CSS.</p>
                                <div className="flex flex-col w-full gap-3 text-base text-center font-medium sm:flex-row">
                                    <a href="https://github.com/rizkicahyaa/roomoria.git" target="_blank" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] dark:hover:bg-[#ccc] dark:text-black">
                                        View Project
                                    </a>
                                    <a href="https://roomoria.vercel.app" target="_blank" className="bg-white text-sm text-black border-1 border-gray-300 px-5 py-2.5 rounded-3xl transition hover:bg-[#00000021]">
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <a href="https://github.com/rizkicahyaa?tab=repositories" className="hover:text-blue-500 transition" target="_blank">
                            More? On my GitHub →
                        </a>
                    </div>
                </div>

                <div className="mx-auto">
                    <div className="mx-auto w-36 h-0.5 bg-gray-200 mt-12"></div>
                </div>

                {/* contact */}
                <div className="flex flex-col flex-grow w-full gap-6 mt-10">
                    <div className="pb-4">
                        <h1 className="font-bold text-2xl">Contact Me</h1>
                        <form action="">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="name" className="block text-sm/6 font-medium">
                                        Your name
                                    </label>
                                    <div className="mt-2">
                                        <input id="name" type="text" name="name" autoComplete="given-name" className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm/6 font-medium">
                                        Your email
                                    </label>
                                    <div className="mt-2">
                                        <input id="email" type="email" name="email" autoComplete="family-name" className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div className="sm:col-span-full">
                                    <label htmlFor="message" className="block text-sm/6 font-medium">
                                        Your message
                                    </label>
                                    <div className="mt-2">
                                        <textarea id="about" name="about" rows={3} className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-center gap-x-6">
                                <button type="submit" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] dark:hover:bg-[#ccc] dark:text-gray-900">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <footer className="text-center mx-auto mt-20">
                    <p className="">&copy; 2026 Rizki Cahya. All rights reserved.</p>
                </footer>
            </main>
        </div>
    );
}
