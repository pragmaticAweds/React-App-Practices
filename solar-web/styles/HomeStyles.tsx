import styled from "styled-components";

export const HomeWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;

  button {
    height: 17.125rem;
    width: 17.125rem;
    background: white;
    color: ${(props) => props.theme.color.deepBlue};
    font-family: ${(props) => props.theme.fonts.bellefair};
    font-size: 2rem;
    text-transform: uppercase;
    line-height: 2.3125;
    letter-spacing: 0.125rem;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.4s linear;
  }

  button:hover {
    box-shadow: 0px 0px 0px 60px #ffffff38;
  }

  @media (max-width: 1366px) {
    height: 80vh;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    .headtext {
      font-size: 7rem;
      margin: 0;
      line-height: 1.2;
    }
    .headtext5 {
      font-size: 1.2rem;
    }

    .home-button {
      width: 11rem;
      height: 11rem;
      font-size: 1.3rem;
    }
    button:hover {
      box-shadow: 0px 0px 0px 40px #ffffff38;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    .headtext {
      font-size: 9.375rem;
      margin: 1.5rem 0;
      line-height: 120px;
    }
    .home-button {
      width: 15.125rem;
      height: 15.125rem;
      font-size: 2rem;
    }
    .text {
      margin: 0 auto;
      padding: 0;
      line-height: 1.75;
      max-width: 27.75rem;
    }
  }
`;
