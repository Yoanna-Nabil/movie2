import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const currencies = [
  { code: 'USD', symbol: '$', value: 1.0 },
  { code: 'EUR', symbol: '€', value: 0.85 },
  { code: 'GBP', symbol: '£', value: 0.72 },
];

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isError, isLoading } = useFetch(`/${id}`);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].code);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const calculateMoviePrice = (price) => {
    const selectedCurrencyData = currencies.find((currency) => currency.code === selectedCurrency);
    const priceInSelectedCurrency = price / selectedCurrencyData.value;
    const priceWithFees = priceInSelectedCurrency * 1.14;
    return priceWithFees.toFixed(2);
  };

  const formatPrice = (price) => {
    const selectedCurrencyData = currencies.find((currency) => currency.code === selectedCurrency);
    return selectedCurrencyData.symbol + price;
  };

  const moviePrice = useMemo(() => {
    const price = data?.price || 8;
    return calculateMoviePrice(price);
  }, [data, selectedCurrency]);

  useEffect(() => {
    // Fetch movie data or perform any necessary actions
  }, [id]);

  return (
    <div className="row">
      <div className="col-md-3">
        <div className="movie mt-3">
          <img src={'https://image.tmdb.org/t/p/w500' + data?.poster_path} className="w-100" alt="Movie Poster" />
          <h3>{data?.original_title}</h3>
          <p>{data?.overview?.split(' ').slice(0, 10).join(' ')}</p>
          <div>
            <select value={selectedCurrency} onChange={handleCurrencyChange}>
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code}
                </option>
              ))}
            </select>
            <p>
              Price: {formatPrice(moviePrice)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
