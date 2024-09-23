import Image from 'next/image'
import React from 'react'
import chat from "@/images/chat.png"

const Chat = () => {
  return (
    <div className="absolute right-4 bottom-[-70px]">
        <Image
            src={chat}
            className='md:w-full w-[50px]'
        />
    </div>
  )
}

export default Chat