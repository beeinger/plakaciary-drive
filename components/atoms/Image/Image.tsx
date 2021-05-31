import React, { ReactElement } from "react";

import { Img } from "./styles";

interface ImageProps {
  className?: string;
  svg: string;
  webp: string;
  alt: string;
}

export default function Image({
  className,
  svg,
  webp: _webp,
  alt,
}: ImageProps): ReactElement {
  var trace;
  var webp;
  try {
    trace = require(`resources/images/${svg}`);
    webp = require(`resources/images/${_webp}`);
  } catch (error) {
    trace = require(`resources/images/alphabetSVG/question_mark.svg`);
    webp = require(`resources/images/alphabetWEBP/question_mark.webp`);
  }
  return (
    <Img className={className}>
      <img alt={alt} src={trace} />
      <img alt={alt} src={webp} />
    </Img>
  );
}
