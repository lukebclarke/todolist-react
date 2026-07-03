import { HiClipboardList } from "react-icons/hi";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='bg-slate-800 shadow-lg flex items-center justify-between py-2 px-32 fixed top-0 left-0 w-full'>
            <Link to="/">
                <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
                    <HiClipboardList className="text-3xl"/>
                    <span className="font-semibold text-2xl">ToDo List</span>
                </span>
            </Link>

            <div className="flex items-center gap-5 text-black">
                <Link to="/" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300">
                    Tasks
                </Link>

                <Link to="/history" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300">
                    History
                </Link>

                <Link to="/calendar" className="py-1 px-3 text-lg font-light text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300">
                    Calendar
                </Link>
            </div>
        </nav>
    )
}