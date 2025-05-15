export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="inline-block relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-16 h-16 rounded-full border-4 border-gray-200"></div>
            <div className="w-16 h-16 rounded-full border-4 border-t-primary animate-spin absolute top-0 left-0"></div>
          </div>
        </div>
        <p className="mt-4 text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  )
} 