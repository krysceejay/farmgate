import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Item from '../components/item/Item'

const Details = () => {
    const router = useRouter()

    return (
        <Layout title="Details" showTabs={false}>
            <header className="flex justify-between items-center pt-6 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => router.back()}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
            </header>
            <section>
                <div className="w-full h-52 mt-4">
                    <img src="/img/pngfuel.png" className="w-full h-full object-cover px-10" />
                </div>
            </section>
            <section className="px-4 mt-4">
                <div>
                    <div className="flex justify-between item-center">
                        <h3 className="text-2xl font-medium tracking-wide">Netafim Valve</h3>
                        <div>
                            <span className="text-current text-2xl font-black">N20</span><span className="text-xs"> /GRAM</span>
                        </div>
                    </div>
                    <div className="flex mt-2">
                        <div>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm text-gray-500 ml-1 mt-1">Lagos State</span>
                            </div>
                            <div className="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="text-sm text-gray-500 ml-1 mt-1">Merchant CCC</span>
                            </div>
                        </div>
                        <div className="ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm text-gray-500 ml-1 mt-1">Added <span className="font-semibold">4 days ago</span></span>
                        </div>
                    </div>
                    <div className="w-full bg-discount text-center py-2 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs font-bold ml-2 text-current">N2,000 Cheaper per Ton basis</span>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Product Detail</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <p className="text-gray-600 text-sm mt-4">
                    Electrically operated, these control valves allow manual override and throttling, and are specially designed for greenhouses and landscape applications. They’re also available in both straight and angled configurations.
                    </p>
                    <ul className="flex flex-col gap-2 mt-4 text-xs capitalize text-gray-600">
                        <li className="grid grid-cols-2"><span>Application</span> <span className="font-bold">Function</span></li>
                        <li className="grid grid-cols-2"><span>Operation</span> <span className="font-bold">Other Characteristics</span></li>
                        <li className="grid grid-cols-2"><span>Irrigation</span> <span className="font-bold">For Control</span></li>
                        <li className="grid grid-cols-2"><span>Hydraulic, Manual</span> <span className="font-bold">For Green House</span></li>
                    </ul>
                    <button className="bg-current text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-lg font-medium ml-2">Call</span>
                    </button>
                    
                </div>

            </section>
            <section className="my-4">
                <div className="px-4 pb-8">
                    <h2 className="text-lg font-bold">Similiar to the Offer</h2>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Details
