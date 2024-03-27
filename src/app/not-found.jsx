import React from "react";
import Link from "next/link";
const notFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does`nt exist</p>
      <Link href="/">Retun To HomePage</Link>
    </div>
  );
};

export default notFound;
