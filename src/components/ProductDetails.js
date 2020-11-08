import React, { useEffect, useState } from "react";
import "../App.css";

function ProductDetails(match) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []); //only runs when component mounts

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );

    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default ProductDetails;
