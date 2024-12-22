import React from 'react'
import { IPagination } from '../core/get-eventDay-response.dto'


interface IPaginationProps{
    paginationData?: IPagination
}

const Pagination:React.FC<IPaginationProps> = ({paginationData}) => {
  const oe = 10;
  const paginationButtons = [];
  for(let i = 1; i<=oe; i++){
    paginationButtons.push(i);
}
  if(paginationData){
    const pageQuantity = paginationData.no_of_docs_total / paginationData.no_of_docs_in_page;

    const paginationButtons = [];

    for(let i = 1; i<=pageQuantity; i++){
        paginationButtons.push(i);
    }

    return(
        <div className='w-full flex justify-center gap-4'>
            {paginationButtons.map(index => (
                <button>{index}</button>
            ))}
        </div>
    )
  }
  return(
    <div className='w-full flex justify-center gap-4'>
        {paginationButtons.map(index => (
            <button>{index}</button>
        ))}
    </div>
)
}

export default Pagination