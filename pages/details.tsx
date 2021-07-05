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
            <section className="px-4">
                <div>
                    <div className="flex justify-between item-center">
                        <h3 className="text-base font-medium tracking-wide">Netafim Valve</h3>
                        <div>
                            <span className="text-current text-lg font-black">N20</span><span className="text-xs"> /GRAM</span>
                        </div>
                    </div>
                </div>
                <div></div>

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
