import React from 'react';

import { ProductsList } from './components';

import { MOCK_PRODUCTIONS } from '../../constants';


export const MainPage = () => <ProductsList products={MOCK_PRODUCTIONS} />;
