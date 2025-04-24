import { getCitations } from "./citationCounter"
import ContentBox from "./ContentBox"

export default function CitationReference() {
    const citations = getCitations().map(citation => {
        return (
            <div key={citation[0]} className="mt-3 mb-3 flex flex-row flex-nowrap">
                <a className="text-link underline text-[14px]" id={`citation${citation[1]}`} href={`#citationReference${citation[1]}`}>[{citation[1]}]</a>
                <div className="ml-3 text-[14px]">
                    <ContentBox content={citation[2]} number={5} />
                </div>
            </div>
        )
    })

    return citations
}