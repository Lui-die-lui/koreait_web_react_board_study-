/** @jsxImportSource @emotion/react */
import * as s from "./Styles";
import profileImg from "../../assets/tNWE6ahM8L07uaj81q4HjFD6qrY.png";

function Profile() {
  return (
    <div css={s.container}>
      <div css={s.profileContainer}>
        <div css={s.profileHeader}>
          <div css={s.profileImgBox}>
            <div>
              <img src={profileImg} alt="" />
            </div>
          </div>
          <div css={s.prifileInfoBox}>
            <h3>username</h3>
            <div >
              <p>email@naver.com</p>
              <button>인증하기</button>
            </div>
          </div>
        </div>
        <div css={s.profileMain}></div>
      </div>
    </div>
  );
}

export default Profile;
