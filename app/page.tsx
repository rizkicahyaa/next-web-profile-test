import Image from "next/image";
import Header from "./components/Header";
import ProjectSection from "./components/projectSection";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Header />
                <ProjectSection />

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
