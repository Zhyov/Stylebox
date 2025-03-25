import SidebarTitle from "./SidebarTitle"
import ContentTitle from "./ContentTitle"
import data from "/src/scripts/data"

export default function Page() {
    const sidebarTitles = data.map(element => {
        return (
            (element.type === "title" && <SidebarTitle key={element.id} name={element.info.title} />)
        )
    })

    const content = data.map(element => {
        return (
            ((element.type === "title" || element.type === "name") && <ContentTitle key={element.id} name={element.info.title} type={element.type} content={element.info.content} />)
        )
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