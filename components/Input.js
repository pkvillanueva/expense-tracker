import { forwardRef } from 'react';
import styled from '@emotion/styled';
import colors from '../lib/colors';

export default forwardRef(({ type = 'text', ...props }, ref) => {
  console.log(props);
  return (
    <Input ref={ref} type={type} {...props} />
  );
});

export const Textarea = forwardRef((props, ref) => {
  return (
    <InputTexarea ref={ref} {...props} />
  );
});

export const Select = forwardRef(({ options, ...props }, ref) => {
  return (
    <InputSelect ref={ref} {...props}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </InputSelect>
  );
});

const errorStyle = ({ error }) => error && `border-color: #FC8181;`;

const Input = styled.input`
  position: relative;
  display: block;
  width: 100%;
  appearance: none;
  padding: 0.875rem 0.75rem;
  outline: none;
  border: 1px solid ${colors.gray300};
  border-radius: 0.375rem;
  background: transparent;
  box-shadow: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  ${errorStyle}
`;

const InputTexarea = styled.textarea`
  position: relative;
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  appearance: none;
  padding: 0.875rem 0.75rem;
  outline: none;
  border: 1px solid ${colors.gray300};
  border-radius: 0.375rem;
  background: transparent;
  box-shadow: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  ${errorStyle}
`;

const InputSelect = styled.select`
  position: relative;
  display: block;
  width: 100%;
  appearance: none;
  padding: 0.875rem 0.75rem;
  outline: none;
  border: 1px solid ${colors.gray300};
  border-radius: 0.375rem;
  box-shadow: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 5px),
    calc(100% - 15px) calc(1em + 5px),
    calc(100% - 2.5em) 0.8em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  ${errorStyle}
`;
