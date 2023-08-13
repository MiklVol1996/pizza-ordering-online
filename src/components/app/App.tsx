import React from 'react';
import Header from '../header/Header';
import '../../scss/app.scss';
import Home from '../../pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { givePizzasCount } from '../../store/selectors';
import { lazy, Suspense } from 'react';


const App: React.FC = () => {

    const pizzasCount = useSelector(givePizzasCount);

    const FullCart = lazy(() => import('../../pages/cart/FullCart'));
    const EmptyCart = lazy(() => import('../../pages/cart/EmptyCart'));
    const NotFound = lazy(() => import('../../pages/not_found/NotFound'));


    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path='/pizza-ordering-online' element={<Home />} />
                        <Route path='/cart'
                            element={pizzasCount ?
                                <Suspense fallback={<>loading...</>}><FullCart /></Suspense> :
                                <Suspense fallback={<>loading...</>}> <EmptyCart /></Suspense>} />
                        <Route path='/*' element={<Suspense fallback={<>loading...</>}><NotFound /></Suspense>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
