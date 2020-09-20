import React from 'react';
import styled from 'styled-components';
import { MdPerson } from "react-icons/md";

const StyledWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledAvatar = styled.div`
  min-width: 20px;
  border: 1px solid #237A8A;
  height:fit-content;
 background:#009595;
 color:#ffffff
`

const Member = (member) => {
 
  const defaultAvatar = <MdPerson style={{ fontSize: 50 }} />;
  const { name, avatar } = member;
  return (
    <StyledWrapper>      
      <div>
        <StyledAvatar>{avatar ? <img src={avatar} /> : defaultAvatar}</StyledAvatar>
        <span>{name}</span><span>  <i className="float-right fas fa-user-plus pl-2 " onClick={member.openpopup}></i></span>
      </div>
    </StyledWrapper>
  );
}

export default Member;