import React from 'react'
import { IPagination } from '../core/get-eventDay-response.dto'
import { useSearchParams } from 'react-router-dom'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


interface IPaginationProps{
    paginationData?: IPagination
}

const Pagination:React.FC<IPaginationProps> = ({paginationData}) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedPage = parseInt(searchParams.get('page') ?? '1');

  const changePage = (index:number) => {
    setSearchParams({page: String(index)})
  }
  
  if(paginationData){

    const pageQuantity = paginationData.no_of_docs_total % 25 === 0 ? paginationData.no_of_docs_total / 25 : (paginationData.no_of_docs_total / 25) + 1 ;
    const paginationButtons = [];

    for(let i = 1; i<=pageQuantity; i++){
        paginationButtons.push(i);
    }

    return(
        <div className='w-full flex justify-center gap-8'>
            <button onClick={()=>changePage(selectedPage-1)} className={selectedPage > 1 ? 'flex items-center gap-1 font-light' : 'hidden'}> <MdChevronLeft className='text-2xl font-light' />  Anterior </button>
            {paginationButtons.map(index => (
                <button onClick={()=>changePage(index)} className={`${index === selectedPage ? 'bg-white w-7 h-7 rounded border-2 border-darkBlue' : ''}`}>{index}</button>
            ))}
            <button onClick={()=>changePage(selectedPage+1)} className={selectedPage<pageQuantity ? 'flex items-center gap-1 font-light' : 'hidden'}>  Siguiente <MdChevronRight className='text-2xl font-light' /> </button>
        </div>
    )
  }
  return(
    <> </>
)
}

export default Pagination