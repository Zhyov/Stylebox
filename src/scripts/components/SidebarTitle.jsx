export default function SidebarTitle({name}) {
    return (
        <a href={`#${name}`} className="font-[350] text-[16px] text-base no-underline text-link p-2 pl-5 border-l-1 border-neutral-300 hover:underline">{name}</a>
    )
}