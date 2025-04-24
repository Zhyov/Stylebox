import SidebarTitle from "./SidebarTitle"
import ContentTitle from "./ContentTitle"
import Container from "./Container"
import { getContainers } from "./containerTracker"
import data from "/src/scripts/data"

export default function Page() {
    const sidebarTitles = data.map(element => {
        return ((element.type.includes("title") || element.type === "references" ) && <SidebarTitle key={element.id} name={element.content.title} />)
    })

    const content = data.map(element => {
        return ((element.type.includes("title") || element.type === "name" || element.type === "references") && <ContentTitle key={element.id} name={element.content.title} type={element.type} content={element.content} />)
    })

    const sidebar = getContainers().map(container => {
        return (<Container key={container[0]} type={container[1]} content={container[2]} add={false} />)
    })

    return (
        <div className="flex justify-center">
            <div className="hidden xl:block sticky w-28 top-10 left-22 mt-10 mb-10">
                <p className="text-xl font-semibold pb-3">Contents</p>
                <div className="flex flex-col w-50">
                    <SidebarTitle name="Overview" />
                    {sidebarTitles}
                </div>
            </div>
            <article className="ml-0 xl:ml-40 mb-40 bg-white pr-8 pl-8 pb-4 shadow-md rounded-md mt-8 w-80 sm:w-92 md:w-126 lg:w-160 xl:w-194">
                {content}
            </article>
            <div className="hidden md:flex flex-col flex-nowrap w-42 lg:w-70 xl:w-42 2xl:w-86 h-max mt-8 mb-8 ml-8">
                {sidebar}
            </div>
        </div>
    )
}