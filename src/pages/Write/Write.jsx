/**@jsxImportSource @emotion/react*/
import { useState } from "react";
import * as s from "./Styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addBoardRequest } from "../../apis/board/boardApis";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);
  const navigate = useNavigate();

  // 요청함수 형태로 한번 더 만듦 - 성공 / 에러 두가지 분기를 잡아줄 수 있음
  //  - 상태에 바로 반영 해야할 때 사용 / 성공하면 상태에 바로 반영해라(post요청에 많이 사용)
  const addBoardMutation = useMutation({
    mutationKey: "addBoard",
    mutationFn: addBoardRequest,
    onSuccess: (response) => {
      if (response.data.status === "success") {
        alert(response.data.message);
        navigate("/board");
      } else if (response.data.status === "failed") {
        alert(response.data.message);
        return;
      }
      console.log(response);
    },
    onError: (error) => {
      // console.log(error);
      alert("문제가 발생했습니다. 다시 시도해주세요.");
      return;
    },
  });

  const addOnClickHandler = () => {
    if (title.trim().length === 0 || content.trim().length === 0) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // console.log(principalData.data.data.userId);

    if (principalData === undefined) {
      console.log("로그인이 필요합니다.");
      navigate("/auth/signin");
      return;
    }

    // 이때 요청 보냄
    addBoardMutation.mutate({
      title: title,
      content: content,
      userId: principalData.data.data.userId,
    });
  };

  return (
    <div css={s.container}>
      <input
        type="text"
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        name=""
        id=""
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <div css={s.btnBox}>
        <button onClick={addOnClickHandler}>게시하기</button>
      </div>
    </div>
  );
}

export default Write;
