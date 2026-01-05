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
                </div>

                <div className="mx-auto">
                    <div className="mx-auto w-36 h-0.5 bg-gray-200 mt-12"></div>
                </div>

                <div className="flex flex-col flex-grow w-full gap-6 mt-10">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input id="first-name" type="text" name="first-name" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input id="last-name" type="text" name="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input id="email" type="email" name="email" autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                    <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input id="street-address" type="text" name="street-address" autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input id="city" type="text" name="city" autoComplete="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input id="region" type="text" name="region" autoComplete="address-level1" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input id="postal-code" type="text" name="postal-code" autoComplete="postal-code" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="text-center mx-auto mt-20">
                    <p className="">&copy; 2026 Rizki Cahya. All rights reserved.</p>
                </footer>
            </main>
        </div>
    );
}
