export default function Enlarge({img}) {
    return (
        <div id="enlarge" className="hidden">
            <button id="closeButton"><img src="./assets/stylebox/close.svg" alt="close" id="close" /></button>
            <div className="contentBox">
                <img id="enlarged" alt="enlarged" src={img} />
                <p className="info">placeholder</p>
            </div>
        </div>
    )
}