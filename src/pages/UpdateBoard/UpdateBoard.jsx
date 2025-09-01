/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./Styles";
import { getBoardDetail, updateBoard } from "../../apis/board/boardApis";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePrincipalState } from "../../store/usePrincipalStore";

function Update() {
  const [boardData, setBoardData] = useState({ title: "", content: "" });
  const { boardId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoggedIn, principal } = usePrincipalState();

  const updateBoardMutation = useMutation({
    mutationKey: "updateBoard",
    mutationFn: updateBoard,
    onSuccess: (response) => {
      if (response.data.status === "success") {
        alert(response.data.message);
        navigate("/board");
      } else if (response.data.status === "failed") {
        alert(response.data.message);
        return;
      }
    },
    onError: (error) => {
      alert("문제가 발생했습니다. 다시 시도해주세요.");
      return;
    },
  });

  const updateOnClickHandler = () => {
    if (
      boardData.title.trim().length === 0 ||
      boardData.content.trim().length === 0
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // console.log(principalData.data.data.userId);

    // 이때 요청 보냄
    updateBoardMutation.mutate({
      title: boardData.title,
      content: boardData.content,
      boardId: boardId,
    });
  };

  useEffect(() => {
    getBoardDetail(boardId).then((response) => {
      console.log(response.data.data);
      if (response.data.status === "success") {
        setBoardData(response.data.data);
        if (principal.userId !== response.data.data.userId) {
          alert("잘못된 접근입니다.");
          navigate("/board");
        }
      } else if (response.data.status === "failed") {
        alert(response.data.message);
        navigate("/board");
      }
    });
  }, [boardId, navigate]);

  return (
    <div css={s.container}>
      <input
        type="text"
        value={boardData.title}
        placeholder="제목을 입력해주세요."
        onChange={(e) => {
          setBoardData({ ...boardData, title: e.target.value });
        }}
      />
      <textarea
        name=""
        id=""
        placeholder="내용을 입력해주세요."
        value={boardData.content}
        onChange={(e) => {
          setBoardData({
            ...boardData,
            content: e.target.value,
          });
        }}
      ></textarea>
      <div css={s.btnBox}>
        <button onClick={updateOnClickHandler}>수정하기</button>
      </div>
    </div>
  );
}

export default Update;
