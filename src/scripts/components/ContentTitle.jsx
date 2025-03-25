import ContentBox from "./ContentBox"

export default function ContentTitle({name, type, content}) {
    return (
        <>
            <div className={`contentTitle ${type === "name" ? "header" : ""}`}>
                <div className="rightContentTitle">
                    <p className={`title${type === "name" ? "1" : "2"} old`} id={name}>{name}</p>
                </div>
                <div className="leftContentTitle">
                    <a href="#" className="option"><img src="/src/assets/stylebox/history.svg" alt="history" className="icon" /> Edit History</a>
                    <a href="#" className="option"><img src="/src/assets/stylebox/edit.svg" alt="edit" className="icon" /> Edit</a>
                </div>
            </div>
            <ContentBox content={content} />
        </>
    )
}