import React from "react";

export default function Like({ liked }) {
  return <i className="fa fa-heart-o" aria-hidden="true">
      {liked}
  </i>;
}
