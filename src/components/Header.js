import React from 'react'
import styled from 'styled-components'



function Header() {
    return (
        <Nav>
          <Logo src="/NepZen/logo.png"/>
          <NavMenu>
              <a>
                <span>
                    HOME
                </span>
              </a>
              <a>
                <span>
                    SHOP
                </span>
              </a>
              <a>
                <span>
                    ABOUT
                </span>
              </a>
              <a>
                <span>
                    BLOG
                </span>
              </a>
              <a>
                <span>
                    CONTACTUS
                </span>
              </a>
              <a>
                  <img src="/NepZen/search-icon.svg"/>
                <span>
                    SEARCH
                </span>
              </a>
          </NavMenu>
          <UserImg src="dp.jpg"/>
          <SearchIcon src="/NepZen/basket.png"/>

          
            
          
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
 height: 70px;
 background: #1A1B1B;
 display: flex;
 align-items: center;
 padding: 0 36px;
 overflow-x: hidden;
 overflow-y: hidden;

`

const Logo = styled.img`
    
    width:120px;
    height:120px;
`

const NavMenu = styled.div`
display:flex;
flex: 1;
margin-left: 40px;
align-item: center;

    a{
        display:flex;
        align-items: center;
        padding:0 20px;
        cursor: pointer;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position:relative;

            &:after{
                content: "";
                height: 2px;
                background: #ACD257; 
                position: absolute;
                 left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-orgin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                 transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
            color: #ACD257
        }

    }
`
const UserImg = styled.img`
    width: 48px;
    height:48px;
    border-radius:50%;
    cursor:pointer; 
    margin-right: 25px;
`

const SearchIcon = styled.img`
    width: 35px;
    height:35px;
    border-radius:50%;
    cursor:pointer; 

    


`






