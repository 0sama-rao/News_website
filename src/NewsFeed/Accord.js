import React, { useState } from 'react';
import { Data } from './Data';

import Modal from './Modal';
import './Accord.css';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';



const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  width: 80%;
  position: absolute;
  top: 15%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #505050;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 20px;
    font-size: 1.2rem;
  }
  span {
    margin-right: 1rem;
  }
`;

const Dropdown = styled.div`
  background: #505050;
  color: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;

  p {
    font-size: 16px;
    margin-left:25px;
  }
  btn1{
    width:2%;
  }
`;


const Accord = props => {

};

const Accordion = props => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
    const [showMap, setShowMap] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler =() => setShowMap(false);

  return (

    <IconContext.Provider value={{ color: '#fff', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiChevronUp /> : <FiChevronDown />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer} <button onClick class="btn1">Read More </button></p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>

      </AccordionSection>
    </IconContext.Provider>
  );
};
export default Accordion;
