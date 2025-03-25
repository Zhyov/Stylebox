import Link from "./Link"
import Warning from "./Warning"
import Callout from "./Callout"

export default function ContentBox({content}) {
    const contentElements = content.map(element => {
        return (
            <>
                {element.type === "text" && element.text}
                {element.type === "link" && <Link key={element.id} text={element.text} link={element.link} />}
                {element.type === "warning" && <Warning key={element.id} content={element.content} title={element.title} />}
                {element.type === "callout" && <Callout key={element.id} content={element.content} title={element.title} />}
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