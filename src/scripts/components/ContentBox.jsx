import Link from "./Link"

export default function ContentBox({content}) {
    const contentElements = content.map(element => {
        return (
            <>
                {element.type === "text" && element.text}
                {element.type === "link" && <Link text={element.text} link={element.link} />}
                {element.break && <br />}
            </>
        )
    })

    return (
        <div className="contentBox">
            {contentElements}
        </div>
    )
}