import React from "react";

import PageIntro from './components/PageIntro';
import SignUpSection from './components/SignUpSection';

function App() {
  return (
    <div className="container p-5">
        <div className="row">
          <PageIntro></PageIntro>
          <SignUpSection></SignUpSection>
        </div>
    </div>
  );
}

export default App;
