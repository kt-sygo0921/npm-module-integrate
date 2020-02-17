import * as React from 'react';
import { Link } from 'react-router-dom';
import {Domain1} from '@kt-sygo0921/npm-module-domain'

const Sample1:React.FC = () => {
    return(
        <div>
            <div>コンポーネント1</div>
            <Domain1 />
            <Link to="/">トップに戻るよ</Link>
        </div>
    )
}

export {Sample1}