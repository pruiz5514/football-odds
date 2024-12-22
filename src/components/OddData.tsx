import { ReactNode } from "react"

interface IOddData{
  children: ReactNode
}

const OddData: React.FC<IOddData> = ({children}) => {
  return (
    <div className="w-full bg-lightBlue text-white rounded-lg px-3 py-1 flex justify-center lg:h-full items-center">
      {children}
    </div>
  )
}

export default OddData