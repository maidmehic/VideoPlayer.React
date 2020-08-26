import React from 'react';

const Spinner = ({ isfetchingDataFromApi }) => {

    if (isfetchingDataFromApi)
        return (
            <div className="ui active centered inline loader"></div>
        );
    else
        return null;
}

export default Spinner