import styled from 'styled-components'

export const Section = styled.section`
  max-width: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: var(--spacing-m);
  margin-top: var(--spacing-m);

  .task-input {
    margin-right: var(--spacing-s);
  }

  .home-page-empty {
    color: var(--white);
  }

  @media (max-width: 478px) {
    justify-content: center;
    text-align: center;
    padding: var(--spacing-s);
    max-width: 100%;
  }
`

export const ActionBar = styled(Section)`
  @media (max-width: 478px) {
    position: fixed;
    bottom: 0;
    background: var(--white);
    margin: 0;
    padding: var(--spacing-s);

    .task-input {
      color: var(--dark);
    }
  }
`
