import React, { ReactElement } from "react";

import Button from "../components/atoms/Button";

interface IndexProps {}

export default function index({}: IndexProps): ReactElement {
  return (
    <div>
      <Button />
    </div>
  );
}
