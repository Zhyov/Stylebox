import { incrementCitationCounter, getCitationCount } from "./citationCounter"

export default function Citation() {
    incrementCitationCounter()

    return (
        <sup><a href={`#citation${getCitationCount()}`}>[{getCitationCount()}]</a></sup>
    )
}