"use client"
import { useState } from "react"

export default function Home() {
    const [response, setResponse] = useState<string>("")
    const [loading, setLoading] = useState(false)

    const callAPI = async () => {
        setLoading(true)
        try {
        const res = await fetch("/api/hello")
        const text = await res.text()
        setResponse(text)
        } catch (error) {
        setResponse("Error calling API")
        } finally {
        setLoading(false)
        }
    }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Test the API endpoint by clicking the button below.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            onClick={callAPI}
            disabled={loading}
          >
            {loading ? "Loading..." : "Call API"}
          </button>
        </div>
        {response && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm font-medium text-green-800">Response:</p>
              <p className="text-green-700">{response}</p>
            </div>
        )}
      </main>
    </div>
  );
}
