import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.main``

export const Filters = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-bottom: 30px;

  .filter-tag {
    font-size: 18px;
    font-weight: 500;

    background: none;
    color: ${({ theme }) => theme.colors.white};

    margin: 0 10px;

    opacity: 0.3;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  #recurrents::after {
    content: '';
    display: block;
    width: 55px;
    margin: 5px auto;
    border-bottom: 10px solid ${({ theme }) => theme.colors.success};
  }

  #eventuals::after {
    content: '';
    display: block;
    width: 55px;
    margin: 5px auto;
    border-bottom: 10px solid ${({ theme }) => theme.colors.warning};
  }

  .actived {
    opacity: 1;
  }
`
