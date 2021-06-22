import Link from 'next/link'

const Tabs = () => {
    return (
        <div className="fixed bottom-0 w-full z-10">
            <ul className="flex justify-between items-center bg-white">
                <li className="p-4 text-center current">
                    <Link href="/">
                        <a className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="text-xs">Home</span>
                        </a>
                    </Link>
                </li>
                <li className="p-4 text-center">
                    <Link href="/">
                        <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        <span className="text-xs">Saved</span>
                        </a>
                    </Link>
                </li>
                <li className="p-4 text-center">
                    <Link href="/">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-xs">User</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Tabs
