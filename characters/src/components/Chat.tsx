import { useState } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    messages.push("Test message")
    setMessages(messages)
  }

  return (
    <div>
      <p>{messages}</p>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
      </form>
    </div>
  )
}