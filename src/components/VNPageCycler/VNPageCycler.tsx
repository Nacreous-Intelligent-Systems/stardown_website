import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';

type VNPageCyclerProps = {};

    const VNPageCycler: React.FC<VNPageCyclerProps> = () => {
        const router = useRouter();
        const [currentPage, setCurrentPage] = useState(1);
        const totalPages = 12; // Update this to the total number of pages in the "visual-novel" folder
      
        const getVNPage = () => {
          return `/visualnovel/page${currentPage}`;
        };
      
        const prevVNPage = () => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            router.push(getVNPage());
          }
        };
      
        const nextVNPage = () => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            router.push(getVNPage());
          }
        };


    return (
        <div className='flex flex-row justify-between'>
            <button className='' onClick={prevVNPage}> Prev </button>
            <button className='' onClick={nextVNPage}> Next </button>
        </div>
    );
}
export default VNPageCycler;