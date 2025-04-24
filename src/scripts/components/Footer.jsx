export default function Footer() {
    return (
        <footer className="h-24 relative flex flex-row flex-nowrap justify-around items-center w-full bg-white" style={{boxShadow: "0 -2px 4px -1px rgba(0, 0, 0, 0.1)"}}>
            <div className="hidden md:flex flex-nowrap flex-col">
                <p className="text-[14px]">Text is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="text-link no-underline hover:underline">Creative Commons Attribution-ShareAlike 4.0 License</a>; additional terms may apply. By using this site, you agree to the <a href="#" className="text-link no-underline hover:underline">Terms of Use</a> and <a href="#" className="text-link no-underline hover:underline">Privacy Policy</a>.</p>
                <div className="flex flex-row flex-nowrap gap-4">
                    <a href="#" className="text-[14px] text-link no-underline hover:underline">Privacy policy</a>
                    <a href="https://github.com/Zhyov/Stylebox" className="text-[14px] text-link no-underline hover:underline">GitHub</a>
                </div>
            </div>
            <div className="flex md:hidden lg:flex flex-row flex-nowrap gap-4">
                <a href="https://github.com/Zhyov/Stylebox"><img src="./assets/stylebox/powered.svg" className="h-12 bg-callout pt-2 pb-2 pl-3 pr-3 rounded-md ring-1 ring-coal" /></a>
            </div>
        </footer>
    )
}