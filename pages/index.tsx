import Head from "next/head"

import { Layout } from "@/components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>小工具</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            協助維護 WordPress 的一些小工具。
          </p>
        </div>
      </section>
    </Layout>
  )
}
