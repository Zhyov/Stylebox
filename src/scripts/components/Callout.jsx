import Link from "./Link"

export default function Callout({content, title}) {
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
        <div class="callout">
            <div class="info">
                <p class="bold">{title}</p>
                <p class="small">{contentElements}</p>
            </div>
        </div>
    )
}