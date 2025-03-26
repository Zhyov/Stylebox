import ContentBox from "./ContentBox"

export default function ContentTitle({name, type, content}) {

    let titleNumber
    if (type === "name") {titleNumber = 1}
    else if (type === "title2") {titleNumber =2}
    else {titleNumber = 3}

    return (
        <>
            <div className={`contentTitle ${type === "name" ? "header" : ""}`}>
                <div className="rightContentTitle">
                    <p className={`title${titleNumber} old`} id={name}>{name}</p>
                </div>
                <div className="leftContentTitle">
                    {titleNumber < 3 &&
                        <>
                            <a href="#" className="option"><img src="./assets/stylebox/history.svg" alt="history" className="icon" /> Edit History</a>
                            <a href="#" className="option"><img src="./assets/stylebox/edit.svg" alt="edit" className="icon" /> Edit</a>
                        </>
                    }
                </div>
            </div>
            <ContentBox content={content} />
        </>
    )
}