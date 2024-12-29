import { SocialIcon } from "react-social-icons";



export default function Footer() {
    return (
        <div className="shadow-lg p-4 grid grid-cols-2 bg-gray-300 md:w-11/12 w-11/12 rounded-t-lg ">
                <div className="flex flex-col items-center w-full">
                <span className="text-gray-800 border-b-2 border-opacity-30 border-gray-800 pb-2">کافه جیم منتظر حضور شماست!</span>
                <span className="text-gray-800 pt-2">آدرس :‌ بروجرد - خیابان تختی - روبروی مجتمع تفریحی دیپلمات</span>
                </div>
                <div className="flex flex-col items-center w-full">
                    <span className="text-gray-800 border-b-2 border-opacity-30 border-gray-800 pb-2 ">
                        تماس با ما 0664200563
                    </span>
                    <span className="text-gray-800 pt-2">
                        اینستاگرام
                        <span className="mr-4 hover:cursor-pointer">
                        <SocialIcon network="instagram" bgColor="black" style={{width : '35px' , height : '35px'}} fgColor="white"/>
                        </span>
                    </span>
                </div>
            </div>
    )
}
