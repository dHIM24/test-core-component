import React, { FC } from 'react';

const List: FC = () => {
    const items = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <div>
            <div style={{ height: '50px', padding: '12px', boxSizing: 'border-box' }}>
                Header
            </div>
            {items.map((item) => (
                <div
                    key={item}
                    style={{
                        height: '50px',
                        padding: '12px',
                        boxSizing: 'border-box',
                        borderBottom: '1px solid #e0e0e0',
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default List;

