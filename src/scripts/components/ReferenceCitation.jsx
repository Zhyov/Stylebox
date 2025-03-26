import { getCitationCount } from "./citationCounter"

export default function ReferenceCitation({content}) {
    const contentElements = content.map(element => {
        return (
            (element.type === "text" || element.type === "link") && <Text key={element.id} type={element.type} text={element.text} link={element.link} lbreak={element.break} />
        )
    })

    return (
        <div class="citation">
            <span class="number" id={`citation${getCitationCount()}`}>[{getCitationCount()}]</span>
            <div class="citationInfo">{contentElements}</div>
        </div>
    )
}