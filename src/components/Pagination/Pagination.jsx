import ReactPaginate from 'react-paginate';

export const Pagination = ({ handleClickPage, totalPages, currentPage }) => (
  <>
    <ReactPaginate
      nextLabel="&rarr;"
      onPageChange={handleClickPage}
      pageRangeDisplayed={window.innerWidth < 480 ? 4 : 5}
      marginPagesDisplayed={0}
      pageCount={totalPages}
      previousLabel="&larr;"
      pageClassName="w-[30px] h-[30px] rounded-full border border-[#0c0c0c] flex items-center justify-center"
      pageLinkClassName="w-[30px] h-[30px] rounded-full flex items-center justify-center"
      previousClassName="mr-3 border-none"
      previousLinkClassName="w-[30px] h-[30px] rounded-full text-md text-[#0c0c0c]  flex items-base justify-center  border border-[#0c0c0c]"
      nextClassName="ml-3 border-none"
      nextLinkClassName="w-[30px] h-[30px] rounded-full text-md text-[#0c0c0c]  flex items-base justify-center  border border-[#0c0c0c]"
      containerClassName="flex gap-[5px] mx-auto mt-10 w-max"
      activeClassName="bg-[#0c0c0c] text-white"
      renderOnZeroPageCount={null}
      disabledClassName="text-gray border border-gray"
      disabledLinkClassName="w-[30px] h-[30px] text-[#9b9b9b] border border-[#9b9b9b] cursor-default rounded-full"
      forcePage={currentPage}
    />
  </>
);
