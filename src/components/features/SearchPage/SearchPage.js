import React, { useEffect, useState } from 'react';
import styles from './SearchPage.module.scss';
import FeatureBoxes from '../FeatureBoxes/FeatureBoxes';
import Brands from '../../layout/Brands/Brands';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import ProductBox from '../../common/ProductBox/ProductBox';

const SearchPage = () => {

  const [searchResult, setSearchResult] = useState('');

  const products = useSelector(state => getAll(state));
  const filtered = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(searchResult)) {
      filtered.push(product);
    }
  }

  useEffect(() => {
    const hash = window.location.hash;
    const searchPhrase = hash.substring(9, hash.length);
    setSearchResult(searchPhrase);
  }, []);

  return (
    <div>
      <FeatureBoxes />
      <div className={styles.root}>
        <div className='container'>
          <h1 className={styles.heading}>
            The search phrase is: &quot;{searchResult}&quot;
          </h1>
          <div className='row'>
            {filtered.map(item => (
              <div key={item.id} className='col-12 col-sm-6 col-lg-4'>
                <ProductBox {...item} photoClassName={styles.photo} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brands />
      {/* Place for Feedback section*/}
    </div>
  );
};

export default SearchPage;
