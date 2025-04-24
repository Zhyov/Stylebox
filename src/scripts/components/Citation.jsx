import { incrementCitationCounter, getCitationCount, newCitation } from "./citationCounter"

export default function Citation({content}) {
    incrementCitationCounter()
    newCitation(getCitationCount(), content)

    return (
        <sup><a id={`citationReference${getCitationCount()}`} href={`#citation${getCitationCount()}`} className="text-link underline">[{getCitationCount()}]</a></sup>
    )
}