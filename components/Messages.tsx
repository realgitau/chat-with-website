import { type Message as TMessage } from "ai/react"
import { Message } from "./Message"
import { MessageSquare } from "lucide-react"

interface MessagesProps {
  messages: TMessage[]
}

export const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message, i) => (
          <Message key={i} content={message.content} isUserMessage={message.role === "user"} />
        ))
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-orange-500" />
          <h3 className="font-semibold text-xl text-gray-900">You&apos;re all set!</h3>
          <p className="text-gray-500 text-sm">Ask your first question to get started.</p>
        </div>
      )}
    </div>
  )
}
