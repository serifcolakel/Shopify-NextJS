import Image from "next/image"

const navigation = [
    { name: 'About', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Terms and Conditions', href: '#' }
]

export default function Footer() {
    return (
        <footer className="bg-white border-t-[1px] border-gray-200 w-11/12 mx-auto ">
            <div className="max-w-7xl mx-auto py-4 md:py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center">
                    {
                        navigation.map((item, i) => (
                            <div key={i} className="px-2 md:px-6 py-1 md:py-2">
                                <a href={item.href} className="text-gray-500 hover:text-gray-900">
                                    {item.name}
                                </a>
                            </div>
                        ))
                    }
                </nav>
                <a
                    href="https://github.com/serifcolakel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="flex items-center justify-center md:gap-x-4 md:pt-8" >
                        <p>Powered by</p>
                        <Image src="/logo.png" alt="Serif Logo" width={122} height={36} />
                    </span>
                </a>

            </div>
        </footer>
    )
}