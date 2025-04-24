export default function Link({text, link}) {
    return <a href={link} className="text-link underline">{text}</a>
}