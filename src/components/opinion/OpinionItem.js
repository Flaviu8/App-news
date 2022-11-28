import {
  OpinionEl,
  OpinionElTitle,
  OpinionElDescr,
  OpinionElUser,
  OpinionElUserInfo
} from "./OpinionItem.style";

const OpinionItem = ({ icon, status, user, url, title, descr }) => {
  return (
    <>
      <OpinionElUserInfo>
        <OpinionElUser src={icon} alt="icon" />
        <p>
          <span>{user}</span>
          <span>{status}</span>
        </p>
      </OpinionElUserInfo>

      <OpinionEl href={url}>
        <OpinionElTitle>{title}</OpinionElTitle>
        <OpinionElDescr>{descr}</OpinionElDescr>
      </OpinionEl>
    </>
  );
};

export default OpinionItem;
