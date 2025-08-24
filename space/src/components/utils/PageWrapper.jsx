import React from "react";

function PageWrapper({ children, noPadding = false }) {
  return (
    <div style={noPadding ? {} : { paddingTop: "90px" }}>
      {children}
    </div>
  );
}

export default PageWrapper;
