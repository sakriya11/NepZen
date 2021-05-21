import React from 'react'
import styled from "styled-components"
import ImgSlider from './ImgSlider'
import Browse from './Browse'
import Slider from 'react-slick'

function Home() {
    return (
        <Container>
            <ImgSlider/>
            <Browse/>
        </Container>
    )
}

export default Home

const Container = styled.div`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px); 
position: relative;
overflow-x: hidden;

&:before{

 no-repeat fixed;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
`
