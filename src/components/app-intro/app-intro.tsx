import * as React from "react";

import { randomBetween } from "../../utils/utils";
import "./app-intro.styles.scss";

import aboutTexts from "./app-intro.texts";

const DEFAULT_LINK_HREF = "https://github.com/lulz-tech/";
const DEFAULT_LINK_TEXT = 'Тыц';

type Link = {
  target?: string;
  href?: string;
  title?: string;
};

type AppIntroProps = {
  description?: string;
  link?: Link;
};

const AppIntro: React.FC<AppIntroProps> = ({ description, link = {} }: AppIntroProps) => {
  const aboutText = description || aboutTexts[randomBetween(0, aboutTexts.length)];
  const linkUrl = link.href || DEFAULT_LINK_HREF;
  const linkTitle = link.title || DEFAULT_LINK_TEXT;
  const linkTarget = link.target || "__blank";

  return (
    <div className="App-intro">
      <p className="about">{aboutText}</p>
      <a
        target={linkTarget}
        href={linkUrl}
        title={linkTitle}>
        {linkTitle}
      </a>
    </div>
  );
};

export default React.memo(AppIntro);
