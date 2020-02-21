import React from 'react';

const Spinner = (props) => {

    if (props.isfetchingDataFromApi)
        return (
            <div className="ui active centered inline loader"></div>
        );
    else
        return null;
}

export default Spinner