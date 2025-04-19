import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import css from "./Section.module.css";

const Section = (props) => {
  const { title, label, description, children, className, ...rest } = props;

  return (
    <section className={classNames(css.section, className)} {...rest}>
      <div data-aos="fade-up" className={css.sectionTitle}>
        {title ? <h2 className="text-[#C9A267]">{title}</h2> : null}
        {label ? <p className={css.label}>{label}</p> : null}
        <div className="mt-2 flex items-center gap-3">
          <hr className="flex w-28 border-t border-[#C9A267] sm:w-48 lg:w-96" />
          <i className="mkdf-icon-font-awesome fa fa-bank mkdf-icon-element text-xl text-[#C9A267]"></i>
          <hr className="w-28 flex-1 border-t border-[#C9A267] sm:w-48 lg:w-96" />
        </div>
        {description ? (
          <p className="break-word mt-[10px] items-center text-center text-[18px] font-normal leading-[24px] tracking-[0px] text-[#737373]">
            {description}
          </p>
        ) : null}
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
