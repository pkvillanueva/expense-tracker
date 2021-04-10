import NextLink from 'next/link';
import styled from '@emotion/styled';
import colors from '../lib/colors';
import propsToCSS from '../lib/propsToCSS';

export default function Button({
  children,
  href,
  title,
  leftIcon,
  rightIcon,
  ...props
}) {
  if (href) {
    return (
      <NextLink href={href} passHref>
        <Link {...props}>
          <Centerer>
            {leftIcon && <Icon prefix="true">{leftIcon}</Icon>}
            {children && <span>{children}</span>}
            {rightIcon && <Icon>{rightIcon}</Icon>}
          </Centerer>
        </Link>
      </NextLink>
    );
  };

  return (
    <FormButton {...props}>
      <Centerer>
        {leftIcon && <Icon prefix="true">{leftIcon}</Icon>}
        {children && <span>{children}</span>}
        {rightIcon && <Icon>{rightIcon}</Icon>}
      </Centerer>
    </FormButton>
  );
}

const styles = {
  default: {
    display: 'inline-block',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    padding: '0.675rem 0.875rem',
    color: colors.black,
    'font-size': '0.875rem',
    'line-height': '0.875rem',
    'box-shadow': 'none',
    'border-radius': '0.15rem',
    'background-color': colors.gray100,
    'border-color': colors.gray100,
    ':hover': {
      'background-color': colors.gray200,
      'border-color': colors.gray200,
    },
  },
  purple: {
    color: colors.white,
    'background-color': colors.purple500,
    'border-color': colors.purple500,
    ':hover': {
      'background-color': colors.purple600,
      'border-color': colors.purple600,
    },
  },
  yellow: {
    color: colors.black,
    'background-color': colors.yellow400,
    'border-color': colors.yellow400,
    ':hover': {
      'background-color': colors.yellow500,
      'border-color': colors.yellow500,
    },
  },
};

const dynamicStyle = ({ colorScheme, variant }) => {
  let props = {
    ...styles['default'],
    ...(styles[colorScheme] || {}),
  };

  switch (variant) {
    case 'text':
      props = {
        ...props,
        padding: '0',
        color: props['background-color'],
        'background-color': 'transparent',
        ':hover': {
          color: props[':hover']['background-color'],
          'background-color': 'transparent',
        },
      };
      break;
    case 'outline':
      props = {
        ...props,
        'border-color': props['background-color'],
        'border-width': '1px',
        'border-style': 'solid',
        'background-color': 'transparent',
        ':hover': {
          'background-color': 'transparent',
        },
      };
      break;
  }

  return propsToCSS(props);
};

const Link = styled.a`
  ${dynamicStyle}
`;

const FormButton = styled.button`
  ${dynamicStyle}
`;

const Centerer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.span`
  margin: ${({ prefix }) => prefix ? '0 0.5rem 0 0' : '0 0 0 0.5rem'};
  font-size: 1em;
  line-height: 0;

  :only-child {
    margin: 0;
  }
`;
