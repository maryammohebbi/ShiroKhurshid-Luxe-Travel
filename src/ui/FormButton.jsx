import React from 'react'

function FormButton({ title }) {
  return (
    <button className="w-full p-2 text-lg border-2 border-[#BB9039] rounded-lg text-[#BB9039] cursor-pointer">
      {title}
    </button>
  )
}

export default FormButton
