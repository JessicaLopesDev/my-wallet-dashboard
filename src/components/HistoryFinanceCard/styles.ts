import styled from 'styled-components'

interface ITagProps {
  color: string
}

export const Container = styled.li`
  background-color: ${({ theme }) => theme.colors.tertiary};

  list-style: none;
  border-radius: 8px;

  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s;

  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;

    padding-left: 10px;
    gap: 3px;
  }

  > div span {
    font-size: 20px;
    font-weight: 500;
  }
`

export const Tag = styled.div<ITagProps>`
  width: 13px;
  height: 60%;

  background-color: ${(props) => props.color};

  position: absolute;
  left: 0;
`
