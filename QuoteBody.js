import React from 'react';
import CommentList from './CommentList';

const QuoteBody = ({ id }) => {
  return (
    <div
      id={id}
      class="collapse"
      aria-labelledby="headingTwo"
      data-parent="#quote-list"
    >
      <div class="card-body">
        <h4>Comments</h4>
        <ul class="list-group">
          <li class="list-group-item">
            Comment content
            <span>
              <form>
                <input
                  type="submit"
                  class="btn btn-secondary btn-sm"
                  value="Edit"
                />
              </form>
              <form>
                <input
                  type="submit"
                  class="btn btn-secondary btn-sm"
                  value="Delete"
                />
              </form>
            </span>
          </li>
        </ul>
        <a href="#" class="btn btn-info">
          Add Comment
        </a>
      </div>
    </div>
  );
};

export default QuoteBody;
