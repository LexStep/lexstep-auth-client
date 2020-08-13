import { DatePicker, message } from 'antd'
import { Moment } from 'moment'
import React, { useState } from 'react'

const Example: React.FC = () => {
  const [date, setDate] = useState<Moment>()
  const handleChange = (value?: Moment | null, _dateString?: string) => {
    void message.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
    )

    if (value) {
      setDate(value)
    }
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
