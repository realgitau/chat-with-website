import { cn } from "@/lib/utils"
import { Bot, User } from "lucide-react"

interface MessageProps {
  content: string
  isUserMessage: boolean
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn({
        "bg-blue-100": isUserMessage,
        "bg-gray-100": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="max-w-3xl mx-auto flex items-start gap-2.5">
          <div
            className={cn(
              "size-10 shrink-0 aspect-square rounded-full border border-gray-300 bg-white flex justify-center items-center",
              {
                "bg-orange-500 border-orange-400 text-white": isUserMessage,
              }
            )}
          >
            {isUserMessage ? <User className="size-5" /> : <Bot className="size-5 text-black" />}
          </div>

          <div className="flex flex-col ml-6 w-full">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-900">
                {isUserMessage ? "You" : "Website"}
              </span>
            </div>

            <p className="text-sm font-normal py-2.5 text-gray-900">{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
