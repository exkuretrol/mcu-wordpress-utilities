import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CopyButton } from "./copy-button"
import { Icons } from "./icons"

export const InputArea = ({ fileList }) => {
  const [text, setText] = useState([
    {
      name: "",
    },
    {
      name: "",
    },
  ])

  const addInputField = () => {
    setText([
      ...text,
      {
        name: "",
      },
    ])
  }

  const removeInputField = (index) => {
    const rows = [...text]
    rows.splice(index, 1)
    setText(rows)
  }

  const handleChange = (index, event) => {
    const { name, value } = event.target
    const list = [...text]
    list[index][name] = value
    setText(list)
  }

  const InputFields = text.map((v, i) => {
    return (
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-row justify-between">
          <Input
            key={i}
            name="name"
            value={v.name}
            className="max-w-sm"
            placeholder="檔案名稱"
            onChange={(e) => handleChange(i, e)}
          ></Input>

          <Button variant="destructive" onClick={(e) => removeInputField(i)}>
            移除
          </Button>
        </div>
        <div className="grid gap-2 ml-12">
          {fileList.map((type, j) => {
            if (type.used)
              return (
                <>
                  <Input
                    key={type.name + j}
                    name={type.name}
                    placeholder={type.name + " 連結"}
                    onChange={(e) => handleChange(i, e)}
                  ></Input>
                </>
              )
          })}
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="flex flex-row-reverse gap-4">
        <CopyButton value={JSON.stringify(text)} />
        <Button variant="default" onClick={addInputField}>
          新增
        </Button>
      </div>
      <div className="flex flex-col gap-4">{InputFields}</div>
    </>
  )
}
