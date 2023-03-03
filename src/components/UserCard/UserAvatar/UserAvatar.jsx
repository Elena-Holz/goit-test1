import scss from "components/UserCard/UserAvatar/user-avatar.module.scss";
import avatar from "../../../images/avatar.png";
import rectangle from "../../../images/rectangle.png";

const UserAvatar = () => {
    return (
        <div className={scss.avatar_box}>
            <img className={scss.avatar} src={avatar} alt="" />
            <img className={scss.line} src={rectangle} alt="rectangle"/>
        </div>
    )
}
export default UserAvatar;