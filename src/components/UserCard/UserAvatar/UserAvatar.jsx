import scss from "components/UserCard/UserAvatar/user-avatar.module.scss";
import hansel from "../../../images/hansel.png";
// import rectangle from "../../../images/rectangle.png";
import { useState, useEffect } from "react";
import { Oval } from 'react-loader-spinner'

const UserAvatar = () => {
   
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
       console.log(' ')
        setLoading(false)
    }, []);

    return (
         <>
            {loading ? (
                <>
                    <div className={scss.loader__content}>
                        <Oval
                            height={80}
                            width={80}
                            color="#F59256"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="oval-loading"
                            secondaryColor="#F59256"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className={scss.line}></div>
                    <div className={scss.avatar_box}>
                        <img className={scss.avatar} src={hansel} alt="hansel" />
                    </div>
        </>)}
        </>
        
    )
}
export default UserAvatar;

