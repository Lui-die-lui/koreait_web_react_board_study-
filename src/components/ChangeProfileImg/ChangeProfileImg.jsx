/** @jsxImportSource @emotion/react */ import {
  useEffect,
  useRef,
  useState,
} from "react";
import * as s from "./styles";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

// 이거 이상하다 뜸
import { storage } from "../../apis/config/firebaseConfig";
import { v4 as uuid } from "uuid";
import { changeProfileImg } from "../../apis/account/accountApis";

function ChangeProfileImg({ oldProfileImg, userId }) {
  const [profileImg, setProfileImg] = useState(null); // 빈문자열 ""이면 콘솔에 오류 뜸
  const [newProfileImg, setNewProfileImg] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null); // DOM 요소 가져옴

  const onChangeFileHandler = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      setNewProfileImg(file); // file 객체 형태

      const reader = new FileReader();
      // 파일 읽기가 완료되면 호출될 콜백 함수를 정의
      reader.onloadend = () => {
        setProfileImg(reader.result);
        console.log(reader);
      };
      // 선택된 파일을  URL 형식으로 읽어온다
      reader.readAsDataURL(file);
    }
  };

  const onClickProfileImgHandler = () => {
    fileInputRef.current.click(); // 프로필 이미지가 클릭이 되면
  };

  const onClickChangeBtnHandler = () => {
    if (!newProfileImg) {
      alert("이미지를 선택하세요.");
      return;
    }

    // 업로드 시작
    setIsUploading(true);

    const imageRef = ref(
      storage,
      `1225935/${uuid()}_${newProfileImg.name.split(".").pop}`
    );

    // 진행상황을 bite 단위로 나눠서 보여줌
    const uploadTask = uploadBytesResumable(imageRef, newProfileImg);

    // 업로드 상태 변화를 감지하는 이벤트 리스너를 등록
    uploadTask.on(
      "state_changed",
      // 진행 상태 리스너 : 업로드 진행률을 계산할 수 있게 해주는 거
      (snapshot) => {
        // 퍼센트로 계산이 됨
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      // 에러 핸들러
      (error) => {
        console.log(error);
        alert("업로드 중 에러가 발생했습니다.");
        setIsUploading(false);
      },
      // 완료 핸들러
      async () => {
        try {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

          changeProfileImg({
            userId: userId,
            profileImg: downloadUrl,
          }).then((response) => {
            if (response.data.status === "success") {
              alert(response.data.message);
              window.location.reload();
            } else if (response.data.status === "failed") {
              alert(response.data.message);
            }
          });
          console.log("url:", downloadUrl);
          setIsUploading(false);
        } catch (error) {
          console.log(error);
          alert("이미지 URL을 가져오는 중에 에러가 발생했습니다.");
        } finally {
          setIsUploading(false);
          setProgress(0);
        }
      }
    );
  };

  useEffect(() => {
    setProfileImg(oldProfileImg);
  }, [oldProfileImg]);

  return (
    <div css={s.container}>
      <div css={s.profileImgBox}>
        <img src={profileImg} alt="profileimg" onClick={onClickProfileImgHandler} />
        {/* img 종류만 받음 */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={onChangeFileHandler}
        />
      </div>

      <div css={s.buttonBox}>
        <button onClick={onClickChangeBtnHandler}>
          {isUploading ? `${progress}` : `변경하기`}
        </button>
      </div>
    </div>
  );
}

export default ChangeProfileImg;
