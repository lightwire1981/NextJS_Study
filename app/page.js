export default function Home() {
    let name = 'lightwire'
    let url = 'https://www.google.com'
    return (
        <div>

            <h4 className={"Title"} style={{color: 'blue', fontSize: '1.5em'}}>안녕</h4>
            <p className={"P-Title"}>by dev {name}</p>
            <a href={url}>링크</a>
        </div>
    )
}