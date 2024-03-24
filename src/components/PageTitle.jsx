import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";

const App = () => {
  return (
    <HelmetProvider>
      <div>
        {/* Other components */}
        <PageTitle title="Your Page Title" />
        {/* Other components */}
      </div>
    </HelmetProvider>
  );
};

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} | Your Website Title
      </title>
    </Helmet>
  );
};

export default App;
