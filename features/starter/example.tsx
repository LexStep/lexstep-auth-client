import { DatePicker, message } from 'antd'
import React, { useState } from 'react'

export interface ExampleProps {
  enable?: boolean
}
const Example: React.FC<ExampleProps> = ({ enable }) => {
  console.log(`enable is '${JSON.stringify(enable)}'`)

  const [date, setDate] = useState()
  const handleChange = (value) => {
    console.log(`typeof value is ${typeof value}`)

    void message.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
    )

    setDate(value)
  }

  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div>
  )
}

export default Example
