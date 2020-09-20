import React from 'react';
import { Link } from 'react-router-dom';

const ListBox = (props) => {
    let familyList = props.list;
    console.log("family list", familyList)
    return (
        < div className="row" >
            {familyList.map((value, index) => {
                return (
                    <div key={index} className="col bg-success text-white m-5">
                        <Link to={`/family/${value.id}`}  className="text-white">
                            <label>Family Name: <span>{value.familyName} </span>  </label><br/>
                            <label> Total Family Members: <span> {value.totalMembers} </span></label>
                        </Link>
                    </div>)

            })}
        </div >
    );
}

export default ListBox