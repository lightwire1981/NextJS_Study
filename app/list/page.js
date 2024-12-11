import Image from "next/image" //최적화된 이미지를 넣기 위한 선처리
import TestImage0 from '/public/images/food0.png'
import TestImage1 from '/public/images/food1.png'
import TestImage2 from '/public/images/food2.png'

export default function Home() {

    let products = ['토마토', '파스타', '코코넛']
    let imgSrc = [TestImage0, TestImage1, TestImage2]
    return (
        <div>
            <h4 className={"Title"}>Products</h4>
            {
                products.map((args, index)=>{
                    console.log(index)
                    return (
                        <div className="food" key={index}>
                            {/*최적화 이미지 라이브러리 Image 사용*/}
                            <Image className={"P-Image"} src={imgSrc[index]} alt="" />
                            <h4>{args} $10</h4>
                        </div>
                    )
                })
            }

            {/*<div className="food">*/}
            {/*<h4>{products[1]} $20</h4>*/}
            {/*</div>*/}
            {/*<div className="food">*/}
            {/*    <h4>{products[2]} $40</h4>*/}
            {/*</div>*/}
        </div>
    )
}