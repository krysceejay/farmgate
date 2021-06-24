import Layout from '../components/Layout'
import Item from '../components/item/Item'

const Home = () => {
  return (
    <Layout title="Home">
      <header className="bg-white pt-6">
        <section className="flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-lg font-medium text-location">Kimironko, Kigali</span>
        </section>
        <section id="search">
          <div className="flex justify-center items-center px-4">
            <form name="search" className="flex-1 mr-4">
              <div className="inline-block relative rounded-lg leading-none my-4 w-full">
                <span className="form-control-wrap">
                  <input
                    type="text"
                    name="search"
                    className="inline-block border-0 outline-none text-xs text-search-text bg-search-bg m-0 py-0 pl-12 pr-4 w-full h-12 rounded-lg"
                    placeholder="Search for products"
                  />
                </span>
                <button type="submit" className="inline-block absolute top-0 left-0 w-12 h-12 text-xl text-center m-0 p-0 outline-none border-0 cursor-pointer rounded-l-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
        </section>
      </header>
      <section className="sticky top-0 bg-white py-4">
          <h2 className="font-bold text-2xl px-4">Categories</h2>
          <div className="carousel-wrp">
            <div className="carousel-item active">Fertilizers</div>
            <div className="carousel-item">Forage</div>
            <div className="carousel-item">Herbicides</div>
            <div className="carousel-item">Medicine</div>
            <div className="carousel-item">Seed</div>
            <div className="carousel-item">Fertilizer</div>
            <div className="carousel-item">Herbicides</div>
          </div>
        </section>
      <section className="mt-4 mb-20">
        <div className="grid grid-cols-1 gap-4 px-4 pb-8">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>
    </Layout>
  )
}

export default Home
