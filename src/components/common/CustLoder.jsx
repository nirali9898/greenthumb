import React from 'react';

export const CustLoder = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Loading...</h2>
            <div className="spinner" style={{ margin: 'auto', width: '50px', height: '50px', border: '5px solid #f3f3f3', borderTop: '5px solid #3498db', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
};
