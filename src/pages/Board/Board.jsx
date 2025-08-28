/**@jsxImportSource @emotion/react*/
import { useEffect, useState } from "react";
import * as s from "./Styles";
import { getBoardList } from "../../apis/board/boardApis";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

function Board() {
  const [boardList, setBoardList] = useState([]);
  const [message, setMessage] = useState("");
  const [currentBoardList, setCurrentBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  // 15 개씩 보여줌
  const amountBoard = 15;

  useEffect(() => {
    getBoardList().then((response) => {
      // console.log(response)
      if (response.data.status === "success") {
        setBoardList(response.data.data);
      } else if (response.data.status === "faild") {
        setMessage(response.data.message);
      }
    });
  }, []);

  useEffect(() => {
    const offset = currentPage * amountBoard;
    const slicedBoard = boardList.slice(offset, offset + amountBoard);
    // console.log(slicedBoard);
    setCurrentBoardList(slicedBoard);
  }, [currentPage, boardList]);

  const pageOnChangeHandler = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        {boardList.length === 0 ? (
          <p>{message}</p>
        ) : (
          <ul>
            {currentBoardList.map((board, index) => {
              const date = board.createDt;
              const formattedDate = date.split("T")[0]; // ?
              // currentPage * amountBoard -> 페이지가 바뀌지 않는 이상 0
              // index -> 페이지 상단부터 0 ~ 14 하고 넘어감
              const boardNumber = currentPage * amountBoard + index + 1;
              return (
                <li
                  key={board.boardId}
                  onClick={() => {
                    // boardId 들고와서 조회 가능
                    navigate(`/board/${board.boardId}`);
                  }}
                >
                  <div>
                    <span>{boardNumber}</span>
                    <strong>{board.title}</strong>
                  </div>
                  <span>{formattedDate}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {/* 페이지네이션 */}
      <div css={s.paginateContainer}>
        {/* 이렇게 하면 계속 전체조회 하게 됨 - 리소스 낭비 / 효율 저하 */}
        <ReactPaginate
          pageCount={Math.ceil(boardList.length / amountBoard)}
          onPageChange={pageOnChangeHandler}
          previousLabel="이전"
          nextLabel="다음"
          // hrefBuilder={(pageIndex) => `/board?page=${pageIndex}`}
        />
      </div>
    </div>
  );
}

export default Board;
