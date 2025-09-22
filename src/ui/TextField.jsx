import React from 'react'

function TextField({ title, type = 'text' }) {
  return (
    <div className="relative mb-6">
      <label
        htmlFor=""
        className="text-graySecTwo text-xs bg-primary p-1 rounded-xl absolute -top-3 left-5"
      >
        {title}
      </label>
      <input
        type={type}
        className="w-full bg-graySecondary p-4 rounded-[5px] text-sm"
      />
    </div>
  )
}

export default TextField
