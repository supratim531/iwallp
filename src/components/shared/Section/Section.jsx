import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import css from "./Section.module.css";

const Section = (props) => {
  const { title, label, description, children, className, ...rest } = props;

  return (
    <section className={classNames(css.section, className)} {...rest}>
      <div data-aos="fade-up" className={css.sectionTitle}>
        <h2 className="text-[#C9A267]">{title}</h2>
        <p className={css.label}>{label}</p>
        <div className="flex items-center gap-3 mt-2">
          <hr className="w-96 flex border-t border-[#C9A267]" />
          <i className="mkdf-icon-font-awesome fa fa-bank mkdf-icon-element text-[#C9A267] text-xl"></i>
          <hr className="flex-1 w-96 border-t border-[#C9A267]" />
        </div>
        <p className="mt-[10px] text-[18px] font-normal leading-[24px] tracking-[0px] text-[#737373] max-w-lg text-justify items-center break-word">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
};

const { node, string } = PropTypes;

Section.propTypes = {
  children: node,
  className: string,
  description: string,
  title: string.isRequired,
  label: string.isRequired,
};

export default Section;
