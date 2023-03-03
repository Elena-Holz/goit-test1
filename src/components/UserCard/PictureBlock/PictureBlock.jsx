import scss from "components/UserCard/PictureBlock/picture_block.module.scss";
import picture from "../../../images/picture.png"

const PictureBlock = () => {
    
    return (
        <div className={scss.picture_box}>
            <img className={scss.picture} src={picture} alt="" />
        </div>
        
    )
} 

export default PictureBlock;