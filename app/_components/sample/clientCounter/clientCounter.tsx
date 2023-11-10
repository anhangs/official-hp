'use client'
import { useState } from 'react'

type CounterProps = {
  initialCount: number
}

const ClientCounter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <p>ClientCount: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default ClientCounter