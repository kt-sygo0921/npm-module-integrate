import * as React from 'react';
import { Link } from 'react-router-dom';

const Top:React.FC = () => {
    return (
        <div>
            <p>トップです</p>
            <Link to="/Sample1">sample1に飛ぶよ</Link>
            <Link to="/Sample2">sample2に飛ぶよ</Link>
        </div>
    )
};

export {Top};
