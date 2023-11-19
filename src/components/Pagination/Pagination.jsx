import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import './styles.css'
export default function PaginationComponent({ paginator, handlePage }) {
    const pageCount = paginator.pageCount;
    const currentPage = paginator.currentPage;
    const paginationItems = Array(pageCount).fill(0);
    return (
        <Pagination className="d-flex justify-content-center">
            {paginationItems.map((_, index) => {
                if (index + 1 === currentPage) return <Pagination.Item className="btn-pagination rounded" active>{index + 1}</Pagination.Item>
                return <Pagination.Item className="text-black" onClick={() => handlePage(index + 1)}>
                    <span className="text-black">
                        {index + 1}
                    </span>
                </Pagination.Item>
            })}
        </Pagination>
    )
}
