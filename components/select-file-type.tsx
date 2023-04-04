import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"

export const SelectFileType = ({ fileList, handleChange }) => {
  const FileListCheckBoxes = fileList.map((t, i) => {
    return (
      <div key={i} className="flex flex-row items-center">
        <Checkbox
          id={"type-" + t.name}
          onClick={(e) => handleChange(i)}
          checked={t.used}
        />
        <label htmlFor={"type-" + t.name} className="ml-2">
          {t.name}
        </label>
      </div>
    )
  })

  return <div className="flex flex-row gap-4">{FileListCheckBoxes}</div>
}
