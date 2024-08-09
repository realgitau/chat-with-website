"use client"

import { Button, Textarea } from "@nextui-org/react"
import { Send } from "lucide-react"
import { type useChat } from "ai/react"

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"]
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"]
type SetInput = ReturnType<typeof useChat>["setInput"]

interface ChatInputProps {
  input: string
  handleInputChange: HandleInputChange
  handleSubmit: HandleSubmit
  setInput: SetInput
}

export const ChatInput = ({ handleInputChange, handleSubmit, input, setInput }: ChatInputProps) => {
  return (
    <div className="z-10 bg-white absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[800px] rounded-xl">
      <div className="flex flex-col items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="relative w-full">
          <Textarea
            minRows={4}
            autoFocus
            onChange={handleInputChange}
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmit()
                setInput("")
              }
            }}
            placeholder="Enter your question..."
            className="resize-none rounded-xl text-base border p-4 w-full outline-none focus:none"
          />

          <Button
            size="sm"
            type="submit"
            className="absolute z-10 border p-3 rounded-xl right-2 bottom-4 hover:bg-gray-100"
          >
            <Send className="h-6" />
          </Button>
        </form>
      </div>
    </div>
  )
}
