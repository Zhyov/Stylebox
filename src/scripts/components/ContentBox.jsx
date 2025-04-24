import { Fragment } from "react"
import Warning from "./Warning"
import Callout from "./Callout"
import Text from "./Text"
import Container from "./Container"
import CitationReference from "./CitationReference"

export default function ContentBox({content, number, ptype}) {
    const contentElements = content.map(element => {
        return (
            <Fragment key={element.id}>
                {[1, 2, 3, 5].includes(number)
                    ? <>
                        {(element.type === "text" || element.type === "link" || element.type === "citation") && <Text type={element.type} text={element.text} link={element.link} lbreak={element.break} content={element.content} />}
                        {element.type === "warning" && <Warning content={element.content} title={element.title} />}
                        {element.type === "callout" && <Callout content={element.content} title={element.title} />}
                        {(element.type === "table" || element.type === "image") && <Container type={element.type} content={element.content} add={true} />}
                        {(element.break && !(element.type === "warning" || element.type === "callout")) && <br />}  
                    </>
                    : <>
                        {ptype === "references" && <CitationReference />}
                    </>
                }
            </Fragment>
        )
    })

    return number === 5 ? contentElements : <div>{contentElements}</div>
}