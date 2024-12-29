import Link from "next/link";




export default function HomeMenu() {
    return (
        <div className="grid grid-cols-2 w-full justify-items-center gap-8">
                <div className="bg-gray-300 dark:bg-gray-600 w-11/12 h-40 md:w-2/3  hover:cursor-pointer hover:scale-105 duration-300 flex justify-center items-center md:text-2xl text-xl hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-800 rounded-md shadow-md">
                    <Link href='/menu/cold'>
                        نوشیدنی سرد
                    </Link>
                </div>
                <div className="bg-gray-300 dark:bg-gray-600 w-11/12 h-40 md:w-2/3  hover:cursor-pointer hover:scale-105 duration-300 flex justify-center items-center md:text-2xl text-xl hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-800 rounded-md shadow-md">
                    <Link href='/menu/warm'>
                        نوشیدنی گرم
                    </Link>
                </div>
                <div className="bg-gray-300 dark:bg-gray-600 w-11/12 h-40 md:w-2/3 hover:cursor-pointer hover:scale-105 duration-300 flex justify-center items-center md:text-2xl text-xl hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-800 rounded-md shadow-md">
                    <Link href="">
                        منوی کامل
                    </Link>
                </div>
                <div className="bg-gray-300 dark:bg-gray-600 w-11/12 h-40 md:w-2/3 hover:cursor-pointer hover:scale-105 duration-300 flex justify-center items-center md:text-2xl text-xl hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-800 rounded-md shadow-md">
                    <Link href="">
                        سایر
                    </Link>
                </div>
            </div>
    )
}
