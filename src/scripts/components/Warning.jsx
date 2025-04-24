import ContentBox from "./ContentBox"

export default function Warning({content, title}) {
    return (
        <div className="border-l-6 border-l-warning bg-warning-bg pt-6 pb-6 pl-8 pr-8 mb-8">
            <p className="text-[18px] font-semibold pb-4">{title}</p>
            <p className="text-[14px]">{<ContentBox content={content} number={5} />}</p>
        </div>
    )
}