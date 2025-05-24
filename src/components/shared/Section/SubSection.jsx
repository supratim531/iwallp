import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import css from "./SubSection.module.css";

const SubSection = (props) => {
  const { title, description, children, className, ...rest } = props;

  return (
    <section className={classNames(css.section, className)} {...rest}>
      <div data-aos="fade-up" className={css.sectionTitle}>
        {title ? <h2>{title}</h2> : null}
        <div className="mt-2 flex items-center gap-3">
          <hr className="w-[50%] flex-1 border-t border-[#bbb]" />
          <i className="fa-solid fa-building-columns text-lg text-primary-light"></i>
          <hr className="w-[50%] flex-1 border-t border-[#bbb]" />
        </div>
        {description ? <p className={css.description}>{description}</p> : null}
      </div>

      {children}
    </section>
  );
};

const { node, string } = PropTypes;

SubSection.propTypes = {
  children: node,
  className: string,
  description: string,
  title: string.isRequired,
};

export default SubSection;
