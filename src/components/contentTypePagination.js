// Content Type Pagination from Henrik

import React from "react"
import { Link } from "gatsby"

const ContentTypePagination = ({ previousPage, nextPage }) => {
  return (
    <nav>

      <div className="pagination-single-inner">
        {previousPage && (
          <Link className="previous-post" to={previousPage.uri}>
            <span className="arrow" aria-hidden="true">
              ← PREVIOUS
            </span>
            <span className="title">
              <span
                className="title-inner"
                dangerouslySetInnerHTML={{ __html: previousPage.title }}
              />
            </span>
          </Link>
        )}

        {nextPage && (
          <Link className="next-post" to={nextPage.uri}>
            <span className="arrow" aria-hidden="true">
             NEXT →
            </span>
            <span className="title">
              <span
                className="title-inner"
                dangerouslySetInnerHTML={{ __html: nextPage.title }}
              />
            </span>
          </Link>
        )}
      </div>

    </nav>
  )
}

export default ContentTypePagination