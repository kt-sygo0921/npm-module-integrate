import * as React from 'react';
import { Link } from 'react-router-dom';

const Sample2:React.FC = () => {
    return(
        <>
            <div>コンポーネント２</div>
            <Link to="/">トップに戻るよ</Link>
        </>
    )
}

export {Sample2}