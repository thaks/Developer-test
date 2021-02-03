import React from 'react';
import Shimmer from '../../components/shimmer/shimmer.component';
import './loaderpage.styles.scss'

const LoaderPage = () => {
    return <div className="laoderpage">
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
    </div>
}

export default LoaderPage;
