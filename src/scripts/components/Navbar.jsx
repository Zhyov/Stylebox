export default function Navbar() {
    return (
        <nav id="navbar">
            <div id="navLeft">
                <img src="/src/assets/stylebox/logo.svg" alt="logo" id="logo" />
                <img src="/src/assets/stylebox/search.svg" alt="search" id="searchIcon" />
                <input type="text" placeholder="Learn about anything you can imagine..." id="search" />
            </div>
            <div id="navRight">
                <a href="#">Create Account</a>
                <a href="#">Log In</a>
                <select className="emoji">
                    <option className="emoji">🇬🇧 English</option>
                    <option className="emoji">🇪🇸 Spanish</option>
                </select>
            </div>
        </nav>
    )
}