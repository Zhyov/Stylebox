import SidebarTitle from "./SidebarTitle"
import ContentTitle from "./ContentTitle"
import data from "/src/scripts/data"

export default function Page() {
    const sidebarTitles = data.map(element => {
        return ((element.type.includes("title") || element.type === "references" ) && <SidebarTitle key={element.id} name={element.content.title} />)
    })

    const content = data.map(element => {
        return ((element.type.includes("title") || element.type === "name" || element.type === "references") && <ContentTitle key={element.id} name={element.content.title} type={element.type} content={element.content.content} />)
    })

    return (
        <div id="page">
            <div id="leftContent">
                <p className="title3 sidebarTitle">Contents</p>
                <div id="sidebarTitles">
                    <SidebarTitle name="Overview" />
                    {sidebarTitles}
                </div>
            </div>
            <article id="mainContent">
                {content}
            </article>
        </div>
    )
}