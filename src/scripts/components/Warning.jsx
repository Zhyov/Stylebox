import Text from "./Text"

export default function Warning({content, title}) {
    return (
        <div id="warning">
            <p className="title4 bold">{title}</p>
            <p className="small">{content.map(element => (<Text key={element.id} type={element.type} text={element.text} link={element.link} lbreak={element.break} />))}</p>
        </div>
    )
}