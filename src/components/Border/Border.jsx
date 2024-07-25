import React from 'react';
export const Border = ({ children }) => {
  return (
    <div className="relative w-full">
      <div className="box__line box__line--top absolute"></div>
      <div className="box__line box__line--right absolute"></div>
      <div className="box__line box__line--left absolute"></div>
      <div className="content relative z-10">{children}</div>
      <style jsx>{`
        .box__line {
          --line-width: 2px;
          --line-color: rgba(255, 255, 255, 1);
        }

        .box__line--top,
        .box__line--bottom {
          height: var(--line-width);
          width: 100%;
          background-color: var(--line-color);
        }

        .box__line--top::before,
        .box__line--top::after,
        .box__line--bottom::before,
        .box__line--bottom::after {
          content: "";
          position: absolute;
          width: var(--line-width);
          height: var(--line-width);
          background-color: var(--line-color);
        }

        .box__line--top {
          top: calc(var(--line-width) * -1);
        }

        .box__line--top::before {
          left: 0;
          bottom: calc(var(--line-width) * -1);
        }

        .box__line--top::after {
          right: 0;
          bottom: calc(var(--line-width) * -1);
        }

        .box__line--bottom {
          bottom: calc(var(--line-width) * -1);
        }

        .box__line--bottom::before {
          left: 0;
          top: calc(var(--line-width) * -1);
        }

        .box__line--bottom::after {
          right: 0;
          top: calc(var(--line-width) * -1);
        }

        .box__line--left,
        .box__line--right {
          width: var(--line-width);
          height: 100%;
          background-color: var(--line-color);
        }

        .box__line--left {
          left: calc(var(--line-width) * -1);
        }

        .box__line--right {
          right: calc(var(--line-width) * -1);
        }

        .content {
          padding: var(--line-width);
        }
      `}</style>
    </div>
  );
};


