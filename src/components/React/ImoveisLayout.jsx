import React from 'react';
import ImoveisSidebar from './ImoveisSidebar';

const ImoveisLayout = ({ imoveis, title, description, children }) => {
  return (
      <div className="container mx-auto px-4 py-12 md:px-20 pt-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <main className="md:col-span-3">{children}</main>
          <aside className="md:col-span-1">
            <ImoveisSidebar imoveis={imoveis} />
          </aside>
        </div>
      </div>
  );
};

export default ImoveisLayout;
