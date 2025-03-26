import { Fragment } from "react"
import Warning from "./Warning"
import Callout from "./Callout"
import Text from "./Text"
import Citation from "./Citation"
import ReferenceCitation from "./ReferenceCitation"

export default function ContentBox({content, number}) {
    const contentElements = content.map(element => {
        return (
            <Fragment key={element.id}>
                {[1, 2, 3].includes(number) ? (
                    <>
                        {(element.type === "text" || element.type === "link" || element.type === "citation") && <Text type={element.type} text={element.text} link={element.link} lbreak={element.break} content={element.content} />}
                        {element.type === "warning" && <Warning content={element.content} title={element.title} />}
                        {element.type === "callout" && <Callout content={element.content} title={element.title} />}
                        {(element.break && !(element.type === "warning" || element.type === "callout")) && <br />}  
                    </>
                ) : <>
                    {element.type === "citation" && <ReferenceCitation content={element.content} />}
                </>
                }
            </Fragment>
        )
    })

    return (
        <div className="contentBox">
            {contentElements}
        </div>
    )
}