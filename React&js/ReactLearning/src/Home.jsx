import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container mt-5">
      {loading ? (
        <div className="text-center">
          <ClipLoader css={override} size={200} color={'red'} loading={loading} />
        </div>
      ) : (
        <h1 className="text-center">Welcome To The Home Page</h1>
      )}
    </div>
  );
};

export default Home;
