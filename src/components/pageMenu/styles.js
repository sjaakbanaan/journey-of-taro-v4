import styled from "styled-components";

const SPageMenus = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;
  margin: 1rem;
  padding: 1rem;
  ul {

    .first-item-list {
      display: flex;
      justify-content: center;
      .page-image {
        max-height: 20rem;
        min-height: 15rem;
        max-width: 20rem;
        min-width: 15rem;

        :hover {
          cursor: pointer;
          background: var(--testColorOne);
        }
      }

      .page-name {
        color: #eaa733;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        padding: 1rem;
        position: static;
        border: solid 1px var(--secondary);

        :hover {
          display: inherit;
          letter-spacing: 0.4em;
          transition: 0.5s;
        }
      }
    }
    .page-item-list {
      border: solid 1px var(--secondary);
      .page-item {
        text-align: center;
        padding: 2px;
        margin: 3px;
        border: solid 1px var(--secondary);
      }
    }
  }
`;

export default SPageMenus;