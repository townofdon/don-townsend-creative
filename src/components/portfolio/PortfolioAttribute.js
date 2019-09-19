
import React from 'react';

const PortfolioAttribute = ({
  attribute,
}) => {
  if (!attribute) {
    return null;
  }

  if (!attribute.items || !attribute.items.length) {
    return null;
  }

  let itemsRendered;

  if (attribute.format === 'inline') {
    const separator = attribute.separator || '•';
    itemsRendered = (
      <p>
        {attribute.items.map((item, index) => (
          <span key={index}>
            <span>
              &nbsp;
              {item}
              &nbsp;
            </span>
            {(index < attribute.items.length - 1) ? (
              <span className="px-2">
                {separator}
              </span>
            ) : null}
          </span>
        ))}
      </p>
    );
  } else {
    itemsRendered = (
      <ul>
        {attribute.items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <h4 className="text-uppercase">
        <small>{attribute.name}</small>
      </h4>
      <div>
        {itemsRendered}
      </div>
    </>
  );
};

export default PortfolioAttribute;
