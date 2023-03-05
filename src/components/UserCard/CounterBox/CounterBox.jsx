import scss from "components/UserCard/CounterBox/counter-box.module.scss";
import { useState, useEffect } from "react";

export function CounterBox() {

    const [isToggle, setIsToggle] = useState(false);
    const [folloversCount, setFolloversCount] = useState(100500);
    const [color, setColor] = useState('#EBD8FF');

    useEffect(() => {
        const saveIsToggle = localStorage.getItem('isToggle');
        if (saveIsToggle) {
            setIsToggle(saveIsToggle === 'false');
        }

        const saveFolloversCount = localStorage.getItem('folloversCount');
        if (saveFolloversCount) {
            setFolloversCount(Number(saveFolloversCount));
        }

        const saveColor = localStorage.getItem('color');
        if (saveColor) {
            setColor(saveColor);
        }

    }, []);

    function handleClick() {
        setIsToggle(!isToggle);
        setFolloversCount(isToggle ? folloversCount - 1 : folloversCount + 1);
        setColor(isToggle ? '#EBD8FF' : '#5CD3A8');


        localStorage.setItem("isToggle", isToggle);
        localStorage.setItem("folloversCount", isToggle ? folloversCount - 1 : folloversCount + 1);
        localStorage.setItem("color", isToggle ? '#EBD8FF' : '#5CD3A8');
    }

    return (
            <div className={scss.user_counter_box}>
                <div className={scss.user_number_box}>
                    <p className={scss.user_count}>777 Tweets</p>
                    <p className={scss.user_count}>{folloversCount.toLocaleString('ja-JP')}  Followers</p>
                </div>
                <button onClick={handleClick} style={{ backgroundColor: color }} className={scss.user_counter_btn}>
                    {isToggle ? 'Following' : 'Folow'}
                </button>
            </div>
    )
}

