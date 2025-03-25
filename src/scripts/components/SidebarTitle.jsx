export default function SidebarTitle({name}) {
    return (
        <a href={`#${name}`} className="title">{name}</a>
    )
}