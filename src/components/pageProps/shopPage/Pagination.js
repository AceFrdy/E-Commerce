import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import Api from "../../../api";

const Pagination = ({ itemsPerPage }) => {
  const [contents, setContents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Panggil fungsi untuk mengambil produk saat komponen dimuat
    const fetchContent = async () => {
      try {
        const response = await Api.get(`/web/contents?page=${currentPage}`);
        const data = response.data.data.resource.data;
        setContents(data);

        // Set total halaman berdasarkan respons API
        setTotalPages(response.data.data.resource.last_page);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, [currentPage]);

  const handlePageClick = (selectedPage) => {
    // Ketika user mengklik halaman, perbarui currentPage
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        {contents.map((item) => (
          <div key={item.id} className="w-full">
            <Product
              _id={item.id}
              img={item.photos.length > 0 ? item.photos[0].photo : ''}
              productName={item.content_title}
              price={item.price}
              color={item.color}
              badge={true}
              des={item.description}
              item={item}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />
        <p className="text-base font-normal text-lightText">
          Products from {currentPage === 1 ? 1 : (currentPage - 1) * itemsPerPage + 1} to {currentPage * itemsPerPage} of{" "}
          {totalPages * itemsPerPage}
        </p>
      </div>
    </div>
  );
};

export default Pagination;