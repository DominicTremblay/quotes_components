import React from 'react';

const QuoteHeader = ({ id, content }) => {
  return (
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button
          class="btn btn-link collapsed"
          type="button"
          data-toggle="collapse"
          data-target={`#${id}`}
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          {content}
        </button>
      </h5>
      <span>
        <form method="GET" action="/quotes/{id}">
          <input type="submit" class="btn btn-secondary btn-sm" value="Edit" />
        </form>
        <form method="POST" action="/api/quotes/{id}?_method=delete">
          <input
            type="submit"
            class="btn btn-secondary btn-sm"
            value="Delete"
          />
        </form>
      </span>
    </div>
  );
};

export default QuoteHeader;
