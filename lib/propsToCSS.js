const propsToCSS = (props) => {
  return Object.keys(props).reduce((acc, cur) => {
    if (typeof props[cur] === 'object') return acc.concat(`${cur} {${propsToCSS(props[cur])}}`);
    return acc.concat(props[cur] ? `${cur}: ${props[cur]};` : '');
  }, '');
};

export default propsToCSS;
