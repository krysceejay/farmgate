import Link from 'next/link'
const Item = () => {
    return (
        <div className="bg-white rounded-t-md">
            <div className="flex">
              <div className="w-28 p-1 mr-2">
                <img src="/img/pexels.jpeg" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 pr-3 pt-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-medium tracking-wide">Netafim Valve</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <div className="text-xs text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus senectus malesuada odio faucibus. Vitae tincidunt nisl, mattis leo...</div>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <span className="text-current text-lg font-black">N20</span><span className="text-xs"> /GRAM</span>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs text-gray-500 ml-1 mt-1">Lagos State</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <button className="btn-prod btn-call focus:outline-none focus:shadow-outline" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xs font-medium ml-2">Call</span>
              </button>
              <Link href="/details">
                <a className="btn-prod btn-view text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-xs font-medium ml-2">View</span>
                </a>
              </Link>
            </div>
          </div>
    )
}

export default Item
