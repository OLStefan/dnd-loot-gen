import styled from "styled-components";

function App({ ...otherProps }: BaseProps) {
  return <div {...otherProps}></div>;
}

export default styled(App)`
  height: 100%;
  width: 100%;
  display: grid;
  color: var(--text-on-background);
`;
