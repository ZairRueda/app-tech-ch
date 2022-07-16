import styled from "@emotion/styled"

const DivSuper = styled.div`
  position: fixed;
  background-color: #ffa6b5;
  bottom: 0;
  left: 0;
  margin: 2rem;
  padding: 3rem;
  color: #ffffff;
  border-radius: 1rem;
  font-size: 2rem;
`;

const Message = ({mensaje}) => {
  return (
    <DivSuper>
      <p>{mensaje}</p>
    </DivSuper>
  )
}

export default Message