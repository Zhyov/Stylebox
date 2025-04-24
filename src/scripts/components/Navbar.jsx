export default function Navbar() {
    return (
        <nav className="h-24 flex flex-nowrap flex-row justify-around items-center w-full bg-white" style={{boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1)"}}>
            <div className="flex flex-nowrap flex-row justify-between basis-9/10 lg:basis-4/10 gap-x-3">
                <img src="./assets/stylebox/logo.svg" alt="logo" className="size-20 self-center" />
                <div className="flex flex-nowrap flex-row basis-9/10 gap-x-4">
                    <img src="./assets/stylebox/search.svg" alt="search" className="size-6 self-center ml-3 pointer-events-none absolute" />
                    <input type="text" placeholder="Learn about anything you can imagine..." className="basis-19/20 self-center p-2.5 align-middle text-lg indent-10" />
                </div>
            </div>
            <div className="hidden lg:flex flex-nowrap flex-row justify-between gap-x-4">
                <a href="#" className="self-center p-2 cursor-not-allowed">Create Account</a>
                <a href="#" className="self-center p-2 cursor-not-allowed">Log In</a>
                <select className="font-emoji self-center p-2 cursor-pointer">
                    <option className="font-emoji">🇬🇧 English</option>
                    <option className="font-emoji">🇪🇸 Spanish</option>
                </select>
            </div>
        </nav>
    )
}