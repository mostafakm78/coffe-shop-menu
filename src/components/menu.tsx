import Link from "next/link";




export default function HomeMenu() {
    return (
        <div className="grid grid-cols-2 w-full justify-items-center gap-10">
                <div className="bg-gray-300 w-2/3 h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-center items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                    <Link href={''}>
                        نوشیدنی سرد
                    </Link>
                </div>
                <div className="bg-gray-300 w-2/3 h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-center items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                    <Link href={''}>
                        نوشیدنی گرم
                    </Link>
                </div>
                <div className="bg-gray-300 w-2/3 h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-center items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                    <Link href={''}>
                        منوی کامل
                    </Link>
                </div>
                <div className="bg-gray-300 w-2/3 h-40 p-2 hover:cursor-pointer hover:scale-105 duration-300 flex justify-center items-center md:text-2xl text-xl hover:bg-gray-800 hover:text-gray-300 rounded-md shadow-md">
                    <Link href={''}>
                        سایر
                    </Link>
                </div>
            </div>
    )
}
