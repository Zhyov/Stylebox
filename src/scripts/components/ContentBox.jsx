import { Fragment } from "react"
import Warning from "./Warning"
import Callout from "./Callout"
import Text from "./Text"

export default function ContentBox({content}) {
    const contentElements = content.map(element => {
        return (
            <Fragment key={element.id}>
                {(element.type === "text" || element.type === "link" ) && <Text type={element.type} text={element.text} link={element.link} lbreak={element.break} />}
                {element.type === "warning" && <Warning content={element.content} title={element.title} />}
                {element.type === "callout" && <Callout content={element.content} title={element.title} />}
                {(element.break && !(element.type === "warning" || element.type === "callout")) && <br />}
            </Fragment>
        )
    })

    return (
        <div className="contentBox">
            {contentElements}
        </div>
    )
}