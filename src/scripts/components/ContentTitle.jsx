import ContentBox from "./ContentBox"

export default function ContentTitle({name, type, content}) {

    let titleNumber
    if (type === "name") {titleNumber = 1}
    else if (type === "title2") {titleNumber = 2}
    else if (type === "title3") {titleNumber = 3}
    else {titleNumber = 4}

    return (
        <>
            <div className={`flex flex-row flex-nonwrap justify-between ${titleNumber === 1 ? "mt-5 mb-10" : "mt-10 mb-5"}`}>
                <div>
                    <h1 className={`font-old ${
                        titleNumber === 1
                        ? "text-[48px]"
                        : (titleNumber === 2 || type === "references" )
                        ? "text-[24px]"
                        : titleNumber === 3
                        ? "text-[20px]"
                        : "text-[18px]"
                    } ${
                        (titleNumber === 1 || titleNumber === 2)
                        ? "font-[650]"
                        : "font-semibold"
                    }`} id={name}>{type === "references" ? "References & citations" : name}</h1>
                    {titleNumber === 1 && <p className="text-[14px]">{content.description}</p>}
                    {titleNumber === 4 && <p className="text-[14px] italic text-neutral-500">This section is generated automatically from footnotes in the article body.</p>}
                </div>
                <div className="hidden md:flex flex-row flex-nowrap justify-end items-center align-middle gap-6">
                    {titleNumber < 3 &&
                        <>
                            {
                                titleNumber === 1
                                && <a href="#" className="flex flex-row flex-nowrap items-center gap-2 text-link"><img src="./assets/stylebox/history.svg" alt="history" className="size-4" /> Edit History</a>
                            }
                            <a href="#" className="flex flex-row flex-nowrap items-center gap-2 text-link"><img src="./assets/stylebox/edit.svg" alt="edit" className="size-4" /> Edit</a>
                        </>
                    }
                </div>
            </div>
            <ContentBox content={content.content} number={titleNumber} ptype={type} />
        </>
    )
}