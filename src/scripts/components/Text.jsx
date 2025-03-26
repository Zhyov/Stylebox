import Link from "./Link"
import Citation from "./Citation"

export default function Text({type, text, link, lbreak, content}) {
    return (
        <>
            {type === "text" && <>{text}</>}
            {type === "link" && <Link text={text} link={link} />}
            {type === "citation" && <Citation content={content} />}
            {lbreak && <br />}
        </>
    )
}