import Link from "./Link"

export default function Warning({content, title}) {
     const contentElements = content.map(element => {
            return (
                <>
                    {element.type === "text" && element.text }
                    {element.type === "link" && <Link key={element.id} text={element.text} link={element.link} />}
                    {element.break && <br />}
                </>
            )
        })

    return (
        <div id="warning">
            <p class="title4 bold">{title}</p>
            <p class="small">{contentElements}</p>
        </div>
    )
}