import React from 'react'

function FormButton({ title }) {
  return (
    <button className="w-full p-2 text-lg border-2 border-secondary rounded-lg text-secondary cursor-pointer">
      {title}
    </button>
  )
}

export default FormButton
