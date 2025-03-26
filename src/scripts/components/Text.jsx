import Link from "./Link"

export default function Text({type, text, link, lbreak}) {
    return (
        <>
            {type === "text" && <>{text}</>}
            {type === "link" && <Link text={text} link={link} />}
            {lbreak && <br />}
        </>
    )
}