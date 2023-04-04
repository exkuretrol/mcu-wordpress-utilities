import { Layout } from "@/components/layout"
import { InputArea } from "@/components/info-to-json"
import { SelectFileType } from "@/components/select-file-type"
import { useState } from "react"

export default function Tojson() {
  const [fileList, setFileList] = useState([
    {
      name: "pdf",
      used: true,
    },
    {
      name: "word",
      used: false,
    },
    {
      name: "odt",
      used: false,
    },
    {
      name: "excel",
      used: false,
    },
  ])
  const handleChange = (index) => {
    const list = [...fileList]
    list[index]["used"] = !list[index]["used"]
    setFileList(list)
  }

  return (
    <Layout>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <SelectFileType fileList={fileList} handleChange={handleChange} />
        <InputArea fileList={fileList} />
      </section>
    </Layout>
  )
}
