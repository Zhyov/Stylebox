import { newContainer } from "./containerTracker"
import Text from "./Text"

export default function Container({type, content, add}) {
    if (add) {
        newContainer(type, content)
    }
    var content

    if (type === "table") {
        const title = content.title.map(element => {
            return <Text key={element.id} type={element.type} text={element.text} link={element.link} lbreak={element.break} content={element.content} />
        })

        const description = content.description.map(element => {
            return <Text key={element.id} type={element.type} text={element.text} link={element.link} lbreak={element.break} content={element.content} />
        })

        const body = content.body.map(element => {
            const parameter = element.parameter.map(element => {return <Text key={element.id} type={element.type} text={element.text} link={element.link} lbreak={element.break} content={element.content} />})
            const value = element.value.map(element => {return <Text key={element.id} type={element.type} text={element.text} link={element.link} lbreak={element.break} content={element.content} />})

            return (
                <tr key={element.id} className="flex flex-row flex-nowrap">
                    <td className="font-semibold basis-1/2 mt-0.25 mb-0.25">{parameter}</td>
                    <td className="basis-1/2 mt-0.25 mb-0.25">{value}</td>
                </tr>
            )
        })

        content = (
            <table className="w-full ring-1 ring-callout-light flex md:hidden flex-col flex-nowrap rounded-md p-3 shadow-md mt-2 mb-2" id={`container-${content.title[0].text}`}>
                <tbody className="flex flex-col flex-nowrap">
                    <tr className="flex flex-col flex-nowrap">
                        <th className="font-semibold text-[20px] bg-warning rounded-md mt-0.25 mb-0.25">{title}</th>
                        <th className="font-normal bg-table-info rounded-md mt-0.25 mb-0.25">{description}</th>
                    </tr>
                    {body}
                </tbody>
            </table>
        )
    } else if (type === "image") {
        const image = content.image
        const body = content.description.map(element => {
            return <Text key={element.id} type={element.type} text={element.text} link={element.link} lbreak={element.break} content={element.content} />
        })

        content = (
            <div className="w-full flex md:hidden flex-col flex-nowrap">
                <img src={image} className="w-full mt-2 mb-2 rounded-md shadow-md" alt="placeholder" />
                <p className="w-full mt-2 mb-2 text-[12px]">{body}</p>
            </div>
        )
    }

    console.log(content)

    return content
}