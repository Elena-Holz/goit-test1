import scss from "components/UserCard/user-card.module.scss";
import Logo from "./Logo/Logo";
import PictureBlock from "./PictureBlock/PictureBlock";
import UserAvatar from "./UserAvatar/UserAvatar";
import {CounterBox} from "./CounterBox/CounterBox";

const UserCard = () => {
  

    return (
        <div className={scss.container}>
            <Logo id="icon-logo" />
            <PictureBlock />
            <UserAvatar />
            <CounterBox/>
        </div>
    )
}

export default UserCard;