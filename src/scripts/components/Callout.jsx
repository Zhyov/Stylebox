import ContentBox from "./ContentBox"

export default function Callout({content, title}) {
    return (
        <div className="mb-4 mt-4 rounded-md bg-callout pt-6 pb-6 pl-8 pr-8">
            <p className="font-semibold pb-4">{title}</p>
            <p className="text-[14px]">{<ContentBox content={content} number={5} />}</p>
        </div>
    )
}