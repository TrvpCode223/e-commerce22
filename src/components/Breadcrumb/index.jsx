import React from "react";

const styles = {
  root: { alignItems: "center", display: "inline-flex", gap: "0.5rem" },
  list: { alignItems: "center", display: "flex", gap: "0.5rem", listStyle: "none", wordBreak: "break-word" },
  separator: { alignItems: "center", display: "inline-flex" },
};

const BreadcrumbContext = React.createContext({ separator: null });

const useBreadcrumbContext = () => {
  const context = React.useContext(BreadcrumbContext);
  if (!context) throw new Error("BreadcrumbLink, BreadcrumbSeparator must be used within a Breadcrumb");
  return context;
};

const BreadcrumbItemContext = React.createContext({ isCurrent: false });

const useBreadcrumbItemContext = () => {
  const context = React.useContext(BreadcrumbItemContext);
  if (!context) throw new Error("BreadcrumbLink, BreadcrumbSeparator must be used within a Breadcrumb");
  return context;
};

function BreadcrumbSeparator(props) {
  const { children, style, role = "presentation", ...restProps } = props;
  const { separator } = useBreadcrumbContext();

  if (!separator) return null;

  return (
    <span role={role} style={{ ...styles.separator, ...style }} {...restProps}>
      {children ?? separator}
    </span>
  );
}

function BreadcrumbLink(props) {
  const { as = "a", href, ...restProps } = props;
  const { isCurrent } = useBreadcrumbItemContext();

  if (isCurrent) delete restProps.href;

  return React.createElement(as, { href, "aria-current": isCurrent ? "page" : undefined, ...restProps });
}

function BreadcrumbItem(props) {
  const { isCurrentPage, style, children, ...restProps } = props;

  return (
    <li style={{ ...styles.item, ...style }} {...restProps}>
      <BreadcrumbItemContext.Provider value={{ isCurrent: !!isCurrentPage }}>
        {children}
      </BreadcrumbItemContext.Provider>
    </li>
  );
}

function Breadcrumb(props) {
  const { separator, children, ...restProps } = props;
  const count = React.Children.count(children);

  return (
    <BreadcrumbContext.Provider value={{ separator }}>
      <nav style={styles.root} {...restProps}>
        <ol style={styles.list}>
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, { isCurrentPage: index === count - 1 ? true : false })
          )}
        </ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
}

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator };
