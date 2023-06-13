import React from "react";
import { useSearchParams } from "react-router-dom";

const menuReview= () => {
    const [searchParams] = useSearchParams();
    const menu = searchParams.get('menu');

    return (
        <div>
            <p>{menu}</p>
        </div>
    );
}

export default menuReview;