import styled from 'styled-components';

export const AppStyle = styled.div `
  margin: 0;
  font-family: 'Work Sans', sans-serif;
  background-image: url(https://images.pexels.com/photos/6726156/pexels-photo-6726156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;
  min-height: 100vh;
  
`

export const HeaderStyle = styled.header `
  background-color: #ddd;
  opacity: 0.6;
  padding: 20px 40px;
  margin-bottom: 30px;

  h1{
    margin-bottom: 10px;
  }

  span{
    background-color: black;
    color: white;
    padding: 3px 5px;
    border-radius: 5px;
    margin: 10px;
  }

`

export const ListStyle = styled.div `
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  color:#354259;
`

export const ProductStyle = styled.div `
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  opacity: 0.9;
  border: 0.5px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  justify-content: space-between;
  gap: 10px;
  margin: 30px;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img{
    width: 200px;
    margin:10px;
  }

  h3{
    text-align: center;
    font-size: 20px;
  }

  p{
    text-align: justify;
    margin-bottom: 20px;
  }

  h5{
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    margin: 10px;
  }

  span{
    background-color: #354259;
    padding: 3px;
    font-weight: lighter;
    color: white;
    border-radius: 3px;
    margin: 5px;
  }

 
`
export const ButtonStyle = styled.button `
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 5px;
  text-transform: uppercase;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  margin: 5px;

`