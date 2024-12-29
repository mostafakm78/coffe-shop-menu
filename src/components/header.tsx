import { FC } from "react"


interface Props {
    src : string
}


const Header : FC<Props> = ({
    src
}) => {
    return (
        <div className="shadow-lg flex items-center justify-around bg-gray-300 p-4 md:w-11/12 w-11/12 rounded-b-lg ">
            <h1 className="text-4xl font-bold hover:animate-bounce text-gray-800">کافه جیم</h1>
            <img src={src} className="h-20 rounded-lg hover:animate-pulse"/>
        </div>
    )
}


export default Header
