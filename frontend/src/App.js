import React from 'react';
import UserTaskManger from './page/userTaskManger/UserTaskManger';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/Test/Test.';

const App = () => {
  return (
    <>

      <div className='w-[80%] m-auto shadow-2xl'>
        <UserTaskManger />
        {/* <Routes>
            <Route path="/test" element={<Test />} />
          </Routes> */}
      </div>

    </>
  );
};

export default App;
