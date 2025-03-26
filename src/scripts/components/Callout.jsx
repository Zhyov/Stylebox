import Text from "./Text"

export default function Callout({content, title}) {
    return (
        <div className="callout">
            <div className="info">
                <p className="bold">{title}</p>
                <p className="small">{content.map(element => (<Text key={element.id} type={element.type} text={element.text} link={element.link} lbreak={element.break} />))}</p>
            </div>
        </div>
    )
}